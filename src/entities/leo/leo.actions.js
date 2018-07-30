import store from '../../store';

import { ROWS_HAS_CHANGED } from './leo.types';

export function updateRows(rows) {
  store.dispatch({
    type: ROWS_HAS_CHANGED,
    data: {
      rows,
    },
  });

  return this;
}
