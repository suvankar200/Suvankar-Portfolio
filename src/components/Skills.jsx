import { Card, CardContent } from "@/components/ui/card";
import { Code2, Globe, Brain, Wrench, BarChart3 } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-blue-600 to-indigo-700",
      skills: [
        { name: "Python", level: 92, badge: "Expert" },
        { name: "C", level: 90, badge: "5-Star" },
        { name: "C++", level: 85, badge: "Advanced" },
        { name: "Java", level: 80, badge: "Proficient" },
        { name: "JavaScript", level: 85, badge: "Advanced" },
      ],
    },
    {
      title: "Data Science",
      icon: BarChart3,
      color: "from-fuchsia-600 to-purple-700",
      skills: [
        { name: "Pandas", level: 90, badge: "Expert" },
        { name: "NumPy", level: 88, badge: "Advanced" },
        { name: "Matplotlib", level: 85, badge: "Advanced" },
        { name: "Seaborn", level: 82, badge: "Proficient" },
        { name: "Data Analysis", level: 88, badge: "Advanced" },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-emerald-600 to-teal-700",
      skills: [
        { name: "React.js", level: 88, badge: "Advanced" },
        { name: "Node.js", level: 82, badge: "Proficient" },
        { name: "Express.js", level: 80, badge: "Proficient" },
        { name: "MongoDB", level: 78, badge: "Intermediate" },
        { name: "HTML/CSS", level: 90, badge: "Expert" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-violet-600 to-purple-700",
      skills: [
        { name: "TensorFlow", level: 85, badge: "Advanced" },
        { name: "OpenCV", level: 88, badge: "Advanced" },
        { name: "Scikit-learn", level: 82, badge: "Proficient" },
        { name: "ResNet50", level: 80, badge: "Proficient" },
        { name: "ML Models", level: 85, badge: "Advanced" },
      ],
    },
    {
      title: "Database & Tools",
      icon: Wrench,
      color: "from-amber-600 to-orange-700",
      skills: [
        { name: "MySQL", level: 85, badge: "Advanced" },
        { name: "MongoDB", level: 80, badge: "Proficient" },
        { name: "Git & GitHub", level: 90, badge: "Expert" },
        { name: "DSA", level: 85, badge: "Advanced" },
        { name: "Docker", level: 78, badge: "Proficient" },
      ],
    },
    {
      title: "Hardware & IoT",
      icon: Wrench,
      color: "from-cyan-600 to-blue-700",
      skills: [
        { name: "Raspberry Pi", level: 90, badge: "Expert" },
        { name: "ESP32", level: 85, badge: "Advanced" },
        { name: "Arduino", level: 82, badge: "Proficient" },
        { name: "IoT Systems", level: 88, badge: "Advanced" },
        { name: "Sensors", level: 85, badge: "Advanced" },
      ],
    },
    {
      title: "Soft Skills",
      icon: Brain,
      color: "from-rose-600 to-pink-700",
      skills: [
        { name: "Problem Solving", level: 92, badge: "Expert" },
        { name: "Team Leadership", level: 88, badge: "Advanced" },
        { name: "Communication", level: 85, badge: "Advanced" },
        { name: "Project Management", level: 82, badge: "Proficient" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            From competitive programming to AI/ML and full-stack development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-2.5 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-1.5 px-3 py-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors group/skill">
                          <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">{skill.name}</span>
                        </div>
                      ))}
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

export default Skills;




