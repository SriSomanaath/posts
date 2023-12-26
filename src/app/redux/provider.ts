"use client";
import React from 'react'
import { Provider } from "react-redux"
import store from './Store';

export const provider = ({children}) => {
  return  <Provider store={store}>
        {children}
    </Provider>
}
