import { connect } from "react-redux";
import { Board } from "./Board";


const mapStateToProps = (state) => {
  return {
    marks: state.marks,
    player: state.player,
    gameOver: state.gameOver
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMarks: (marks) => {
      dispatch({ type: 'SET_MARKS', playload: marks })
    },
    setPlayer: (player) => {
      dispatch({ type: 'SET_PLAYER', playload: player })
    },
    setGameOver: (status) => {
      dispatch({ type: 'SET_GAMEOVER', playload: status })
    }
  }
}
  export const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);