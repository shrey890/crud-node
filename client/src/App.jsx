import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
	const [inputs, setInputs] = useState("");
	const [getTasks, setGetTasks] = useState([]);
	const [editTaskId, setEditTaskId] = useState(null);
	const handleChange = (e) => {
		setInputs(e.target.value);
	};
	const fetchTasks = async () => {
		const res = await axios.get("http://localhost:3000/api/gettask");
		setGetTasks(res.data);
	};
	useEffect(() => {
		fetchTasks();
	}, []);
	const handleAddTask = async (e) => {
		e.preventDefault();
		try {
			if (editTaskId) {
				await axios.put(`http://localhost:3000/api/update/${editTaskId}`, {
					task: inputs,
				});
				setEditTaskId(null);
			} else {
				const res = await axios.post(`http://localhost:3000/api/addtask`, {
					task: inputs,
				});
				setGetTasks([...getTasks, res.data]);
			}
			fetchTasks();
			setInputs(""); // Clear input field after adding/updating
		} catch (error) {
			console.error("error adding/updating task ", error);
			alert("error adding/updating task, please try again");
		}
	};
	const handleEdit = (task) => {
		setInputs(task.task); // Populate input field with task text
		setEditTaskId(task.id);
	};
	const deleteTask = async (id) => {
		try {
			const res = await axios.delete(`http://localhost:3000/api/delete/${id}`);
			console.log(res.data);
			fetchTasks();
		} catch (error) {
			console.log("error deleting task ", error);
		}
	};
	return (
		<div>
			<input
				onChange={handleChange}
				value={inputs}
				type="text"
				placeholder="add task"
			/>
			<button onClick={handleAddTask}>
				{editTaskId ? "Update Task" : "Add Task"}
			</button>
			{editTaskId && (
				<div>
					<input
						value={inputs}
						onChange={handleChange}
						type="text"
						placeholder="edit task"
					/>
				</div>
			)}
			{getTasks.length > 0 ? (
				getTasks.map((task) => (
					<div key={task.id}>
						<div style={{ display: "flex", padding: "5px", background: "red" }}>
							<p style={{ padding: "10px" }}>{task.task}</p>
							<button
								style={{ marginLeft: "10px" }}
								onClick={() => deleteTask(task.id)}
							>
								delete
							</button>
							<button
								style={{ marginLeft: "10px" }}
								onClick={() => handleEdit(task)}
							>
								edit
							</button>
						</div>
					</div>
				))
			) : (
				<h1>no task</h1>
			)}
		</div>
	);
};
export default App;
