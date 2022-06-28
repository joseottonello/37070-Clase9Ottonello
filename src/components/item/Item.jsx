import { CardGroup, Card, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import styles from "./Item.module.css"

const Item = ({props}) => {

  const URLDetail = `/item/${props.id}`;

  return (
        <CardGroup
        className={styles.CardGroup}>
          <Card
          className={styles.card}>
            <img src={props.img} alt="" width="200" />
            <h2> {props.name} </h2>
            <h4> {props.price} </h4>
            <p> {props.detail} </p>
                <Link to={URLDetail}>
                  <Button
                  className={styles.button}
                  color="danger">
                  Ver Detalle
                  </Button>
                </Link>
          </Card>
        </CardGroup>
  )
}

export default Item