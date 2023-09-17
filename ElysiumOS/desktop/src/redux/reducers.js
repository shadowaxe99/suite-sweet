
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  assistant: {
    name: '',
    personality: '',
    accent: '',
    context: {},
    habits: [],
    offlineMode: false,
  },
  customization: {
    vocabularies: [],
    dialogTrees: [],
    settings: {},
  },
};

const assistantReducer = (state = initialState.assistant, action) => {
  switch (action.type) {
    case 'SET_ASSISTANT':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const customizationReducer = (state = initialState.customization, action) => {
  switch (action.type) {
    case 'SET_CUSTOMIZATION':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  assistant: assistantReducer,
  customization: customizationReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
