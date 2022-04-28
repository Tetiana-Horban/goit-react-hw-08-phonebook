import React, { lazy } from 'react';
// import Filter from './components/Filter/Filter';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactsList from './components/ContactList/ContactList';
import { AppWrapper } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { AppBarComponent } from 'components/AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'components/UserMenu/PrivateRoute';
import PublicRoute from 'components/UserMenu/PublicRoute';

const HomePage = lazy(() => import('views/HomePage/HomePage'));
const LoginPage = lazy(() => import('views/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('views/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('views/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getIsLoading);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <AppWrapper>
      {!isLoading && (
        <>
          <AppBarComponent />
          <Routes>
            <Route
              path="/"
              exact="true"
              element={
                <PublicRoute>
                  <Suspense fallback={<p>Loading...</p>}>
                    <HomePage />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              exact="true"
              element={
                <PublicRoute restricted>
                  <Suspense fallback={<p>Loading...</p>}>
                    <LoginPage />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              exact="true"
              element={
                <PublicRoute restricted>
                  <Suspense fallback={<p>Loading...</p>}>
                    <RegisterPage />
                  </Suspense>
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              exact="true"
              element={
                <PrivateRoute>
                  <Suspense fallback={<p>Loading...</p>}>
                    <ContactsPage />
                  </Suspense>
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </AppWrapper>
  );
};
export default App;
