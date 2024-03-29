import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productActions";
import ProductComponent from "./ProductComponent";

  const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
   const dispatch = useDispatch();
//   const fetchProducts = async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(setProducts(response.data));
//   };

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductPage;