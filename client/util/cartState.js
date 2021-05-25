import { createContext, useContext, useState } from 'react'

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const CartStateProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  let totalCartPrice = cart.reduce((sum, el) => sum + (+el.price * +el.quantity), 0);

  return (
    <LocalStateProvider value={{ cart, setCart, totalCartPrice }}>
      {children}
    </LocalStateProvider>
  )
}

const useCart = () => {
  const all = useContext(LocalStateContext);
  return all;
}

export { CartStateProvider, useCart };