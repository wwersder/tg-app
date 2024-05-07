import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./componenets/hooks/useTelegram";
import Header from "./componenets/Header/Header";

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

  return (
    <div className="App">
        <Header></Header>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
