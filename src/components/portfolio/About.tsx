import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and passion for creating intelligent solutions 
            that make a meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <div className="w-72 h-72 bg-card rounded-full flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute top-10 -left-4 animate-float">
              <Badge className="bg-primary text-primary-foreground">AI Enthusiast</Badge>
            </div>
            <div className="absolute bottom-20 -right-4 animate-float" style={{ animationDelay: '-2s' }}>
              <Badge className="bg-secondary text-secondary-foreground">Data Scientist</Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                I'm a passionate AI and Data Science student with a deep fascination for 
                machine learning algorithms and their real-world applications. My journey 
                began with curiosity about how computers can learn and make decisions, 
                leading me to pursue comprehensive studies in artificial intelligence.
              </p>
              <p className="text-lg leading-relaxed">
                Through hands-on projects and continuous learning, I've developed expertise 
                in neural networks, computer vision, natural language processing, and 
                big data analytics. I believe in the power of data-driven solutions to 
                solve complex problems and create positive impact.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card/50 border-primary/30 card-hover">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      MS in Data Science
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-secondary/30 card-hover">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-secondary/20">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      2+ Years Projects
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-primary/30 card-hover">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      AI & Machine Learning
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-secondary/30 card-hover">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-secondary/20">
                    <Heart className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Passion</h4>
                    <p className="text-sm text-muted-foreground">
                      Innovation & Impact
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Computer Vision",
                  "Natural Language Processing",
                  "Deep Reinforcement Learning",
                  "Explainable AI",
                  "Neural Architecture Search",
                  "Time Series Analysis"
                ].map((interest) => (
                  <Badge 
                    key={interest} 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;