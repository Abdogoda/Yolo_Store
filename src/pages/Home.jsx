import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import heroSliderData from "../assets/fake-data/hero-slider";
import policy from "../assets/fake-data/policy";
import productData from "../assets/fake-data/products";
import banner from "../assets/images/banner.png";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
function Home() {
  const [heroIndex, setHeroIndex] = useState(1);
  const prevSlide = () => {
    setHeroIndex(heroIndex <= 1 ? heroSliderData.length : heroIndex - 1);
  };
  const nextSlide = () => {
    setHeroIndex(heroIndex >= 3 ? 1 : heroIndex + 1);
  };
  useEffect(() => {
    const slideAuto = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(slideAuto);
    };
  }, [nextSlide]);
  return (
    <Helmet title="Home" className="home">
      <div className="home__landing">
        <div className="container">
          {
            <div className="home__slider" key={heroIndex}>
              <div className="home__slider__content">
                <h2 className={`${heroSliderData[heroIndex - 1].color}-color`}>
                  {heroSliderData[heroIndex - 1].title}
                </h2>
                <p>{heroSliderData[heroIndex - 1].description}</p>
                <Link
                  to={heroSliderData[heroIndex - 1].path}
                  className={`shopping__btn ${
                    heroSliderData[heroIndex - 1].color
                  }-bg color-white`}
                >
                  <div className="shopping__btn__icon">
                    <i className="fa fa-shopping-cart"></i>
                  </div>
                  <div className="shopping__btn__text">Order Now</div>
                </Link>
              </div>
              <div
                className="home__slider__image"
                style={{ "--col": `${heroSliderData[heroIndex - 1].color}` }}
              >
                <img
                  src={heroSliderData[heroIndex - 1].img}
                  alt={heroSliderData[heroIndex - 1].title}
                />
              </div>
            </div>
          }
          <div className="hero__controls">
            <i
              className="hero__controls__icon fa fa-arrow-left"
              onClick={prevSlide}
            ></i>
            <span>
              {heroIndex} / {heroSliderData.length}
            </span>
            <i
              className="hero__controls__icon fa fa-arrow-right"
              onClick={nextSlide}
            ></i>
          </div>
        </div>
      </div>
      <div className="home__policy">
        <div className="container grid__container">
          {policy.map((item, index) => {
            return (
              <div className="policy__box" key={index}>
                <i className={`policy__box__icon ${item.icon}`}></i>
                <div className="policy__box__content">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <section className="grid__products">
        <h2 className="section__heading">Best Selling</h2>
        <div className="container grid__container">
          {productData.getProducts(4).map((product, index) => {
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
      </section>
      <section className="grid__products">
        <h2 className="section__heading">New Arrival</h2>
        <div className="container grid__container">
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
      </section>
      <section className="home__banner">
        <div className="container">
          <Link to={"/products"}>
            <img src={banner} alt="banner" />
          </Link>
        </div>
      </section>
      <section className="grid__products">
        <h2 className="section__heading">Pupolar Products</h2>
        <div className="container grid__container">
          {productData.getProducts(12).map((product, index) => {
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
      </section>
    </Helmet>
  );
}

export default Home;
