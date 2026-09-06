export function SectionHead({index,title,copy}:{index:string;title:string;copy:string}){return <div className="section-head"><span>{index} / {title}</span><p>{copy}</p></div>}
