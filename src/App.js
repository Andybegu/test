import { Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Add from "./components/add";
import Header from "./components/header";
import Edit from "./components/edit";
import { GlobalStyle } from "./style/add";
import { ToastContainer} from "react-toastify"

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/update/:id" component={Edit} />
        </Switch>
    </>
  );
}

export default App;
