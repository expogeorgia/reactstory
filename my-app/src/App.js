import React from 'react';
import {useState, useEffect } from "react";
import './style/app.css'

// `http://213.131.37.250:3001/users`


function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch(`http://213.131.37.250:3001/users`).then(response => response.json()).then((json) => setPosts(json));
  }

  useEffect(() => {
fetchPosts();
  },[])

  
  return (
<div id='test'>
  <select>
   {
    posts.map((post, index) => 
    <option key={index} id="post">
          {post.company}
    </option>
    )
   }
   </select>
</div>
  );
}

export default App;
