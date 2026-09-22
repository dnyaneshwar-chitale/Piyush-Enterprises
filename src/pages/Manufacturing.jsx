import {Factory,Settings,Drill,Flame,Gauge} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import {machines} from "../data/machines";

function icon(category){if(category==="Machining")return <Settings/>;if(category==="Press")return <Gauge/>;if(category==="Welding")return <Flame/>;if(category==="Grinding")return <Drill/>;return <Factory/>;}

export default function Manufacturing(){return <>
 <section className="page-hero"><div className="container"><span className="eyebrow">MANUFACTURING</span><h1>Present <span>Manufacturing Capacity</span></h1><p>Machinery and equipment listed in the company profile.</p></div></section>
 <section className="section"><div className="container"><SectionTitle eyebrow="OUR CAPABILITY" title="Machine & Equipment" description="Our present capacity includes machining, drilling, grinding, pressing and welding equipment." center/>
 <div className="machine-grid">{machines.map(m=><div className="machine-card" key={m.id}><div className="machine-icon">{icon(m.category)}</div><div className="machine-number">{String(m.id).padStart(2,"0")}</div><h3>{m.name}</h3><p>{m.category}</p><div className="machine-count"><strong>{m.count}</strong><span>{m.count===1?"Machine":"Machines"}</span></div></div>)}</div>
 </div></section>
 <section className="manufacturing-banner"><div className="container"><div><span className="eyebrow">PRODUCTION</span><h2>Machining. Pressing. Welding. Assembly.</h2><p>A manufacturing setup designed around multiple production processes.</p></div><Factory size={100}/></div></section>
</>;}