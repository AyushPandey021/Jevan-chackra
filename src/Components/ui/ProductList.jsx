import { products } from "../../Pages/data/product";
import ProductCard from "./ProductsCard";

export default function ProductList() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-1 p-24">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
