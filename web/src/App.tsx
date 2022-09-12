interface ButtonProps {
  title: string;
}

function Button(propriedade: ButtonProps){
  return (
    <button>
      {propriedade.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="send 1"/>
      <Button title="send 2"/>
      <Button title="send 3"/>
    </div>
  )
}

export default App
