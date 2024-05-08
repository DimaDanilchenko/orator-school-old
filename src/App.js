
import { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import AboutProject from './components/AboutProject/AboutProject'

function App() {
  const items =[{value: "Главная", href:"/main"},{value: "Услуги", href:"/main"},{value: "Магазин", href:"/main"}];
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="app">
      <Header active={menuActive} setActive={setMenuActive}/>
      <main className='main'>
        <Promo/>
        <AboutProject/>
      </main>
      <Menu active={menuActive} setActive={setMenuActive} header={"Burger menu"} items={items}/>
    </div>
  );
}

export default App;
