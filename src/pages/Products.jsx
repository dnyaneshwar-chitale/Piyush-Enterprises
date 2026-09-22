import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products(){
  return <>
    <section className="page-hero"><div className="container">
      <span className="eyebrow">OUR PRODUCTS</span>
      <h1>Precision <span>Automotive Components</span></h1>
      <p>Machining and press components listed in the Piyush Enterprises company profile.</p>
    </div></section>

    <section className="section section-dark">
      <div className="container">
        <SectionTitle eyebrow="PRODUCT RANGE" title="17 Component Categories" description="The product names below are taken from the supplied company profile. Online visuals are representative reference images and may not be the exact Piyush Enterprises part photograph." center />
        <div className="products-grid products-page-grid">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  </>;
}
