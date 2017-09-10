import axios from 'axios'

export const BINGO = 'BINGO'
export const BINGO_SUCCESS = 'BINGO_SUCCESS'
export const BINGO_ERROR = 'BINGO_ERROR'

export const NEXT_BALL = 'NEXT_BALL'
export const NEXT_BALL_SUCCESS = 'NEXT_BALL_SUCCESS'
export const NEXT_BALL_ERROR = 'NEXT_BALL_ERROR'

export const callBingo = (numbersCalled, boardNumbers) => {
  return (dispatch) => {
    dispatch(bingo(true));

    console.log('my params', numbersCalled, boardNumbers)
    const bingoObject = { numbers: numbersCalled, boards: boardNumbers }
    axios.post('http://localhost:3001/api/bingo', bingoObject)
      .then(res => {
        dispatch(bingoSuccess(res.data))
      })

    // fetch('http://localhost:3001/api/comments', {
    //   method: 'post',
    //   body: {
    //     numbers: numbersCalled,
    //     boardNumbers: boardNumbers
    //   }
    // })
    //   .then((response) => {
    //     console.log('bing res', response)
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //
    //     dispatch(bingo(false));
    //
    //     return response;
    //   })
    //   .then((response) => response.json())
    //   .then((items) => dispatch(bingoSuccess(items)))
    //   .catch(() => dispatch(bingoError(true)));
  }
}

export const bingo = (bool) => {
  console.log('calling bingo')
  return {
    type: BINGO,
    isLoading: bool
  }
}

export function bingoSuccess(data) {
  console.log('success', data)
  return {
    type: BINGO_SUCCESS,
    data
  };
}

export function bingoError(bool) {
  return {
    type: BINGO_ERROR,
    error: bool
  };
}

export const nextBall = (bool) => {
  console.log('calling nextBall')
  return {
    type: NEXT_BALL,
    isLoading: bool
  }
}

export function nextBallSuccess(data) {
  return {
    type: NEXT_BALL_SUCCESS,
    data
  };
}

export function nextBallError(bool) {
  return {
    type: NEXT_BALL_ERROR,
    error: bool
  };
}

export const getNextBall = (numbersCalled) => {
  console.log('getting next ball')
  return (dispatch) => {
    dispatch(nextBall(true));

    const ballsObject = { numbers: numbersCalled }
    axios.post('http://localhost:3001/api/balls', ballsObject)
      .then(res => {
        console.log('next ball return', res.data)
        dispatch(nextBallSuccess(res.data))
      })

    //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //
  //       dispatch(nextBall(false));
  //
  //       return response;
  //     })
  //     .then((response) => response.json())
  //     .then((items) => dispatch(nextBallSuccess(items)))
  //     .catch(() => dispatch(nextBallError(true)));
  }
}