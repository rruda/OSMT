import React from 'react';
import styles from './App.module.scss';
import { Layout } from '../layouts/MainLayout';
import Skins from '../pages/Skins/Skins';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Maps from '../pages/Maps/Maps';
import Skin from '../pages/Skin/Skin';
import { Provider } from 'react-redux';
import { RootState, store } from "./store/store"
import Login from '../pages/Login/Login';
import User from '../pages/User/User';
import AddNewSkin from '../pages/AddNewSkin/AddNewSkin';
 

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.app}>
          <Layout>
            <Routes>
              <Route path="/skins" element={<Skins/>}/>
              <Route path="/skins/:mode" element={<Skins/>}/>
              <Route path="/skins/addNew" element={<AddNewSkin/>} />
              <Route path="/skin/:id" element={<Skin/>} />
              <Route path="/maps" element={<Maps/>} />
              <Route path="/tournaments" element={<Skins/>} />
              <Route path="/user" element={<Login/>} />
              <Route path="/user/:id" element={<User/>} />
            </Routes> 
          </Layout>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
