import { useState } from "react";
import { ButtonGroup, Button } from "reactstrap";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const suma = () => count !== stock && setCount(count + 1)
    const resta = () => count !== initial && setCount(count - 1)

    return (
      <>
      <ButtonGroup>
        <Button 
        color = "danger"
        onClick={resta}>
          -
        </Button>
        <Button
        color="danger"
        outline>{count}
        </Button>
        <Button 
        color = "danger"
        onClick={suma}>
          +
        </Button>
      </ButtonGroup>
      <div>
        <Button
        onClick={()=>onAdd(count)}
        color="danger">
          Comprar
        </Button>
      </div>
      </>
    );
  }
  
  export default ItemCount;