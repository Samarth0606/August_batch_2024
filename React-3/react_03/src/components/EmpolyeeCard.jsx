function EmployeeCard({name,exp,desig}){
    return(
        <div>
            <h1>Naam: {name} </h1>
            <h1 style={{color:"blue"}}>Experience: {exp} </h1>
            <h1 style={{color:"green"}}>Design: {desig} </h1>
        </div>
    )
}

export default EmployeeCard;