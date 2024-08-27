import { NavBar } from "./components/NavBar";
import { Provider } from "./context/ItemsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/otros" element={1} />
          <Route path="/iniciosesion" element={2} />
          <Route path="*" element={404} />
          <Route path="/registro" element={3} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
