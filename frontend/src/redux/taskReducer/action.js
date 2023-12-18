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

export const addTaskFun = (data, token) => (dispatch) => {
  dispatch({ type: ADDTASK_REQUEST });

  fetch("http://localhost:7070/tasks/add", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADDTASK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADDTASK_FAILURE });
    });
};

export const getTasksFun = (token) => (dispatch) => {
  dispatch({ type: GETTASKS_REQUEST });

  console.log(token, "action");
  fetch("http://localhost:7070/tasks/", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.success)
        dispatch({
          type: GETTASKS_SUCCESS,
          payload: res.data,
        });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GETTASKS_FAILURE });
    });
};

export const updateTaskFun = (data, id, token) => (dispatch) => {
  dispatch({ type: UPDATETASK_REQUEST });

  fetch(`http://localhost:7070/tasks/update/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: UPDATETASK_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATETASK_FAILURE });
    });
};

export const deleteTaskFun = (id, token) => (dispatch) => {
  dispatch({ type: DELETETASK_REQUEST });

  fetch(`http://localhost:7070/tasks/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: DELETETASK_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: DELETETASK_FAILURE });
    });
};
