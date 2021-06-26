import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SIngleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms/">
          <Rooms />
        </Route>
        <Route path="/rooms/:id">
          <SingleRoom />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
