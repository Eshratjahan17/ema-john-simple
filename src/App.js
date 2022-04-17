import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/LogIn/Login';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import SignIn from './Components/SignIn/SignIn';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/shipping"
          element={
            <RequireAuth>
             <Shipping></Shipping>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
