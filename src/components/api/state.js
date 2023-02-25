export const initialValues = {
    heading : null,
    singleUser: null,
    coin: null
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
    else {
      return state;
    }
  };
  