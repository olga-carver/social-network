import { createStore, combineReducers } from 'redux';
import { profileReduser } from './profileReduser';
import { dialogsReduser } from './dialogsReduser';
import { usersReduser } from './usersReduser';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser
});

let store = createStore(redusers);

export default store;




