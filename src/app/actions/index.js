import axios from 'axios'

export const BINGO = 'BINGO'
export const BINGO_SUCCESS = 'BINGO_SUCCESS'
export const BINGO_ERROR = 'BINGO_ERROR'

export const NEXT_BALL = 'NEXT_BALL'
export const NEXT_BALL_SUCCESS = 'NEXT_BALL_SUCCESS'
export const NEXT_BALL_ERROR = 'NEXT_BALL_ERROR'

export const bingo = (bool) => {
  return {
    type: BINGO,
    isLoading: bool
  }
}

export const bingoSuccess = (data) => {
  return {
    type: BINGO_SUCCESS,
    data
  };
}

export const bingoError = (bool) => {
  return {
    type: BINGO_ERROR,
    error: bool
  };
}

export const nextBall = (bool) => {
  return {
    type: NEXT_BALL,
    isLoading: bool
  }
}

export const nextBallSuccess = (data) => {
  return {
    type: NEXT_BALL_SUCCESS,
    data
  };
}

export const nextBallError = (bool) => {
  return {
    type: NEXT_BALL_ERROR,
    error: bool
  };
}

export const callBingo = (numbersCalled, boardNumbers) => {
  return (dispatch) => {
    dispatch(bingo(true));

    const bingoObject = { numbers: numbersCalled, boards: boardNumbers }
    axios.post('http://localhost:3001/api/bingo', bingoObject)
      .then(res => {
        dispatch(bingoSuccess(res.data))
      })
      .catch(err => {
        dispatch(bingoError(true))
      })
  }
}

export const getNextBall = (numbersCalled) => {
  return (dispatch) => {
    dispatch(nextBall(true));

    const ballsObject = { numbers: numbersCalled }
    axios.post('http://localhost:3001/api/balls', ballsObject)
      .then(res => {
        dispatch(nextBallSuccess(res.data))
      })
      .catch(err => {
        dispatch(nextBallError(true))
      })
  }
}