import {MapPin,Phone,Mail,Clock,ArrowUpRight} from "lucide-react";

export default function Contact(){return <>
 <section className="page-hero"><div className="container"><span className="eyebrow">CONTACT US</span><h1>Let's Talk <span>Manufacturing</span></h1><p>Get in touch with Piyush Enterprises for business enquiries.</p></div></section>
 <section className="section"><div className="container contact-grid"><div><span className="eyebrow">GET IN TOUCH</span><h2 className="contact-title">Start a Conversation</h2><p className="body-text">For enquiries related to manufacturing, components or business requirements, contact us using the details below.</p>
 <div className="contact-items">
  <div className="contact-item"><div className="contact-icon"><MapPin/></div><div><span>Address</span><p>Gut No. 53, Plot No. 30P, Sajapur, Waluj MIDC, Aurangabad</p></div></div>
  <div className="contact-item"><div className="contact-icon"><Phone/></div><div><span>Phone</span><a href="tel:+918237011691">+91 8237011691</a></div></div>
  <div className="contact-item"><div className="contact-icon"><Mail/></div><div><span>Email</span><a href="mailto:chitalepiyushent@gmail.com">chitalepiyushent@gmail.com</a></div></div>
  <div className="contact-item"><div className="contact-icon"><Clock/></div><div><span>Business Information</span><p>Manufacturing activity: Forging, Machining & Assembly</p></div></div>
 </div></div>
 <div className="contact-card"><span className="eyebrow">PIYUSH ENTERPRISES</span><h2>Visit Our Manufacturing Location</h2><p>Gut No. 53, Plot No. 30P, Sajapur, Waluj MIDC, Aurangabad.</p>
 <a href="https://www.google.com/maps/search/?api=1&query=Gut+No+53+Plot+No+30P+Sajapur+Waluj+MIDC+Aurangabad" target="_blank" rel="noreferrer" className="btn btn-primary">Get Directions <ArrowUpRight size={18}/></a>
 <a href="tel:+918237011691" className="contact-phone-btn"><Phone size={18}/>+91 8237011691</a></div>
 </div></section>
 <section className="contact-cta"><div className="container"><h2>Have a manufacturing requirement?</h2><a href="mailto:chitalepiyushent@gmail.com" className="btn btn-primary">Email Us <Mail size={18}/></a></div></section>
</>;}