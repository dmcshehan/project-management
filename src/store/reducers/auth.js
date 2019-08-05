import produce from "immer";

const initialState = {
  user: null
};

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        return draft;
    }
  });

export default authReducer;
