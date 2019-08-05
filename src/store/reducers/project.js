import produce from "immer";
import * as projectActionTypes from "../actionTypes/project";

const initialState = {
  projects: [
    {
      id: 1,
      title: "Title 01",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nemo iusto veniam tenetur perspiciatis quas pariatur quis ad iure autem."
    },
    {
      id: 2,
      title: "Title 02",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nemo iusto veniam tenetur perspiciatis quas pariatur quis ad iure autem."
    },
    {
      id: 3,
      title: "Title 03",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nemo iusto veniam tenetur perspiciatis quas pariatur quis ad iure autem."
    }
  ]
};

const projectReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case projectActionTypes.CREATE_PROJECT_SUCCESS:
        draft.projects.push(action.payload.project);
      default:
        return draft;
    }
  });

export default projectReducer;
