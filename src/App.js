import { Switch, Route } from "react-router-dom";
import{ createGlobalStyle } from 'styled-components';
import Home from "./components/home";
import Add from "./components/add";
import Header from "./components/header";
import Edit from "./components/edit";
import { ToastContainer} from "react-toastify"

const GlobalStyle = createGlobalStyle`
body{
	margin:0px;
	padding: 0px;
	background:blueblack;
}
`;
function App() {
  return (
    <>
    <ToastContainer/>
      <GlobalStyle/>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={Add}/>
          <Route exact path="/update/:id" component={Edit}/>
        </Switch>
    </>
  );
}

export default App;
