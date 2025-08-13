import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Star, Shield, TrendingUp, Home, Percent, DollarSign, Clock, Building2, Calculator } from "lucide-react";
import { useState } from "react";

interface HomeEquityProvider {
  id: string;
  bankName: string;
  logo: string;
  loanType: string;
  rate: string;
  apr: string;
  minLoanAmount: string;
  maxLoanAmount: string;
  maxLTV: string;
  minCreditScore: string;
  closingCosts: string;
  fdicInsured: boolean;
  rating: number;
  promoted: boolean;
  features: string[];
  processingTime: string;
}

const HomeEquity = () => {
  const [selectedLoanType, setSelectedLoanType] = useState("all");
  const [minCreditScore, setMinCreditScore] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Calculator state
  const [homeValue, setHomeValue] = useState("500000");
  const [currentMortgage, setCurrentMortgage] = useState("300000");
  const [loanAmount, setLoanAmount] = useState("50000");
  const [loanTerm, setLoanTerm] = useState("10");
  const [interestRate, setInterestRate] = useState("7.5");
  const [showCalculatorResults, setShowCalculatorResults] = useState(false);

  const loanTerms = [
    { value: "5", label: "5 years" },
    { value: "10", label: "10 years" },
    { value: "15", label: "15 years" },
    { value: "20", label: "20 years" },
    { value: "30", label: "30 years" },
  ];

  // Hardcoded home equity providers data
  const homeEquityProviders: HomeEquityProvider[] = [
    {
      id: "1",
      bankName: "Wells Fargo",
      logo: "🏦",
      loanType: "Home Equity Loan",
      rate: "7.25%",
      apr: "7.45%",
      minLoanAmount: "$25,000",
      maxLoanAmount: "$500,000",
      maxLTV: "85%",
      minCreditScore: "680",
      closingCosts: "$0 - $500",
      fdicInsured: true,
      rating: 4.6,
      promoted: true,
      features: ["No application fee", "Branch network", "Online application"],
      processingTime: "2-3 weeks"
    },
    {
      id: "2",
      bankName: "Bank of America",
      logo: "🏛️",
      loanType: "HELOC",
      rate: "7.50%",
      apr: "7.70%",
      minLoanAmount: "$50,000",
      maxLoanAmount: "$1,000,000",
      maxLTV: "80%",
      minCreditScore: "700",
      closingCosts: "$0 - $1,000",
      fdicInsured: true,
      rating: 4.5,
      promoted: false,
      features: ["No annual fee", "Flexible access", "Mobile app"],
      processingTime: "3-4 weeks"
    },
    {
      id: "3",
      bankName: "Chase Bank",
      logo: "💳",
      loanType: "Home Equity Loan",
      rate: "7.35%",
      apr: "7.55%",
      minLoanAmount: "$25,000",
      maxLoanAmount: "$750,000",
      maxLTV: "85%",
      minCreditScore: "680",
      closingCosts: "$0 - $750",
      fdicInsured: true,
      rating: 4.4,
      promoted: false,
      features: ["No origination fee", "Branch access", "Online tools"],
      processingTime: "2-3 weeks"
    },
    {
      id: "4",
      bankName: "US Bank",
      logo: "🏢",
      loanType: "HELOC",
      rate: "7.40%",
      apr: "7.60%",
      minLoanAmount: "$15,000",
      maxLoanAmount: "$750,000",
      maxLTV: "80%",
      minCreditScore: "700",
      closingCosts: "$0 - $500",
      fdicInsured: true,
      rating: 4.3,
      promoted: true,
      features: ["No annual fee", "Interest-only payments", "Online banking"],
      processingTime: "3-4 weeks"
    },
    {
      id: "5",
      bankName: "PNC Bank",
      logo: "🏦",
      loanType: "Home Equity Loan",
      rate: "7.45%",
      apr: "7.65%",
      minLoanAmount: "$10,000",
      maxLoanAmount: "$500,000",
      maxLTV: "85%",
      minCreditScore: "680",
      closingCosts: "$0 - $1,000",
      fdicInsured: true,
      rating: 4.2,
      promoted: false,
      features: ["No application fee", "Branch network", "Customer service"],
      processingTime: "2-3 weeks"
    },
    {
      id: "6",
      bankName: "Citizens Bank",
      logo: "🏛️",
      loanType: "HELOC",
      rate: "7.55%",
      apr: "7.75%",
      minLoanAmount: "$25,000",
      maxLoanAmount: "$500,000",
      maxLTV: "80%",
      minCreditScore: "700",
      closingCosts: "$0 - $750",
      fdicInsured: true,
      rating: 4.1,
      promoted: false,
      features: ["No annual fee", "Flexible terms", "Online access"],
      processingTime: "3-4 weeks"
    },
    {
      id: "7",
      bankName: "Regions Bank",
      logo: "🏢",
      loanType: "Home Equity Loan",
      rate: "7.60%",
      apr: "7.80%",
      minLoanAmount: "$10,000",
      maxLoanAmount: "$500,000",
      maxLTV: "85%",
      minCreditScore: "680",
      closingCosts: "$0 - $1,000",
      fdicInsured: true,
      rating: 4.0,
      promoted: false,
      features: ["No origination fee", "Branch network", "Personal service"],
      processingTime: "2-3 weeks"
    },
    {
      id: "8",
      bankName: "Fifth Third Bank",
      logo: "🏦",
      loanType: "HELOC",
      rate: "7.65%",
      apr: "7.85%",
      minLoanAmount: "$25,000",
      maxLoanAmount: "$500,000",
      maxLTV: "80%",
      minCreditScore: "700",
      closingCosts: "$0 - $750",
      fdicInsured: true,
      rating: 3.9,
      promoted: false,
      features: ["No annual fee", "Online tools", "Mobile app"],
      processingTime: "3-4 weeks"
    }
  ];

  const loanTypes = [
    { value: "all", label: "All Types" },
    { value: "Home Equity Loan", label: "Home Equity Loan" },
    { value: "HELOC", label: "HELOC" }
  ];

  const creditScoreRanges = [
    { value: "all", label: "All scores" },
    { value: "680", label: "680+" },
    { value: "700", label: "700+" },
    { value: "720", label: "720+" },
    { value: "750", label: "750+" }
  ];

  const filteredProviders = homeEquityProviders.filter(provider => {
    const matchesLoanType = selectedLoanType === "all" || provider.loanType === selectedLoanType;
    const matchesCreditScore = minCreditScore === "all" || 
      parseInt(provider.minCreditScore) >= parseInt(minCreditScore);
    const matchesSearch = provider.bankName.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLoanType && matchesCreditScore && matchesSearch;
  });

  const sortedProviders = [...filteredProviders].sort((a, b) => {
    // Sort by promoted first, then by rating, then by rate
    if (a.promoted && !b.promoted) return -1;
    if (!a.promoted && b.promoted) return 1;
    if (a.rating !== b.rating) return b.rating - a.rating;
    return parseFloat(a.rate) - parseFloat(b.rate);
  });

  const calculateHomeEquity = () => {
    const homeValueNum = parseFloat(homeValue);
    const currentMortgageNum = parseFloat(currentMortgage);
    const loanAmountNum = parseFloat(loanAmount);
    const termNum = parseInt(loanTerm);
    const rateNum = parseFloat(interestRate) / 100;

    if (homeValueNum <= 0 || currentMortgageNum < 0 || loanAmountNum <= 0) {
      return null;
    }

    const availableEquity = homeValueNum * 0.85 - currentMortgageNum;
    const maxLoanAmount = Math.max(0, availableEquity);
    const recommendedLoanAmount = Math.min(loanAmountNum, maxLoanAmount);
    
    // Calculate monthly payment using loan amortization formula
    const monthlyRate = rateNum / 12;
    const totalPayments = termNum * 12;
    const monthlyPayment = recommendedLoanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
      (Math.pow(1 + monthlyRate, totalPayments) - 1);
    
    const totalCost = monthlyPayment * totalPayments;
    const totalInterest = totalCost - recommendedLoanAmount;
    
    const loanToValueRatio = (currentMortgageNum / homeValueNum) * 100;
    const combinedLoanToValue = ((currentMortgageNum + recommendedLoanAmount) / homeValueNum) * 100;

    return {
      homeValue: homeValueNum,
      currentMortgage: currentMortgageNum,
      availableEquity: availableEquity,
      maxLoanAmount: maxLoanAmount,
      recommendedLoanAmount: recommendedLoanAmount,
      monthlyPayment: monthlyPayment,
      totalInterest: totalInterest,
      totalCost: totalCost,
      loanToValueRatio: loanToValueRatio,
      combinedLoanToValue: combinedLoanToValue,
    };
  };

  const results = calculateHomeEquity();

  const handleCalculate = () => {
    setShowCalculatorResults(true);
  };

  const handleViewRates = () => {
    // Scroll to the rates section
    document.getElementById('rates-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getRiskLevel = (cltv: number) => {
    if (cltv <= 80) return { level: "Low", color: "bg-green-100 text-green-800", badge: "bg-green-500" };
    if (cltv <= 90) return { level: "Medium", color: "bg-yellow-100 text-yellow-800", badge: "bg-yellow-500" };
    return { level: "High", color: "bg-red-100 text-red-800", badge: "bg-red-500" };
  };

  const riskInfo = results ? getRiskLevel(results.combinedLoanToValue) : null;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Home Equity Calculator
            </h1>
            <p className="text-xl text-muted-foreground">
              Calculate your available equity and compare loan options from top lenders
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
                  Equity Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Home Value</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="number"
                      value={homeValue}
                      onChange={(e) => setHomeValue(e.target.value)}
                      className="pl-8"
                      placeholder="500000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Mortgage Balance</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="number"
                      value={currentMortgage}
                      onChange={(e) => setCurrentMortgage(e.target.value)}
                      className="pl-8"
                      placeholder="300000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Desired Loan Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="pl-8"
                      placeholder="50000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Loan Term</label>
                  <select
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    {loanTerms.map((term) => (
                      <option key={term.value} value={term.value}>
                        {term.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Interest Rate (%)</label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="pl-8"
                      placeholder="7.5"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full bg-gradient-primary hover:opacity-90"
                >
                  Calculate Equity
                </Button>

                {showCalculatorResults && (
                  <Button 
                    onClick={handleViewRates}
                    variant="outline"
                    className="w-full"
                  >
                    View All Home Equity Rates
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {showCalculatorResults && results ? (
              <div className="space-y-6">
                {/* Equity Summary */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-primary">
                      <Home className="h-5 w-5" />
                      Your Home Equity Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          ${results.availableEquity.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Available Equity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          ${results.maxLoanAmount.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Max Loan Amount</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">
                          ${results.recommendedLoanAmount.toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">Recommended Loan</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Assessment */}
                {riskInfo && (
                  <Card className={`${riskInfo.color} border-0`}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Risk Assessment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Combined Loan-to-Value Ratio: {results.combinedLoanToValue.toFixed(1)}%</p>
                          <p className="text-sm opacity-80">Risk Level: {riskInfo.level}</p>
                        </div>
                        <Badge className={`${riskInfo.badge} text-white`}>
                          {riskInfo.level} Risk
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Loan Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Loan Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Loan Amount:</span>
                        <span className="font-medium">${results.recommendedLoanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Loan Term:</span>
                        <span className="font-medium">{loanTerm} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate:</span>
                        <span className="font-medium text-primary">{interestRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Payment:</span>
                        <span className="font-medium">${results.monthlyPayment.toFixed(2)}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Cost Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Principal:</span>
                        <span className="font-medium">${results.recommendedLoanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Interest:</span>
                        <span className="font-medium text-red-600">${results.totalInterest.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Cost:</span>
                        <span className="font-medium">${results.totalCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interest Rate Type:</span>
                        <Badge variant="secondary">Fixed</Badge>
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
                    Enter your home details to see your available equity and loan options
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Rates Section */}
        <div id="rates-section">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Compare Home Equity Rates from Top Lenders</h2>
            <p className="text-muted-foreground">
              Find the best home equity loans and HELOCs that fit your borrowing needs
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filter Home Equity Offers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Search Lenders</label>
                  <Input
                    placeholder="Search bank names..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Type</label>
                  <select
                    value={selectedLoanType}
                    onChange={(e) => setSelectedLoanType(e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    {loanTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Min Credit Score</label>
                  <select
                    value={minCreditScore}
                    onChange={(e) => setMinCreditScore(e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    {creditScoreRanges.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <Button 
                    onClick={() => {
                      setSelectedLoanType("all");
                      setMinCreditScore("all");
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
              Showing {sortedProviders.length} home equity offers
            </p>
          </div>

          {/* Home Equity Providers List */}
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
                            <Home className="h-4 w-4" />
                            {provider.loanType}
                          </span>
                          <span className="flex items-center gap-1">
                            <Building2 className="h-4 w-4" />
                            {provider.maxLTV} max LTV
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rates */}
                    <div className="text-center lg:text-right">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {provider.rate}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">Interest Rate</div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">APR: </span>
                        <span className="font-medium">{provider.apr}</span>
                      </div>
                    </div>

                    {/* Loan Details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {provider.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>Amount: {provider.minLoanAmount} - {provider.maxLoanAmount}</div>
                        <div>Credit: {provider.minCreditScore}+ | Closing: {provider.closingCosts}</div>
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
                <h3 className="text-xl font-semibold mb-2">No home equity offers found</h3>
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

export default HomeEquity;