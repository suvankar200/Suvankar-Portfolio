import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Users, Star, Brain, Code, Target, Zap, Medal, Rocket } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Smart India Hackathon 2024 Winner",
      description: "Ministry of Jal Shakti - National Level",
      date: "2024",
      color: "from-amber-600 to-yellow-700",
      badge: "Winner"
    },
    {
      icon: Award,
      title: "Samsung Solve for Tomorrow",
      description: "Top 100 Team (India-wide Selection)",
      date: "2024",
      color: "from-blue-600 to-indigo-700",
      badge: "Top 100"
    },
    {
      icon: Star,
      title: "KPIT Sparkle 2025",
      description: "Finalist - Innovation Challenge",
      date: "2025",
      color: "from-violet-600 to-purple-700",
      badge: "Finalist"
    },
    {
      icon: Medal,
      title: "SIH Internal Hackathon",
      description: "1st Position - University Level",
      date: "2024",
      color: "from-emerald-600 to-teal-700",
      badge: "1st Place"
    },
    {
      icon: Medal,
      title: "SIH Internal Hackathon 2025",
      description: "Back-to-Back Winner - University Level",
      date: "2025",
      color: "from-emerald-600 to-teal-700",
      badge: "Winner"
    },
    {
      icon: Brain,
      title: "AIU Anveshan Research",
      description: "Zonal Winner - East Zone",
      date: "2025",
      color: "from-indigo-600 to-blue-700",
      badge: "Winner"
    },
    {
      icon: Brain,
      title: "AIU Anveshan Research 2024",
      description: "3rd Position - Zonal Level",
      date: "2024",
      color: "from-indigo-600 to-blue-700",
      badge: "3rd Place"
    },
    {
      icon: Rocket,
      title: "IISc Bangalore Presentation",
      description: "Project Showcase at Premier Institute",
      date: "2024",
      color: "from-purple-600 to-pink-700",
      badge: "Featured"
    },
    {
      icon: Target,
      title: "BIRAC E-YUVA Programme",
      description: "Selected for Innovation Program",
      date: "2024",
      color: "from-cyan-600 to-blue-700",
      badge: "Selected"
    },
    {
      icon: Code,
      title: "5-Star C Language DSA",
      description: "HackerRank Problem Solving",
      date: "2024",
      color: "from-rose-600 to-pink-700",
      badge: "5-Star"
    },
    {
      icon: Zap,
      title: "GDSC Prize from Google",
      description: "Google Developer Student Clubs Recognition",
      date: "2024",
      color: "from-green-600 to-emerald-700",
      badge: "Winner"
    },
    {
      icon: Award,
      title: "Vishwakarma Award 2025",
      description: "3rd Round Cleared - Innovation",
      date: "2025",
      color: "from-orange-600 to-red-700",
      badge: "Qualified"
    },
    {
      icon: Star,
      title: "Dronolympics 2025 at NITJ",
      description: "Finalist - National Level",
      date: "2025",
      color: "from-teal-600 to-cyan-700",
      badge: "Finalist"
    },
    {
      icon: Medal,
      title: "Model Making Competition",
      description: "4th Position - Technical Innovation",
      date: "2024",
      color: "from-fuchsia-600 to-purple-700",
      badge: "4th Place"
    },
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} p-3 mb-4 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-xl`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm text-foreground/60 mb-3">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-primary/80 font-medium px-3 py-1 bg-primary/10 rounded-full">
                        {achievement.date}
                      </div>
                      {achievement.badge && (
                        <div className={`text-xs font-bold px-2 py-1 bg-gradient-to-r ${achievement.color} text-white rounded-full`}>
                          {achievement.badge}
                        </div>
                      )}
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




