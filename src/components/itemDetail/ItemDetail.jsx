import { Card } from "reactstrap";
import ItemCount from "../itemCount/ItemCount";
import { useContext, useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ props }) => {

  const {addToCart} = useContext(CartContext)

  const [cant, setCant] = useState(0);

  const onAdd = (cantidad) => {
    setCant(cantidad);
    addToCart(props, cantidad);
  }

  return (
    <Card>
      <img src={props.img} alt="asd" width="300"/>
      <h2> {props.name} </h2>
      <h4> {props.price} </h4>
      <p> {props.detail} </p>
      <div>
        { cant === 0
          ? <ItemCount initial={0} stock={10} onAdd={onAdd} />
          : <Link to="/cart"> <Button color="danger">Ir al Carrito</Button></Link>
        }
      </div>
    </Card>
  )

}

export default ItemDetail