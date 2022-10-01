import React from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import { useGlobalContext } from "../reducer/Context";
import numberWithCommas from "../utils/numberWithCommas";

function Cart() {
  const {
    cart,
    amount,
    total,
    decProduct,
    incProduct,
    delProduct,
    clearCart,
    haveAcount,
    user,
  } = useGlobalContext();
  const orderNow = () => {
    if (haveAcount === "true") {
      alert("Your Made It 🤩");
      clearCart();
      Notification.requestPermission().then((perm) => {
        if (perm === "granted") {
          new Notification("Your Order Have Been Taken Successfully", {
            body: `We Have Send You An Email To This Email ${user.email} ,Check Your Email Please!`,
            icon: "../assets/images/favicon.png",
          });
        }
      });
    } else {
      window.location.pathname = "/profile";
    }
  };
  return (
    <Helmet title="Cart" className="cart">
      <h2 className="section__heading">Your Cart</h2>
      <div
        className={`container cart__container ${
          cart.length <= 0 ? "container__error" : ""
        }`}
      >
        {cart.length > 0 ? (
          <div className="cart__products">
            {cart.map((product, index) => {
              return (
                <div key={index} className="cart__product">
                  <div className="cart__product__info">
                    <Link to={`/products/${product.slug}`}>
                      <img src={product.image02} alt="" />
                    </Link>
                    <div>
                      <h4>{product.title}</h4>
                      <p>
                        {`(${product.choosenColor.join(
                          ","
                        )})-(${product.choosenSize.join(",")})`}
                      </p>
                      <p className="cart__product__control__price">
                        ${numberWithCommas(product.price)}
                      </p>
                    </div>
                  </div>
                  <div className="cart__product__control">
                    <div className="cart__product__control__qty">
                      <i
                        className="fa fa-minus"
                        onClick={() => decProduct(product.slug)}
                      ></i>
                      <span>{product.amount}</span>
                      <i
                        className="fa fa-plus"
                        onClick={() => incProduct(product.slug)}
                      ></i>
                    </div>
                    <i
                      className="cart__product__delete fa fa-trash"
                      onClick={() => delProduct(product.slug)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="error">
            <h1>Your Cart Is Empty!!</h1>{" "}
            <Link to={"/products"} className="btn">
              Go Shop
            </Link>
          </div>
        )}
        {cart.length > 0 && (
          <div className="cart__checkout">
            <div className="cart__checkout__total">
              <div className="cart__checkout__total__amount">
                Total Products: <span>{amount} Products</span>
              </div>
              <div className="cart__checkout__total__price">
                Total Price: <span>${numberWithCommas(total)}</span>
              </div>
            </div>
            <button
              className="cart__checkout__checkout btn"
              onClick={() => orderNow()}
            >
              Order Now
            </button>
            <button
              className="cart__checkout__remove btn"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
            <div className="back__shop">
              <Link to={"/products"}>Back To Shop</Link>
            </div>
          </div>
        )}
      </div>
    </Helmet>
  );
}

export default Cart;
