import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import RequireAuth from './components/UI/RequireAuth';
import Quote from "./components/Quote";
const Private = ({ children }) => < RequireAuth redirectTo = "/login" > { children } < /RequireAuth>

function App() {
    return ( <Provider store = { store } >
        <BrowserRouter >
        <div className = " h-screen w-screen" >
        <Routes>
        <Route path = "/quote"
        element = { < Quote / > }
        /></Routes> </div> </BrowserRouter> </Provider>
    );
}
export default App;