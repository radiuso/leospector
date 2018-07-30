import update from 'react-addons-update';
import { ROWS_HAS_CHANGED } from './leo.types';

const initialState = {
  rows: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROWS_HAS_CHANGED:
      return update(state, {
        rows: { $set: action.data.rows },
      });
    default:
      return state;
  }
}