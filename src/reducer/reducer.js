/* eslint-disable prettier/prettier */
import{CREATE, RETRIEVE, UPDATE, DELETE, DELETE_ALL} from '../action/type';

const initialState = [];

const reducer = (state = initialState, action) => {
    const { type, payload} = action;
    switch(type){
        case RETRIEVE:
            return payload;
    }
}