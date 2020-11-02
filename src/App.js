import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/layouts/Header';
import SideNav from './components/layouts/SideNav';
import HomePage from './components/pages/HomePage';
import TodosPage from './components/pages/TodosPage';
import PostsPage from './components/pages/PostsPage';
import ProfilePage from './components/pages/ProfilePage';
import PostItemPage from './components/pages/PostItemPage';
import Todos from './components/common/Todos';


const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <SideNav />
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user/:id" component={ProfilePage} />
            <Route exact path="/todos" component={TodosPage} />
            <Route exact path="/todos/:userId" component={Todos} />

            <Route exact path="/posts" component={PostsPage} />
            <Route exact path="/posts/:postId" component={PostItemPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
