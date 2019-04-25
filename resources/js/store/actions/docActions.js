import axios from "axios"

export const SET_DOCS = "SET_DOCS";
export const SET_PREVIEW_DOC = "SET_PREVIEW_DOC";

export function setDocs(docs) {
    return {
        type: SET_DOCS,
        payload: docs
    }
}

export function setPreviewDoc(doc) {
    return {
        type: SET_PREVIEW_DOC,
        payload: doc
    }
}

export function getDocs() {
    return (dispatch, getState) => {
        axios.get('api/getalldocs')
        .then(response => {
            dispatch(setDocs(response.data))
        })
    }
}