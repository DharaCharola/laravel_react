import { SET_DOCS, SET_PREVIEW_DOC } from "../actions/docActions"

const initialState = { 
	docs: [],
	previewDoc: ""
} 

const docReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_DOCS: {
			return {
				...state, docs: action.payload
			}
		}
		case SET_PREVIEW_DOC: {
			return {
				...state, previewDoc: action.payload
			}
		}
		default:
		return state
	}
}   

export default docReducer;
