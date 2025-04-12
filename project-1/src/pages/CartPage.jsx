import Layout from "../component/Layout";
import "../styles/cart.css";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart} from "../redux-toolkit/reducers/cartSlice";

const CartPage = () => {
    const {products, cart, totalPrice} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    return (
        <Layout>
            <div>
                <h1>Cart Page</h1>
                <div className="container">
                    <h1>🛒 Shopping Cart</h1>

                    <div className="products">
                        <h2>Products</h2>
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <span>{product.name} - ₦{product.price}</span>
                                    <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="cart">
                        <h2>Cart</h2>
                        {cart.length === 0 ? (
                            <p>No items in cart.</p>
                        ) : (
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                    <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>₦{item.price}</td>
                                        <td>
                                            <button>+</button>
                                            <button>-</button>
                                            <button onClick={() => dispatch(removeFromCart(item.id))}>remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        )}
                        <h3>Total: ₦{totalPrice}</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CartPage;