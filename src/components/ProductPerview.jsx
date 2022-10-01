import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../reducer/Context";
function ProductPerview({
  image01,
  image02,
  title,
  price,
  colors,
  size,
  slug,
  description,
}) {
  const { openModal, addToCart, cart } = useGlobalContext();
  const productInCart = cart.find((x) => x.slug == slug);
  const [amount, setAmount] = useState(1);
  const [cartAmount, setCartAmount] = useState(0);
  const [choosenColor, setChoosenColor] = useState(colors[0]);
  const [choosenSize, setChoosenSize] = useState(size[0]);
  useEffect(() => {
    setChoosenColor(colors[0]);
    setChoosenSize(size[0]);
    if (productInCart) {
      setCartAmount(productInCart.amount);
    } else {
      setCartAmount(0);
    }
    setAmount(1);
  }, [cart]);
  useEffect(() => {
    setChoosenColor(colors[0]);
    setChoosenSize(size[0]);
    if (productInCart) {
      setCartAmount(productInCart.amount);
    } else {
      setCartAmount(0);
    }
    setAmount(1);
  }, [slug]);
  const imgRef = React.useRef(null);
  const changeImage = (src) => {
    imgRef.current.src = src;
  };
  const [showAllDesc, setShowAllDesc] = useState(false);

  return (
    <>
      <div className="product__show">
        <div className="product__show__left">
          <div className="product__show__images">
            <div className="product__show__images__small">
              <img
                src={image01}
                alt={`${title}_img01`}
                onClick={(e) => changeImage(e.target.src)}
              />
              <img
                src={image02}
                alt={`${title}_img02`}
                onClick={(e) => changeImage(e.target.src)}
              />
            </div>
            <div className="product__show__images__big">
              <img src={image01} alt={`${title}_img01`} ref={imgRef} />
            </div>
          </div>
        </div>
        <div className="product__show__content">
          <h2 className="product__show__content__name">{title}</h2>
          <span className="product__show__content__price">${price}</span>
          <div className="product__show__content__colors">
            <h4>Color</h4>
            <div>
              {colors.map((color, index) => {
                return (
                  <span
                    className={`product__show__content__color ${
                      choosenColor == color ? "active" : ""
                    }`}
                    key={index}
                    style={{ background: `${color}` }}
                    onClick={() => setChoosenColor(color)}
                  ></span>
                );
              })}
            </div>
          </div>
          <div className="product__show__content__sizes">
            <h4>Size</h4>
            <div>
              {size.map((s, index) => {
                return (
                  <span
                    className={`product__show__content__size ${
                      choosenSize == s ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => setChoosenSize(s)}
                  >
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="product__show__content__controls">
            <h4>Amount</h4>
            <div>
              Total Amount: <span>{cartAmount}</span>
            </div>
            <div>
              <i
                className="fa fa-minus"
                onClick={() => setAmount(amount !== 1 ? amount - 1 : amount)}
              ></i>
              <span>{amount}</span>
              <i
                className="fa fa-plus"
                onClick={() => setAmount(amount + 1)}
              ></i>
            </div>
          </div>
          <div className="product__show__content__btns">
            <button
              className={`shopping__btn`}
              onClick={() => addToCart(slug, choosenColor, choosenSize, amount)}
            >
              <div className="shopping__btn__icon">
                <i className="fa fa-shopping-cart"></i>
              </div>
              <div className="shopping__btn__text">Add To Cart</div>
            </button>
            <Link
              to="/cart"
              className={`shopping__btn`}
              onClick={() => openModal(false, null)}
            >
              <div className="shopping__btn__icon">
                <i className="fa fa-shopping-cart"></i>
              </div>
              <div className="shopping__btn__text">Go To Cart</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="product__show__description">
        <h2>Product Description</h2>
        <p>{showAllDesc ? description : description.slice(0, 500)}.</p>
        <button className="btn" onClick={() => setShowAllDesc(!showAllDesc)}>
          {showAllDesc ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}

export default ProductPerview;
