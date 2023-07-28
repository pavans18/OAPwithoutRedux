import style from "../../SubjectComponent/Subject.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import baseUrl from "../../../../baseUrl";
import { getDetailsOfParticularExam } from "../../../../../store/slices/ExamSlice";
import { useDispatch, useSelector } from "react-redux";

function Details() {

   //const { id } = useParams();

   const [id, setId] = useState();

   //const [exam, setExam] = useState();

   const dispatch = useDispatch();

   // -------------------------Go back button function---------------------------------------

   let history = useHistory();

   function handleGoBack() {
      history.push("/AdminDashboard/Exam");
   }

   const { post, isLoading } = useSelector((state) => ({ ...state.exams }));

   const [exam, setExam] = useState({
      name: "",
      desc: "",
      level: "",
      passMarks: "",
      totalQuestion: "",
      marks: "",
      date: ""
   });


   useEffect(() => {
      dispatch(getDetailsOfParticularExam({ id }));
      setId("");
      setExam(post.data);
   }, [dispatch, id])

   if (isLoading) {
      return <div>Loading Exams ....</div>
   }



   // useEffect(() => {

   //    async function getExamDetails() {
   //       const value = await axios.get(`${baseUrl}/apiexam/getParticularExam/${id}`);
   //       setExam(value.data);
   //    }
   //    getExamDetails();
   // }, [id])




   return (
      <>
         <div id={style.displayHeadingBox}>
            <h2>Exam Details</h2>
         </div>

         <div id={style.tableBox}>
            <table >
               <thead >



                  <tr>
                     <th id={style.center}>Exam Name</th>
                     <td id={style.center}> {post.name.subject} </td>
                  </tr>

                  <tr>
                     <th id={style.center}>Exam Description</th>
                     <td id={style.center}> {post.desc} </td>
                  </tr>

                  <tr>
                     <th id={style.center}>Exam Creation Date</th>
                     <td id={style.center}> {post.date} </td>
                  </tr>

                  <tr>
                     <th id={style.center}>Exam TotalMarks</th>
                     <td id={style.center}> {post.marks} </td>
                  </tr>

                  <tr>
                     <th id={style.center}>Exam TotalQuestion</th>
                     <td id={style.center}> {post.totalQuestion} </td>
                  </tr>

                  <tr>
                     <th id={style.center}>Exam PassMarks</th>
                     <td id={style.center}> {post.passMarks} </td>
                  </tr>

                  <tr>
                     <th id={style.center}>Exam Level</th>
                     <td id={style.center}> {post.level} </td>
                  </tr>
               </thead>
            </table>

         </div>

         <div id={style.addSubjectBox}>
            <button onClick={handleGoBack}>Go Back</button>
         </div>
      </>
   );
}

export default Details;