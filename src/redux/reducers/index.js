import {
    SET_3BOX_PROFILE,
    SET_ACCOUNTS,
    SET_CONTRACTS,
    SET_ISLOGGEDINTO3BOX, SET_REGISTERED_USER,
    SET_WEB3
} from "../constants/action-types";

const initialState = {
    web3: null,
    accounts: [],
    contracts: {},
    isLoggedInTo3Box: null,
    threeBoxProfile: null,
    registeredUser: null
};

function rootReducer(state = initialState, action) {

    if (action.type === SET_WEB3) {
        return Object.assign({}, state, {
            web3: action.payload
        });
    }

    if (action.type === SET_ACCOUNTS) {
        return Object.assign({}, state, {
            accounts: action.payload
        });
    }

    if (action.type === SET_ISLOGGEDINTO3BOX) {
        return Object.assign({}, state, {
            isLoggedInTo3Box: action.payload
        });
    }

    if (action.type === SET_3BOX_PROFILE) {
        return Object.assign({}, state, {
            threeBoxProfile: action.payload
        });
    }

    if (action.type === SET_CONTRACTS) {
        return Object.assign({}, state, {
            contracts: action.payload
        });
    }

    if (action.type === SET_REGISTERED_USER) {
        return Object.assign({}, state, {
            registeredUser: action.payload
        });
    }

    return state;
}

export default rootReducer;