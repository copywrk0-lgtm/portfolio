import { projects } from "@/data/projects";
import { SectionHead } from "@/components/ui/SectionHead";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/animation/Reveal";
export function Work(){return <section className="work" id="work"><SectionHead index="01" title="Selected work" copy="A small selection of identities translated into fast, responsive digital experiences."/><div className="work-grid">{projects.map((project,index)=><Reveal key={project.slug} className={index===0?'span-2':''}><ProjectCard project={project} index={index}/></Reveal>)}</div></section>}
