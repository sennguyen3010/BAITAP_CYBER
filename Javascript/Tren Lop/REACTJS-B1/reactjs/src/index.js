import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

//cấu hình react-router-dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ReactForm from './pages/ReactForm/ReactForm';
import Page404 from './pages/Page404/Page404';
import ReactLifeCycle from './pages/ReactLifeCycle/ReactLifeCycle';
import DemoTangGiamSL from './pages/DemoRedux/DemoTangGiamSL/DemoTangGiamSL';
import DemoChonXe from './pages/DemoRedux/DemoChonXe/DemoChonXe';
import DemoFormComment from './pages/DemoRedux/DemoFormComment/DemoFormComment';
import DemoBurger from './pages/DemoRedux/DemoBurger/DemoBurger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="" element={<Home />}></Route> */}
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="reactform" element={<ReactForm />}></Route>
          <Route path="lifecycle" element={<ReactLifeCycle />}></Route>
          <Route path="demonumber" element={<DemoTangGiamSL />}></Route>
          <Route path="demochonxe" element={<DemoChonXe />}></Route>
          <Route path="demoformcomment" element={<DemoFormComment />}></Route>
          <Route path="demoburger" element={<DemoBurger />}></Route>

          {/* <Route path="*" element={<Page404 />}></Route> */}
          <Route path="*" element={<Navigate to="" />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
