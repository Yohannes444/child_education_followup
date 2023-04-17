import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Auth } from './reducers/auth';
import { User } from './reducers/user';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
import  { TeachSignup } from './reducers/teacherSignup'
import { cashiSignup } from './reducers/cashierADD'
import { ParentSignup } from './reducers/parentSignup';
import { configClassRoomState } from './reducers/classRoom'
import { cashierLoader } from './reducers/cashierStore'
import { teacherLoader } from './reducers/tacherStore'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            
            user: User,
            auth: Auth,
            teacher:TeachSignup,
            cashier:cashiSignup,
            parent:ParentSignup,
            cashiers:cashierLoader,
            classRoom:configClassRoomState,
            teachers:teacherLoader,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}