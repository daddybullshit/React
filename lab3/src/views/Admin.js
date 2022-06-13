import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Admin = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const navigate = useNavigate();
  
  const createArticle = async (e) => {
    e.preventDefault();
    const article = { title, body }

    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', article);   
      console.log(res.data);
      navigate('/articles');
    } catch(err) {
      alert("Couldn't save article");
    }
}    
  
  return (
    <div>
      <h1>New Article</h1>
      <form onSubmit={createArticle}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} autoFocus />

        <label htmlFor="body">Body</label>
        <textarea id="body" value={body} onChange={e => setBody(e.target.value)} />
        <button>Save</button>
      </form>
    </div>
  )
}

export default Admin