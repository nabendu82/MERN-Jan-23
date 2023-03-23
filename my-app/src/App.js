import './App.css';
// import { Greet, JavaScriptGreet } from './components/Greet';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <JavaScriptGreet /> */}
      <Greetings name="JavaScript">Language of the Web</Greetings>
      <Greetings name="Golang" />
      <Greetings name="Swift" />
      <hr />
      <Welcome name="Java" />
      <Welcome name="React" />
      <Welcome name="React Native">Language for cross-mobile app development</Welcome>
    </div>
  );
}

export default App;
