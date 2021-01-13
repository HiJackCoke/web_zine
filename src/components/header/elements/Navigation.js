import React from 'react'
import {Link} from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/decor"
                    as={process.env.PUBLIC_URL + "/home/decor"}
                  >
                    <a>Decor</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/decor.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/trending"
                    as={process.env.PUBLIC_URL + "/home/trending"}
                  >
                    <a>Trending</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/trending.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/essentials"
                    as={process.env.PUBLIC_URL + "/home/essentials"}
                  >
                    <a>Essentials</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/essentials.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/accessories"
                    as={process.env.PUBLIC_URL + "/home/accessories"}
                  >
                    <a>Accessories</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/accessories.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/lookbook"
                    as={process.env.PUBLIC_URL + "/home/lookbook"}
                  >
                    <a>Lookbook</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/lookbook.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/furniture"
                    as={process.env.PUBLIC_URL + "/home/furniture"}
                  >
                    <a>Furniture</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/furniture.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
                <li>
                  <Link
                    href="/home/smart-design"
                    as={process.env.PUBLIC_URL + "/home/smart-design"}
                  >
                    <a>Smart Design</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/smart-design.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Home Group</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/home/collection"
                    as={process.env.PUBLIC_URL + "/home/collection"}
                  >
                    <a>Collection</a>
                  </Link>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/home-preview/collection.jpg"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/menu-element.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a>Shop</a>
          </Link>
          <IoIosArrowDown />

          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
            <li className="sub-menu--mega__title">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Group One</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/right-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/right-sidebar"}
                  >
                    <a>Right Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/no-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/no-sidebar"}
                  >
                    <a>No Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-no-space"
                    as={process.env.PUBLIC_URL + "/shop/fullwidth-no-space"}
                  >
                    <a>Full Width No Space</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-no-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/fullwidth-no-sidebar"}
                  >
                    <a>Full Width No Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/fullwidth-left-sidebar"}
                  >
                    <a>Full Width Left Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/fullwidth-right-sidebar"
                    as={
                      process.env.PUBLIC_URL + "/shop/fullwidth-right-sidebar"
                    }
                  >
                    <a>Full Width Right Sidebar</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>Group Two</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/shop/product-basic/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env.PUBLIC_URL +
                      "/shop/product-basic/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Basic</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-fullwidth/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env.PUBLIC_URL +
                      "/shop/product-fullwidth/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Full Width</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop/product-fullwidth-right-thumb/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env.PUBLIC_URL +
                      "/shop/product-fullwidth-right-thumb/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Full Width Right Thumb</a>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/shop/product-sticky/[slug]?slug=lorem-ipsum-decor-one"
                    as={
                      process.env.PUBLIC_URL +
                      "/shop/product-sticky/lorem-ipsum-decor-one"
                    }
                  >
                    <a>Sticky Details</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/cart"
                    as={process.env.PUBLIC_URL + "/other/cart"}
                  >
                    <a>Shopping Cart</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/wishlist"
                    as={process.env.PUBLIC_URL + "/other/wishlist"}
                  >
                    <a>Wishlist</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/compare"
                    as={process.env.PUBLIC_URL + "/other/compare"}
                  >
                    <a>Compare</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__title">
              <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                <a>Shop Pages</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/other/checkout"
                    as={process.env.PUBLIC_URL + "/other/checkout"}
                  >
                    <a>Checkout</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/order-tracking"
                    as={process.env.PUBLIC_URL + "/other/order-tracking"}
                  >
                    <a>Order Tracking</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/my-account"
                    as={process.env.PUBLIC_URL + "/other/my-account"}
                  >
                    <a>My Account</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other/login-register"
                    as={process.env.PUBLIC_URL + "/other/login-register"}
                  >
                    <a>Login Register</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/megamenu-shop.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;
