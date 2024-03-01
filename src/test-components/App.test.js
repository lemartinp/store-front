import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import configureStore from 'redux-mock-store';
import cartReducer from "../redux/cartRedux";
import { combineReducers } from 'redux';
import { dividerClasses } from "@mui/material";
import { Provider } from 'react-redux';
import store from '../redux/store';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";


describe("<App />", () => {
    test('Render navbar properly', () => {
        //const combinedReducer = combineReducers({
            // here we will be adding reducers
            //cartReducer: cartReducer
        //  })
        //const initialState = {};

        //const mockStore = configureStore();
        //const store = mockStore(initialState);
        
        render(
        <Provider store={store}>
            <App/>
        </Provider>
        );

        const navbarText = screen.getByText("LSHOP.");

        //fireEvent.click(cartLink);

        //const cartTitle = screen.getByText(/YOUR BAG/i);
        expect(navbarText).toBeInTheDocument();
    });
});