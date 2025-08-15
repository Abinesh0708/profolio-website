import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, TrendingUp } from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 85 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Java", level: 75 }
    ]
  },
  {
    category: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 95 },
      { name: "Keras", level: 88 },
      { name: "OpenCV", level: 80 }
    ]
  },
  {
    category: "Data Engineering",
    icon: Database,
    skills: [
      { name: "Apache Spark", level: 82 },
      { name: "Hadoop", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "Docker", level: 80 }
    ]
  },
  {
    category: "Analytics & Visualization",
    icon: TrendingUp,
    skills: [
      { name: "Tableau", level: 88 },
      { name: "Power BI", level: 82 },
      { name: "Matplotlib", level: 92 },
      { name: "Plotly", level: 85 },
      { name: "D3.js", level: 75 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full AI and data science stack, 
            from data collection to model deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.category}
                className="card-hover border-border bg-card/70 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {category.category}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        Core competencies and tools
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="space-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                        style={{
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "AWS Machine Learning Specialty",
              "Google Cloud Professional ML Engineer",
              "TensorFlow Developer Certificate"
            ].map((cert, index) => (
              <Card 
                key={cert}
                className="bg-card/50 border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${0.8 + (index * 0.1)}s` }}
              >
                <CardContent className="p-6 text-center">
                  <p className="font-medium text-foreground">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;