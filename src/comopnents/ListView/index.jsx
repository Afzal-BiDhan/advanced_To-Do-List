import React from 'react';
import { ListGroupItem, CustomInput, Button, ListGroup } from 'reactstrap';

// List Item Components
const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <div>
            <ListGroupItem className="d-flex align-items-center">
                <CustomInput
                    type="checkbox"
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={() => toggleSelect(todo.id)}
                />
                <div className="mx-3">
                    <h4>{todo.text}</h4>
                    <p>{todo.time.toDateString()}</p>
                </div>
                <Button className="ml-auto" color={todo.isComplete ? "danger" : 'success'} onClick={() => toggleComplete(todo.id)} >
                    {todo.isComplete ? "Completed" : "Running"}
                </Button>
            </ListGroupItem>

        </div>
    );
};



const ListView = ({ todos, toggleSelect, toggleComplete }) => {

    return (
        <ListGroup>
            {
                todos.map(todo => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        toggleSelect={toggleSelect}
                        toggleComplete={toggleComplete}
                    />
                ))
            }
        </ListGroup>
    );
}


export default ListView;