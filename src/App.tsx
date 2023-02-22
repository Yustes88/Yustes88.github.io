import { Route } from "react-router";
import { Routes, BrowserRouter } from "react-router-dom";
import { AppRoute } from "./const";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<Main/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
