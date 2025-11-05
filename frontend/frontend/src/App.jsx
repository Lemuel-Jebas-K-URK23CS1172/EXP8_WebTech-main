import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    const res = await axios.get("https://exp8-webtechnology.onrender.com/api/assignments");
    setAssignments(res.data);
  };

  const addAssignment = async () => {
    await axios.post("https://exp8-webtechnology.onrender.com/api/assignments", {
      title,
      subject,
      dueDate,
      description,
    });
    setMessage("Assignment Added Successfully");
    setTitle("");
    setSubject("");
    setDueDate("");
    setDescription("");
    fetchAssignments();
  };

  const deleteAssignment = async (id) => {
    await axios.delete(`https://exp8-webtechnology.onrender.com/api/assignments/${id}`);
    fetchAssignments();
  };

  return (
    <div className="container">
      <h2>📚 Virtual Classroom — Add Assignment</h2>
      <form>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
        <input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} /><br />
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} /><br />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3"></textarea><br />
        <button type="button" onClick={addAssignment}>Add Assignment</button>
        <p className="success">{message}</p>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Subject</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a, i) => (
            <tr key={a._id}>
              <td>{i + 1}</td>
              <td>{a.title}</td>
              <td>{a.subject}</td>
              <td>{a.dueDate}</td>
              <td>{a.description}</td>
              <td><button className="delete-btn" onClick={() => deleteAssignment(a._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
