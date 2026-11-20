import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import SpotlightCard from "../ui/SpotlightCard";
import Reveal from "../ui/Reveal";
import { skillGroups } from "../data/content";
import { EASE_OUT } from "../ui/motion";
import cn from "../lib/cn";

const LAYOUT = {
  frontend: "lg:col-span-7 lg:row-span-2",
  backend: "lg:col-span-5",
  web3: "lg:col-span-5",
  design: "lg:col-span-6",
  tooling: "lg:col-span-6",
};

function SkillChip({ name, icon: Icon, color, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.03, ease: EASE_OUT }}
    >
      <span
        style={color ? { "--brand": color } : undefined}
        className="group/chip inline-flex items-center gap-2.5 rounded-full border border-line/10 bg-bg/40 py-2 pl-2.5 pr-4 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-line/30 hover:bg-bg/80"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-fg/[0.06] transition-colors duration-300">
          <Icon
            aria-hidden="true"
            className={cn("text-[15px] text-muted transition-colors duration-300", color ? "group-hover/chip:text-[var(--brand)]" : "group-hover/chip:text-fg")}
          />
        </span>
        <span className="whitespace-nowrap">{name}</span>
      </span>
    </motion.li>
  );
}

export default function Skills() {
  const total = skillGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <section id="skills" className="section">
      <div className="container-site">
        <SectionHeader
          index="02"
          label="Toolbox"
          title={"The tools I use to\n*ship* great products."}
          aside={
            <>
              <span className="display block text-6xl text-fg">{total}+</span>
              technologies across the stack — hover a chip to see its true colours.
            </>
          }
        />

        <div className="grid gap-4 lg:grid-cols-12">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} className={LAYOUT[group.id]} delay={gi * 0.06}>
              <SpotlightCard className="h-full">
                <div className="flex h-full flex-col p-7 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{group.title}</h3>
                      <p className="mt-1.5 text-sm text-muted">{group.blurb}</p>
                    </div>
                    <span className="font-mono text-xs text-subtle">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <SkillChip key={item.name} {...item} index={i} />
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
