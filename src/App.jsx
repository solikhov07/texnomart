import './App.css';
import { Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
   <Route  path='/'>
<Header/>
   </Route>
<Route path=''>
  <Main/>
</Route>
<Route path='/'>
  <Footer/>
</Route>
    </div>
  );
}

export default App;
