// src/pages/CategoryPage.js
import { useParams } from "react-router-dom";
import products from "../data/products";

function CategoryPage() {
  const { type } = useParams();
  const filtered = products.filter(
    (p) => p.type.toLowerCase() === type.toLowerCase()
  );

  return (
    <div className="category-page">
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
      <div className="products-grid">
        {filtered.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p>Rs. {p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
