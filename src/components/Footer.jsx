const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} Suvankar Pramanik. All rights reserved.
          </p>
          
          <p className="text-foreground/60 text-sm flex items-center gap-2">
            Designed with <span className="w-5 h-5 flex items-center justify-center text-primary font-bold text-lg">S</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




