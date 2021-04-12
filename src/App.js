import React from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink, useLocation } from 'react-router-dom';

const Home = () => <div className="card home">Home</div>;
const About = () => <div className="card about">About</div>;
const Contact = () => <div className="card contact">Contact</div>;

const App = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <SlideRoutes location={location}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </SlideRoutes>
    </>
  );
};

export default App;
