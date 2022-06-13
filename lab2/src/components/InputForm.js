import {useState, useRef, useEffect} from 'react'

const InputForm = ({onAddItem, onClearItems}) => {

  const titleRef = useRef()
  const [title, setTitle] = useState('')

  const onAddClick = (e) => {
    e.preventDefault();

    if (title.trim() === '') return;
    
    titleRef.current.focus();
    onAddItem(title)
    setTitle('');
  }

  const onClearClick = (e) => {
    e.preventDefault();
    onClearItems();
  }

  useEffect(() => {
    titleRef.current.autofocus = true;
  }, [])


  return (
    <form className='input-form'>
      <input className="form-control" type="text" ref={titleRef} value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter item" autoFocus />
      <button className="btn" onClick={onAddClick}>Add</button>
      <button className="btn" onClick={onClearClick}>Clear List</button>
    </form>
    )
}

export default InputForm    