import { products } from "../../Pages/data/product";
import ProductCard from "./ProductsCard";

export default function ProductList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
