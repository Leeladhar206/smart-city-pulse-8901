import {
  ADDPROJECT_FAILURE,
  ADDPROJECT_REQUEST,
  ADDPROJECT_SUCCESS,
  ALLUSERS_FAILURE,
  ALLUSERS_REQUEST,
  ALLUSERS_SUCCESS,
  GETPROJECT_FAILURE,
  GETPROJECT_REQUEST,
  GETPROJECT_SUCCESS,
  UPDATEPROJECT_FAILURE,
  UPDATEPROJECT_REQUEST,
  UPDATEPROJECT_SUCCESS,
} from "./actionTypes";

const initialState = {
  projects: [],
  isLoading: false,
  isError: false,
  users: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDPROJECT_REQUEST ||
      GETPROJECT_REQUEST ||
      ALLUSERS_REQUEST ||
      UPDATEPROJECT_REQUEST:
      return { ...state, isLoading: true };

    case ADDPROJECT_FAILURE ||
      GETPROJECT_FAILURE ||
      ALLUSERS_FAILURE ||
      UPDATEPROJECT_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case ADDPROJECT_SUCCESS:
      return { ...state, isLoading: false, isError: false };

    case GETPROJECT_SUCCESS:
      return { ...state, isLoading: false, isError: false, projects: payload };

    case ALLUSERS_SUCCESS:
      return { ...state, isLoading: false, isError: false, users: payload };

    case UPDATEPROJECT_SUCCESS:
      return { ...state, isLoading: false, isError: false };

    default:
      return state;
  }
};
