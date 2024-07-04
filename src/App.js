import PhotoContainer from "./components/PhotoContainer/PhotoContainer";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";

function App() {
  return (
      <div className="App">
        <h1>Photo Gallery</h1>
        <PhotoContainer/>
        <Counter/>
        <Form/>
      </div>
  );
}

export default App;
