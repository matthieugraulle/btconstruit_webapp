import logo from "./logo.svg";
import "./App.css";
import { HeaderComponent, Home, navbar } from "./view";

function App() {
  return (
    <>
      <HeaderComponent />
      <Home />
      <navbar />
    </>
  );
}

export default App;
