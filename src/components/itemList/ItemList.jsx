import Item from "../item/Item"

const ItemList = ({props}) => {
  return (
    <div>
      {props.map((shoes) => (
        <Item props={shoes} />
      ))}
    </div>
  )
}

export default ItemList