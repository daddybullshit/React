import React from 'react'
import Item from './Item'

const ItemList = ({items, deleteItem, toggleItemCompleted, updateItemTitle}) => {
  return (
    <div className="item-list">

      {items.filter(item => !item.completed).map(item => (
        <Item key={item.id} item={item} deleteItem={deleteItem} toggleItemCompleted={toggleItemCompleted} updateItemTitle={updateItemTitle} />
      ))}

      {items.filter(item => item.completed).map(item => (
        <Item key={item.id} item={item} deleteItem={deleteItem} toggleItemCompleted={toggleItemCompleted} updateItemTitle={updateItemTitle} />
      ))}
    </div>
  )
}

export default ItemList