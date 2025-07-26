import { Sparkles, ShoppingBag, Car } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "معايير عالية للجودة والتنظيم",
      description: "نتبع أعلى معايير الجودة في تنظيف السيارات"
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-primary" />,
      title: "صالة انتظار مخصصة للنساء", 
      description: "راحة وخصوصية للعائلات الكريمة"
    },
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: "عدة غرف الغسيل السيارات",
      description: "خدمة سريعة ومتعددة المستويات"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-primary-dark font-arabic-display text-5xl font-bold mb-4">
            مزايا مركز الغسيل
          </h2>
        </div>
        
        {/* Advantages grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon container */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:car-wash-glow transition-all duration-300">
                  {advantage.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-primary-dark font-arabic-display text-xl font-bold mb-3">
                {advantage.title}
              </h3>
              
              {/* Description */}
              <p className="text-foreground/70 font-arabic-body text-base leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;