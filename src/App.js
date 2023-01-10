import React, { useState } from "react";
import ClassCounter from "./Components/ClassCounter";
import Counter from "./Components/Counter";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'Description 1' },
    { id: 2, title: 'React', body: 'Description 2' },
    { id: 3, title: 'Redux', body: 'Description 3' },
  ])

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'Description 1' },
    { id: 2, title: 'Python', body: 'Description 2' },
    { id: 3, title: 'Python', body: 'Description 3' },
  ])


  return (
    <div className="App">
      <PostList posts={posts} title='Posts about JS ' />
      <PostList posts={posts2} title='Posts about Python' />
    </div>
  );
}

export default App;
