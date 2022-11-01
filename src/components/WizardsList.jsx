import allWizardsArr from "../data/wizards.json"
import { useState } from "react"

function WizardsList() {

  // 1. que se visualicen los 3 primeros hechiceros del .json
  // const initialList = allWizardsArr.slice(0, 3)
  // const [list, setList] = useState(allWizardsArr.slice(0, 3))
  const [list, setList] = useState([])
  
  // 2. que el el boton de añadir agregue un elemento aleatorio del json
  const añadirMagos = () => {
    
    // 2.1 buscar un elemento aleatorio del json
    const randomIndex = Math.floor(Math.random() * allWizardsArr.length)
    const wizardAleatorio = allWizardsArr[randomIndex]
    // console.log(wizardAleatorio)


    // 2.2 añadir ese elemento al estado de list
    // list.push(wizardAleatorio) // MALA PRACTICA y no funciona :(

    // como actualizamos el array y lo pasamos como argumento de setList
    // list = [1, 2, 3]
    // const copy = list.map((eachElem) => eachElem)
    // const copy = structuredClone(list)
    const copy = [...list]
    // wizardAleatorio = 4
    copy.push(wizardAleatorio)
    // setList([1, 2, 3, 4])
    setList(copy)

    // const setList = (argument) => {
    //   list = argument
    // }

    // forma más reducida
    // setList([...list, wizardAleatorio])
    // MEGA BONUS:
    // que los elementos no puedan estar duplicados
  }

  // 3. el boton de ordenar
  const wizardOrder = () => {

    const copy = list.map((elem) => elem)

    copy.sort((elem1, elem2) => {
      if (elem1.name > elem2.name) {
        return 1
      } else {
        return -1
      }
    })
    // bonus, aplicar ternarios :)

    setList(copy)

  }

  // 4. que cada elemento tenga su boton para borrar
  const borrarWizard = (wizardId) => {
    console.log("tratando de borrar a:", wizardId)
    // necesitamos informacion del elemento clickado

    // 1. sacar al elemento del array
    const filteredList = list.filter((eachWizard) => {
      if (eachWizard.id === wizardId) {
        return false // no lo incluyas
      } else {
        return true // incluyelo
      }
    })

    // 2. actualizar el estado
    setList(filteredList)
    // setList => para pasar el nuevo array menos el elemento clickado
  }

  return (
    <div>
      
      <h3>Lista de personajes de Harry Potter</h3>

      <button onClick={añadirMagos}>Añadir personaje</button>
      <button onClick={wizardOrder}>Ordenarlos</button>

      {/* ... aqui listamos los personajes */}
      {/* usamos el slice para tener x cantidad de elementos de ese array */}
      {list.map((eachWizard, index) => {
          return (
            <div key={eachWizard.id}>
              <hr />
              <h5>{eachWizard.name}</h5>
              <p>{eachWizard.description}</p>
              {/* <button onClick={borrarWizard}>Borrar</button> */}
              {/* para agregar argumentos a una function de callback, se crea una funcion anonima envoltoria */}
              <button onClick={() => borrarWizard(eachWizard.id)}>Borrar</button>
            </div>
          )
      })}

    </div>
  )
}

export default WizardsList