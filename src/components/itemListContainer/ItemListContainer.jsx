import { useState, useEffect } from "react";
import ItemList from "../itemList/ItemList"
import productJSON from "../../mock/products.json";
import { useParams } from "react-router-dom";
import styles from "./ItemListContainer.module.css"

const ItemListContainer = () => {  

  const [products, setProducts] = useState([]);

  const { category } = useParams()
  
  useEffect(() => {
    const comeProducts = new Promise ((resolve, reject) => {
      setTimeout(() => {
        if (category === undefined) {
          resolve(productJSON)
        } else {
          const productFound = productJSON.filter((item) => item.category === category)
          resolve(productFound)
        }
      }, 500);
    })

    comeProducts
    .then((response) => {
      setProducts(response);
    })
  }, [category]);

  return (
        <>
          <ItemList 
          classNamme={styles.itemList}
          props={products} />
        </>
    )
}

export default ItemListContainer