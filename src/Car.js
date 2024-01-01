const Car = (props) => {
    return (
      <div>
        <h2>Car Model - {props.model}</h2>
        
        {props.description &&
        <p>{props.description}</p>
        }
      </div>
    )
  }
  
  export default Car;