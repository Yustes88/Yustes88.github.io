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
          ],
          'green': [
            '#f1f5e6', '#dcdfce', '#c4c9b4', '#adb397', '#959d7b', '#7c8462', '#60674b', '#454934', '#282c1d', '#0c1000',
          ],
          'red': ['#ffe3eb', '#ffb2c2', '#fd8199', '#fb5171', '#f92248', '#df0a2f', '#ae0424', '#7e011a', '#4d000e', '#1f0003',
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
