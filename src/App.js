import Header from './component/header/Header';
import Body from './component/body/Body';
import Manager from './component/manager/Manager';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className={`${styles.app3}`}>
        <Container>
          <div className={`${styles.headerWrap}`}>
            <Header />
          </div>
        </Container>
        {/*<div className={`${styles.headerWrap2}`}>
          <Header2 />
        </div>*/}
        <div className={`${styles.bodyWrap}`}>
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route exact path="/manager" element={<Manager />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
