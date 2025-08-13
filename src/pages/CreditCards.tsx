import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Lock, 
  ExternalLink, 
  CreditCard as CreditCardIcon, 
  TrendingUp,
  Filter,
  ChevronDown as ChevronDownIcon
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Types
interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  image: string;
  cashminrScore: number;
  cardholderRating: number;
  annualFee: string;
  introOffer: string;
  rewardsRate: string;
  regularAPR: string;
  recommendedCreditScore: string;
  category: string;
  bestFor: string;
  rewardDetails: RewardDetail[];
  pros: string[];
  cons: string[];
  cardDetails: string[];
  applyUrl: string;
}

interface RewardDetail {
  rate: string;
  description: string;
}

interface FilterOptions {
  category: string;
  issuer: string;
  creditRange: string;
  annualFee: string;
  sortBy: string;
}

// Data
const creditCards: CreditCard[] = [
  {
    id: '1',
    name: 'Capital One Savor Cash Rewards Credit Card',
    issuer: 'Capital One',
    image: '/images/capital-one-savor.jpg',
    cashminrScore: 5.0,
    cardholderRating: 4.4,
    annualFee: '$0',
    introOffer: 'Earn $200 Cash Back',
    rewardsRate: '1% - 8%',
    regularAPR: '19.24% - 29.24% (Variable)',
    recommendedCreditScore: '670 - 850',
    category: 'cash-back',
    bestFor: 'Entertainment',
    rewardDetails: [
      { rate: '8%', description: 'Cash Back on Capital One Entertainment purchases' },
      { rate: '5%', description: 'Cash Back on hotels and rental cars booked through Capital One Travel' },
      { rate: '3%', description: 'Cash Back at grocery stores (excluding superstores), dining, entertainment and popular streaming services' },
      { rate: '1%', description: 'Cash Back on all other purchases' }
    ],
    pros: [
      'Excellent bonus category coverage with entertainment rewards',
      'No annual fee with competitive intro APR offers',
      'Automatic cash back redemption available'
    ],
    cons: [
      'Superstores like Walmart and Target excluded from grocery category',
      'Limited additional perks beyond rewards'
    ],
    cardDetails: [
      'Earn a one-time $200 cash bonus once you spend $500 on purchases within the first 3 months',
      '0% intro APR on purchases and balance transfers for 15 months',
      'No foreign transaction fees',
      'No annual fee'
    ],
    applyUrl: '#'
  },
  {
    id: '2',
    name: 'Chase Freedom Unlimited®',
    issuer: 'Chase',
    image: '/images/chase-freedom-unlimited.jpg',
    cashminrScore: 5.0,
    cardholderRating: 4.3,
    annualFee: '$0',
    introOffer: 'Earn $200 cash back',
    rewardsRate: '1.5% - 5%',
    regularAPR: '18.99% - 28.49% Variable',
    recommendedCreditScore: '670 - 850',
    category: 'cash-back',
    bestFor: 'Standalone rewards card',
    rewardDetails: [
      { rate: '5%', description: 'Cash back on travel purchased through Chase Travel℠' },
      { rate: '3%', description: 'Cash back on drugstore purchases and dining at restaurants' },
      { rate: '1.5%', description: 'Cash back on all other purchases' }
    ],
    pros: [
      'High flat rewards rate with valuable bonus categories',
      'Points worth more when paired with Chase travel cards',
      'Excellent travel insurance and purchase protections'
    ],
    cons: [
      'Other cards offer higher flat rates',
      'Limited time partner perks'
    ],
    cardDetails: [
      'Earn $200 Bonus after you spend $500 on purchases in your first 3 months',
      '0% Intro APR for 15 months on purchases and balance transfers',
      'No annual fee',
      'Chase Credit Journey for credit monitoring'
    ],
    applyUrl: '#'
  },
  {
    id: '3',
    name: 'Blue Cash Preferred® Card from American Express',
    issuer: 'American Express',
    image: '/images/amex-blue-cash-preferred.jpg',
    cashminrScore: 4.4,
    cardholderRating: 4.3,
    annualFee: '$0 intro annual fee for the first year, then $95',
    introOffer: 'Earn $250',
    rewardsRate: '1% - 6%',
    regularAPR: '20.24%-29.24% Variable',
    recommendedCreditScore: 'Good to Excellent',
    category: 'cash-back',
    bestFor: 'Groceries',
    rewardDetails: [
      { rate: '6%', description: 'Cash Back at U.S. supermarkets on up to $6,000 per year (then 1%)' },
      { rate: '6%', description: 'Cash Back on select U.S. streaming subscriptions' },
      { rate: '3%', description: 'Cash Back at U.S. gas stations and on transit' },
      { rate: '1%', description: 'Cash Back on other purchases' }
    ],
    pros: [
      'Highest cash back rate available at U.S. supermarkets',
      'Valuable streaming service rewards',
      'Intro APR on purchases and balance transfers'
    ],
    cons: [
      'Annual fee after first year',
      'Spending caps may limit value for large families'
    ],
    cardDetails: [
      'Earn a $250 statement credit after you spend $3,000 in first 6 months',
      '0% intro APR on purchases and balance transfers for 12 months',
      '$84 Disney Bundle Credit available',
      'Apply with confidence pre-approval check'
    ],
    applyUrl: '#'
  },
  {
    id: '4',
    name: 'Capital One Venture X Rewards Credit Card',
    issuer: 'Capital One',
    image: '/images/capital-one-venture-x.jpg',
    cashminrScore: 5.0,
    cardholderRating: 4.4,
    annualFee: '$395',
    introOffer: 'Earn 75,000 miles',
    rewardsRate: '2 Miles - 10 Miles',
    regularAPR: '19.99% - 29.24% (Variable)',
    recommendedCreditScore: '740 - 850',
    category: 'travel',
    bestFor: 'Affordable travel perks',
    rewardDetails: [
      { rate: '10 Miles', description: 'Per dollar on hotels and rental cars booked through Capital One Travel' },
      { rate: '5 Miles', description: 'Per dollar on flights and vacation rentals booked through Capital One Travel' },
      { rate: '2 Miles', description: 'Per dollar on every purchase, every day' }
    ],
    pros: [
      'Practical travel perks that easily offset annual fee',
      'High flat rewards rate on all purchases',
      'Comprehensive airport lounge access'
    ],
    cons: [
      'Capital One lacks major domestic airline partners',
      'Missing some luxury benefits of competitor cards'
    ],
    cardDetails: [
      'Earn 75,000 bonus miles when you spend $4,000 in first 3 months',
      '$300 annual credit for Capital One Travel bookings',
      '10,000 bonus miles every year starting on first anniversary',
      'Access to 1,300+ lounges worldwide'
    ],
    applyUrl: '#'
  },
  {
    id: '5',
    name: 'Chase Sapphire Preferred® Card',
    issuer: 'Chase',
    image: '/images/chase-sapphire-preferred.jpg',
    cashminrScore: 4.9,
    cardholderRating: 4.2,
    annualFee: '$95',
    introOffer: '75,000 bonus points',
    rewardsRate: '1x - 5x',
    regularAPR: '19.99% - 28.24% Variable',
    recommendedCreditScore: '670 - 850',
    category: 'travel',
    bestFor: 'Travel card for rewards value',
    rewardDetails: [
      { rate: '5x', description: 'Points on travel purchased through Chase Travel℠' },
      { rate: '3x', description: 'Points on dining, select streaming services and online groceries' },
      { rate: '2x', description: 'Points on all other travel purchases' },
      { rate: '1x', description: 'Points on all other purchases' }
    ],
    pros: [
      'High-value transfer partners for point redemption',
      'Annual hotel credits and anniversary bonus',
      'Valuable travel insurance and protections'
    ],
    cons: [
      'No airport lounge access',
      'Grocery rewards only for online purchases'
    ],
    cardDetails: [
      'Earn 75,000 bonus points after spending $5,000 in first 3 months',
      'Up to $50 in annual hotel statement credits',
      '10% anniversary points boost on previous year spending',
      'Complimentary DashPass membership'
    ],
    applyUrl: '#'
  },
  {
    id: '6',
    name: 'Citi Double Cash® Card',
    issuer: 'Citi',
    image: '/images/citi-double-cash.jpg',
    cashminrScore: 4.2,
    cardholderRating: 4.1,
    annualFee: '$0',
    introOffer: '$200 cash back',
    rewardsRate: '2% - 5%',
    regularAPR: '18.24% - 28.24% (Variable)',
    recommendedCreditScore: '670 - 850',
    category: 'cash-back',
    bestFor: 'Flat-rate cash back',
    rewardDetails: [
      { rate: '2%', description: 'On every purchase (1% when you buy, 1% when you pay)' },
      { rate: '5%', description: 'Total cash back on hotel, car rentals and attractions via Citi Travel' }
    ],
    pros: [
      'One of the best flat cash back rates available',
      'Long intro APR period for balance transfers',
      'Can pool rewards with Citi travel cards'
    ],
    cons: [
      'No intro APR on purchases',
      '3% foreign transaction fee'
    ],
    cardDetails: [
      'Earn $200 cash back after spending $1,500 in first 6 months',
      '0% intro APR on Balance Transfers for 18 months',
      'No annual fee',
      'Intro balance transfer fee of 3% for first 4 months'
    ],
    applyUrl: '#'
  }
];

const filterOptions = {
  categories: ['All cards', 'Cash back', 'Travel', 'No annual fee', '0% intro APR', 'Balance transfer'],
  issuers: ['All card issuers', 'American Express', 'Capital One', 'Chase', 'Citi', 'Wells Fargo'],
  creditRanges: ['All credit levels', 'Good to excellent (670 - 850)', 'Fair to good (580 - 740)', 'Bad (420 - 580)', 'No credit history'],
  sortOptions: ['Featured', 'Highest rating', 'Lowest annual fee', 'Lowest APR']
};

// Components
const FilterSidebar = ({ filters, onFilterChange, resultCount }: {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: string) => void;
  resultCount: number;
}) => {
  return (
    <Card className="w-full lg:w-80 bg-card/50 backdrop-blur-glass border-border/50 p-6 h-fit shadow-elegant">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
          <Filter className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          <p className="text-sm text-muted-foreground">Refine your search</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Filter by
          </label>
          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) => onFilterChange('category', e.target.value)}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
            >
              <option value="">All cards</option>
              {filterOptions.categories.slice(1).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Issuer Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Issuers
          </label>
          <div className="relative">
            <select
              value={filters.issuer}
              onChange={(e) => onFilterChange('issuer', e.target.value)}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
            >
              <option value="">All card issuers</option>
              {filterOptions.issuers.slice(1).map((issuer) => (
                <option key={issuer} value={issuer}>
                  {issuer}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Credit Range Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Credit range
          </label>
          <div className="relative">
            <select
              value={filters.creditRange}
              onChange={(e) => onFilterChange('creditRange', e.target.value)}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
            >
              <option value="">All credit levels</option>
              {filterOptions.creditRanges.slice(1).map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Sort by
          </label>
          <div className="relative">
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange('sortBy', e.target.value)}
              className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
            >
              <option value="featured">Featured</option>
              {filterOptions.sortOptions.slice(1).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/50">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {resultCount} result{resultCount !== 1 ? 's' : ''}
          </p>
          <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </Card>
  );
};

const CreditCardItem = ({ card, onAddToCompare, isInComparison }: {
  card: CreditCard;
  onAddToCompare: (card: CreditCard) => void;
  isInComparison: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground/30'}`}
      />
    ));
  };

  const getCardGradient = (issuer: string) => {
    const gradients = {
      'Chase': 'from-blue-500 to-purple-600',
      'Capital One': 'from-orange-500 to-red-600',
      'American Express': 'from-green-500 to-emerald-600',
      'Citi': 'from-blue-600 to-cyan-600',
      'Wells Fargo': 'from-red-500 to-pink-600'
    };
    return gradients[issuer as keyof typeof gradients] || 'from-gray-500 to-gray-600';
  };

  return (
    <Card className="group bg-card/50 backdrop-blur-glass border-border/50 overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
      {/* Header */}
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-gradient-accent text-accent-foreground">
                Best for {card.bestFor}
              </Badge>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-xs text-muted-foreground">Top Rated</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {card.name}
            </h3>
            
            {/* Ratings */}
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Cardholder rating</span>
                <div className="flex items-center gap-1">
                  {renderStars(card.cardholderRating)}
                  <span className="text-sm font-medium text-foreground">{card.cardholderRating}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Cashminr score</span>
                <div className="flex items-center gap-1">
                  {renderStars(card.cashminrScore)}
                  <span className="text-sm font-medium text-foreground">{card.cashminrScore}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Image Placeholder */}
          <div className={`w-24 h-16 bg-gradient-to-r ${getCardGradient(card.issuer)} rounded-xl flex items-center justify-center shadow-lg`}>
            <CreditCardIcon className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Key Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-background/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Credit score</div>
            <div className="font-semibold text-foreground">{card.recommendedCreditScore}</div>
          </div>
          <div className="bg-background/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Intro offer</div>
            <div className="font-semibold text-accent">{card.introOffer}</div>
          </div>
          <div className="bg-background/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Rewards rate</div>
            <div className="font-semibold text-foreground">{card.rewardsRate}</div>
          </div>
          <div className="bg-background/50 rounded-lg p-4">
            <div className="text-sm text-muted-foreground mb-1">Annual fee</div>
            <div className="font-semibold text-foreground">{card.annualFee}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-gradient-primary hover:opacity-90 flex items-center gap-2 group-hover:scale-105 transition-transform">
            <Lock className="h-4 w-4" />
            Apply now
            <ExternalLink className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="group-hover:scale-105 transition-transform">
            See Rates & Fees
          </Button>
          <Button
            variant="outline"
            onClick={() => onAddToCompare(card)}
            disabled={isInComparison}
            className={`flex items-center gap-2 group-hover:scale-105 transition-transform ${
              isInComparison ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Plus className="h-4 w-4" />
            Add to compare
          </Button>
        </div>
      </CardContent>

      {/* Expandable Content */}
      <div className="border-t border-border/50">
        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors"
        >
          <span className="font-medium text-foreground">
            Why you'll like this & card details
          </span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </Button>

        {isExpanded && (
          <div className="p-8 pt-0 space-y-8 animate-fade-in">
            {/* Reward Details */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                Reward Details
              </h4>
              <div className="space-y-3">
                {card.rewardDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4 bg-background/30 rounded-lg p-4">
                    <Badge className="bg-gradient-primary text-primary-foreground min-w-[4rem] text-center">
                      {detail.rate}
                    </Badge>
                    <span className="text-sm text-foreground">{detail.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Pros
                </h4>
                <ul className="space-y-3">
                  {card.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  Cons
                </h4>
                <ul className="space-y-3">
                  {card.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Details */}
            <div>
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Card Details
              </h4>
              <ul className="space-y-3">
                {card.cardDetails.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

const CreditCards = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: '',
    issuer: '',
    creditRange: '',
    annualFee: '',
    sortBy: 'featured'
  });
  const [comparisonCards, setComparisonCards] = useState<CreditCard[]>([]);

  const filteredCards = creditCards.filter(card => {
    // Handle category filter
    if (filters.category && filters.category !== 'All cards') {
      const categoryMap: { [key: string]: string } = {
        'Cash back': 'cash-back',
        'Travel': 'travel',
        'No annual fee': 'no-fee',
        '0% intro APR': 'intro-apr',
        'Balance transfer': 'balance-transfer'
      };
      const mappedCategory = categoryMap[filters.category];
      
      // Special handling for "No annual fee" cards
      if (filters.category === 'No annual fee' && card.annualFee !== '$0') {
        return false;
      }
      // For other categories, check the card's category
      else if (mappedCategory && card.category !== mappedCategory) {
        return false;
      }
    }
    
    // Handle issuer filter
    if (filters.issuer && filters.issuer !== 'All card issuers' && card.issuer !== filters.issuer) {
      return false;
    }
    
    // Handle credit range filter
    if (filters.creditRange && filters.creditRange !== 'All credit levels') {
      // Simple check if the filter range matches the card's recommended score
      if (!card.recommendedCreditScore.toLowerCase().includes(filters.creditRange.toLowerCase().split('(')[1]?.split(')')[0] || '')) {
        return false;
      }
    }
    
    return true;
  });

  const sortedCards = [...filteredCards].sort((a, b) => {
    const sortMap: { [key: string]: string } = {
      'Featured': 'featured',
      'Highest rating': 'rating',
      'Lowest annual fee': 'annualFee',
      'Lowest APR': 'apr'
    };
    
    const sortKey = sortMap[filters.sortBy] || filters.sortBy;
    
    switch (sortKey) {
      case 'rating':
        return b.cashminrScore - a.cashminrScore;
      case 'annualFee':
        // Convert fee strings to numbers for comparison
        const aFee = parseInt(a.annualFee.replace(/[^0-9]/g, '')) || 0;
        const bFee = parseInt(b.annualFee.replace(/[^0-9]/g, '')) || 0;
        return aFee - bFee;
      case 'apr':
        // Extract first APR number from string
        const getAPR = (apr: string) => {
          const match = apr.match(/(\d+\.?\d*)/);
          return match ? parseFloat(match[1]) : 999;
        };
        return getAPR(a.regularAPR) - getAPR(b.regularAPR);
      default:
        return 0; // Keep original order for 'featured'
    }
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleAddToComparison = (card: CreditCard) => {
    if (comparisonCards.length < 3 && !comparisonCards.find(c => c.id === card.id)) {
      setComparisonCards([...comparisonCards, card]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Credit Cards
              </span>
              <br />
              <span className="text-foreground">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare the best credit cards with expert insights, comprehensive reviews, and personalized recommendations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/3">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                resultCount={sortedCards.length}
              />
            </aside>
            <main className="lg:w-2/3">
              <div className="space-y-8">
                {sortedCards.map((card, index) => (
                  <div key={card.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CreditCardItem
                      card={card}
                      onAddToCompare={handleAddToComparison}
                      isInComparison={comparisonCards.some(c => c.id === card.id)}
                    />
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreditCards; 