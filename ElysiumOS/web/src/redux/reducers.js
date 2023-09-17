
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  assistant: {
    name: '',
    personality: '',
    accent: '',
  },
  customization: {
    vocabularies: [],
    dialogTrees: [],
  },
};

const assistantReducer = createReducer(initialState.assistant, {
  SET_ASSISTANT: (state, action) => {
    state.name = action.payload.name;
    state.personality = action.payload.personality;
    state.accent = action.payload.accent;
  },
});

const customizationReducer = createReducer(initialState.customization, {
  SET_CUSTOMIZATION: (state, action) => {
    state.vocabularies = action.payload.vocabularies;
    state.dialogTrees = action.payload.dialogTrees;
  },
});

export default combineReducers({
  assistant: assistantReducer,
  customization: customizationReducer,
});
