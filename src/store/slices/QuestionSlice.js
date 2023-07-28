import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../components/baseUrl";

export const getAllQuestions = createAsyncThunk(
    "questions/getAllQuestions",
    async () => {
        return fetch(`${baseUrl}/apiquestion/showQuestions`, {
            method: "GET",
        }).then((res) => res.json());
    });

export const getAllQuestionsByExamId = createAsyncThunk(
    "questions/getAllQuestionsByExamId",
    async ({ id }) => {
        return fetch(`${baseUrl}/apiquestion/getQuestionsByExam/${id}`, {
            method: "GET",
        }).then((res) => res.json());
    });

export const deleteQuestionForExamById = createAsyncThunk(
    "questions/deleteQuestionForExamById",
    async ({ id }) => {
        return fetch(`${baseUrl}/apiquestion/deleteQuestionInExam/${id}`, {
            method: "DELETE",
        }).then((res) => res.json());

    });

export const getDetailsOfParticularExam = createAsyncThunk(
    "questions/getDetailsOfParticularExam",
    async ({ id, values }) => {
        return fetch(`${baseUrl}/apiexam/getParticularExam/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({

                name: values.name,
                desc: values.desc,
                level: values.level,
                passMarks: values.passMarks,
                totalQuestion: values.totalQuestion,
                marks: values.marks,
                date: values.date

            }),
        }).then((res) => res.json());

    });

export const addQuestiontoExam = createAsyncThunk(
    "subjects/addQuestiontoExam",
    async ({ values }) => {
        return fetch(`${baseUrl}/apiquestion/addQuestion`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                qname: values.qname,
                optionOne: values.optionOne,
                optionTwo: values.optionTwo,
                optionThree: values.optionThree,
                optionFour: values.optionFour,
                answer: values.answer,
                ename: values.ename,
                sname: values.sname
            }),
        }).then((res) => res.json());

    });



const QuestionSlice = createSlice({
    name: "questions",
    initialState: {
        post: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [getAllQuestions.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllQuestions.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
        },
        [getAllQuestions.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        [getAllQuestionsByExamId.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllQuestionsByExamId.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
        },
        [getAllQuestionsByExamId.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        [addQuestiontoExam.pending]: (state, action) => {
            state.loading = true;
        },
        [addQuestiontoExam.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
        },
        [addQuestiontoExam.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


    },
});

export const questionReducer = QuestionSlice.reducer;
