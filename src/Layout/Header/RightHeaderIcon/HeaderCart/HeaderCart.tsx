import SVG from "@/CommonComponent/SVG";
import { Dollar, Href, ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeFromCart } from "@/Redux/Reducers/ECommerce/ProductReducer";
import { ProductDataTypes } from "@/Types/ECommerce.type";
import Image from "next/image";
import Link from "next/link";
import { Col } from "reactstrap";

const HeaderCart = () => {
  const getCartTotal = (item: ProductDataTypes) => {
    if (item.quantity) {
      return item.quantity * item.price;
    }
    return 0;
  };

  const dispatch = useAppDispatch();
  const { cartData } = useAppSelector((state) => state.product);

  return (
    <li className="cart-nav onhover-dropdown">
      <div className="cart-box">
        <SVG iconId="fill-Buy" />
      </div>
      <div className="cart-dropdown onhover-show-div">
        <h6 className="f-18 mb-0 dropdown-title">{"Cart"}</h6>
        <ul>
          {cartData.length > 0 ? (
            cartData.map((item, index) => (
              <li key={index}>
                <div className="d-flex">
                  <Image
                    className="img-fluid b-r-5 img-60"
                    src={`${ImagePath}/${item.image}`}
                    width={60}
                    height={65}
                    alt=""
                  />
                  <div className="flex-grow-1">
                    <span>{item.name}</span>
                    <h6>
                      {Dollar}
                      {item.price}
                    </h6>
                  </div>
                  <div className="close-circle" onClick={() => dispatch(removeFromCart(item.id))}>
                    <Link href={Href}>
                      <i className="fa fa-times" />
                    </Link>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <Col sm={12} className='empty-cart-cls text-center'>
              <Image height={172} width={172} src={`${ImagePath}/ecommerce/icon-empty-cart.png`} className='img-fluid mb-4 mt-4' alt='Empty Cart' />
              <h3>
                <strong>Your Cart is Empty</strong>
              </h3>
              <h4>Add something to make me happy</h4>
              <Link className='btn btn-primary cart-btn-transform m-t-15 mb-4' href='/app/ecommerce/product'>
                continue shopping
              </Link>
            </Col>
          )}

          {cartData.length > 0 && (
            <>
              <li className="total">
                <h5 className="mb-0">
                  {"Subtotal"} :{" "}
                  <span className="f-right">
                    {Dollar}
                    {cartData.reduce((total, item) => total + getCartTotal(item), 0)}
                  </span>
                </h5>
              </li>

              <li>
                <Link className="view-cart" href={`/ecommerce/cart`}>
                  {"View Cart"}
                </Link>
                <Link className="view-checkout f-right" href={`/ecommerce/checkout`}>
                  {"Checkout"}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </li>
  );
};

export default HeaderCart;
