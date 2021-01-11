import produce from 'immer';

export const ACTION_TYPES = {
    SET_SEARCH_RESULTS: "SET_SEARCH_RESULTS",
    SET_SEARCH_KEYWORDS: "SET_SEARCH_KEYWORDS"
}

export const initialState = {
    searchResults: {},
    searchKeywords: [],
    error: ''
}

const searchReducer = (state = initialState, action) =>

    produce(state, (draft) => {

        switch (action.type) {
            case ACTION_TYPES.SET_SEARCH_RESULTS:
                draft.searchResults = action.payload
                break;
            case ACTION_TYPES.SET_SEARCH_KEYWORDS:
                draft.searchKeywords = action.payload?.results?.map((item) => item.media_type === 'movie' ? { label: item.title, value: item.title } : { label: item.name, value: item.name })
                break;
            default:
                break;
        }
    }
    )

export default searchReducer;
