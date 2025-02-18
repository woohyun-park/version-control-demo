import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom';
import HelloMessage from "./components/HelloMessage";
import FunctionPage from "./components/FunctionPage";
import ClassPage from "./components/ClassPage";
import FormExample from "./components/FormExample";
import ShowList from "./components/ShowList";

const NoMatch = ({location}) => (
    <div>
        <strong>Error!</strong> <h2>No route</h2> found matching:
        <div>
            <code>{location.pathname}</code>
        </div>
    </div>
);

function App() {
  return (
    <div className="App">
        <HelloMessage name="Everyone" />
        <HelloMessage name="There" />
        <br />
        <Switch>
            <Route path='/shows' component={ShowList}/>
            <Route path='/functions' component={FunctionPage}/>
            <Route path='/classes' component={ClassPage}/>
            <Route path='/form' component={FormExample}/>
            <Route exact path='/' render={() => (
                <Redirect
                    to='/functions'
                />
            )}/>
            <Route component={NoMatch}/>
        </Switch>
    </div>
  );
}

export default App;
