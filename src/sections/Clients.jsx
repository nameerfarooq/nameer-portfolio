import SectionHeader from "../ui/SectionHeader";
import Marquee from "../ui/Marquee";
import { clients } from "../data/content";

function LogoTile({ name, logo }) {
  return (
    <div className="logo-tile group grid h-28 w-48 shrink-0 place-items-center rounded-[22px] border border-line/10 bg-surface px-7 transition-colors duration-500 md:h-32 md:w-60">
      <img src={logo} alt={name} title={name} loading="lazy" decoding="async" className="logo-img max-h-16 w-auto object-contain md:max-h-20" />
    </div>
  );
}

export default function Clients() {
  const half = Math.ceil(clients.length / 2);
  const rows = [clients.slice(0, half), clients.slice(half)];

  return (
    <section id="clients" className="section overflow-hidden">
      <div className="container-site">
        <SectionHeader
          index="05"
          label="Clients"
          title={"Trusted by founders\n& teams *worldwide*."}
          aside={`From Swedish agencies to solar-energy companies — ${clients.length} brands have trusted me with their products and web presence.`}
        />
      </div>

      <div className="mask-fade-x flex flex-col gap-4">
        <Marquee duration={48} gap="1rem">
          {rows[0].map((c) => (
            <LogoTile key={c.name} {...c} />
          ))}
        </Marquee>
        <Marquee duration={48} gap="1rem" reverse>
          {rows[1].map((c) => (
            <LogoTile key={c.name} {...c} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
