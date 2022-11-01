import allWizardsArr from "../data/wizards.json"
import { useState } from "react"

function WizardsList() {

  // 1. que se visualicen los 3 primeros hechiceros del .json
  // const initialList = allWizardsArr.slice(0, 3)
  // const [list, setList] = useState(allWizardsArr.slice(0, 3))
  const [list, setList] = useState([])

  // 4. que cada elemento tenga su boton para borrar
  
  
  
  // 2. que el el boton de añadir agregue un elemento aleatorio del json
  const añadirMagos = () => {
    
    // 2.1 buscar un elemento aleatorio del json
    const randomIndex = Math.floor(Math.random() * allWizardsArr.length)
    const wizardAleatorio = allWizardsArr[randomIndex]
    console.log(wizardAleatorio)


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


  return (
    <div>
      
      <h3>Lista de personajes de Harry Potter</h3>

      <button onClick={añadirMagos}>Añadir personaje</button>
      <button onClick={wizardOrder}>Ordenarlos</button>

      {/* ... aqui listamos los personajes */}
      {/* usamos el slice para tener x cantidad de elementos de ese array */}
      {list.map((eachWizard) => {
          return (
            <div key={eachWizard.id}>
              <h5>{eachWizard.name}</h5>
              <p>{eachWizard.description}</p>
            </div>
          )
      })}

    </div>
  )
}

export default WizardsList