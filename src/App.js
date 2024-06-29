import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import { Provider } from 'react-redux';
import store from './store/Store';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<RootLayout/>}>
                  <Route index element={<Home/>}></Route>
                  <Route path='/cartdetails' element={<CartDetails/>}></Route>
              </Route>
            </Routes>
        </BrowserRouter>
        <Toaster/>
        </Provider>
    </div>
  );
}

export default App;
