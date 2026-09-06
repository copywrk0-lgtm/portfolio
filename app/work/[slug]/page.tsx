import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProject, projects } from "@/data/projects";
import { CaseStudy } from "@/components/sections/CaseStudy";

export function generateStaticParams(){ return projects.map((project)=>({slug:project.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const project=getProject(slug); if(!project) return {};
  return {title:project.title,description:project.summary};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const project=getProject(slug); if(!project) notFound();
  const index=projects.findIndex((p)=>p.slug===slug); const next=projects[(index+1)%projects.length];
  return <CaseStudy project={project} next={next}/>;
}
