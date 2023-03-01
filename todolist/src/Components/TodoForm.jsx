import React from 'react';

function TodoForm() {
    return (
        <div>
            <input placeholder="Enter the task"/>
            <button>Add</button>
            <table>
                <thead>
                    <th>Task</th>
                    <th>Description</th>
                </thead>
                <tbody>
                <tr>
                    <td>Run</td>
                    <td>Run 300 km</td>
                </tr>
                <tr>
                    <td>Run</td>
                    <td>Run 300 km</td>
                </tr>
                <tr>
                    <td>Run</td>
                    <td>Run 300 km</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TodoForm;