import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import style from "../SubjectComponent/Subject.module.css";

import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsinAdminBoard } from "../../../../store/slices/StudentSlice";

function StudentList() {

  const dispatch = useDispatch();

  //------------------------to get all students in admin board----

  const { post, isLoading } = useSelector((state) => ({ ...state.students }));

  useEffect(() => {
    dispatch(getAllStudentsinAdminBoard())
  }, [])

  if (isLoading) {
    return <div>Loading students list...</div>
  }





  // const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   async function getAllStudent() {
  //     let value = await axios.get("http://localhost:8082/api/user/allUser");
  //     setStudents(value.data);
  //   }
  //   getAllStudent();
  // }, [])

  return (
    <>
      <div id={style.displayHeadingBox}>
        <h2>Student List</h2>
      </div>

      <div id={style.tableBox}>
        <table>
          <thead>
            <tr>
              <th id={style.center}>User Name</th>
              <th id={style.center}>User Email</th>
              <th id={style.center}>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              post.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.username}</td>
                    <td>{data.email}</td>
                    <td>
                      {/* <NavLink exact to={`/AdminDashboard/StudentList/Details/${data.email}`}> */}
                      <NavLink exact to={`/AdminDashboard/StudentList/Details/${data.email}`}>
                        <button>View Result</button>
                      </NavLink>
                    </td>
                  </tr>
                );
              })
            }

          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;