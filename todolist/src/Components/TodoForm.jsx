import React, {useEffect, useState} from 'react';
import '../Styles/TodoForm.css'
//import JsonData from '../info.json'
function TodoForm() {
    const [id, setId] = useState("1");
    const [task, setTask] = useState("This is task");
    const [description, setDesc] = useState("This is desc");
    const [done, setDone] = useState(false);

    // save data to localStorage
    const saveStateToLocalStorage = () => {
        localStorage.setItem('state', JSON.stringify({id, task, description, done }));
    }
    function getData() {
        let data = localStorage.getItem('state');
        return data ? JSON.parse(data) : [];
    }

    // Fetch data from local storage
    const getStateFromLocalStorage = () => {
        let data = getData();
        if(data !== undefined) {
            setId(data.id)
            setTask(data.task);
            setDesc(data.description);
            setDone(data.done);
        }
    }

    useEffect(() => {
        // Fetch data from local storage
        getStateFromLocalStorage();
    }, []);

    const DisplayData = () => {
        const jsonData = getData();
        const data = jsonData ? JSON.parse(jsonData) : [];
        return (
            <tbody>
            {data.map((info) => (
                <tr key={info.id}>
                    <td>{info.task}</td>
                    <td>{info.description}</td>
                    <td><input type="checkbox" defaultChecked={info.done}/></td>
                </tr>
            ))}
            </tbody>
        );
    }
    return (
        <div className="bg">
            <div className="main">
                <div className="form">
                    <input placeholder="Enter the task"/>
                    <input placeholder="Enter the description"/>
                    <button onClick={saveStateToLocalStorage}>Add</button>
                </div>
                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Done</th>
                        </tr>
                        </thead>
                           {DisplayData()}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TodoForm;