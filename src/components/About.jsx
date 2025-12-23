import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Code, Download, GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "SIH 2024 Winner",
      description: "Ministry of Jal Shakti",
      color: "from-amber-600 to-yellow-700",
    },
    {
      icon: Award,
      title: "Samsung Top 100",
      description: "Solve for Tomorrow 2024",
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: Code,
      title: "5-Star Coder",
      description: "HackerRank C (DSA)",
      color: "from-emerald-600 to-green-700",
    },
  ];

  const timeline = [
    { year: "2023 - 2027", title: "B.Tech CSE", institution: "Adamas University (CGPA: 8.6)", icon: GraduationCap },
    { year: "2024", title: "SIH Winner", institution: "Smart India Hackathon", icon: Trophy },
    { year: "2024", title: "Samsung Top 100", institution: "Solve for Tomorrow", icon: Award },
    { year: "2025", title: "KPIT Sparkle", institution: "Finalist", icon: Trophy },
  ];

  const stats = [
    { label: "CGPA", value: "8.6", icon: GraduationCap },
    { label: "Projects Built", value: "6+", icon: Code },
    { label: "Hackathons Won", value: "4+", icon: Trophy },
    { label: "Awards & Recognition", value: "14+", icon: Award },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About Me
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Passionate developer bridging innovation and technology
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content with Timeline */}
            <div className="space-y-8">
              <div className="space-y-6 animate-slide-in-left">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education & Location</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      3rd-year B.Tech Computer Science & Engineering student at{" "}
                      <span className="text-primary font-semibold">Adamas University, Kolkata</span>{" "}
                      with a <span className="text-primary font-semibold">CGPA of 8.6</span>. 
                      Based in Barasat, Kolkata, West Bengal, India.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expertise & Passion</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Specialized in <span className="text-primary font-semibold">Data Science, AI, ML, and IoT</span>. 
                      Winner of Smart India Hackathon 2024, Finalist in KPIT Sparkle 2025, and Top 100 in Samsung Solve for Tomorrow. 
                      Experienced in full-stack development, embedded systems, and creating real-world tech solutions like{" "}
                      <span className="text-primary font-semibold">AgriDrive</span> and{" "}
                      <span className="text-primary font-semibold">ETronics</span>. 
                      Strong leadership skills with 5-star rating in C programming (DSA) on HackerRank.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Journey Highlights
                </h3>
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="flex gap-4 group hover:transform hover:translate-x-2 transition-all"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-12 bg-border mt-2" />
                        )}
                      </div>
                      <div className="pb-8 flex-1">
                        <div className="text-sm text-primary font-medium">{item.year}</div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm text-foreground/60">{item.institution}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 group"
                  asChild
                >
                  <a href="/Suvankar_Resume.pdf" download="Suvankar_Resume.pdf">
                    <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-4 animate-slide-in-right">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Key Achievements
              </h3>
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${highlight.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-foreground/60">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Additional Info Card */}
              <Card className="bg-gradient-to-br from-primary/10 to-blue-500/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2 text-lg">Looking for Opportunities</h4>
                  <p className="text-foreground/70 text-sm">
                    Actively seeking internship and full-time opportunities in software development, 
                    AI/ML, and robotics. Open to remote and on-site positions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




