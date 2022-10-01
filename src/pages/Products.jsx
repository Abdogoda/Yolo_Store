import React from "react";
import Helmet from "../components/Helmet";
import productData from "../assets/fake-data/products";
import ProductCard from "../components/ProductCard";
import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/colors";
import CheckBox from "../components/CheckBox";
import size from "../assets/fake-data/size";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { BsFilterCircleFill } from "react-icons/bs";
function Products() {
  const initailFilter = {
    category: [],
    color: [],
    size: [],
  };
  const productList = productData.getAllProducts();
  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initailFilter);
  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            color: [...filter.color, item.color],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size],
          });
          break;
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
      }
    }
  };
  const updatedProducts = useCallback(() => {
    let temp = productList;
    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter, setProducts]);
  useEffect(() => {
    updatedProducts();
  }, [updatedProducts]);
  const filterRef = useRef(null);
  const showHideFilter = () => {
    filterRef.current.classList.toggle("active");
  };
  // search
  const searchValue = React.useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchProduct = () => {
    const newp = productList.filter((pro) => {
      if (pro.title.includes(searchValue.current.value)) {
        return pro;
      }
    });
    setProducts(newp);
  };
  return (
    <Helmet title="Products" className="products">
      <div className="container products__container">
        <div className="products__filter" ref={filterRef}>
          <i
            className="fa fa-arrow-left products__filter__close"
            onClick={() => showHideFilter()}
          ></i>
          <div className="products__filter__widget search__widget">
            <i className="fa fa-search"></i>
            <input
              type="text"
              placeholder="Search..."
              id="search"
              ref={searchValue}
              onChange={searchProduct}
            />
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__title">
              Sort By Category
            </div>
            <div className="products__filter__widget__content">
              {category.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="products__filter__widget__content__item"
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("CATEGORY", input.checked, item)
                      }
                      checked={filter.category.includes(item.categorySlug)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__title">Sort By Color</div>
            <div className="products__filter__widget__content">
              {colors.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="products__filter__widget__content__item"
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("COLOR", input.checked, item)
                      }
                      checked={filter.color.includes(item.color)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__title">Sort By Size</div>
            <div className="products__filter__widget__content">
              {size.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="products__filter__widget__content__item"
                  >
                    <CheckBox
                      label={item.display}
                      onChange={(input) =>
                        filterSelect("SIZE", input.checked, item)
                      }
                      checked={filter.size.includes(item.size)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="products__filter__widget">
            <div className="products__filter__widget__content">
              <button
                className={`btn`}
                onClick={() => setFilter(initailFilter)}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div
          className="products__filter__toggler"
          onClick={() => showHideFilter()}
        >
          <BsFilterCircleFill />
        </div>
        <div className="products__content">
          <h2 className="section__heading">Our Products</h2>
          <div className=" grid__container">
            {products.map((product, index) => {
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

export default Products;
