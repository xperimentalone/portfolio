import { Mail, Github } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="section-divider"></div>
      
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow" data-testid="contact-title">
          Join the Experiment
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="contact-description">
          Ready to collaborate on the next breakthrough? Let's connect and create something extraordinary together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:projectafter6@gmail.com?subject=Hello from XperimentalOne Website&body=Hi! I found your website and wanted to get in touch.%0D%0A%0D%0AName: %0D%0AMessage: "
            className="inline-flex items-center px-8 py-4 cyan-gradient text-accent-foreground rounded-lg font-semibold hover-lift glow-effect transition-all"
            data-testid="contact-email-button"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
          <a 
            href="https://github.com/xperimentalone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover-lift border border-border hover:border-primary transition-all"
            data-testid="contact-github-button"
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
