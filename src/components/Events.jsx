import React from 'react'

function Events() {

  const logSomething = (event) => {
    console.log("Probando", event.target)
  }

  const handleMouseEnter = (event) => {
    console.log("colocando mouse sobre el div", event.target)
  }

  const handleMouseLeave = () => {
    console.log("quitando mouse del el div")
  }

  const handleChange = (event) => {
    console.log("escribiendo algo", event.target.value)
  }

  return (
    <div>
      
      <h3>Eventos</h3>

      {/* <button onClick={console.log("Probando")}>Click</button> */}
      {/* <button onClick={() => console.log("Probando")}>Click</button> */}
      <button onClick={logSomething}>Click</button>

      <div >
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hola</span>
      </div>

      <input type="text" onChange={handleChange}/>

    </div>
  )
}

export default Events