import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  icon: string;
  googlePlayUrl: string;
  appStoreUrl: string;
}

const GameCard = ({ title, description, icon, googlePlayUrl, appStoreUrl }: GameCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-glow transition-all duration-300 border-border/50">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="shrink-0">
            <img
              src={icon}
              alt={`${title} app icon`}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl shadow-card group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="group/btn"
              >
                <a 
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${title} on Google Play`}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  Google Play
                </a>
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="group/btn"
              >
                <a 
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${title} on App Store`}
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  App Store
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
