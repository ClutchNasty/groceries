// import React from "react"
// import ReactDOM from "react-dom"

// ReactDOM.render(
//     <ul>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ul>,
//     document.getElementById("root")
// )




class App extends Component {
  state = {
    todos: [
      { id: 1, name: "eggs", complete: true, },
      { id: 2, name: "bacon", complete: false, },
      { id: 3, name: "cheese", complete: false, },
    ]
  };

renderTodos = () => {
  const { todos, } = this.state;
  return todos.map( todo => 
    <li key={todo.id}>{todo.name}</li>
  )
};

  render() {
    return (
      <div>
        <ul>
          { this.renderTodos() }
        </ul>
      </div>
    )
  }
}

export default App;