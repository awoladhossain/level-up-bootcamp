import {
  ADD_TODO,
  FILTER_TODO,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETED,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCH_TERM,
} from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const togoleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const makeCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const makeIncompleted = (id) => ({
  type: MARK_INCOMPLETED,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODO,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTearm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});