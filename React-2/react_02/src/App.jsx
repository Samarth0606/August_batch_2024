// component = fn with JSX = JS + HTML

// import Cat from "./components/Cat";
// import Dog, { Cow, Lion } from "./components/Dog";
// import Sam from "./components/Sam";
import Try from "./components/Try";


function App(){
  return(
    <div>
      <h1>Hello from App</h1>
      <Try />
      {/* self closing */}
      {/* <Sam />
      <Cat />
      <Lion />
      <Cow />
      <Dog /> */}
      {/* <Sam></Sam> */}
    </div>
  )
}

export default App;


