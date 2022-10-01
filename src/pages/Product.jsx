import React from "react";
import { useParams } from "react-router-dom";
import productData from "../assets/fake-data/products";
import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";
import ProductPerview from "../components/ProductPerview";
function Product() {
  const SLUG = useParams().slug;
  const product = productData.getProductBySlug(SLUG);
  return (
    <Helmet title={product.title}>
      <div className="container">
        <ProductPerview {...product} />
        <div className="more__products">
          <h2 className="section__heading">More Relative</h2>
          <div className="grid__container">
            {productData.getProducts(8).map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  title={product.title}
                  image01={product.image01}
                  image02={product.image02}
                  price={product.price}
                  slug={product.slug}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default Product;
