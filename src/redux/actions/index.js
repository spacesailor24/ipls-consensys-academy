import {
    SET_3BOX_PROFILE,
    SET_ACCOUNTS,
    SET_CONTRACTS,
    SET_ISLOGGEDINTO3BOX, SET_REGISTERED_USER,
    SET_WEB3
} from '../constants/action-types';

export function setWeb3(payload) {
    return { type: SET_WEB3, payload }
}

export function setAccounts(payload) {
    return { type: SET_ACCOUNTS, payload }
}

export function setIsLoggedInto3Box(payload) {
    return { type: SET_ISLOGGEDINTO3BOX, payload }
}

export function set3BoxProfile(payload) {
    return { type: SET_3BOX_PROFILE, payload}
}

export function setContracts(payload) {
    return { type: SET_CONTRACTS, payload}
}

export function setRegisteredUser(payload) {
    return { type: SET_REGISTERED_USER, payload}
}