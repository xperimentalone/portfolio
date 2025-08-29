import { Home, Info, FlaskConical, Github } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { href: "#home", icon: Home, label: "Home" },
    { href: "#about", icon: Info, label: "About" },
    { href: "#projects", icon: FlaskConical, label: "Projects" },
    { href: "https://github.com/xperimentalone", icon: Github, label: "GitHub", external: true },
  ];

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold text-glow mb-2" data-testid="footer-logo">
              XperimentalOne
            </div>
            <p className="text-muted-foreground" data-testid="footer-tagline">
              Where experimentation meets imagination
            </p>
          </div>
          
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid={`footer-link-${link.label.toLowerCase()}`}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            &copy; 2024 XperimentalOne. All experiments are conducted with passion and curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
