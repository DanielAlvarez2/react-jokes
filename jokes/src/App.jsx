import Joke from './Joke.jsx'
function App() {

  return (
    <>
      <Joke setup='I bought some shoes from a drug dealer' 
            punchline="I don't know what he laced them with, but I was tripping all day!"
            upvotes={5}
      />
    
      <Joke setup="Why do C# and Java developers keep breaking their keyboards?" 
            punchline="Because they use a strongly typed language." 
            upvotes={10}
      />
      
      <Joke setup="What do you call a duck that gets all A's?" 
            punchline="A wise quacker." 
            upvotes={3}
      />
      
      <Joke setup="Why do crabs never give to charity?" 
            punchline="Because they're shellfish." 
            upvotes={7}      
      />

      <Joke punchline="It's hard to explain puns to kleptomaniacs because they always take things literally." 
            upvotes={9}
      />      
    </>
  )
}

export default App
