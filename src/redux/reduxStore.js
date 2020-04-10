import { createStore, combineReducers, applyMiddleware } from 'redux';
import { profileReduser } from './profileReduser';
import { dialogsReduser } from './dialogsReduser';
import { usersReduser } from './usersReduser';
import { authReducer } from './auth-reduser';
import { appReducer } from './app-reduser';
import { reducer as formReducer } from 'redux-form';

import thunkMiddleware from 'redux-thunk';

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;




