import * as ActionTypes from '../ActionsType';

export const teacherLoader = (state = {
        teachers: [],
        isLoading: false,
        loadCashier: false,
        errMess: null
    }, action) => {
    switch (action.type) {
        case ActionTypes.TEACHER_FETCH_REQUST:
            return {...state,
                isLoading: true,
                teachers:[],
                loadCashier: false,
                errMess:null
            };
        case ActionTypes.TEACHER_LOADED:
            var teacher = action.payload;
            return {...state,
                isLoading: false,
                errMess: '',
                loadCashier:true,
                teachers:state.teachers.concat(teacher)

            };
        case ActionTypes.FECH_TEACHER_FAILD:
            return {...state,
                isLoading: false,
                teachers: [],
                loadCashier: false,
                errMess: action.message
                
            };
            
        
        default:
            return state
    }
}