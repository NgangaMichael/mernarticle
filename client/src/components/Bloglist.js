// Bloglist.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Bloglist({ blogs }) {
  return (
    <div className='container mt-3'>
      <div className='row'>
          {blogs.map(blog => (
            <div className='col-md-4' key={blog._id}>
                <div className='card'>
                  <img src={`http://localhost:5000/blogImages/${blog.image}`}
                    className='card-img-top' alt='' style={{height: '13rem'}}
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{blog.title}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>{blog.subtitle}</h6>
                    <Link to={`/details/${blog._id}`} className='card-link'>Read More</Link>
                  </div>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
}