import {
    change_url,
    user_data
} from './actionTypes'

export const handleQuizUrl = (url) => ({
    type: change_url,
    payload: url,
})

export const handleData = (userObj) => ({
    type: user_data,
    payload: userObj,
})
