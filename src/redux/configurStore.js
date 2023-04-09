import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Auth } from './auth';
import { User } from './user';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
import  { TeachSignup } from './teacherSignup'
import { cashiSignup } from './cashierADD'
import { ParentSignup } from './parentSignup';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            
            user: User,
            auth: Auth,
            teacher:TeachSignup,
            cashier:cashiSignup,
            parent:ParentSignup,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}