
import { useState } from "react"

function Counter() {

  // const algo = useState(0)
  // console.log(algo)
  // // algo es un array
  // // algo[0] es el estado donde guardamos la informacion
  // // algo[1] es la funcion que me va a permitir actualizar el estado
  // const counterState = algo[0]
  // const functionThatUpdatesState = algo[1]



  const [counter, setCounter] = useState(0)
  //         |          |                |
  //     estado  function actualizador   valor inicial

  const [storedValue, setStoredValue] = useState()

  const addCounter = () => {
    // agregar 1 al contador
    // counter = counter + 1
    // setCounter hace dos cosas
    // 1. actualiza el estado
    // 2. renderiza nuevamente el componente con la info actualizada
    setCounter(counter + 1)
    //        |
    //    el nuevo valor que va a tener

    // counter++ no es lo mismo que counter + 1
    // counter++ es lo mismo que counter = counter + 1
    // NUNCA DEBEMOS MANIPULAR DIRECTAMENTE EL ESTADO
  }

  const reduceCounter = () => {
    // if (counter === 0){
    //   setCounter(0)
    // } else {
    //   let numberReduced = counter - 1
    //   setCounter(numberReduced) // esto será el nuevo valor del estado
    // }

    if (counter > 0) {
      let numberReduced = counter - 1
      setCounter(numberReduced) // esto será el nuevo valor del estado
    }
  }

  const updateStoredValue = () => {
    // actualizar el estado storedValue con el valor actual del counter
    setStoredValue(counter)

    // otra magia que será contactar al Server que a su vez contacta a la DB para actualizar el valor
  }

  return (
    <div>
      
      <h3>Counter</h3>

      <h2>{counter}</h2>

      <button onClick={addCounter}>Incrementar</button>
      <button disabled={counter <= 0 ? true : false} onClick={reduceCounter}>Reducir</button>
      <br />
      <button disabled={counter <= 0 ? true : false} onClick={updateStoredValue}>Guardar el valor actual del counter</button>

      <p>el valor guardado es: {storedValue}</p>

    </div>
  )
}

export default Counter