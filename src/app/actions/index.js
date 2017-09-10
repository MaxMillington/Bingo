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

    // axios.get('http://localhost:3000/bingo')
    //   .then(res => {
    //     console.log('suc', res);
    //   })

    fetch('http://localhost:3000/api/bingo', {
      method: 'get',
      body: {
        numbers: numbersCalled,
        boardNumbers: boardNumbers
      }
    })
      .then((response) => {
        console.log('bing res', response)
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(bingo(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(bingoSuccess(items)))
      .catch(() => dispatch(bingoError(true)));
  }
}

export const bingo = (bool) => {
  console.log('calling bingo')
  return {
    type: BINGO,
    isLoading: bool
  }
}

export function bingoSuccess(items) {
  console.log('success', items)
  return {
    type: BINGO_SUCCESS,
    items
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

export function nextBallSuccess(items) {
  return {
    type: NEXT_BALL_SUCCESS,
    items
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
  return () => {
    fetch('http://localhost:3000/bingo').then((response) => {
      console.log('resp', response)
    })
  }
  // return (dispatch) => {
  //   dispatch(nextBall(true));
  //
  //   fetch('http://localhost:3000/bingo', {
  //     method: 'post',
  //     body: {
  //       numbers: numbersCalled
  //     }
  //   })
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
  // };
}