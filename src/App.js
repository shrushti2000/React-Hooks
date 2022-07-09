import logo from './logo.svg';
import './App.css';
import UseStateHook from './hooks/UseStateHook';
import UserReducerHook from './hooks/UseReducerHook';
import  UseRefHook  from './hooks/UseRefHook';
import UseEffectHook from './hooks/UseEffectHook';

function App() {
  return (
   <>
   <h1>use State hook demo</h1>
   <UseStateHook/>
  <h1>useReducer hook demo</h1>
  <UserReducerHook/>
  <h1>useRef hook demo</h1>
  <UseRefHook/>
  <h1>useEffect hook demo</h1>
  <UseEffectHook/>
   </>
  
  );
}

export default App;
