
import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
// import CircleBtn from './components/CircleBtn';
import CharacterInfo from './components/CharacterInfo';
import Empty from './components/Empty';
import Planet from './components/Planet'
import Characters from './components/Characters';
import ModalPlanetAdd from './components/ModalPlanetAdd';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="wrapper  mx-auto width-80 py-3 position-relative">
          <header className="App-header text-start h-auto">
            <Header />
            <Buttons />
          </header>
          <main className="content">
            <Switch>
              <Route exact path="/">
                <Empty />
              </Route>
              <Route exact path="/planet">
                <Planet >
                  <Route path="/planet/modalplanetadd">
                    <ModalPlanetAdd />
                  </Route>
                </Planet>
              </Route>
              <Route exact path="/characters">
                <Characters>
                  <Route exact path="/characters/characterinfo">
                    <CharacterInfo />
                  </Route>
                </Characters>
              </Route>
            </Switch>
          </main>
          
        </div>
      </div>
    </HashRouter>  
  );
}

export default App;
