import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiveProjectButton } from "./primitives";
import cs4a from "@/assets/cs-gulf2world-after.png";
import cs1a from "@/assets/cs-travelhub-after.png";
import csLts from "@/assets/cs-lts-after.png";
import csManohar from "@/assets/cs-manohar-after.png";
import csSurya from "@/assets/cs-suryaprakash-after.png";
import csAyish from "@/assets/cs-ayishro-after.png";
import csManha from "@/assets/cs-manha-after.png";
import csFly from "@/assets/cs-flyingbird-after.png";
import csBloss from "@/assets/cs-blossombloom-after.png";

type ProjectCard = {
  n: string;
  category: string;
  name: string;
  link: string;
  imgs: [string, string, string];
};

const projects: ProjectCard[] = [
  {
    n: "01",
    category: "Travel · Immigration",
    name: "Gulf To World",
    link: "https://gulftoworldconsultants.com/",
    imgs: [cs4a, cs1a, csLts],
  },
  {
    n: "02",
    category: "Jewellery · E-Commerce",
    name: "Manohar Jewelleries",
    link: "https://manoharjewelleries.com/",
    imgs: [csManohar, csSurya, csAyish],
  },
  {
    n: "03",
    category: "Travel · Hajj & Umrah",
    name: "Manha Hajj & Umrah",
    link: "https://manhahajjandumrah.com/",
    imgs: [csManha, csFly, csBloss],
  },
];

const Card = ({
  project,
  index,
  total,
  progress,
}: {
  project: ProjectCard;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 h-[85vh]" style={{ top: `${24 + index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col"
        // eslint-disable-next-line react/forbid-dom-props
      >
        <div className="absolute inset-0 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] -z-10" style={{ background: "#0C0C0C" }} />

        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0">
            <span
              className="font-black shrink-0"
              style={{ color: "#D7E2EA", fontSize: "clamp(2.5rem, 8vw, 110px)", lineHeight: 0.9 }}
            >
              {project.n}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-[#D7E2EA]/60 text-xs sm:text-sm uppercase tracking-widest">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase truncate"
                style={{ color: "#D7E2EA", fontSize: "clamp(1.1rem, 2.4vw, 2.4rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="shrink-0 hidden sm:block">
            <LiveProjectButton href={project.link} label="Live Project" />
          </div>
        </div>

        {/* Image grid */}
        <div className="flex-1 grid grid-cols-5 gap-3 sm:gap-4 min-h-0">
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
            <img
              src={project.imgs[0]}
              alt={`${project.name} screenshot 1`}
              loading="lazy"
              className="rounded-[28px] sm:rounded-[40px] md:rounded-[50px] object-cover w-full"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.imgs[1]}
              alt={`${project.name} screenshot 2`}
              loading="lazy"
              className="rounded-[28px] sm:rounded-[40px] md:rounded-[50px] object-cover w-full"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="col-span-3">
            <img
              src={project.imgs[2]}
              alt={`${project.name} hero screenshot`}
              loading="lazy"
              className="rounded-[28px] sm:rounded-[40px] md:rounded-[50px] object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="sm:hidden mt-4">
          <LiveProjectButton href={project.link} label="Live Project" />
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsJack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>

      <div className="max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <Card
            key={p.n}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsJack;
