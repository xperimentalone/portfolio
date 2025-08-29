import turtleImagePath from "@assets/turtle_1756452405092.png";
import { FlaskConical, Microscope } from "lucide-react";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Laboratory background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-90"></div>
        
        {/* Floating laboratory elements */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-float">
          <img 
            src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200" 
            alt="Laboratory equipment" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
        <div className="absolute top-32 right-16 w-24 h-24 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <img 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
            alt="Test tubes with solutions" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
        <div className="absolute bottom-32 left-20 w-28 h-28 opacity-25 animate-float" style={{ animationDelay: '4s' }}>
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&h=180" 
            alt="Scientific beakers and flasks" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
        <div className="absolute bottom-20 right-32 w-20 h-20 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <img 
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=120" 
            alt="Laboratory workspace" 
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-full border-4 border-primary glow-effect p-2 animate-float">
            <img 
              src={turtleImagePath}
              alt="XperimentalOne Profile - Scientist Turtle Character" 
              className="w-full h-full rounded-full object-cover"
              data-testid="profile-image"
            />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow" data-testid="hero-title">
          Xperimental<span className="text-primary">One</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-description">
          Welcome to the digital laboratory where <span className="text-primary font-semibold">experimentation meets imagination</span>. 
          Explore the fun projects, games and applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToProjects}
            className="px-8 py-4 cyan-gradient text-accent-foreground rounded-lg font-semibold hover-lift glow-effect transition-all"
            data-testid="button-explore-projects"
          >
            <FlaskConical className="w-5 h-5 mr-2 inline" />
            Explore Projects
          </button>
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover-lift border border-border hover:border-primary transition-all"
            data-testid="button-learn-more"
          >
            <Microscope className="w-5 h-5 mr-2 inline" />
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
