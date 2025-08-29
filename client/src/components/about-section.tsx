import { Atom, Brain, Rocket } from "lucide-react";
import labImage from "@assets/lab_1756462311477.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-divider"></div>
      
      {/* Futuristic laboratory background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent"></div>
        <img 
          src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Futuristic laboratory setting" 
          className="w-full h-full object-cover opacity-10" 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow" data-testid="about-title">
            The Laboratory
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-testid="about-subtitle">
            A digital playground where simple ideas meet playful experiments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="project-card rounded-lg p-8 hover-lift text-center" data-testid="card-experimentation">
            <div className="w-16 h-16 cyan-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Atom className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary text-center">Experimentation</h3>
            <p className="text-muted-foreground">
              "What happens if I click this?" - That's basically my development philosophy. Sometimes it works, sometimes it doesn't, but it's always fun!
            </p>
          </div>
          
          <div className="project-card rounded-lg p-8 hover-lift text-center" data-testid="card-imagination">
            <div className="w-16 h-16 gray-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Imagination</h3>
            <p className="text-muted-foreground">
              Where shower thoughts become actual projects! No idea is too silly here - if I can dream it, I'll probably try to code it.
            </p>
          </div>
          
          <div className="project-card rounded-lg p-8 hover-lift text-center" data-testid="card-exploration">
            <div className="w-16 h-16 cyan-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Exploration</h3>
            <p className="text-muted-foreground">
              Like a digital wanderer with too much coffee, I bounce between Unity, Python, and web stuff - basically whatever catches my curiosity!
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-8 border border-border" data-testid="mission-vision-section">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-glow" data-testid="mission-vision-title">
                Mission & Vision
              </h3>
              <div className="space-y-4">
                <div data-testid="mission-section">
                  <h4 className="text-xl font-semibold text-primary mb-2">🎯 Mission</h4>
                  <p className="text-muted-foreground">
                    To have as much fun as possible while learning cool stuff. If it makes me smile or teaches me something new, it's mission accomplished!
                  </p>
                </div>
                <div data-testid="vision-section">
                  <h4 className="text-xl font-semibold text-secondary mb-2">🔮 Vision</h4>
                  <p className="text-muted-foreground">
                    A place where "I wonder what this button does?" is the most important question, and where making mistakes is just part of the adventure!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={labImage} 
                alt="Futuristic laboratory with scientific equipment and glowing displays" 
                className="rounded-lg shadow-lg glow-effect max-w-full h-auto"
                data-testid="lab-equipment-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
