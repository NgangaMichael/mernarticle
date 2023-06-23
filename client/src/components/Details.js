import React from 'react'
import useFetch from './useFetch';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Details() {
  const navigate = useNavigate();
  const {id} = useParams();
  const {blogs, pending, error} = useFetch('http://localhost:5000/details/'+id)

  const deleteBlog = () => {
    fetch(`http://localhost:5000/deleteblog/${id}`,{
      method: 'DELETE',
    })
    .then(navigate('/'))
  }

  return (
    <div className='container mt-3'>
      {pending && <div>Loading...</div>}
      {blogs && (
        <div className='row'>
          <div className='col-md-6'>
            <img src={`http://localhost:5000/blogImages/${blogs.image}`} className='img-fluid' alt='' />
            <h5 className='mt-4'>Title: {blogs.title}</h5>
            <h6>Subtitle: {blogs.subtitle}</h6>
            <p>Written by: {blogs.author}</p>
            <p style={{ whiteSpace: 'pre-line' }}>{blogs.body}</p>

            <Link to={`/editblog/${blogs._id}`}>Edit Blog</Link>
            <button className='btn btn-danger btn-sm' onClick={deleteBlog}>Delete Blog</button>
          </div>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  )
}
