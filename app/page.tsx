import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Capabilities } from "@/components/sections/Capabilities";
import { Process } from "@/components/sections/Process";
import { Manifesto } from "@/components/sections/Manifesto";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/animation/ScrollProgress";

export default function Home() {
  return <>
    <ScrollProgress />
    <Header />
    <main><Hero /><Work /><Manifesto /><Capabilities /><Process /><Contact /></main>
    <Footer />
  </>;
}
