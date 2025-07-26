import facilityImage from "@/assets/facility-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-primary-dark font-arabic-display text-5xl font-bold mb-8">
              حول مغسلنا
            </h2>
            
            <div className="space-y-6 font-arabic-body text-lg leading-relaxed text-foreground/80">
              <p>
                نفتخر بكوننا أحد أعرق وأوثق مراكز غسيل السيارات في المغسلة. من عام الافتتاح 
                ونحن نقدم خدمات غسيل وتنظيف السيارات بأعلى معايير الجودة والاحترافية.
              </p>
              
              <p>
                يضمن فريقنا المهني المدرب تنظيفاً شاملاً لسيارتك من الداخل والخارج، باستخدام 
                أحدث المعدات والمنظفات الآمنة التي تحافظ على طلاء سيارتك ولمعانها الطبيعي.
              </p>
              
              <p>
                نوفر خدمات متنوعة تشمل الغسيل العادي، التنظيف العميق، تلميع الهيكل، تنظيف 
                الداخلية، وخدمات الحماية والعناية الخاصة لجميع أنواع السيارات.
              </p>
            </div>
          </div>
          
          {/* Facility image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl car-wash-glow">
              <img 
                src={facilityImage}
                alt="مغسلة سيارات حديثة في الليل"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;