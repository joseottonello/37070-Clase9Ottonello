import { useState, useEffect } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import productJSON from "../../mock/products.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {  

  const [detail, setDetail] = useState({});

  const {id} = useParams();
  
  useEffect(() => {
    const comeProducts = new Promise ((resolve, reject) => {
      setTimeout(() => {
        const productFound = productJSON.find((item) => item.id === Number(id))
        resolve(productFound);
      }, 500);
    })

    comeProducts
    .then((response) => {
      setDetail(response);
    })
  }, [id]);

  return (
        <>
            <ItemDetail props={detail}/>
        </>
    )
}

export default ItemDetailContainer