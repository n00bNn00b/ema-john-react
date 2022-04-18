import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();
  const handleRemoveProduct = (product) => {
    const rest = cart.filter(
      (singleProduct) => singleProduct.id !== product.id
    );
    setCart(rest);
    removeFromDb(product.id);
  };

  return (
    <div>
      <div className="shop-container">
        <div className="review-items-container">
          {cart.map((product) => (
            <ReviewItem
              handleRemoveProduct={handleRemoveProduct}
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/inventory">
              <button>Proceed Checkout</button>
              <button onClick={() => navigate("/inventory")}>
                Another Checkout using useNavigate
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
