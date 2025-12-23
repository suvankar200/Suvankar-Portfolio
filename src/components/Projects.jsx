import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Sprout, Plane, Film, Utensils, Leaf, Zap, Play, Code } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Electronic Tongue ⚡",
      icon: Zap,
      description: "Intelligent sensing system mimicking human taste detection using AI and chemical sensors",
      fullDescription: "The Electronic Tongue (E-Tongue) is an intelligent sensing system designed to mimic the human tongue's ability to detect and differentiate tastes using advanced sensor technology and pattern recognition algorithms. The system consists of an array of non-specific, cross-sensitive chemical sensors combined with machine learning models to analyze liquid samples and classify taste profiles such as sweet, sour, salty, bitter, and umami. This technology finds applications in food quality control, beverage authentication, pharmaceutical formulation testing, and environmental monitoring.",
      tech: ["Python", "Machine Learning", "Chemical Sensors", "Pattern Recognition", "IoT"],
      live: "https://drive.google.com/file/d/14JNSrafEydMtt56Y7c85_axSDzcO6cu1/preview",
      isVideo: true,
      isGoogleDrive: true,
      color: "from-cyan-600 to-blue-700",
    },
    {
      title: "AgriDrive 🌾",
      icon: Sprout,
      description: "AI-powered agricultural automation system integrating drone and bot technologies",
      fullDescription: "AgriDrive is a comprehensive agricultural automation system that integrates drone and bot technologies to analyze plant health and automate irrigation. The system uses computer vision and machine learning to detect diseases and optimize water usage.",
      tech: ["Python", "TensorFlow", "Raspberry Pi", "OpenCV", "React.js"],
      live: "https://drive.google.com/file/d/1D2BhxDbeY0g6ua3fXIo9ePSugMmMmLw1/preview",
      isVideo: true,
      isGoogleDrive: true,
      color: "from-emerald-600 to-green-700",
    },
    {
      title: "ET Sensing Drone 🚁",
      icon: Plane,
      description: "Drone system measuring Evapotranspiration using environmental data",
      fullDescription: "Advanced drone system that measures Evapotranspiration using real-time environmental data for smart irrigation. Helps farmers optimize water usage and improve crop yields through data-driven decisions.",
      tech: ["DroneKit", "Python", "IoT Sensors"],
      live: "https://drive.google.com/file/d/1aqAdYO7DKxa7FANujitJYQnZpzbgm2f_/preview",
      isVideo: true,
      isGoogleDrive: true,
      color: "from-sky-600 to-blue-700",
    },
    {
      title: "Movie Recommendation System 🎬",
      icon: Film,
      description: "ML-powered web app for personalized movie recommendations",
      fullDescription: "A machine learning powered web application that provides personalized movie recommendations based on user preferences, viewing history, and collaborative filtering algorithms.",
      tech: ["Vite", "Express.js", "SQLite", "Node.js", "ML"],
      github: "https://github.com/suvankar200/Movie_Recomendation_DSA.git",
      color: "from-violet-600 to-purple-700",
    },
    {
      title: "FoodCount System 🍽️",
      icon: Utensils,
      description: "Smart food coupon management and weather-adaptive dining platform",
      fullDescription: "Intelligent food coupon management system with weather-adaptive dining recommendations. Helps cafeterias and dining halls manage resources efficiently while providing personalized meal suggestions.",
      tech: ["HTML", "CSS", "JavaScript", "ScriptBolt"],
      github: "https://github.com/suvankar200/DA-Mini-Project-Food-Court-Management-System.git",
      live: "https://da-mini-project-food-court-management-system.vercel.app/",
      color: "from-amber-600 to-orange-700",
    },
    {
      title: "Agridrive Website 🌱",
      icon: Leaf,
      description: "Real-time plant analysis system with TensorFlow integration",
      fullDescription: "Real-time plant analysis system connected with a Raspberry Pi camera and TensorFlow model using ResNet50 architecture. Provides instant disease detection and treatment recommendations for farmers.",
      tech: ["MERN Stack", "ResNet50", "MongoDB", "TensorFlow"],
      github: "https://github.com/suvankar200/agridrive.git",
      live: "https://agridrive.vercel.app/",
      color: "from-teal-600 to-emerald-700",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Innovative solutions at the intersection of AI, robotics, and web development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group cursor-pointer hover:-translate-y-2"
                  onClick={() => setSelectedProject(index)}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-3 mb-4 group-hover:scale-110 transition-transform shadow-lg group-hover:shadow-xl`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/60 line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 hover:bg-primary/10 hover:border-primary transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, "_blank");
                          }}
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.live && (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 hover:bg-primary/10 hover:border-primary transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.isVideo) {
                              setSelectedProject(index);
                            } else {
                              window.open(project.live, "_blank");
                            }
                          }}
                        >
                          {project.isVideo ? (
                            <><Play className="w-4 h-4 mr-1" />Demo</>
                          ) : (
                            <><ExternalLink className="w-4 h-4 mr-1" />Live</>
                          )}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${projects[selectedProject].color} p-2.5 shadow-lg`}>
                    {(() => {
                      const Icon = projects[selectedProject].icon;
                      return <Icon className="w-full h-full text-white" />;
                    })()}
                  </div>
                  {projects[selectedProject].title}
                </DialogTitle>
                <DialogDescription className="text-base pt-4">
                  {projects[selectedProject].fullDescription}
                </DialogDescription>
              </DialogHeader>
              
              {/* Video Player */}
              {projects[selectedProject].isVideo && projects[selectedProject].live && (
                <div className="relative bg-black rounded-lg overflow-hidden aspect-video shadow-2xl">
                  {projects[selectedProject].isGoogleDrive ? (
                    <iframe 
                      src={projects[selectedProject].live}
                      className="w-full h-full"
                      allow="autoplay"
                      allowFullScreen
                    />
                  ) : (
                    <video 
                      controls 
                      className="w-full h-full"
                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%23000' width='800' height='450'/%3E%3C/svg%3E"
                    >
                      <source src={projects[selectedProject].live} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 text-lg flex items-center gap-2">
                    <Code className="w-5 h-5 text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tech.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-sm hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {projects[selectedProject].github && (
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
                      onClick={() => window.open(projects[selectedProject].github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  )}
                  {projects[selectedProject].live && !projects[selectedProject].isVideo && (
                    <Button 
                      className="flex-1 border-primary/30 hover:bg-primary/10 transition-all hover:scale-105"
                      variant="outline"
                      onClick={() => window.open(projects[selectedProject].live, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;




