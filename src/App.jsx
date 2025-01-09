import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import './bootstrap-5.3.3-dist/css/bootstrap.css'
function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("fetching data")
        return response.json();
      })
      .then((data) => {
        console.log("data is set")
        setPosts(data)
      })
      .catch((error) => console.error("Error fetching data:", error));

  },)


  return (
    <>
    <div className="container">
        <h1>Fetching Data From : <span class="badge text-bg-secondary text-center">JSON API</span></h1>

    </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row d-md-flex  d-sm-flex justify-content-md-center  justify-content-sm-center align-items-md-center align-items-sm-center">

          {posts.map((post) => (
            <div className="col-md-4 m-4 col-sm-12 " key={post.id}>

              <div className="card h-100  text-bg-warning border-dark">
                <div className="card-body">
                  <h5 className="card-title text-primary">{post.title}</h5>
                  <p className="card-text text-success">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </>
  )
}

export default App
