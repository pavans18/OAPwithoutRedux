import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../components/baseUrl";

export const getAllExams = createAsyncThunk(
    "exams/getAllExams",
    async () => {
        return fetch(`${baseUrl}/apiexam/showAvailableExams`, {
            method: "GET",
        }).then((res) => res.json());
    });

export const deleteExamById = createAsyncThunk(
    "exams/deleteExamById",
    async ({ id }) => {
        return fetch(`${baseUrl}/apiexam/deleteExam/${id}`, {
            method: "DELETE",
        }).then((res) => res.json());

    });

export const getDetailsOfParticularExam = createAsyncThunk(
    "exams/getDetailsOfParticularExam",
    async ({ id, values }) => {

        return fetch(`${baseUrl}/apiexam/getParticularExam/${id}`).then((res) => res.json());

        // return fetch(`${baseUrl}/apiexam/getParticularExam/${id}`, {
        //     method: "GET",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify({

        //         name: values.name,
        //         desc: values.desc,
        //         level: values.level,
        //         passMarks: values.passMarks,
        //         totalQuestion: values.totalQuestion,
        //         marks: values.marks,
        //         date: values.date

        // }),
        // }).then((res) => res.json());

    });



const ExamSlice = createSlice({
    name: "exams",
    initialState: {
        post: [],
        loading: false,
        error: null
    },
    extraReducers: {
        [getAllExams.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllExams.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload;
        },
        [getAllExams.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        [deleteExamById.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteExamById.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = [action.payload];
        },
        [deleteExamById.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        [getDetailsOfParticularExam.pending]: (state, action) => {
            state.loading = true;
        },
        [getDetailsOfParticularExam.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = [action.payload];
        },
        [getDetailsOfParticularExam.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const examReducer = ExamSlice.reducer;
