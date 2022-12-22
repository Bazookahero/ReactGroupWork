import React from "react";
import { useState } from "react";
// import {StudentList} from './StudentList';
let random = Math.floor(Math.random()*50);

const students = [{
    studentId: 1,
    name: "Alex",
    age: 30,
    birthDate: "92/04/16",
    phoneNumber: "000-000",
    livesIn: "Rörvik"
},
{
    studentId: 2,
    name: "Uzza",
    age: random
},
{
    studentId: 3,
    name: "Aladdin",
    age: random
},
{
    studentId: 4,
    name: "Sayeh",
    age: random
}]
// function DisplayDetails(key){
//     let toggleDetails = document.getElementById("details")
//     toggleDetails.innerHTML = "";
//     students.forEach(student =>{
//         if(key === student.studentId)
//         {
//             toggleDetails.innerHTML = 
//             <div>
//                <tr>
//     <td>{student.phoneNumber}</td>
//     <td>{student.birthDate}</td>
//     <td>{student.livesIn}</td>
// </tr> 
//             </div>
//         }
//     })

// }
const DataTable = () => {
const TableHeader = () => {
    return(
            <thead >
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
                </tr>
            </thead>
    )
}

const TableAction = (key) => {
    return <button type="button" value={key}  >Details</button> // onClick={DisplayDetails(key)}
}

const TableRow = () => {
    let [setStudentList] = useState([])
    setStudentList = students
    const listItems = setStudentList.map((student) =>
<tr>
    <td>{student.studentId}</td>
    <td>{student.name}</td>
    <td>{student.age}</td>
    <td key={student.studentId.toString()}><TableAction/></td>
</tr>
)
return(
    <tbody>
            {listItems}
    </tbody>
)
}
return(
    <div>
        <table border="10" className="table">
        <TableHeader />
        <TableRow />
        </table>
    </div>
    )
}




export default DataTable;