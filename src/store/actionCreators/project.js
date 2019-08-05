import * as projectActionTypes from "../actionTypes/project";
const onCreateProject = project => {
  return {
    type: projectActionTypes.CREATE_PROJECT_SUCCESS,
    payload: {
      project
    }
  };
};

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //come async work
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Shehan",
        authorLastName: "Disanayake",
        createdAt: new Date()
      })
      .then(({ id }) => {
        dispatch(onCreateProject({ ...project, id }));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
