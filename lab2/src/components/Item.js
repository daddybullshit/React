import { useState, useRef, useEffect } from 'react'

const Item = ({item, deleteItem, toggleItemCompleted, updateItemTitle}) => {

  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const newTitleRef = useRef();

  const toggleEditing = (e, item) => {
    e.preventDefault();

    if (!editing) {
      setNewTitle(item.title)
    } else {
      updateItemTitle(item, newTitle);
    }

    setEditing(!editing);

  }

  useEffect(() => {
    newTitleRef.current?.focus()
  }, [editing])

  const deleteClicked = (e, item) => {
    e.preventDefault();
    deleteItem(item.id);
  }

  const onEditingTitle = (e) => {
    if (e.key === 'Enter') {
      toggleEditing(e, item)
    }
  }

  return (
    <div className={`item ${item.completed ? 'completed' : ''}`}>
      { editing
        ? <input value={newTitle} ref={newTitleRef} onKeyPress={onEditingTitle} onChange={e => setNewTitle(e.target.value)} />
        : <span onClick={() => toggleItemCompleted(item)}>{item.title}</span>
      }
      
      <button onClick={() => toggleItemCompleted(item)}>Toggle</button>
      <button onClick={(e) => toggleEditing(e, item)}>Edit</button>
      <button onClick={(e) => deleteClicked(e, item)}>Delete</button>
    </div>
  )
}

export default Item