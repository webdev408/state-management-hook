import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import Pricingcontext from './components/Pricingcontext';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Switch>
         <Route exact path="/" render={() => <Home />} />
         <Route path="/our team" render={() => <OurTeam />} />
         <Route path= "/Contact" render={() => <Contact />} />
         <Pricingcontext>
         <ChildA />
         <ChildB />
         </Pricingcontext>
       </Switch>
       <Footer />
    </div>
  );
}

export default App;
