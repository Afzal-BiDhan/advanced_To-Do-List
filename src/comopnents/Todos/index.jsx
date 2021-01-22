import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Controller from '../Controllers';
import CreateTodoForm from '../Create-Todo-From';
import shortid from 'shortid';
import ListView from '../ListView/index';
import TableView from '../TableView/index';



export default class Todos extends Component {

    state = {
        todos: [
            {
                id: 'Todo-1',
                text: 'New Projects',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'Todo-2',
                text: 'Complete',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'Todo-3',
                text: 'Afzal Bidhan',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'Todo-4',
                text: 'Your Todos',
                description: 'simple description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
        ],
        isOpenTodoForm: false,
        searchTrem: '',
        view: 'list',
        filter: "all",
    };

    toggleSelect = todoID => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoID);
        todo.isSelect = !todo.isSelect
        this.setState({ todos })
    };
    toggleComplete = todoID => {
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id === todoID);
        todo.isComplete = !todo.isComplete;
        this.setState({ todos })
    };
    toggleForm = () => {
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    };
    handleSearch = (value) => {
        this.setState({
            searchTrem: value
        })
    };
    createTodo = todo => {
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos]
        this.setState({ todos })
        this.toggleForm()
    };

    handleFilter = (filter) => {
        this.setState({ filter })
    };
    changeView = (event) => {
        this.setState({
            view: event.target.value
        })
    };

    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({ todos })
    };


    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete);
        this.setState({ todos })
    };
    reset = () => {
        this.setState({
            filter: "all",
            searchTrem: '',
            view: "list",
            isOpenTodoForm: false,
        })
    };

    performSearch = () => {
        return this.state.todos.filter(
            todo => todo.text.toLowerCase()
                .includes(this.state.searchTrem.toLowerCase())
        )
    };

    performFilter = (todos) => {
        const { filter } = this.state;
        if (filter === "completed") {
            return todos.filter(todo => todo.isComplete)
        } else if (filter === "running") {
            return todos.filter(todo => !todo.isComplete)
        } else {
            return todos
        }
    };



    getView = () => {
        let todos = this.performSearch();
        todos = this.performFilter(todos)

        return this.state.view === "list" ? (
            <ListView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ) : (
                <TableView
                    todos={todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                />
            )
    };


    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Smart Todos</h1>
                <Controller
                    term={this.state.searchTrem}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    view={this.state.view}
                    handleFilter={this.handleFilter}
                    clearSelected={this.clearSelected}
                    changeView={this.changeView}
                    clearCompleted={this.clearCompleted}
                    reset={this.reset}
                />
                <div>
                    {this.getView()}
                </div>

                <Modal isOpen={this.state.isOpenTodoForm} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


