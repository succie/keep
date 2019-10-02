import nanoid from 'nanoid';

export type Keep = {
  id: string;
  value: string;
  isOpen: boolean;
  mode: 'preview' | 'edit';
};

enum ActionTypes {
  ADD_KEEP = 'ADD_KEEP',
  DELETE_KEEP = 'DELETE_KEEP',
  CHANGE_MODE_KEEP = 'CHANGE_MODE_KEEP'
}

interface AddKeepAction {
  type: ActionTypes.ADD_KEEP;
  payload: {
    value: string;
  };
}

interface DeleteKeepAction {
  type: ActionTypes.DELETE_KEEP;
  payload: {
    id: string;
  };
}

interface ChangeModeKeepAction {
  type: ActionTypes.CHANGE_MODE_KEEP;
  payload: {
    id: string;
    mode: 'preview' | 'edit';
  };
}

type KeepActions = AddKeepAction | DeleteKeepAction | ChangeModeKeepAction;

export function addKeep(value: string): KeepActions {
  return {
    type: ActionTypes.ADD_KEEP,
    payload: {
      value
    }
  };
}

export function deleteKeep(id: string): KeepActions {
  return {
    type: ActionTypes.DELETE_KEEP,
    payload: {
      id
    }
  };
}

export function changeModeKeep(id: string, mode: 'preview' | 'edit'): KeepActions {
  return {
    type: ActionTypes.CHANGE_MODE_KEEP,
    payload: {
      id,
      mode
    }
  };
}

type KeepState = {
  keeps: Keep[];
};

const initialState: KeepState = {
  keeps: Array(12)
    .fill(null)
    .map(() => ({ id: nanoid(), value: nanoid(), isOpen: false, mode: 'preview' }))
};

export function keepReducer(state = initialState, action: KeepActions): KeepState {
  switch (action.type) {
    case ActionTypes.ADD_KEEP:
      return {
        keeps: [
          ...state.keeps,
          { id: nanoid(), value: action.payload.value, isOpen: false, mode: 'preview' }
        ]
      };
    case ActionTypes.DELETE_KEEP:
      return {
        keeps: state.keeps.filter(keep => keep.id !== action.payload.id)
      };
    case ActionTypes.CHANGE_MODE_KEEP:
      return {
        keeps: state.keeps.map(keep => {
          if (keep.id === action.payload.id) {
            keep.mode = action.payload.mode;
          }
          return keep;
        })
      };
    default:
      return state;
  }
}
