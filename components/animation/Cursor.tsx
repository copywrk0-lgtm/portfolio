"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export function Cursor(){
 const dot=useRef<HTMLDivElement>(null);
 useEffect(()=>{
   if(!window.matchMedia('(pointer:fine)').matches || !dot.current) return;
   const el=dot.current; const x=gsap.quickTo(el,'x',{duration:.32,ease:'power3'}); const y=gsap.quickTo(el,'y',{duration:.32,ease:'power3'});
   const move=(e:MouseEvent)=>{x(e.clientX);y(e.clientY)};
   const enter=()=>el.classList.add('is-link'); const leave=()=>el.classList.remove('is-link');
   document.addEventListener('mousemove',move); const nodes=[...document.querySelectorAll('a,button,.magnetic')] as HTMLElement[]; nodes.forEach(n=>{n.addEventListener('mouseenter',enter);n.addEventListener('mouseleave',leave)});
   return()=>{document.removeEventListener('mousemove',move);nodes.forEach(n=>{n.removeEventListener('mouseenter',enter);n.removeEventListener('mouseleave',leave)})}
 },[]);
 return <div ref={dot} className="cursor" aria-hidden="true" />
}
