import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Breadcrumb from '../common/Breadcrumb';
import Todos from '../common/Todos';
import Spinner from '../common/Spinner';

const TodosPage = () => {
  const [todos, setTodos] = useState({});
  const [todosLoading, setTodosLoading] = useState(true);

  useEffect(async () => {
    const todos_response = await axios.get(
      `http://jsonplaceholder.typicode.com/todos`
    );
    await setTodos(todos_response.data);
    setTodosLoading(false);
  }, []);

  return (
    <div>
      <Breadcrumb title="Todos" />
      {todosLoading ? (
        <Spinner />
      ) : todos.length <= 0 ? (
        <h5>No todos found</h5>
      ) : (
        <section className="content">
          <div className="container-fluid">
            <Todos todos={todos} />
          </div>
        </section>
      )}
    </div>
  );
};

export default TodosPage;
