import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen hero-section neural-grid flex items-center justify-center relative">
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading with gradient text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">AI & Data Science</span>
              <br />
              <span className="text-foreground">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about leveraging artificial intelligence and machine learning 
              to solve complex problems and create intelligent solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-effect"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-all duration-300 hover:scale-110 glow-effect"
            >
              <Github className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-all duration-300 hover:scale-110 glow-effect"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-card hover:bg-card-hover transition-all duration-300 hover:scale-110 glow-effect"
            >
              <Mail className="w-6 h-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
    </section>
  );
};

export default Hero;