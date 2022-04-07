import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Catalogo } from './pages/Catalogo';
import { Home } from './pages/Home';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/products">
          <Catalogo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
