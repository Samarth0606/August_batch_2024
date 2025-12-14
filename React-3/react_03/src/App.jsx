// import Apple from "./components/Apple";
import EmployeeCard from "./components/EmpolyeeCard";
import Events from "./components/Events";
import Propss from "./components/Propss";
import Stationary from "./components/Stationary";
// import Lucky from "./components/Lucky";

const items = ['pen', 'pencil', 'ruler', 'eraser']

function App(){
  return(
    <div>
      <h1>Hello from App</h1>
      {/* <Apple /> */}
      {/* <Lucky /> */}
      {/* <Events /> */}
      {/* <Propss age={20} naam="Samarth" isMale={true} /> */}
      {/* <EmployeeCard name="Sam" desig="Mentor" exp={5} /> */}
      <Stationary items={items} />
    </div>
  )
}

export default App;
