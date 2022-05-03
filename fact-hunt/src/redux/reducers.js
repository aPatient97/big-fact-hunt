import {
    change_category,
    change_difficulty,
} from './actionTypes';

const initialState = { 
    type_category: '',
    type_difficulty: ''
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
        default:
            return state;
    }   

};

export default reducer;