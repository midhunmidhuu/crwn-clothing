import './categories.styles.scss'
import Home from './component/routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './component/routes/navigation-bar/navigation-bar.component';
import ShopPage from './component/routes/shop/shop.component';
import Authentication from './component/routes/authentication/authentication.component';

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<NavigationBar />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<ShopPage/>}/>
      <Route path='auth' element={<Authentication/>}/>
    </Route>
  </Routes>
  )
  
}

export default App;
