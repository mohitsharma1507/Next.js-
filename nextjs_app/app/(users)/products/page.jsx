"use client";
import { useSearchParams } from "next/navigation";

//Server Component
// const Products = async ({ searchParams }) => {
//   const searchParam = await searchParams;

//   const category = searchParam?.category || "all";
//   const sort = searchParam?.sort || "default";
//   const page = searchParam?.page || 1;

//   return (
//     <div>
//       Showing {category} products,sorted by {sort} ,page{page}
//     </div>
//   );
// };

// export default Products;

//Client Component

const ProductList = () => {
  const searchParams = useSearchParams();

  const pages = searchParams.get("page");
  const category = searchParams.get("categorty");
  return (
    <>
      <h1>Client</h1>
    </>
  );
};

export default ProductList;
