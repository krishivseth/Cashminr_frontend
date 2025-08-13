import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { articles } from "@/data/articles"; // Import local articles data

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

interface ArticleViewerProps {
  articleId: string;
  onBack: () => void;
}

const ArticleViewer = ({ articleId, onBack }: ArticleViewerProps) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        // Find article from local data instead of API call
        const foundArticle = articles.find(a => a.id === articleId);
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError('Article not found');
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error</h2>
          <p className="text-muted-foreground mb-6">{error || 'Article not found'}</p>
          <Button onClick={onBack} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Button>
        </div>
      </div>
    );
  }

  // Function to render markdown content (improved implementation)
  const renderContent = (content: string) => {
    // Split content into sections based on markdown headers
    const sections = content.split(/(?=^#{1,3} )/m);
    
    return sections.map((section, index) => {
      if (!section.trim()) return null;
      
      const lines = section.split('\n');
      const header = lines[0];
      const body = lines.slice(1).join('\n').trim();
      
      if (header.startsWith('# ')) {
        // Main title - skip as it's already displayed in the header
        return null;
      } else if (header.startsWith('## ')) {
        // Main heading
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
              {header.replace('## ', '')}
            </h2>
            <div className="prose prose-gray max-w-none">
              {renderBodyContent(body)}
            </div>
          </div>
        );
      } else if (header.startsWith('### ')) {
        // Subheading
        return (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3 text-primary">
              {header.replace('### ', '')}
            </h3>
            <div className="prose prose-gray max-w-none">
              {renderBodyContent(body)}
            </div>
          </div>
        );
      } else {
        // Content without header
        return (
          <div key={index} className="mb-4">
            <div className="prose prose-gray max-w-none">
              {renderBodyContent(section.trim())}
            </div>
          </div>
        );
      }
    });
  };

  // Function to render body content with proper paragraph and list handling
  const renderBodyContent = (content: string) => {
    if (!content) return null;
    
    // Split content into paragraphs
    const paragraphs = content.split(/\n\s*\n/);
    
    return paragraphs.map((paragraph, index) => {
      if (!paragraph.trim()) return null;
      
      // Check if it's a list
      if (paragraph.trim().match(/^[\d\-*]\s/)) {
        // It's a list
        const listItems = paragraph.split('\n').filter(item => item.trim());
        const isOrdered = paragraph.trim().match(/^\d/);
        
        if (isOrdered) {
          return (
            <ol key={index} className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="leading-relaxed">
                  {item.replace(/^\d+\.\s*/, '')}
                </li>
              ))}
            </ol>
          );
        } else {
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="leading-relaxed">
                  {item.replace(/^[\-*]\s*/, '')}
                </li>
              ))}
            </ul>
          );
        }
      } else {
        // Regular paragraph
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {paragraph.trim()}
          </p>
        );
      }
    });
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button onClick={onBack} variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Button>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="capitalize">
              {article.category}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(article.publishedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {article.wordCount} words
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {article.seoKeywords.map((keyword, index) => (
              <Badge key={index} variant="outline" className="gap-1">
                <Tag className="h-3 w-3" />
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          {renderContent(article.content)}
        </div>

        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              This article was generated on {new Date(article.generatedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleViewer; 