import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2025 Suvankar Pramanik. All rights reserved.
          </p>
          
          <p className="text-foreground/60 text-sm flex items-center gap-2">
            Designed with <Heart className="w-4 h-4 text-primary fill-primary" /> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




