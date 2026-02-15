import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Turn SEO Into Your #1 Revenue Channel?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Book a free 30-minute strategy call. I'll audit your current organic performance,
            identify the biggest revenue opportunities, and outline a clear path to growth.
          </p>
          <div className="mt-10">
            <Button variant="cta" size="xl">
              Book a Strategy Call
              <ArrowRight size={18} />
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/50">
            No commitment. No pitch deck. Just actionable insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
