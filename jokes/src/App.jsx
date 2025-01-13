import Joke from './Joke.jsx'
import jokesData from './jokesData.js'

function App() {
  console.log(jokesData)
  const jokeElements = jokesData.map(joke => <Joke setup={joke.setup} punchline={joke.punchline} />)
  console.log(jokeElements)
  return (
    <>
      {jokeElements}
    </>
  )
}

export default App
