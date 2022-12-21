import React from "react";
import { useState } from "react";
// import {StudentList} from './StudentList';
let random = Math.floor(Math.random()*50);

const students = [{
    studentId: 1,
    name: "Alex",
    age: 30
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
const DataTable = () => {
const TableHeader = () => {
    return(
            <thead>
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
    return <button type="button" value={key} >Details</button>
}

const TableRow = () => {
    let [studentList, setStudents] = useState([])
    studentList = students
    const listItems = studentList.map((student) =>
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
        <table border="10">
        <TableHeader />
        <TableRow />
        </table>
    </div>
    )
}



export default DataTable;