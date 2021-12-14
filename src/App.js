// import './App.css';
import Navbar from './Navbar';
import Blog from './Blog';
import Footer from './Footer';
import BlogDetailsR from './BlogDetailsR';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="rows">
          <Switch>
            <Route exact path="/">
            <Blog />
            </Route>
            <Route exact path="/Players">
            <Blog />
            </Route>
            <Route exact path="/Players/:id">
              <BlogDetailsR/>
            </Route>
           
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
