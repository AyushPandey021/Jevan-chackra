import { products } from "../../Pages/data/product";
import ProductCard from "./ProductsCard";

export default function ProductList() {
  return (
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
  
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
