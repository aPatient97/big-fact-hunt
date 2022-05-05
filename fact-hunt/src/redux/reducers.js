import {
    change_category,
    change_difficulty,
    change_url,
    user_data
} from './actionTypes';

const initialState = { 
    type_category: '',
    type_difficulty: '',
    change_url: '',
    user_data: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case change_category:
            return {
                ...state,
            type_category: action.payload,        
            }
        case change_difficulty:
            return {
                ...state,
                type_difficulty: action.payload,
            }
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
