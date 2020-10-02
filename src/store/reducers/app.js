import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    error: null,
    loading: false,
    data: [],
};

const getDataStart = (state, action) => {
    return updateObject( state, { error: null, loading: true } );
};

const getDataSuccess = (state, action) => {
    return updateObject( state, { 
        data: action.data,
        error: null,
        loading: false
     } );
};

const getDataFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_DATA_START: return getDataStart(state, action);
        case actionTypes.GET_DATA_SUCCESS: return getDataSuccess(state, action);
        case actionTypes.GET_DATA_FAIL: return getDataFail(state, action);
        default:
            return state;
    }
};

export default reducer;