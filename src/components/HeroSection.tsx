import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/50 -skew-x-12 origin-top-right hidden lg:block" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <TrendingUp size={16} className="text-accent" />
            Senior SEO Consultant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight text-balance"
          >
            I Build Revenue-Driven{" "}
            <span className="text-accent">SEO Growth Engines</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Senior SEO Consultant helping SaaS, E-commerce, and Local businesses
            increase organic revenue — not just traffic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="cta" size="xl" asChild>
              <a href="#contact">
                Book a Strategy Call
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="cta-outline" size="xl" asChild>
              <a href="#case-studies">View Case Studies</a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8 text-sm text-muted-foreground"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">150+</span>
              Projects Delivered
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">$12M+</span>
              Revenue Generated
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">8+</span>
              Years Experience
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
