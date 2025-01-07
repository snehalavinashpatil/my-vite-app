
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from "./Body";
import Login from './Login';
import Connections from './component/Connections';
import Requests from './component/Requests';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";

function App() {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
    <Routes>
       <Route path="/" element={<Body/>}>
       <Route path="/login" element={<Login/>}></Route>
       <Route path="/connections" element={<Connections/>}></Route>
       <Route path="/requests" element={<Requests/>}></Route>
       </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
