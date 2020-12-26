import { Switch, Route, NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import './App.css'

import Home from './Components/Home/Home'
import Posts from './Components/Posts/Posts'
import Comments from './Components/Comments/Comments'

function App() {
  return (
    <Fragment>
      <nav>
        <h2>App</h2>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/posts'>Posts</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        
        <Route path='/' component={ Home } exact />

        <Route path='/posts' exact>
          <Posts count={10}/>
        </Route>

        <Comments />
        
      </Switch>
    </Fragment>
  );
}

export default App
