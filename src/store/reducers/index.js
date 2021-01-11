import { combineReducers } from 'redux';

import scoreBoard from './scoreBoardReducer';
import searchResults from './searchReducer';

export default combineReducers({
    scoreBoard,
    searchResults
})