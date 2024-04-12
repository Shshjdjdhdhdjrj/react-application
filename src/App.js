import { Route, Switch } from "react-router-dom";
import Navbar from 
import Footer from "./components/Footer";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/recipe/:id" component={RecipeDetail} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
