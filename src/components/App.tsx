import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends React.Component<AppProps> {

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.renderList();
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todoItem: Todo) => {
            return <div key={ todoItem.id }>{ todoItem.title } </div>
        })
    }

    render() {
        return <div>
            <button onClick={ this.onButtonClick }>Fetch</button>
            { this.renderList() }
        </div>;
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
    return { todos: state.todos };
}

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App)