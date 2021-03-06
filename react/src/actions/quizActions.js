import axios from 'axios';
import { API_BASE_URL, LOAD_QUIZ, GET_ERRORS, SET_QUIZ_LOADING, END_FREE_QUIZ, CLEAR_QUIZ_STATS } from './types';

export const fetchQuiz = () => dispatch => {
    axios.get(API_BASE_URL + '/api/quiz/all')
        .then(res => dispatch({
            type: LOAD_QUIZ,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};

export const getFreeQuestions = () => (dispatch) => {
   
    dispatch(setQuizLoading());
    axios.get(API_BASE_URL + "/api/quiz/getFreeQuiz")
        .then(res => dispatch({
           
                type: LOAD_QUIZ,
                payload: res.data,
               
            })
           
        )
        .catch(err => {
            console.error(err);
        });
        
};

export const endFreeQuiz = (quizData, history) => (dispatch) => {

    dispatch({
        type: END_FREE_QUIZ,
        payload: quizData
    });
    history.push('/quizSummary');
};

export const clearQuizStats = () => (dispatch) => dispatch({
    type: CLEAR_QUIZ_STATS,
    payload: {}
});

export const setQuizLoading = () => {
    return {
        type: SET_QUIZ_LOADING
    }
};
