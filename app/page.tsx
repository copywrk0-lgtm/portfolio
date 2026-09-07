import { Header } from "@/components/layout/Header";
import { InteractiveShowcase } from "@/components/sections/InteractiveShowcase";
import { ScrollProgress } from "@/components/animation/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <InteractiveShowcase />
    </>
  );
}
