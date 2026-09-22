import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  return <article className="product-card">
    <div className="product-image">
      {product.image ? (
        <img src={product.image} alt={`${product.name} representative image`} loading="lazy" referrerPolicy="no-referrer" />
      ) : <div className="image-placeholder"><span>PE</span></div>}
      <span className="product-number">{String(product.id).padStart(2, "0")}</span>
      <span className="image-source-badge">Online reference</span>
    </div>
    <div className="product-content"><h3>{product.name}</h3><span className="product-arrow"><ArrowUpRight size={18}/></span></div>
  </article>;
}
