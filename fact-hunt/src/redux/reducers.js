import {
    change_url,
    user_data
} from './actionTypes';

const initialState = { 
    change_url: 'https://opentdb.com/api.php?amount=10&category=&difficulty=easy&type=multiple',
    user_data: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case change_url:
            return {
                ...state,
                change_url: action.payload,
            }
        case user_data:
            return {
                ...state,
                user_data: action.payload,
            }
        default:
            return state;
    }   

};

export default reducer;
