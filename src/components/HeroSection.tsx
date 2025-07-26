import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroCarImage from "@/assets/hero-car.jpg";
import Header from "./Header";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Background with diagonal split */}
      <div className="relative h-screen">
        {/* Blue diagonal background */}
        <div className="absolute inset-0 hero-gradient diagonal-split"></div>
        
        {/* White bottom section */}
        <div className="absolute inset-0 bg-white" style={{ clipPath: 'polygon(0 85%, 100% 70%, 100% 100%, 0 100%)' }}></div>
        
        {/* Car image positioned strategically */}
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 z-10">
          <img 
            src={heroCarImage} 
            alt="سيارة مرسيدس بيضاء مغطاة بالرغوة"
            className="w-full h-full object-cover object-center opacity-90"
          />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-20 container mx-auto px-6 pt-24 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            {/* Main heading */}
            <h1 className="text-white font-arabic-display text-6xl font-bold leading-tight mb-6">
              اغسل سيارتك
              <br />
              بكل سهولة
            </h1>
            
            {/* Subheading question */}
            <p className="text-white/90 font-arabic-body text-xl mb-12">
              هل لديك سيارة في المغسلة؟
            </p>
            
            {/* Input and button section */}
            <div className="flex gap-4 max-w-md">
              <Button 
                className="bg-primary hover:bg-primary-light text-white font-arabic-body font-semibold px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                نحقق
              </Button>
              <Input 
                placeholder="للمزيد منا"
                className="flex-1 bg-white/95 border-0 font-arabic-body text-right placeholder:text-muted-foreground rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Crystal Clean logo reflection on car */}
        <div className="absolute bottom-32 right-32 z-30 opacity-30">
          <div className="text-white/40 font-arabic-display text-lg font-bold transform rotate-12">
            CRYSTAL CLEAN
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;