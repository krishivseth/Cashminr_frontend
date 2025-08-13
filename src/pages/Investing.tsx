import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, Zap, Star, ArrowRight, DollarSign, Target, PieChart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Investing = () => {
  const investmentTypes = [
    {
      icon: TrendingUp,
      title: "Best Investments",
      description: "Discover top-rated investment opportunities",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: BookOpen,
      title: "Brokerage Reviews",
      description: "Compare the best online brokers",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Star,
      title: "Best Online Brokers",
      description: "Find the perfect broker for your needs",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      icon: DollarSign,
      title: "How To Buy Stocks",
      description: "Learn the basics of stock investing",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const editorsPicks = [
    {
      title: "7 strategies to build wealth no matter your income",
      readTime: "7 min read",
      category: "Wealth Building"
    },
    {
      title: "What are the Magnificent 7 stocks? Market's hottest stocks",
      readTime: "3 min read",
      category: "Stock Analysis"
    },
    {
      title: "How to build a bond ladder — and the best brokers to help",
      readTime: "7 min read",
      category: "Bonds"
    },
  ];

  const investingBasics = [
    {
      title: "Crypto vs. stocks",
      description: "Here's how crypto and stocks compare.",
      readTime: "9 min read"
    },
    {
      title: "How to invest in ETFs",
      description: "Are you looking for targeted exposure to an investing sector? An ETF can help with that.",
      readTime: "8 min read"
    },
    {
      title: "How to invest in crypto",
      description: "Cryptocurrency is on fire these days and investors are looking to profit on its rise.",
      readTime: "7 min read"
    },
    {
      title: "How portfolio rebalancing works",
      description: "These are some of the most popular questions about portfolio rebalancing.",
      readTime: "5 min read"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Investing
              </span>
              <br />
              <span className="text-foreground">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build wealth with expert insights, comprehensive broker reviews, and investment tools
            </p>
          </div>

          {/* Quick Access */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {investmentTypes.map((type, index) => (
              <Card 
                key={type.title}
                className="group bg-card/50 backdrop-blur-glass border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {type.description}
                  </p>
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investing Basics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Investing Basics
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {investingBasics.map((article, index) => (
              <Card 
                key={article.title}
                className="group bg-card/30 backdrop-blur-glass border-border/30 hover:bg-card/50 hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-secondary/50">
                      {article.readTime}
                    </Badge>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Editor's Picks
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {editorsPicks.map((pick, index) => (
              <Card 
                key={pick.title}
                className="group bg-card/50 backdrop-blur-glass border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2 border-primary/50 text-primary">
                    {pick.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {pick.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{pick.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Tools */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Investment <span className="bg-gradient-primary bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Make informed investment decisions with our comprehensive tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: PieChart, title: "Portfolio Analyzer", desc: "Analyze your investment portfolio" },
              { icon: Target, title: "Goal Planner", desc: "Set and track investment goals" },
              { icon: TrendingUp, title: "Risk Calculator", desc: "Assess your risk tolerance" },
            ].map((tool) => (
              <Card 
                key={tool.title}
                className="group bg-card/30 backdrop-blur-glass border-border/30 hover:bg-card/50 hover:shadow-elegant transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <tool.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {tool.desc}
                  </p>
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Try Tool
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investing;