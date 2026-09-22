import {Target,Eye,Factory} from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function About(){return <>
 <section className="page-hero"><div className="container"><span className="eyebrow">ABOUT US</span><h1>Manufacturing With <span>Purpose & Precision</span></h1><p>Learn more about Piyush Enterprises, our manufacturing activity, vision, mission and goals.</p></div></section>
 <section className="section"><div className="container about-detail-grid"><div className="about-detail-image"><div className="image-placeholder extra-large"><Factory size={90}/></div></div><div>
  <SectionTitle eyebrow="WHO WE ARE" title="Piyush Enterprises"/>
  <p className="body-text">Piyush Enterprises is engaged in manufacturing forging, machining and assembly parts.</p>
  <p className="body-text">The company was established in November 2009 and operates from Sajapur, Waluj MIDC, Aurangabad.</p>
  <div className="company-facts"><div><span>Established</span><strong>November 2009</strong></div><div><span>Manufacturing</span><strong>Forging, Machining & Assembly</strong></div><div><span>ISO</span><strong>ISO 9001:2015</strong></div><div><span>Annual Turnover</span><strong>₹12 Cr</strong></div></div>
 </div></div></section>
 <section className="section section-light"><div className="container vision-grid">
  <div className="vision-card"><div className="vision-icon"><Eye/></div><span className="eyebrow">OUR VISION</span><h2>Quality That Exceeds Expectations</h2><p>To facilitate quality products & services that exceeds the needs & expectations of our esteemed customers.</p></div>
  <div className="vision-card dark"><div className="vision-icon"><Target/></div><span className="eyebrow">OUR MISSION</span><h2>Long-Term Customer Relationships</h2><p>To build & maintain long term relationship with all our customers and provide exceptional & extraordinary customer services through innovative technology.</p></div>
 </div></section>
 <section className="section"><div className="container goal-section"><SectionTitle eyebrow="OUR GOAL" title="Building a Stronger Manufacturing Base" description="Our stated goal focuses on expansion, customer relationships and becoming a key player in the industry." center/>
  <div className="goal-steps"><div><span>01</span><h3>Expand</h3><p>Expansion in machined components.</p></div><div><span>02</span><h3>Develop</h3><p>Develop a strong base of key customers.</p></div><div><span>03</span><h3>Build</h3><p>Build a good reputation with customers.</p></div><div><span>04</span><h3>Grow</h3><p>Become a key player in the industry.</p></div></div>
 </div></section>
</>;}