import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Code, Download } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "SIH 2024 Winner",
      description: "Ministry of Jal Shakti",
    },
    {
      icon: Award,
      title: "Samsung Top 100",
      description: "Solve for Tomorrow 2024",
    },
    {
      icon: Code,
      title: "5-Star Coder",
      description: "HackerRank C (DSA)",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a 3rd-year B.Tech Computer Science and Engineering student at{" "}
                <span className="text-primary font-semibold">Adamas University</span>, 
                passionate about technology that bridges automation and intelligence.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                I love exploring Machine Learning, AI-driven robotics, and full-stack web development. 
                I've participated and won multiple national-level hackathons and research challenges 
                where I showcased innovative tech solutions for agriculture and sustainability.
              </p>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="/Suvankar_Resume.pdf" download="Suvankar_Resume.pdf">
                    <Download className="mr-2 w-5 h-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-4 animate-slide-in-right">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{highlight.title}</h3>
                      <p className="text-foreground/60">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




