import Form from './pages/Form'
import UserHome from './pages/Home/userHome'
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Form}/>
        <Route exact path='/register' component={Form}/>
        <Route exact path='/home' component={UserHome}/>
      </Switch>
      
    </Router>
  );
}

export default App;
