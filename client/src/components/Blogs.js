// Blogs.js
import React from 'react';
import useFetch from './useFetch';
import Bloglist from './Bloglist';

export default function Blogs() {
  const { blogs, pending, error } = useFetch('http://localhost:5000/');
  console.log(blogs)
  return (
    <>
      {pending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} />}
      {error && <div>{error}</div>}
    </>
  );
}