import { motion } from "framer-motion";

const tools = ["GA4", "Google Search Console", "Ahrefs", "Screaming Frog", "SEMrush", "Looker Studio", "BigQuery"];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
              Senior-Level SEO, Embedded in Your Growth Team
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With 8+ years of hands-on experience across SaaS, e-commerce, and local businesses,
                I've helped companies generate over $12M in organic revenue. I don't just audit —
                I build, execute, and iterate.
              </p>
              <p>
                I work directly with engineering, product, and marketing teams to integrate SEO into
                the core growth engine. From technical architecture to content strategy to conversion
                optimization — I own the full funnel.
              </p>
              <p>
                My approach is simple: focus on the pages and keywords that drive revenue. Cut the
                noise. Ship fast. Measure everything.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-6">Tools & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-card border border-border text-foreground text-sm font-medium px-4 py-2 rounded-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">How I Work</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    Audit & uncover the biggest revenue opportunities
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    Build a prioritized 90-day execution roadmap
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    Execute, measure, iterate — weekly reporting
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
