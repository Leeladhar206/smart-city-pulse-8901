import {
  ADDTASK_FAILURE,
  ADDTASK_REQUEST,
  ADDTASK_SUCCESS,
  DELETETASK_FAILURE,
  DELETETASK_REQUEST,
  DELETETASK_SUCCESS,
  GETTASKS_FAILURE,
  GETTASKS_REQUEST,
  GETTASKS_SUCCESS,
  UPDATETASK_FAILURE,
  UPDATETASK_REQUEST,
  UPDATETASK_SUCCESS,
} from "./actionTypes";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTASK_REQUEST ||
      GETTASKS_REQUEST ||
      UPDATETASK_REQUEST ||
      DELETETASK_REQUEST:
      return { ...state, isLoading: true };

    case ADDTASK_FAILURE ||
      GETTASKS_FAILURE ||
      UPDATETASK_FAILURE ||
      DELETETASK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case ADDTASK_SUCCESS:
      return { ...state, isLoading: false, isError: false };

    case UPDATETASK_SUCCESS:
      return { ...state, isLoading: false, isError: false };

    case DELETETASK_SUCCESS:
      return { ...state, isLoading: false, isError: false };

    case GETTASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        tasks: payload || [],
      };

    default:
      return state;
  }
};
