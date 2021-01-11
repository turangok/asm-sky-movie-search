import { ACTION_TYPES } from '../reducers/searchReducer';
import to from 'await-to-js'

import { getSearch } from '../../services/SearchServices';


export const fetchSearchResults = (params, isSearch) => async dispatch => {

    const [err, payload] = await to(getSearch(params))
    const newPayload = { ...payload, searchType: params.type }
    if (err) {
        return
    }

    dispatch({
        type: isSearch ? ACTION_TYPES.SET_SEARCH_RESULTS : ACTION_TYPES.SET_SEARCH_KEYWORDS,
        payload: newPayload
    })
}