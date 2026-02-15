import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    category: "SaaS",
    title: "B2B SaaS Platform — 340% Organic Revenue Growth",
    problem: "Low organic visibility with high dependency on paid acquisition. Content existed but wasn't ranking or converting.",
    strategy: "Rebuilt site architecture, created BOFU comparison and alternative pages, optimized technical SEO for crawlability.",
    execution: "Deployed 45+ high-intent landing pages, fixed 200+ technical issues, built internal linking architecture.",
    results: [
      { metric: "+340%", label: "Organic Revenue" },
      { metric: "+520%", label: "Organic Traffic" },
      { metric: "+180%", label: "MQL from SEO" },
    ],
  },
  {
    category: "E-commerce",
    title: "DTC E-commerce Brand — $2.4M Additional Revenue",
    problem: "Category pages weren't ranking. Product pages had thin content and duplicate meta data across 5,000+ SKUs.",
    strategy: "Overhauled category taxonomy, implemented dynamic content templates, fixed faceted navigation indexation issues.",
    execution: "Optimized 120 category pages, deployed schema markup, created buying guide content hub.",
    results: [
      { metric: "+280%", label: "Organic Revenue" },
      { metric: "+190%", label: "Category Rankings" },
      { metric: "-45%", label: "Bounce Rate" },
    ],
  },
  {
    category: "Local",
    title: "Multi-Location Service Business — 5X Lead Volume",
    problem: "Invisible in local pack results. No local landing pages, inconsistent NAP data, few reviews.",
    strategy: "Built local landing page framework, optimized GBP profiles, launched review generation campaign.",
    execution: "Created 25 local pages, fixed citations across 50+ directories, implemented local schema.",
    results: [
      { metric: "+400%", label: "Local Pack Visibility" },
      { metric: "+500%", label: "Inbound Leads" },
      { metric: "+320%", label: "Google Reviews" },
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Real Results. Measurable Impact.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 lg:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-1">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                    {cs.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">{cs.title}</h3>

                  <div className="grid sm:grid-cols-3 gap-6 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Problem</p>
                      <p className="text-muted-foreground leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Strategy</p>
                      <p className="text-muted-foreground leading-relaxed">{cs.strategy}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Execution</p>
                      <p className="text-muted-foreground leading-relaxed">{cs.execution}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-72 shrink-0 bg-secondary rounded-xl p-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <TrendingUp size={14} className="text-accent" />
                    Results
                  </p>
                  <div className="space-y-4">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <span className="text-2xl font-bold text-foreground">{r.metric}</span>
                        <p className="text-sm text-muted-foreground">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
