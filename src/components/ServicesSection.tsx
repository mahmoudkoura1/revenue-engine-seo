import { motion } from "framer-motion";
import { Rocket, ShoppingCart, MapPin, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "SaaS SEO",
    description: "Scale organic acquisition with strategies built for product-led growth.",
    features: [
      "Product-led content strategy",
      "BOFU landing pages that convert",
      "Technical SEO for scalable platforms",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO",
    description: "Drive more revenue from organic search with optimized product discovery.",
    features: [
      "Category & product page optimization",
      "Faceted navigation strategy",
      "Revenue-driven keyword targeting",
    ],
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate local search and drive foot traffic with proven local strategies.",
    features: [
      "Google Business Profile optimization",
      "Local landing page creation",
      "Review & reputation growth",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Specialized SEO for Every Growth Stage
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <service.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                    <ArrowRight size={14} className="text-accent mt-1 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
