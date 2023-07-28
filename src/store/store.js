import { configureStore } from "@reduxjs/toolkit";
import { examReducer } from "./slices/ExamSlice";
import { questionReducer } from "./slices/QuestionSlice";
import { subjectReducer } from './slices/SubjectSlice';
import { resultReducer } from "./slices/ResultSlice";
import { studentReducer } from "./slices/StudentSlice";
import { authReducer } from "./slices/authSlice";
import { authApi } from "../components/Authentication/authService";


export const store = configureStore({
    reducer: {
        subjects: subjectReducer,
        exams: examReducer,
        questions: questionReducer,
        results: resultReducer,
        students: studentReducer,
        auth: authReducer

    }

});