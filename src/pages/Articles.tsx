import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, TrendingUp, Home, CreditCard, Cloud, BookOpen, Calendar, Clock } from "lucide-react";
import ArticleViewer from "@/components/ArticleViewer";
import { articles } from "@/data/articles"; // Import local articles data
import Navigation from "@/components/Navigation";

interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  seoKeywords: string[];
  generatedDate: string;
  publishedDate: string;
  status: string;
  wordCount: number;
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  // Use local articles data instead of API calls
  useEffect(() => {
    let filtered = articles;
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.seoKeywords.some(keyword => 
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    setFilteredArticles(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = [
    { key: "all", label: "All Articles", icon: BookOpen },
    { key: "investing", label: "Investing", icon: TrendingUp },
    { key: "mortgages", label: "Mortgages", icon: Home },
    { key: "credit", label: "Credit & Loans", icon: CreditCard },
    { key: "retirement", label: "Retirement", icon: Cloud },
    { key: "savings", label: "Savings", icon: BookOpen },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.key === category);
    return cat ? cat.icon : BookOpen;
  };

  const handleGenerateArticles = async () => {
    // This will be re-enabled when backend is deployed
    alert("Article generation will be available once the backend is deployed. For now, enjoy the pre-generated articles!");
  };

  if (selectedArticleId) {
    return (
      <ArticleViewer 
        articleId={selectedArticleId} 
        onBack={() => setSelectedArticleId(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Financial Education
            </h1>
            <p className="text-xl text-muted-foreground">
              Made Simple
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Expert insights on investing, mortgages, credit, and retirement planning
            </p>
          </div>
        </div>
      </div>

      {/* Search and Generate */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button 
            onClick={handleGenerateArticles}
            className="bg-gradient-primary hover:opacity-90"
          >
            Generate Daily Articles
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.key)}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4" />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              {searchTerm || selectedCategory !== "all" 
                ? "Try adjusting your search or category filter"
                : "Generate your first articles to get started!"
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const Icon = getCategoryIcon(article.category);
              return (
                <Card 
                  key={article.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => setSelectedArticleId(article.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(article.publishedDate)}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          {article.wordCount} words
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {article.content.split('\n\n')[1]?.substring(0, 150)}...
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {article.seoKeywords.slice(0, 3).map((keyword, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="bg-muted/30 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest financial news, rates, and expert insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-primary hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles; 