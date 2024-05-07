import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./componenets/hooks/useTelegram";
import Header from "./componenets/Header/Header";
import {Route, Routes} from 'react-router-dom';
import ProductList from "./componenets/ProductList/ProductList";
import Form from "./componenets/Form/Form";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'form'} element={<Form/>}/>
        </Routes>
    </div>
  );
}

export default App;
