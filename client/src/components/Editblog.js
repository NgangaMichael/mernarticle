import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

export default function Editblog() {

  const {id} = useParams();
  const {blogs, pending, error} = useFetch('http://localhost:5000/details/'+id)

  const [title, setTitle] = useState('');
  const [subtitle, setSubitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (blogs) {
      setTitle(blogs.title || '');
      setSubitle(blogs.subtitle || '');
      setAuthor(blogs.author || '');
      setBody(blogs.body || '')
    }
  }, [blogs]);
  

  const submitform = (e) => {
    e.preventDefault()
    const newblog = {title, subtitle, author, body}

    fetch(`http://localhost:5000/updateblog/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newblog)
    })
    .then(navigate(`/details/${id}`))

  }

  return (
    <div className='container mt-3'>
        <h5>Edit Blog</h5>
        <hr />
        {pending && <div>Loading...</div>}
        {blogs && (
          <form className='form-group' onSubmit={submitform}>
          <input className='form-control mt-2' 
          value={title} 
          onChange={(e => setTitle(e.target.value)) } 
          />

          <input className='form-control mt-2'
          value={subtitle}
          onChange={(e) => setSubitle(e.target.value)}
          />

          <input className='form-control mt-2' 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          />

          <textarea className='form-control mt-2'
          value={body}
          onChange={(e) => setBody(e.target.value)}>{body}</textarea>

          <button className='btn btn-success btn-sm mt-2'>Save</button>
        </form>
        )}
        {error && <div>{error}</div>}

    </div>
  )
}
