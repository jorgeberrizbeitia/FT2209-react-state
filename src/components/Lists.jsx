import React from 'react'

// rfce para crear la plantilla de un componente funcional

function Lists() {

  const someArr = ["Hola", "Hello", "Halo", "Bonjour"]

  // const someJSXelements = [<li>Hola</li>, <li>Hello</li>, <li>Halo</li>, <li>Bonjour</li>]

  const booksArr = [
    { _id: 123, title: "El Hobbit", author: "Tolkien" },
    { _id: 999, title: "El Hobbit", author: "Tolkien" },
    { _id: 456, title: "The Clone Wars", author: "No lo sé" },
    { _id: 536, title: "The Clone Wars", author: "No lo sé" },
    { _id: 356, title: "The Clone Wars", author: "No lo sé" }
  ]

  return (
    <div>
      
      <h3>Listas</h3>

      <ul>
        {someArr.map((eachElement) => {
          return (
            <li key={eachElement}>{eachElement}</li>
          )
        })}

        {/* {someArr.map((eachElement) => <li>{eachElement}</li>)} */}
      </ul>
      
      
        {booksArr.map((eachElement) => {
          return (
            <div key={eachElement._id} className="card">
              <h5>{eachElement.title}</h5>
              <p>{eachElement.author}</p>
              <hr />
            </div>
          )
        })}
      

    </div>
  )
}

export default Lists