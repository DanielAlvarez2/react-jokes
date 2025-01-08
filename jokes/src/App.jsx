import Joke from './Joke.jsx'
function App() {

  return (
    <>
      <Joke setup='I bought some shoes from a drug dealer' 
            punchline="I don't know what he laced them with, but I was tripping all day!"/>
    
      <Joke setup="Why do C# and Java developers keep breaking their keyboards?" 
            punchline="Because they use a strongly typed language." />
      
      <Joke setup="What do you call a duck that gets all A's?" 
            punchline="A wise quacker." />
      
      <Joke setup="Why do crabs never give to charity?" 
            punchline="Because they're shellfish." />

      <Joke punchline="It's hard to explain puns to kleptomaniacs because they always take things literally." />      
    </>
  )
}

export default App
