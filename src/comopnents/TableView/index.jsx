import React from 'react';
import { ListGroupItem, CustomInput, Button, ListGroup, Table, Row } from 'reactstrap';

const RowItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <tr>
            <th scope="row">
                <CustomInput
                    type="checkbox"
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
            </th>
            <th>
                {todo.time.toDateString()}
            </th>
            <th>
                {todo.text}
            </th>
            <th>
                <Button
                    className="ml-auto"
                    color={todo.isComplete ? "danger" : 'success'}
                    onClick={() => toggleComplete(todo.id)} >
                    {todo.isComplete ? "Completed" : "Running"}
                </Button>
            </th>
        </tr>
    );
};

const TableView = ({ todos, toggleSelect, toggleComplete }) => (
    <Table>
        <thead>
            <th>#</th>
            <th>Time</th>
            <th>Todo</th>
            <th>Action</th>
        </thead>
        <tbody>
            {todos.map(todo => (
                <RowItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </tbody>
    </Table>
)

export default TableView;