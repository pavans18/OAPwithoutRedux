import style from "./Dashboard.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import baseUrl from "../../../baseUrl";

function Dashboard() {

    const [exam, setExam] = useState("Exam List");
    const [question, setQuestion] = useState("Questions");

    useEffect(() => {
        async function getAllExam() {
            let value = await axios.get(`${baseUrl}/exam`);
            // setExam("We have total " + value.data.length + " exam");
        }
        getAllExam();


        async function getAllQuestions() {
            let value = await axios.get(`${baseUrl}/question`);
            // setQuestion("We have total " + value.data.length + " question");
        }
        getAllQuestions();

    })


    let history = useHistory();

    function showExam() {
        history.push("/AdminDashboard/Exam");
    }

    function showQuestions() {
        history.push("/AdminDashboard/Question");
    }



    return (
        <>
            <div id={style.displayHeadingBox}>
                <h1>Dashboard</h1>
            </div>

            <div id={style.box1}>
                <p >{exam}</p>
                <button onClick={showExam}>View Details</button>
            </div>

            <div id={style.box2}>
                <p >{question}</p>
                <button onClick={showQuestions}>View Details</button>
            </div>

        </>
    );
}

export default Dashboard;