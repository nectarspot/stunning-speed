import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import { StoreContext } from "../context/store-context"
import { LineItem } from "../components/line-item"
import { formatPrice } from "../utils/format-price"
import {
  wrap,
  cartheader,
  summary,
  title,
  emptytitle,
  cartfooter,
  font,
  buttoncolor,
  clearfix,
  pcolor,
} from "./cart.module.css"

export default function CartPage() {
  const { checkout, loading } = React.useContext(StoreContext)
  const emptyCart = checkout.lineItems.length === 0

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  return (
    <Layout>
      <div className={wrap}>
        {emptyCart ? (
          <div className={emptytitle}>
            <h1>Your cart is empty</h1>
            <p className={emptytitle}>
            There are no items in your cart.
            </p>
            <Link className={buttoncolor} to="/search?s=BEST_SELLING" >
              continue shopping
            </Link>
          </div>
        ) : (
          <>
            <h1 className={title}>Your cart</h1>
            
                <div className={cartheader}>
                  <div>Image</div>
                  <div>Product</div>
                  <div>Price</div>
                  <div>QUANTITY</div>
                  <div>Total Price</div>
                </div>
   
              
              <div>
              
                {checkout.lineItems.map((item) => (
                  <LineItem item={item} key={item.id} />
                ))}
               <div className={cartfooter}>
                <div className={summary}>
                  <div>Subtotal :</div>
                  <div>
                    {formatPrice(
                      checkout.subtotalPriceV2.currencyCode,
                      checkout.subtotalPriceV2.amount
                    )}
                  </div>
                </div>
                <div className={summary}>
                  <div>Taxes :</div>
                  <div>
                    {formatPrice(
                      checkout.totalTaxV2.currencyCode,
                      checkout.totalTaxV2.amount
                    )}
                  </div>
                </div>
                <div className={summary}>
                  <div className={font}>Shipping Calculated at checkout</div>
                </div>
                <div className={summary}>
                  <div>Total Price :</div>
                  <div>
                    {formatPrice(
                      checkout.totalPriceV2.currencyCode,
                      checkout.totalPriceV2.amount
                    )}
                  </div>
                </div>
                <div>
                    <Link
                    className={pcolor}
                    to="/search?s=BEST_SELLING"
                    >
                    Continue Shopping
                    </Link>
                    <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className={buttoncolor}
                  >
                    Checkout
                  </button>
               </div>
              </div>
            

            </div>
          </>
        )}
      </div>
      <div className={clearfix}></div>
    </Layout>
  )
}
