import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { buildApiUrl } from '@/lib/config';

interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  readTime: number;
  excerpt: string;
}

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const response = await fetch(buildApiUrl(`/api/articles/slug/${slug}`));
        if (!response.ok) {
          throw new Error('Article not found');
        }
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Article not found');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  const renderContent = (content: string) => {
    const sections = content.split(/(?=^#{1,3} )/m);
    return sections.map((section, index) => {
      if (!section.trim()) return null;
      
      const lines = section.split('\n');
      const header = lines[0];
      const body = lines.slice(1).join('\n').trim();

      if (header.startsWith('# ')) {
        return null; // Skip main title
      } else       if (header.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {header.replace('## ', '')}
          </h2>
        );
      } else if (header.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
            {header.replace('### ', '')}
          </h3>
        );
      } else {
        return (
          <div key={index} className="mb-4">
            {renderBodyContent(body)}
          </div>
        );
      }
    });
  };

  const renderBodyContent = (content: string) => {
    if (!content) return null;
    
    const paragraphs = content.split('\n\n');
    return paragraphs.map((paragraph, index) => {
      if (!paragraph.trim()) return null;
      
      // Check if it's a list
      if (paragraph.trim().startsWith('- ') || paragraph.trim().startsWith('* ')) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc list-inside mb-4 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-muted-foreground leading-relaxed">
                {item.replace(/^[-*]\s*/, '')}
              </li>
            ))}
          </ul>
        );
      }
      
      // Check if it's a numbered list
      if (/^\d+\./.test(paragraph.trim())) {
        const items = paragraph.split('\n').filter(item => item.trim());
        return (
          <ol key={index} className="list-decimal list-inside mb-4 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-muted-foreground leading-relaxed">
                {item.replace(/^\d+\.\s*/, '')}
              </li>
            ))}
          </ol>
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {paragraph.trim()}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <Card>
            <CardContent className="text-center py-12">
              <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
              <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
              <Link to="/articles">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Articles
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <Link to="/articles" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
          
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            
            <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-muted-foreground text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime} min read
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(article.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {article.category}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="prose prose-lg max-w-none p-8">
              {renderContent(article.content)}
            </CardContent>
          </Card>
          
          {/* Article Footer */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Last updated: {new Date(article.updatedAt).toLocaleDateString()}
              </div>
              <Link to="/articles">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
