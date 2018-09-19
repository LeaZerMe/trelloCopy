import { ADD_ARTICLE } from "./actionsType";
import { REMOVE_ARTICLE } from "./actionsType";
import { SET_DELETING_VALUE } from "./actionsType";
import { CHANGE_MODAL } from "./actionsType";
import { SET_DELETE_ACCESS } from "./actionsType";
import { ADDING_ELEMENT } from "./actionsType";
import { ADD_ELEMENT } from "./actionsType";
import { EDIT_CLOSE_ARRAY } from "./actionsType";
import { initialState } from "./defaultState"

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_ARTICLE: 

			return {
				...state,
				articles: state.articles.concat([{title: action.name,articles: [{title:"Now is nothing"}]}])
			}
		case REMOVE_ARTICLE: 

			let editedArr = state.articles.filter((a) => a.title != action.name)
			return {...state, articles: editedArr}
			case CHANGE_MODAL: 

			return {
				...state,
				modalTrue: action.state
			}
		case SET_DELETING_VALUE: 

			return {
				...state,
				deletingValue: action.name
			}
		case SET_DELETE_ACCESS: 

			return {
				...state,
				accessToDelete: action.state
			}
		case ADDING_ELEMENT:

			return {
				...state,
				adding: action.state
			}
		case ADD_ELEMENT:

			let array = state.articles;
			array.map((a) => {
				if(a.articles[0].title == "Now is nothing") {
					a.articles[0] = action.data.element
				} else if(a.title == action.data.title) {
					a.articles.push(action.data.element)
				}
			})
	
			return {
				...state,
				articles: array
			}
		case EDIT_CLOSE_ARRAY:
		
			return {
				...state,
				closed: action.arr
			}
		default: return state;
	}
};

export default rootReducer;