import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addblog() {

  const [title, setTitle] = useState('');
  const [subtitle, setSubitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    // You can perform additional validation or processing here
    setFile(selectedFile);
  };
  

  // when sending data without image 
  // const submitform = (e) => {
  //   e.preventDefault()
  //   const newblog = {title, subtitle, author, body, file}

  //   fetch('http://localhost:5000/addblog', {
  //     method: 'POST',
  //     headers: {'Content-type': 'application/json'},
  //     body: JSON.stringify(newblog)
  //   })
  //   .then(navigate('/'))

  // }

  // when sending data with image 
  const submitform = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('author', author);
    formData.append('body', body);
    formData.append('image', file);
  
    fetch('http://localhost:5000/addblog', {
        method: 'POST',
        body: formData,
      })
        .then(navigate('/'));
    };
  

  return (
    <div className='container mt-4'>
        <h5>Add Blog</h5>
        <hr />
        <form className='form-group' onSubmit={submitform}>
          <input className='form-control mt-2' 
          placeholder='Title'
          value={title} 
          onChange={(e => setTitle(e.target.value)) } 
          />

          <input className='form-control mt-2'
          placeholder='Subtitle'
          value={subtitle}
          onChange={(e) => setSubitle(e.target.value)}
          />

          <input className='form-control mt-2' 
          placeholder='Author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          />

          <textarea className='form-control mt-2'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          />

          <input className='form-control mt-2'
            type="file"
            onChange={handleImageChange}
          />


          <button className='btn btn-success btn-sm mt-2'>Save</button>

        </form>
    </div>
  )
}
