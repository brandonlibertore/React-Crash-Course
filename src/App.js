import React from 'react'
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Joke from "./components/Joke"
const array = [{id: 1, question: 1, answer: 2}, {id: 2, question: 3, answer: 4}, {id: 3, question: 5, answer: 6}, 
  {id: 4, question: 7, answer: 8}, {id: 5, question: 9, answer: 10}]
  const jokeComponents = array.map(joke => {
    return (<Joke key={joke.id} question={joke.question} answer={joke.answer}/>)
  })

// function App() {
//   return (
//     <div className="App">
//       <Nav/>
//       <Header/>
//       <MainContent/>
//       {jokeComponents}
//     </div>
//   );
// }

// CLASS BASED COMPONENT
class App extends React.Component{

  // Other methods can be written inside here that can be called within render() return
  // Keeps class organized and structured.
  constructor() {
    // Always call super first in the constructor
    super()
    this.state = {loading: false, film: {}}
  }

  async componentDidMount() {
    this.setState({loading: true})
    const response = await fetch("https://swapi.dev/api/films/1/")
    const data = await response.json()
    this.setState({film: data, loading: false})
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.film.title
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <MainContent/>
        {jokeComponents}
        {text}
      </div>
    )
  }
}

export default App;
