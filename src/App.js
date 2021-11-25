import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import NavBar from "./components/NavBar";
import Contacto from "./pages/Contacto";
import Metodoloxia from "./pages/Metodoloxia";
import Servizos from "./pages/Servizos";

function App() {
  return (
      <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Main}/>
              <Route exact path="/contacto" component={Contacto}/>
              <Route exact path="/metodoloxia" component={Metodoloxia}/>
              <Route exact path="/servizos" component={Servizos}/>
        </Switch>
      </Router>
  );
}

export default App;
