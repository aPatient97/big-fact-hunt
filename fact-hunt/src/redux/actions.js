import {
    change_category,
    change_difficulty,
    change_url,
    user_data
} from './actionTypes'

export const handleCategoryChange = (e) =>({
    type: change_category,
    payload: e.target.category.value,
});

export const handleDifficultyChange = (e) => ({
    type: change_difficulty,
    payload: e.target.difficulty.value,
});

export const handleQuizUrl = (url) => ({
    type: change_url,
    payload: url,
})

export const handleData = (userObj) => ({
    type: user_data,
    payload: userObj,
})
