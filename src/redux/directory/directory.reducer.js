import SECTION_DATA from './sections.data';

const INITIAL_STATE = {
  sections: SECTION_DATA
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;