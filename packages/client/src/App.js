import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Calculator from './components/calculator';
import Home from './components/home';
import Services from './components/services';
import Authentication from './components/authentication';
import OurTeam from './components/our_team';
import GetCallBack from './components/getCallBack';
import AbouteUs from './components/abaute_us';
import Error from './components/error';
import Goods from './components/goods';
import ShowProduct from './components/show_product';
import Layout from './Layout';
import useHttpRequest from './hook/useHttpRequest/useHttpRequest';
import { login } from './reducers/authentication';
import CreatePersonContacts from './components/our_team/createPersoncontacts';
import CreateProduct from './components/goods/creatProduct';

const App = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const { responsetData, httpRequest } = useHttpRequest();
  const auth = useSelector((state) => state.authenticationReducer.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const result = localStorage.getItem('auth');

    if (result) {
      const refreshToken = JSON.parse(result);
      httpRequest('post', '/admin/token', { token: refreshToken.token });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data?.accessToken) {
      httpRequest('get', '/admin/auth', null, ['authorization', `Bearer ${responsetData.data?.accessToken}`]);
    }
    if (responsetData.data?.auth) {
      dispatch(login());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  const createProductRoute = auth ? (
    <Route path='create-product' element={<CreateProduct />}>
      <Route path=':product' element={<CreateProduct />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Route>
  ) : undefined;
  const createPersonContactsRoute = auth ? (
    <Route path='create_person_contacts' element={<CreatePersonContacts />}>
      <Route path=':person' element={<CreatePersonContacts />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Route>
  ) : undefined;
  const adminRoute = !auth ? <Route path='admin' element={<Authentication />} /> : undefined;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={`${language}`} />} />
        <Route path=':lang' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='aboute_us' element={<AbouteUs />} />
          <Route path='calculate' element={<Calculator />} />
          <Route path='inventory' element={<Goods />} />
          <Route path='show_product' element={<ShowProduct />} />
          <Route path='our_team' element={<OurTeam />} />
          <Route path='services' element={<Services />} />
          <Route path='order_a_call' element={<GetCallBack />} />
          <Route path='show-product' element={<ShowProduct />}>
            <Route path=':product' element={<ShowProduct />} />
            <Route path='*' element={<Navigate to='/404' />} />
          </Route>
          {adminRoute}
          {createPersonContactsRoute}
          {createProductRoute}
          {/* <Route path='*' element={<Navigate to='/404' />} /> */}
        </Route>
        <Route path='/404' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
