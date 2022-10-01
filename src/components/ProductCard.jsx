import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../reducer/Context";
import numberWithCommas from "../utils/numberWithCommas";
function ProductCard({ image01, image02, title, price, slug }) {
  const { openModal } = useGlobalContext();
  return (
    <div className="grid__product">
      <Link to={`/products/${slug}`} className="grid__product__img__box">
        <img src={image01} className="grid__product__img1" />
        <img src={image02} className="grid__product__img2" />
      </Link>
      <p>{title}</p>
      <div className="price">
        <b>${numberWithCommas(price)}</b>
        <small>${numberWithCommas(price * 0.9)}</small>
      </div>
      <button className={`shopping__btn`} onClick={() => openModal(true, slug)}>
        <div className="shopping__btn__icon">
          <i className="fa fa-shopping-cart"></i>
        </div>
        <div className="shopping__btn__text">Shop Now</div>
      </button>
    </div>
  );
}
export default ProductCard;
