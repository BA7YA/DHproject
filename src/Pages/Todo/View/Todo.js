import React from 'react';
import Do from '../Components/Do';
import DoCreate from '../Components/DoCreate';
import DoEdit from '../Components/DoEdit';
import './Todo.css';

function Todo() {
    return (
        <>
            <div className="add-new-do">
                Добавить новую запись
            </div>
            <DoCreate />
            <Do />
            <DoEdit />
        </>
    )
}

export default Todo
