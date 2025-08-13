import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Star, Shield, TrendingUp, Building2, Percent, DollarSign, Calendar, Calculator } from "lucide-react";
import { useState } from "react";

interface CDProvider {
  id: string;
  bankName: string;
  logo: string;
  term: string;
  rate: string;
  apy: string;
  minDeposit: string;
  maxDeposit: string;
  earlyWithdrawalPenalty: string;
  fdicInsured: boolean;
  rating: number;
  promoted: boolean;
  features: string[];
}

const CDRates = () => {
  const [selectedTerm, setSelectedTerm] = useState("all");
  const [minDeposit, setMinDeposit] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Calculator state
  const [principal, setPrincipal] = useState("10000");
  const [calculatorTerm, setCalculatorTerm] = useState("12");
  const [showCalculatorResults, setShowCalculatorResults] = useState(false);

  // Hardcoded CD rates data for calculator
  const cdRates = [
    { term: "3", rate: 4.25, apy: 4.33, minDeposit: 500 },
    { term: "6", rate: 4.50, apy: 4.58, minDeposit: 500 },
    { term: "12", rate: 4.75, apy: 4.86, minDeposit: 500 },
    { term: "18", rate: 4.85, apy: 4.97, minDeposit: 1000 },
    { term: "24", rate: 4.90, apy: 5.03, minDeposit: 1000 },
    { term: "36", rate: 4.95, apy: 5.08, minDeposit: 1000 },
    { term: "48", rate: 5.00, apy: 5.13, minDeposit: 1000 },
    { term: "60", rate: 5.05, apy: 5.18, minDeposit: 1000 },
  ];

  // Hardcoded CD providers data
  const cdProviders: CDProvider[] = [
    {
      id: "1",
      bankName: "Marcus by Goldman Sachs",
      logo: "🏦",
      term: "12 months",
      rate: "4.50%",
      apy: "4.58%",
      minDeposit: "$500",
      maxDeposit: "No limit",
      earlyWithdrawalPenalty: "3 months interest",
      fdicInsured: true,
      rating: 4.8,
      promoted: true,
      features: ["No fees", "Online banking", "Mobile app"]
    },
    {
      id: "2",
      bankName: "Ally Bank",
      logo: "🏛️",
      term: "12 months",
      rate: "4.25%",
      apy: "4.33%",
      minDeposit: "$0",
      maxDeposit: "No limit",
      earlyWithdrawalPenalty: "3 months interest",
      fdicInsured: true,
      rating: 4.7,
      promoted: false,
      features: ["No fees", "24/7 support", "High yield"]
    },
    {
      id: "3",
      bankName: "Capital One",
      logo: "💳",
      term: "12 months",
      rate: "4.10%",
      apy: "4.18%",
      minDeposit: "$0",
      maxDeposit: "No limit",
      earlyWithdrawalPenalty: "3 months interest",
      fdicInsured: true,
      rating: 4.6,
      promoted: false,
      features: ["No fees", "Branch access", "Rewards program"]
    },
    {
      id: "4",
      bankName: "Discover Bank",
      logo: "🔍",
      term: "18 months",
      rate: "4.30%",
      apy: "4.39%",
      minDeposit: "$2,500",
      maxDeposit: "No limit",
      earlyWithdrawalPenalty: "6 months interest",
      fdicInsured: true,
      rating: 4.5,
      promoted: true,
      features: ["No fees", "Cashback rewards", "Customer service"]
    },
    {
      id: "5",
      bankName: "American Express",
      logo: "💎",
      term: "24 months",
      rate: "4.15%",
      apy: "4.24%",
      minDeposit: "$0",
      maxDeposit: "No limit",
      earlyWithdrawalPenalty: "6 months interest",
      fdicInsured: true,
      rating: 4.4,
      promoted: false,
      features: ["No fees", "Premium service", "Travel benefits"]
    },
    {
      id: "6",
      bankName: "Synchrony Bank",
      logo: "⚡",
      term: "12 months",
      rate: "4.35%",
      apy: "4.43%",
      minDeposit: "$2,000",
      maxDeposit: "No limit",
      earlyWithdrawalPenalty: "3 months interest",
      fdicInsured: true,
      rating: 4.3,
      promoted: false,
      features: ["No fees", "High rates", "Easy access"]
    },
    {
      id: "7",
      bankName: "Citizens Bank",
      logo: "🏢",
      term: "36 months",
      rate: "4.20%",
      apy: "4.29%",
      minDeposit: "$1,000",
      maxDeposit: "No limit",
      earlyWithdrawalPenalty: "12 months interest",
      fdicInsured: true,
      rating: 4.2,
      promoted: false,
      features: ["Branch network", "Personal service", "Multiple terms"]
    },
    {
      id: "8",
      bankName: "PNC Bank",
      logo: "🏦",
      term: "60 months",
      rate: "4.05%",
      apy: "4.14%",
      minDeposit: "$1,000",
      maxDeposit: "No limit",
      earlyWithdrawalPenalty: "12 months interest",
      fdicInsured: true,
      rating: 4.1,
      promoted: false,
      features: ["Branch access", "Online tools", "Customer support"]
    }
  ];

  const terms = [
    { value: "all", label: "All Terms" },
    { value: "3", label: "3 months" },
    { value: "6", label: "6 months" },
    { value: "12", label: "12 months" },
    { value: "18", label: "18 months" },
    { value: "24", label: "24 months" },
    { value: "36", label: "36 months" },
    { value: "60", label: "60 months" }
  ];

  const depositRanges = [
    { value: "all", label: "All amounts" },
    { value: "0", label: "$0 minimum" },
    { value: "500", label: "$500 minimum" },
    { value: "1000", label: "$1,000 minimum" },
    { value: "2500", label: "$2,500 minimum" }
  ];

  const filteredProviders = cdProviders.filter(provider => {
    const matchesTerm = selectedTerm === "all" || provider.term.includes(selectedTerm);
    const matchesDeposit = minDeposit === "all" || 
      (minDeposit === "0" && provider.minDeposit === "$0") ||
      (minDeposit === "500" && provider.minDeposit === "$500") ||
      (minDeposit === "1000" && provider.minDeposit === "$1,000") ||
      (minDeposit === "2500" && provider.minDeposit === "$2,500");
    const matchesSearch = provider.bankName.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTerm && matchesDeposit && matchesSearch;
  });

  const sortedProviders = [...filteredProviders].sort((a, b) => {
    // Sort by promoted first, then by rating, then by APY
    if (a.promoted && !b.promoted) return -1;
    if (!a.promoted && b.promoted) return 1;
    if (a.rating !== b.rating) return b.rating - a.rating;
    return parseFloat(b.apy) - parseFloat(a.apy);
  });

  const calculateCD = () => {
    const selectedRate = cdRates.find(rate => rate.term === calculatorTerm);
    if (!selectedRate) return null;
    
    const principalAmount = parseFloat(principal);
    const rate = selectedRate.rate / 100;
    const term = parseInt(calculatorTerm);
    
    const interest = principalAmount * rate * (term / 12);
    const totalValue = principalAmount + interest;
    const monthlyInterest = interest / term;
    
    return {
      principal: principalAmount,
      interest: interest,
      totalValue: totalValue,
      monthlyInterest: monthlyInterest,
      effectiveRate: selectedRate.apy
    };
  };

  const results = calculateCD();

  const handleCalculate = () => {
    setShowCalculatorResults(true);
  };

  const handleViewRates = () => {
    // Scroll to the rates section
    document.getElementById('rates-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              CD Rates Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate your CD earnings and compare rates from top banks
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Calculator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  CD Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Initial Deposit</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                      className="pl-8"
                      placeholder="10000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">CD Term</label>
                  <select
                    value={calculatorTerm}
                    onChange={(e) => setCalculatorTerm(e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    {cdRates.map((rate) => (
                      <option key={rate.term} value={rate.term}>
                        {rate.term} months ({rate.rate}% APY)
                      </option>
                    ))}
                  </select>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  Calculate Earnings
                </Button>

                {showCalculatorResults && (
                  <Button 
                    onClick={handleViewRates}
                    variant="outline"
                    className="w-full"
                  >
                    View All CD Rates
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {showCalculatorResults && results ? (
              <div className="space-y-6">
                {/* Summary Card */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <TrendingUp className="h-5 w-5" />
                      Your CD Investment Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          ${results.principal.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Initial Deposit</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          ${results.interest.toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">Total Interest</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">
                          ${results.totalValue.toFixed(2)}
                        </div>
                        <div className="text-sm text-muted-foreground">Final Value</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Detailed Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Investment Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">CD Term:</span>
                        <span className="font-medium">{calculatorTerm} months</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate:</span>
                        <span className="font-medium">{cdRates.find(r => r.term === calculatorTerm)?.rate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">APY:</span>
                        <span className="font-medium text-primary">{results.effectiveRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Interest:</span>
                        <span className="font-medium">${results.monthlyInterest.toFixed(2)}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Terms & Conditions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Min Deposit:</span>
                        <span className="font-medium">${cdRates.find(r => r.term === calculatorTerm)?.minDeposit.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Early Withdrawal:</span>
                        <span className="font-medium text-red-600">3-12 months interest</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">FDIC Insured:</span>
                        <Badge variant="secondary">Yes</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card className="bg-muted/30">
                <CardContent className="py-12 text-center">
                  <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ready to Calculate?</h3>
                  <p className="text-muted-foreground">
                    Enter your deposit amount and select a CD term to see your potential earnings
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Rates Section */}
        <div id="rates-section">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Compare CD Rates from Top Banks</h2>
            <p className="text-muted-foreground">
              Find the best CD rates and terms that fit your investment goals
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter CD Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Search Banks</label>
                  <Input
                    placeholder="Search bank names..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">CD Term</label>
                  <select
                    value={selectedTerm}
                    onChange={(e) => setSelectedTerm(e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    {terms.map((term) => (
                      <option key={term.value} value={term.value}>
                        {term.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Minimum Deposit</label>
                  <select
                    value={minDeposit}
                    onChange={(e) => setMinDeposit(e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    {depositRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <Button 
                    onClick={() => {
                      setSelectedTerm("all");
                      setMinDeposit("all");
                      setSearchQuery("");
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {sortedProviders.length} CD offers
            </p>
          </div>

          {/* CD Providers List */}
          <div className="space-y-4">
            {sortedProviders.map((provider) => (
              <Card key={provider.id} className={`hover:shadow-md transition-shadow ${
                provider.promoted ? 'ring-2 ring-primary/20 bg-gradient-to-r from-primary/5 to-transparent' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Bank Info */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-3xl">{provider.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{provider.bankName}</h3>
                          {provider.promoted && (
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              Featured
                            </Badge>
                          )}
                          {provider.fdicInsured && (
                            <Badge variant="secondary" className="text-xs">
                              <Shield className="h-3 w-3 mr-1" />
                              FDIC
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {provider.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {provider.term}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {provider.minDeposit} min
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rates */}
                    <div className="text-center lg:text-right">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {provider.apy}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">APY</div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Rate: </span>
                        <span className="font-medium">{provider.rate}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {provider.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>Max: {provider.maxDeposit}</div>
                        <div>Penalty: {provider.earlyWithdrawalPenalty}</div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex flex-col gap-2">
                      <Button className="bg-gradient-primary hover:opacity-90">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {sortedProviders.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No CD offers found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters to see more results
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CDRates;