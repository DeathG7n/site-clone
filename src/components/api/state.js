export const initialValues = {
    heading : null,
    singleUser: null,
    coin: null,
    answer: 'The goal of the fund is to develop and become the leader in the investment market. The author’s strategies are used to manage assets and risks.'
  };
  
  export const reducer = (state, action) => {
    if (action.type === "HEAD") {
      return {
        ...state,
        heading: action?.payload
      };
    } else if (action.type === "SINGLEUSER") {
      return {
        ...state,
        singleUser: action?.payload
      };
    }
    else if (action.type === "COIN") {
      return {
        ...state,
        coin: action?.payload
      };
    }
    else if (action.type === "ANS") {
      return {
        ...state,
        answer: action?.payload
      };
    }
    else {
      return state;
    }
  };
  