import React from 'react';
import ReactDOM from 'react-dom/client';
import "./scss/styles.scss";
import AppRouter from "./routers/AppRouter";
import { store } from "./store/store"
import { Provider } from 'react-redux';
import { Suspense } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </Provider>
  </React.StrictMode>
);