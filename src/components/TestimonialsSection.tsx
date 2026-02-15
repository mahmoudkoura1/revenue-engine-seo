import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The ROI from our SEO engagement has been exceptional. Organic revenue grew 340% in 12 months — a game changer for our acquisition costs.",
    name: "Sarah Chen",
    role: "VP of Marketing, SaaS Company",
  },
  {
    quote: "Finally, an SEO consultant who thinks like a business owner. Every recommendation is tied to revenue, not just rankings.",
    name: "Marcus Rivera",
    role: "CEO, E-commerce Brand",
  },
  {
    quote: "Our local leads increased 5X within 6 months. The strategy was clear, execution was flawless, and the results speak for themselves.",
    name: "David Kim",
    role: "Owner, Multi-Location Business",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 flex flex-col"
            >
              <Quote size={24} className="text-accent mb-4 shrink-0" />
              <p className="text-foreground leading-relaxed flex-1 italic">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
