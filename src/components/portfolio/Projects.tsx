import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Brain, Database, BarChart3, Bot } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Neural Network Classifier",
    description: "Deep learning model for image classification using TensorFlow and Keras with 95% accuracy on CIFAR-10 dataset.",
    image: "🧠",
    icon: Brain,
    technologies: ["Python", "TensorFlow", "Keras", "CNN"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Stock Price Predictor",
    description: "LSTM-based model for predicting stock prices with interactive visualization dashboard.",
    image: "📈",
    icon: BarChart3,
    technologies: ["Python", "LSTM", "Pandas", "Plotly"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Chatbot with NLP",
    description: "Intelligent chatbot using transformer models and natural language processing for customer support.",
    image: "🤖",
    icon: Bot,
    technologies: ["Python", "Transformers", "NLTK", "Flask"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Big Data Analytics",
    description: "Large-scale data processing pipeline using Apache Spark for real-time analytics.",
    image: "📊",
    icon: Database,
    technologies: ["Spark", "Scala", "Kafka", "Hadoop"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of AI and machine learning projects showcasing technical expertise 
            and problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.id} 
                className={`
                  card-hover border-border bg-card/50 backdrop-blur-sm
                  ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
                  animate-fade-in-up
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/20">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-foreground">
                          {project.title}
                        </CardTitle>
                        {project.featured && (
                          <Badge variant="secondary" className="mt-1">Featured</Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-3xl">{project.image}</div>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center space-x-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex items-center space-x-2 bg-primary hover:bg-primary-glow text-primary-foreground"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;