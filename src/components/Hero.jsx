import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowRight, Sparkles, Code, Brain } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Data Scientist", "AI Enthusiast", "Full-Stack Developer", "Robotics Innovator"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10 animate-gradient-shift" />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/40 rounded-full animate-float-random"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Icon Badges */}
          <div className="flex justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm flex items-center gap-2 hover:bg-primary/20 transition-all hover:scale-105">
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Developer</span>
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm flex items-center gap-2 hover:bg-primary/20 transition-all hover:scale-105">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">AI Enthusiast</span>
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm flex items-center gap-2 hover:bg-primary/20 transition-all hover:scale-105">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Innovator</span>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-primary relative z-10">Suvankar</span>
                <span className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse" />
              </span>
            </h1>
            
            <div className="min-h-[80px] md:min-h-[100px]">
              <p className="text-2xl md:text-4xl text-foreground/90 font-semibold">
                <span className="text-primary">{typedText}</span>
                <span className="animate-blink text-primary">|</span>
              </p>
            </div>
            
            <p className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Crafting intelligent solutions at the intersection of{' '}
              <span className="text-primary font-semibold">Artificial Intelligence</span>,{' '}
              <span className="text-primary font-semibold">Robotics</span>, and{' '}
              <span className="text-primary font-semibold">Web Development</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 group relative overflow-hidden"
              asChild
            >
              <a href="#projects">
                <span className="relative z-10 flex items-center">
                  View My Projects
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all backdrop-blur-sm hover:scale-105 group"
              asChild
            >
              <a href="/Suvankar_Resume.pdf" download="Suvankar_Resume.pdf">
                <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all backdrop-blur-sm hover:scale-105 group"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">6+</div>
              <div className="text-sm text-foreground/60 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">14+</div>
              <div className="text-sm text-foreground/60 mt-1">Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">4+</div>
              <div className="text-sm text-foreground/60 mt-1">Hackathons Won</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex justify-center animate-bounce cursor-pointer hover:border-primary transition-colors">
              <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2 animate-scroll-indicator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




