import { MantineProvider } from "@mantine/core";
import { Route } from "react-router";
import { Routes, BrowserRouter } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import Menu from "./components/menu-navigation/Menu";
import { AppRoute } from "./const";
import { bakeryMenuData, navItems } from "./data/data";
import AboutPage from "./pages/about";
import ContactsPage from "./pages/contacts";
import Main from "./pages/main";
import MenuPage from "./pages/menu";

function App() {


  return (
    <MantineProvider theme={{
      colors: {
        'brown': [
          '#ffecec','#e6cfce','#d0b1af','#bc9190','#a87370','#8e5956','#6f4542','#50312f','#321c1b','#180704',
          ],
          'green': [
            '#1aae8c',	'#34b799',	'#4dc0a5',	'#67c9b2',	'#01a57f', '#019572', '#018466', '#017359', '#01634c', '#015340',
          ],
          'red': ['#ffe3eb', '#ffb2c2', '#fd8199', '#fb5171', '#f92248', '#df0a2f', '#ae0424', '#7e011a', '#4d000e', '#1f0003',
          ]
      },
      components: {
        Container: {
          defaultProps: {
            sizes: {
              xxl: '100vw',
            },
          },
        },
      },
    }}>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path={AppRoute.Root}>
        <Route index element={<Main data = {bakeryMenuData} />}/>
      </Route>
      <Route path={AppRoute.Menu}>
        <Route path={AppRoute.Id} element={<MenuPage/>}/>
      </Route>
      <Route path={AppRoute.About} element={<AboutPage/>}/>
      <Route path={AppRoute.Contacts} element={<ContactsPage/>}/>
    </Routes>
    <Footer links={navItems}/>
    </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
