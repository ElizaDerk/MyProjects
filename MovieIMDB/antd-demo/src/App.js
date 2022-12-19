import {Routes, Route} from "react-router-dom";
import routes from "./router/routes";
// import ProtectedRoute from "./router/ProtectedRoute";
import './App.css';
import {Provider} from "react-redux";
import store from "./reducer/store";

function App() {

  return (
      <div className="App">
            <Provider store={store}>
                {/*<ProtectedRoute></ProtectedRoute>*/}
                <Routes>
                  {routes.map(({name, path, element }) => {
                    return <Route key={name} path={path} element={element} />
                  })}
                </Routes>


            </Provider>
      </div>

  );
}

export default App;
