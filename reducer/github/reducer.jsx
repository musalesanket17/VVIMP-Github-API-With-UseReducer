export const gitReducer = (state, action) => {
  switch (action.type) {
    case "FEACHING_USER_LOADING": {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }

    case "FEACHING_USER_SUCSESS": {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    }

    case "FEACTING_USER_FAILED": {
      return {
        ...state,
        isLoading: true,
        isError: true
      };
    }

    default:
      return state;
  }
};
