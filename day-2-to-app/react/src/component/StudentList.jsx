import  { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";
import { addData, deleteData, fetchData, updateData } from "../store/StudentThunk";
import { useDispatch, useSelector } from "react-redux";


const StudentList = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.student);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateData({ id: editId, newData: { name, course }}));
      setEditId(null);
    } else {
      dispatch(addData({ name, course }));
    }
    setName("");
    setCourse("");
  };

  const handleEdit = (student) => {
    setName(student.name);
    setCourse(student.course);
    setEditId(student.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Student Management
        </h1>

      
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 mb-6"
        >
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <FaPlus />
            {editId ? "Update" : "Add"}
          </button>
        </form>

     
        {loading && <p className="text-center text-gray-600">Loading...</p>}

 
        <div className="space-y-3">
          {students.length > 0 ? (
            students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div>
                  <p className="text-lg font-semibold">{student.name}</p>
                  <p className="text-sm text-gray-500">{student.course}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(student)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => dispatch(deleteData(student.id))}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No students found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
