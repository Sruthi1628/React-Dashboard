import React from 'react';

const Todos = ({todos}) => {
  return (
    <>
      {todos && (
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  {/* /.card-header */}
                  <div
                    className="card-body table-responsive p-0"
                    style={{height: 500}}
                  >
                    <table className="table table-head-fixed">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Title</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {todos.length > 0 &&
                          todos.map(todo => (
                            <tr key={todo.id}>
                              <td>{todo.id}</td>
                              <td>{todo.title}</td>
                              <td>
                                {todo.completed ? 'Completed' : 'Incomplete'}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
      )}
    </>
  );
};

export default Todos;
