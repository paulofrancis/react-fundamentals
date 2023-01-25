import React from "react";
import students from "../../data/students";

export default () => {

    const list = students.map((student) => {
        return (
            <li key={student.id}>
                {student.id}. {student.name} -&gt; {student.score}
            </li>
        );
    });

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {list}
            </ul>
        </div>
    )
}