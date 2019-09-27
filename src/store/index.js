import axios from "axios";
import { ActionType } from 'redux-promise-middleware';

const initialState = { joke: "", categories: "" };

const URL = 'http://api.icndb.com/jokes/random';
const CATEGORIES = '[nerdy]'; //?limitTo
const FETCH = "FETCH";

export const actionCreators = {
    fetchJoke: () => {
        return {
            type: FETCH,
            payload: axios.get(URL, {
                params: {
                    limitTo: CATEGORIES
                }
            })
        }
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH + "_" + ActionType.Pending: {
            return {...state, joke: "waiting ..."};
        }
        case FETCH + "_" + ActionType.Fulfilled: {

            return {...state, joke: action.payload.data.value.joke,
                        categories: action.payload.data.value.categories};
        }
        default : {
            return state;
        }
    }
};