import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './components/EggContainer';
import store from './redux/store';
import HookEggContainer from './components/HookEggContainer';
import HookChickenReducer from './components/HookChickenReducer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <EggContainer />
        <HookEggContainer />
        <HookChickenReducer />
      </Provider>
    </div>
  );
}

export default App;
