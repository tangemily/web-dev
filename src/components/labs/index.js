import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item"
import TodoList from "./todo/todo-list"
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return (
        <>
            <h1>Labs</h1>
            <ReduxExamples/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
        </>
    )
};

export default Labs;
