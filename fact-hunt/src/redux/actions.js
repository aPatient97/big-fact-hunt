import {
    change_category,
    change_difficulty,
} from './actionTypes'

export const handleCategoryChange = (e) =>({
    type: change_category,
    payload: e.target.category.value,
});

export const handleDifficultyChange = (e) => ({
    type: change_difficulty,
    payload: e.target.difficulty.value,
});