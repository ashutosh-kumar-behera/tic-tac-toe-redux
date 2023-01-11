import './App.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BoardContainer } from './Components/BoardContainer';

const initialSatate = {
  marks : [0,0,0,0,0,0,0,0,0],
  player : 1,
  gameOver:false
}

const reducer= (state=initialSatate, action)=>{
    switch(action.type){
      case 'SET_PLAYER':
        return{...state, player: action.playload}
      case 'SET_MARKS':
        return{...state, marks: action.playload}
      case 'SET_GAMEOVER':
        return{...state, gameOver: action.playload}
      default:
        return state;
    }
}
const store =createStore(reducer);

function App() {
  return (
    <div>
      <Provider store={store}>
        <BoardContainer />
      </Provider>
    </div>
  );
}

export default App;