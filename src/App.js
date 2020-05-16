import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const columns = [
      'todo',
      'progress',
      'review',
      'done'
  ];



  return (
    <div className="container">

        <h1>Board</h1>
        <div className="row">
            {
                columns.map(col => (
                    <div className="col-sm d-flex">
                    <div className="border w-100">
                        <h3>{col}</h3>
                    </div>
                </div>
                ))
            }

        </div>
    </div>

  );
}

export default App;
