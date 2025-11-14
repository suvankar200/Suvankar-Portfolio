import { Card, CardContent } from "@/components/ui/card";
import { Code2, Globe, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "from-blue-600 to-indigo-700",
      skills: [
        { name: "C", level: 90 },
        { name: "C++", level: 85 },
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-emerald-600 to-teal-700",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      title: "AI & ML",
      icon: Brain,
      color: "from-violet-600 to-purple-700",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "OpenCV", level: 85 },
        { name: "ResNet50", level: 75 },
        { name: "Keras", level: 75 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-amber-600 to-orange-700",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Raspberry Pi", level: 85 },
        { name: "Arduino", level: 80 },
        { name: "IoT Systems", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Expertise
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            A diverse toolkit spanning multiple domains of modern technology
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} p-2 shadow-md`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-foreground/60">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000`}
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${skillIndex * 0.1}s`
                              }}
                            />
                          </div>
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




