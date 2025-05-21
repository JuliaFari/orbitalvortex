// src/pages/Teacher.js
import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Teacher() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      setStudents(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Painel do Professor</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Dias Consecutivos</th>
            <th>Questões Completas</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.accessCode}>
              <td>{student.name}</td>
              <td>{student.streak}</td>
              <td>{student.completedQuestions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}