import { Link, NavLink } from "react-router-dom"
import NavBar from "../components/NavBar"

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>🎬 Welcome to the Movie Directory 🎥</h1>
        <p>
          Explore a collection of famous directors and their iconic movies. Click
          below to start exploring!
        </p>
        <nav>
          <NavLink to="/directors">View Directors</NavLink> |{" "}
          <NavLink to="/about">Learn More About This App</NavLink>
        </nav>
      </main>
    </>
  )
}

export default Home
