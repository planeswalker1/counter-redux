import * as actionTypes from "../actions/actions";

const intialState = {
  results: []
};

const resultsReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date().getTime(),
          value: action.result
        })
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      const updatedArray = state.results.filter(result => {
        return result.id !== action.resultElementId;
      });
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default resultsReducer;
