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
import { childSignup } from './reducers/studentRducer';
import { ClassRoomLoader } from './reducers/classRoomStore';
import { wightListLoader } from './reducers/waitListRducer';
import { toggleWightList } from './reducers/toggleWaitList';
import { asignedClassRoom } from './reducers/asignedClassRoom';
import { uploadReducer } from './reducers/uploadReducer';
import { attendanceReducer } from './reducers/attendanceReducer';
import { uploadAssignmentReducer } from './reducers/uploadAssignment'
import { uploadGreedReducer } from './reducers/uploadGreed'
import { childListLoader } from './reducers/studentStateStor'
import { childInfoLoader } from './reducers/childInfoReducer';
import { uploadReceiptStore } from './reducers/uploadReceiptStore'
import { MonthlyFeeListReducer } from './reducers/monthlyFeeListReducer';
import { getMonthlyFeeState } from './reducers/togleMonthlyFeeReducer';
import { classRoomListLoader } from './reducers/classRoomListReducer';
import { allChatsLoader }from './reducers/chatReducer'
import { OneChatsLoader } from './reducers/oneChatReducer';
import { userInfoLoader } from './reducers/userInfo'
import { ClassRoomGradeLoader } from './reducers/getallGradeT'
import { feedBackLoader } from './reducers/feadBackReducer';
import { feedBackDelete } from './reducers/deleteFeadBack';
import { AttendanceLoader } from './reducers/fetchAttendace'
import { AttendancLoader } from './reducers/teacherAttendance'
import { AllMonthlyFee } from './reducers/fetchAllMonthlyfee';
import { AllStudentsLoader } from './reducers/fetchAllChildren';
import { OneStudentMonthlyLoader } from './reducers/fetchStudentsMonthlyFee'
import { AllParentsLoader } from './reducers/allParents';
import { deleteCashier } from './reducers/deleteCasheir';
import { deleteTeacher } from './reducers/deleteTeacher'
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            
            user: User,
            auth: Auth,
            teacher:TeachSignup,
            cashierSign:cashiSignup,
            parent:ParentSignup,
            cashiers:cashierLoader,
            classRoom:configClassRoomState,
            teachers:teacherLoader,
            childFlag:childSignup,
            ClassRooms:ClassRoomLoader,
            wightLists:wightListLoader,
            toggleWightList:toggleWightList,
            asignedClassRoom:asignedClassRoom,
            uploadState:uploadReducer,
            attendanceState:attendanceReducer,
            assignmentState:uploadAssignmentReducer,
            uploadGreedState:uploadGreedReducer,
            childLists:childListLoader,
            childInfo:childInfoLoader,
            paymentState:uploadReceiptStore,
            MonthlyFeeList:MonthlyFeeListReducer,
            getMonthlyFeeState:getMonthlyFeeState,
            classRoomList:classRoomListLoader,
            allChats:allChatsLoader,
            oneChats:OneChatsLoader,
            userInfo:userInfoLoader,
            ClassRoomsGrade:ClassRoomGradeLoader,
            feedBack:feedBackLoader,
            feedBackDelete:feedBackDelete,
            Attendances:AttendanceLoader,
            Attendanc:AttendancLoader,
            allMonthlyFee:AllMonthlyFee,
            allstudents: AllStudentsLoader,
            oneMonthlyFee:OneStudentMonthlyLoader,
            allParents:AllParentsLoader,
            deleteCashier:deleteCashier,
            deleteTeacher:deleteTeacher,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}