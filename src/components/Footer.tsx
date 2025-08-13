import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Banking",
      links: ["Savings Accounts", "Checking Accounts", "CDs", "Money Market", "Online Banks"],
    },
    {
      title: "Mortgages",
      links: ["Mortgage Rates", "Refinance Rates", "HELOC Rates", "Mortgage Calculator", "Home Buying Guide"],
    },
    {
      title: "Investing",
      links: ["Best Brokers", "IRA Accounts", "Robo-Advisors", "Investment Calculator", "Market News"],
    },
    {
      title: "Credit Cards",
      links: ["Best Credit Cards", "Cash Back Cards", "Travel Cards", "Business Cards", "Credit Score"],
    },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest financial news, rates, and expert insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-card/50 border-border/50"
            />
            <Button className="bg-gradient-primary hover:opacity-90">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Cashminr
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>© 2024 Cashminr. All rights reserved. | Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;