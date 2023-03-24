import './App.css';
// import Counter from './components/Counter';
import Greetings from './components/Greetings';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greetings name="JavaScript">Language of the Web</Greetings>
      <Greetings name="Golang" />
      <Greetings name="Swift" />
      <hr />
      <Welcome name="Java" />
      <Welcome name="React" />
      <Welcome name="React Native">Language for cross-mobile app development</Welcome>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
