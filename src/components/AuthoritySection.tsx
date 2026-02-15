import { motion } from "framer-motion";
import { Target, BarChart3, Layers } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Revenue-First SEO",
    description:
      "Every strategy is built around driving measurable revenue, not vanity metrics. I focus on the keywords and pages that convert.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "No guesswork. Every recommendation is backed by data from GA4, Search Console, and competitive analysis to ensure predictable growth.",
  },
  {
    icon: Layers,
    title: "Technical + Content + CRO",
    description:
      "SEO doesn't work in a silo. I integrate technical foundations, strategic content, and conversion rate optimization into one cohesive engine.",
  },
];

const AuthoritySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            SEO That Moves the Revenue Needle
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Most SEO strategies chase rankings. Mine are engineered to drive pipeline, close deals, and grow revenue.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-5">
                <pillar.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
