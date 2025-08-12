import { products } from "../../Pages/data/product";
import ProductCard from "./ProductsCard";

export default function ProductList() {
  return (
<div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-24 mt-25">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
