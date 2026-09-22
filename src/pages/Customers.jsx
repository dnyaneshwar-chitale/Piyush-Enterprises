import {Building2,ArrowUpRight} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import {customers} from "../data/customers";

export default function Customers(){return <>
 <section className="page-hero"><div className="container"><span className="eyebrow">OUR CUSTOMERS</span><h1>Building <span>Long-Term Relationships</span></h1><p>Customers listed in the company profile.</p></div></section>
 <section className="section"><div className="container"><SectionTitle eyebrow="CUSTOMER BASE" title="Our Customers" description="Selected customer names from the company profile." center/>
 <div className="customers-grid">{customers.map((c,i)=><div className="customer-card" key={c}><div className="customer-icon"><Building2/></div><span className="customer-number">{String(i+1).padStart(2,"0")}</span><h3>{c}</h3><ArrowUpRight className="customer-arrow" size={20}/></div>)}</div>
 </div></section>
 <section className="customer-message"><div className="container"><SectionTitle eyebrow="OUR APPROACH" title="Long-Term Customer Relationships" description="The company mission emphasizes building and maintaining long-term relationships with customers." center/></div></section>
</>;}