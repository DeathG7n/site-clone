export const initialValues = {
    heading : null,
  };
  
  export const reducer = (state, action) => {
    if (action.type === "HEAD") {
      return {
        ...state,
        heading: action?.payload
      };
    }
    else {
      return state;
    }
  };
  