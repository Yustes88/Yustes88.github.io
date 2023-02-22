import { MantineProvider } from "@mantine/core";
import { Route } from "react-router";
import { Routes, BrowserRouter } from "react-router-dom";
import { AppRoute } from "./const";
import Main from "./pages/main";

function App() {
  return (
    <MantineProvider theme={{
      colors: {
        'brown': [
          '#ffecec','#e6cfce','#d0b1af','#bc9190','#a87370','#8e5956','#6f4542','#50312f','#321c1b','#180704',
          ]
      }
    }}>
    <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<Main/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
