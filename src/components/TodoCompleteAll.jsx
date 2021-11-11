import React from 'react';
import PropTypes from 'prop-types';


const TodoCompleteAll = (props) => {
    return (
        <div>
            <div className="button" onClick={props.completeAllTodos}>Check All</div>
        </div>
    )
}

TodoCompleteAll.propTypes = {
    completeAllTodos: PropTypes.func.isRequired,
}

export default TodoCompleteAll
