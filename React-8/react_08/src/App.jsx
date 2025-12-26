// class based component
// import React from 'react'
// import {Counter} from './components/Counter';
// export default class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     }
//   }

//   decrease(){
//     this.setState( {count: this.state.count-1} )
//   }

//   componentWillUnmount(){
//     console.log("I am deleted");
//   }

//   componentDidMount(){
//     console.log("Hello");
//   }

//   render(){
//     return(
//        <div>
//         <button onClick={ ()=>this.setState({ count:this.state.count+1 }) }> Increase </button>
//         <Counter count={this.state.count} />
//         <button onClick={ this.decrease.bind(this) }> Decrease </button>
//        </div>
//     )
//   }
// }

// ----------------------------------------------
// functional component

import React from 'react'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App