export const initialValues = {
    heading : null,
    singleUser: null,
    coin: null,
    answer: 'The goal of the fund is to develop and become the leader in the investment market. The author’s strategies are used to manage assets and risks.',
    loading: false,
    openSnackBar: false,
    snackBarMsg: '',
    error: false,
    users: null,
    depositAmount: 0,
    currentCoin: null,
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
    else if (action.type === "LOAD") {
      return {
        ...state,
        loading: action?.payload
      };
    }
    else if (action.type === "OPENSNACKBAR") {
      return {
        ...state,
        openSnackBar: true
      };
    }
    else if (action.type === "SNACKBARMSG") {
      return {
        ...state,
        snackBarMsg: action?.payload
      };
    }
    else if (action.type === "ERROR") {
      return {
        ...state,
        error: action?.payload
      };
    }
    else if (action.type === "CLOSE_SNACKBAR") {
      return {
        ...state,
        openSnackBar: false
      };
    }
    else if (action.type === "USERS") {
      return {
        ...state,
        users: action?.payload
      };
    }
    else if (action.type === "DEPOSIT") {
      return {
        ...state,
        depositAmount: action?.payload
      };
    }
    else if (action.type === "CURRENT") {
      return {
        ...state,
        currentCoin: action?.payload
      };
    }
    else {
      return state;
    } 
  };
  