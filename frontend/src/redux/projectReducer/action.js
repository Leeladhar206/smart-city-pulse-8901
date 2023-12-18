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

export const addProjectFun = (data) => (dispatch) => {
  dispatch({ type: ADDPROJECT_REQUEST });

  fetch("http://localhost:7070/projects/addProject", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: ADDPROJECT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADDPROJECT_FAILURE });
    });
};

export const getProjectsFun = (token) => (dispatch) => {
  dispatch({ type: GETPROJECT_REQUEST });

  fetch("http://localhost:7070/projects/get", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: GETPROJECT_SUCCESS,
        payload: res.projects,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GETPROJECT_FAILURE });
    });
};

export const getAllUsersFun = (token) => (dispatch) => {
  dispatch({ type: ALLUSERS_REQUEST });

  fetch("http://localhost:7070/projects/allusers", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({
        type: ALLUSERS_SUCCESS,
        payload: res.users,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ALLUSERS_FAILURE });
    });
};

export const updateProjectFun = (data, id, token) => (dispatch) => {
  dispatch({ type: UPDATEPROJECT_REQUEST });

  fetch(`http://localhost:7070/projects/update/${id}`, {
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
        type: UPDATEPROJECT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATEPROJECT_FAILURE });
    });
};
export const updateProjectChatFun = (data, id, token) => (dispatch) => {
  dispatch({ type: UPDATEPROJECT_REQUEST });

  fetch(`http://localhost:7070/projects/updateChat/${id}`, {
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
        type: UPDATEPROJECT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATEPROJECT_FAILURE });
    });
};

// export const deleteTaskFun=(id)=>(dispatch)=>{

//   dispatch({ type:DELETETASK_REQUEST})

//   fetch(`http://localhost:7070/tasks/delete/${id}`, {
//     method: "DELETE",
//     headers: { "Content-type": "application/json" },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//       dispatch({
//           type:DELETETASK_SUCCESS,
//       })
//     })
//     .catch((err) => {console.log(err)
//     dispatch({type:DELETETASK_FAILURE })}
//     );
// }
