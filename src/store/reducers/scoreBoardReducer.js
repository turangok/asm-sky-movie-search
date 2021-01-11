import produce from 'immer';

export const ACTION_TYPES = {
    UPDATE_SCOREBOARD: "UPDATE_SCOREBOARD",
    INITIALIZE_SCOREBOARD: 'INITIALIZE_SCOREBOARD'
}

export const initialState = {
    scoreBoard: [{ name: "John Sample", score: { last: 10, high: 20 } }]
}
const scoreBoardReducer = (state = initialState, action) =>

    produce(state, (draft) => {

        switch (action.type) {
            case ACTION_TYPES.UPDATE_SCOREBOARD:
                const user = state.scoreBoard.find((item) => item.name === action.payload.name)
                if (user) {
                    draft.scoreBoard = [
                        ...state.scoreBoard.filter((item) => item.name !== action.payload.name),
                        {
                            ...user,
                            score: {
                                last: action.payload.score,
                                high: action.payload.score > user.score.high ? action.payload.score : user.score.high
                            }
                        }
                    ]
                } else {
                    draft.scoreBoard = [...state.scoreBoard, { name: action.payload.name, score: { last: action.payload.score, high: action.payload.score } }]
                }
                draft.scoreBoard.sort((a, b) => b.score.high - a.score.high)
                break;
            case ACTION_TYPES.INITIALIZE_SCOREBOARD:
                draft.scoreBoard = initialState.scoreBoard;
                break;
            default:
                break;
        }
    }
    )

export default scoreBoardReducer;