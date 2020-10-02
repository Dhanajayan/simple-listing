import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getDataStart = () => {
    return {
        type: actionTypes.GET_DATA_START
    };
};

export const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data
    };
};

export const getDataFail = (error) => {
    return {
        type: actionTypes.GET_DATA_FAIL,
        error: error
    };
};
export const getData = () => {
	return dispatch => {
        dispatch(getDataStart());
        
        let url = 'http://localhost:8080/data';
        axios.get(url, {})
            .then(response => {
                console.log("RESPONSE ", response);
                dispatch(getDataSuccess(response.data));
            })
            .catch(err => {
                dispatch(getDataFail("Failed"));
            });
    };
}