import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      {/* Floating Particles Effect - More subtle */}
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-primary">Suvankar</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 font-medium">
              Developer, Innovator & AI Enthusiast
            </p>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
              Exploring the intersection of Artificial Intelligence, Robotics, and Web Development
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary/50 hover:border-primary/40 transition-all"
              asChild
            >
              <a href="/Suvankar_Resume.pdf" download="Suvankar_Resume.pdf">
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary/50 hover:border-primary/40 transition-all"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex justify-center">
              <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




