import {ArrowRight,Factory,ShieldCheck,Settings2,Users,Phone} from "lucide-react";
import {Link} from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import {products} from "../data/products";
import {machines} from "../data/machines";

export default function Home(){
 return <>
  <section className="hero"><div className="hero-overlay"/><div className="container hero-content">
    <div className="hero-copy"><div className="hero-badge"><span/>ISO 9001:2015 CERTIFIED</div>
      <h1>Precision <span>Manufacturing</span> For Automotive Components</h1>
      <p>Forging, machining and assembly components manufactured with a focus on quality, reliability and customer requirements.</p>
      {/* <div className="hero-actions" 
       ><Link to="/products" className="btn btn-primary">Explore Products <ArrowRight size={18}/></Link><Link to="/contact" className="btn btn-outline">Contact Us</Link></div> */}
    </div>
    <div className="hero-stat-card"><span>ESTABLISHED</span><strong>2009</strong><p>Manufacturing experience in forging, machining & assembly.</p></div>
  </div><div className="hero-bottom"><div className="container hero-bottom-grid">
    <div><strong>₹12 Cr</strong><span>Annual Turnover</span></div><div><strong>17+</strong><span>Product Components</span></div><div><strong>35+</strong><span>Machines & Equipment</span></div><div><strong>2009</strong><span>Since</span></div>
  </div></div></section>

  <section className="section"><div className="container about-home-grid">
    <div className="about-image"><div className="about-image-main"><div className="image-placeholder large"><Factory size={70}/></div></div><div className="experience-card"><strong>15+</strong><span>Years of<br/>Manufacturing</span></div></div>
    <div className="about-home-content"><SectionTitle eyebrow="ABOUT PIYUSH ENTERPRISES" title="Built for Precision. Focused on Quality." description="Piyush Enterprises is engaged in manufacturing forging, machining and assembly parts."/>
      <p className="body-text">The company was established in November 2009 and operates from Sajapur, Waluj MIDC, Aurangabad.</p>
      <div className="feature-list">
       <div><ShieldCheck/><div><h4>Quality Focus</h4><p>Quality products and services focused on customer requirements.</p></div></div>
       <div><Settings2/><div><h4>Manufacturing Capability</h4><p>Forging, machining and assembly manufacturing activities.</p></div></div>
       <div><Users/><div><h4>Customer Relationships</h4><p>Focus on long-term customer relationships.</p></div></div>
      </div><Link to="/about" className="text-link">More About Us <ArrowRight size={18}/></Link>
    </div>
  </div></section>

  <section className="section section-dark"><div className="container"><div className="section-heading-row">
    <SectionTitle eyebrow="OUR PRODUCTS" title="Engineered Components" description="A range of components manufactured for automotive applications."/>
    <Link to="/products" className="btn btn-light">View All Products <ArrowRight size={18}/></Link>
  </div><div className="products-grid">{products.slice(0,6).map(p=><ProductCard key={p.id} product={p}/>)}</div></div></section>

  <section className="section capability-section"><div className="container"><SectionTitle eyebrow="MANUFACTURING CAPABILITY" title="Machinery That Supports Production" description="Our present capacity includes machining, drilling, grinding, pressing and welding equipment." center/>
   <div className="machine-mini-grid">{machines.slice(0,8).map(m=><div className="machine-mini-card" key={m.id}><span>{String(m.id).padStart(2,"0")}</span><div><h3>{m.name}</h3><p>{m.category}</p></div><strong>{m.count}</strong></div>)}</div>
   <div className="center-button"><Link to="/manufacturing" className="btn btn-primary">View Manufacturing Capacity <ArrowRight size={18}/></Link></div>
  </div></section>

  <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">LET'S WORK TOGETHER</span><h2>Looking for a reliable manufacturing partner?</h2></div><Link to="/contact" className="btn btn-primary"><Phone size={18}/>Contact Us</Link></div></section>
 </>;
}