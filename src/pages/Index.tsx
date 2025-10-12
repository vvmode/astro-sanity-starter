import { Button } from "@/components/ui/button";
import GameCard from "@/components/GameCard";
import { Gamepad2, Smartphone, Code } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import jigsawIcon from "@/assets/jigsaw-icon.jpg";
import miceIcon from "@/assets/mice-icon.jpg";

const Index = () => {
  const games = [
    {
      title: "Jigsaw Puzzles - HD Art Puzzles",
      description: "Relax and solve beautiful HD art puzzles. Choose from thousands of stunning images and challenge yourself with various difficulty levels. Perfect for puzzle enthusiasts of all ages.",
      icon: jigsawIcon,
      googlePlayUrl: "https://play.google.com",
      appStoreUrl: "https://apps.apple.com",
    },
    {
      title: "Mice Rescue",
      description: "Embark on an exciting adventure to rescue adorable mice! Navigate through challenging levels, solve puzzles, and overcome obstacles in this fun and engaging mobile game.",
      icon: miceIcon,
      googlePlayUrl: "https://play.google.com",
      appStoreUrl: "https://apps.apple.com",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header 
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 71, 92, 0.85), rgba(220, 25, 98, 0.75)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground leading-tight">
              CoralByte Studio
            </h1>
            
            <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Creating engaging mobile games and apps for iOS and Android
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Explore Our Games
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-hero opacity-20 mix-blend-overlay"></div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                Who We Are
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Passionate developers creating memorable mobile experiences
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center space-y-4 p-6 rounded-lg hover:bg-card transition-all">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Smartphone className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mobile First</h3>
                <p className="text-muted-foreground">
                  Optimized for both iOS and Android platforms
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6 rounded-lg hover:bg-card transition-all">
                <div className="w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Gamepad2 className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Fun & Engaging</h3>
                <p className="text-muted-foreground">
                  Games designed to entertain and challenge players
                </p>
              </div>
              
              <div className="text-center space-y-4 p-6 rounded-lg hover:bg-card transition-all">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto shadow-glow">
                  <Code className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Quality Code</h3>
                <p className="text-muted-foreground">
                  Built with modern technology and best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                Our Games
              </h2>
              <p className="text-xl text-muted-foreground">
                Check out our published mobile games
              </p>
            </div>
            
            <div className="space-y-6">
              {games.map((game, index) => (
                <GameCard key={index} {...game} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">CoralByte Studio</h3>
            <p className="text-muted-foreground">
              Creating innovative mobile games and apps
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CoralByte Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
