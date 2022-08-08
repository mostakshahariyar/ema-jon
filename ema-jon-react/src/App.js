import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import Placeholder from './Components/Placeholder/Placeholder';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/review' element={<OrderReview/>}></Route>
          <Route path='/inventory' element={<Inventory/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='/placeholder' element={<Placeholder/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
