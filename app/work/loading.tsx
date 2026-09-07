import { Header } from "@/components/layout/Header";

export default function WorkLoading(){
  return <div className="page-shell route-loading-page" aria-hidden="true">
    <Header />
    <main className="page-main">
      <section className="route-loading-hero">
        <div className="route-loading-meta"><span>01 / Work</span><span>Selected digital experiences</span></div>
        <div className="route-loading-title"><span/><span/></div>
      </section>
      <section className="route-loading-work">
        <div className="route-loading-media"/>
        <div className="route-loading-copy"><span/><span/><span/></div>
      </section>
    </main>
  </div>
}
