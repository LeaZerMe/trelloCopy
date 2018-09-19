import { ADD_ARTICLE } from "./actionsType";
import { REMOVE_ARTICLE } from "./actionsType";
import { SET_DELETING_VALUE } from "./actionsType";
import { CHANGE_MODAL } from "./actionsType";
import { SET_DELETE_ACCESS } from "./actionsType";
import { ADDING_ELEMENT } from "./actionsType";
import { ADD_ELEMENT } from "./actionsType";
import { EDIT_CLOSE_ARRAY } from "./actionsType";

export const addArticle = name => ({ type: ADD_ARTICLE, name: name });
export const removeArticle = name => ({ type: REMOVE_ARTICLE, name: name });
export const setDeletingValue = name => ({type: SET_DELETING_VALUE, name: name});

export const changeModal = type => ({type: CHANGE_MODAL, state: type});
export const setDeleteAccess = type => ({type: SET_DELETE_ACCESS, state: type});
export const addingElement = type => ({type: ADDING_ELEMENT, state: type});

export const addElementInArticle = obj => ({type: ADD_ELEMENT, data: obj});
export const editingCloseElems = arr => ({type: EDIT_CLOSE_ARRAY, arr: arr})

