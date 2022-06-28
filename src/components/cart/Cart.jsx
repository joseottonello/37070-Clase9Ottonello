import { useContext } from "react";
import { CartContext } from "../../context/CartContext"
import { Card } from "reactstrap";
import styles from "./Cart.module.css"

const Cart = () => {

    const {cart} = useContext(CartContext);

    return (
        <div>
            {cart.map((item) => 
                <Card
                className={styles.item}>
                    <div>
                        <img src={item.img} alt="" width="100" />
                    </div>
                    <div>
                        <p> {item.name} </p>
                        <p> {item.price} </p>
                        <p> {item.detail} </p>
                        <p> Productos seleccionados: {item.cantidad} </p>
                    </div>
                </Card>
            )}
        </div>
    )
}

export default Cart