import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Users, Star, Brain, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2024 Winner",
      description: "Ministry of Jal Shakti - National Level",
      date: "2024",
      color: "from-amber-600 to-yellow-700",
    },
    {
      icon: Award,
      title: "Samsung Solve for Tomorrow 2024",
      description: "Top 50 Nationwide Selection",
      date: "2024",
      color: "from-blue-600 to-indigo-700",
    },
    {
      icon: Star,
      title: "KPIT Sparkle 2025",
      description: "Selected Team for Innovation Challenge",
      date: "2025",
      color: "from-violet-600 to-purple-700",
    },
    {
      icon: Users,
      title: "Robotics & AI Club Member",
      description: "Adamas University",
      date: "2023 - Present",
      color: "from-emerald-600 to-teal-700",
    },
    {
      icon: Code,
      title: "5-Star C Language DSA",
      description: "HackerRank Certification",
      date: "2024",
      color: "from-rose-600 to-pink-700",
    },
    {
      icon: Brain,
      title: "AIU Anveshan 2024-25",
      description: "Research Participant",
      date: "2024",
      color: "from-indigo-600 to-blue-700",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Celebrating milestones in innovation, competition, and technical excellence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} p-2.5 mb-4 group-hover:scale-105 transition-transform shadow-md`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm text-foreground/60 mb-3">
                      {achievement.description}
                    </p>
                    
                    <div className="text-xs text-primary/80 font-medium">
                      {achievement.date}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;




