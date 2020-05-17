import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const columnsInitial = [

    {
        name: 'todo',
        color: 'secondary',
        tasks: [
            {
                id: 1,
                name: 'todo 1',
                status: 'critical'
            },

            {
                id: 2,
                name: 'todo 2',
                status: 'noncritical'
            },

            {
                id: 3,
                name: 'todo 3',
                status: 'critical'
            }

        ]
    },

    {
        name: 'progress',
        color: 'primary',
        tasks: [
            {
                id: 4,
                name: 'todo 4',
                status: 'noncritical'
            },

            {
                id: 5,
                name: 'todo 5',
                status: 'critical'
            },

            {
                id: 6,
                name: 'todo 6',
                status: 'noncritical'
            }

        ]
    },

    {
        name: 'review',
        color: 'warning',
        tasks: [
            {
                id: 7,
                name: 'todo 7',
                status: 'critical'
            },

            {
                id: 8,
                name: 'todo 8',
                status: 'noncritical'
            },

            {
                id: 9,
                name: 'todo 9',
                status: 'critical'
            },
        ]
    },

    {
        name: 'done',
        color: 'success',
        tasks: [
            {
                id: 10,
                name: 'todo 1',
                status: 'noncritical'
            },

            {
                id: 11,
                name: 'todo 2',
                status: 'critical'
            },

            {
                id: 12,
                name: 'todo 3',
                status: 'noncritical'
            }

        ]
    }
];

function App() {

    const [columns, setColumns] = useState(columnsInitial)

    const up = (arg) => {
        console.log(arg)
        const reranged = columns.map(col => {
            if (col.name === arg.columnName) {
                const tasks = col.tasks
                return {...col, tasks}
            } else return col;
        })
        setColumns(reranged);
    };

    const down = (arg) => {
        console.log(arg)
    }


    return (
        <div className="container">
            <h1 className='mb-4 mt-4'>Board</h1>


            <div className="row">
                {
                    columns.map(col => (
                        <div className='col-sm d-flex'>
                            <div className={`w-100 border-top border-${col.color} border-width-4`}>
                                <h3>{col.name}</h3>

                                {
                                    col.tasks.map(task => (

                                        <div className="card mb-2">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {task.name}
                                                </h5>

                                                <button type="button" className="btn btn-light"
                                                        onClick={() => up({
                                                            columnName: col.name,
                                                            taskId: task.id
                                                        })}>Up
                                                </button>

                                                <button type="button" className="btn btn-light"

                                                        onClick={() => down({
                                                            columnName: col.name,
                                                            taskId: task.id
                                                        })}>Down
                                                </button>

                                            </div>
                                        </div>

                                    ))
                                }

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>

    );
}

export default App;
