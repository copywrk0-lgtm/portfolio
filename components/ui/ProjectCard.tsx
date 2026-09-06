"use client";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ParallaxImage } from "@/components/animation/ParallaxImage";
export function ProjectCard({project,index}:{project:Project;index:number}){
 return <article className={`project-card ${index===0?'project-card--wide':''}`}>
   <Link className="project-media" href={`/work/${project.slug}`}>
    <ParallaxImage src={project.cover} alt={`${project.title} project preview`} priority={index===0}/>
    <span className="project-index">0{index+1}</span><span className="project-hover">View case study ↗</span>
   </Link>
   <div className="project-meta"><div><h3>{project.title}</h3><p>{project.sector}</p></div><div className="project-meta-right"><span>{project.services.join(' · ')}</span>{project.liveUrl&&<a href={project.liveUrl} target="_blank" rel="noreferrer">Visit live site ↗</a>}</div></div>
 </article>
}
