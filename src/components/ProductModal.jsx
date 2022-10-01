import React, { useState, useEffect } from "react";
import productData from "../assets/fake-data/products";
import { useGlobalContext } from "../reducer/Context";
import ProductPerview from "./ProductPerview";
function ProductModal() {
  const { showModal, openModal, modalSlug } = useGlobalContext();
  const [modalProduct, setModalProduct] = useState(
    productData.getAllProducts()[0]
  );
  useEffect(() => {
    if (modalSlug) {
      const modalProductX = productData
        .getAllProducts()
        .find((x) => x.slug == modalSlug);
      setModalProduct(modalProductX);
    }
  }, [modalSlug]);
  return (
    <div className={`product__modal ${showModal && "active"}`}>
      <div className="container">
        <div className="container product__modal__overlay">
          <div className="close__modal" onClick={() => openModal(false, null)}>
            Close Modal
          </div>
          <div className="container">
            <ProductPerview {...modalProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
