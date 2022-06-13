import {useState} from 'react'
import ItemList from './components/ItemList'
import './App.css'
import InputForm from './components/InputForm'
import Header from './components/Header'

const App = () => {

  const [items, setItems] = useState([
    { 
      id: 1,
      title: "item1",
      completed: false,
    },
    {
      id: 2,
      title: "item2",
      completed: false,
    },
    {
      id: 3,
      title: "item3",
      completed: true,
    }
  ])

  const addItem = (title) => {
    let item = {
      id: Date.now(),
      title,
      completed: false
    };

    setItems([...items, item]);
  }

  const toggleItemCompleted = (item) => {
    item.completed = !item.completed;
    setItems([...items]);
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  const onClearItems = () => {
    setItems([]);
  }

  const updateItemTitle = (item, title) => {
    item.title = title;
    setItems([...items]);
  } 


  return (
    <div>
      <Header />
      <div className='container'>
        <InputForm onAddItem={(title) => { addItem(title) }} onClearItems={onClearItems} />
        <ItemList items={items} deleteItem={deleteItem} toggleItemCompleted={toggleItemCompleted} updateItemTitle={updateItemTitle}></ItemList>
      </div>
    </div>
  )
}

export default App