import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation Menu */}
        <nav className="flex items-center gap-8">
          <a href="#" className="text-white font-arabic-body text-sm hover:text-primary-light transition-colors">
            الرئيسية
          </a>
          <a href="#about" className="text-white font-arabic-body text-sm hover:text-primary-light transition-colors">
            عن هنا
          </a>
          <a href="#" className="text-white font-arabic-body text-sm hover:text-primary-light transition-colors">
            يعرفنا
          </a>
        </nav>

        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white font-arabic-display text-2xl font-bold tracking-wide">
            CRYSTAL CLEAN
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;