import './App.css';
import About from "./About";
import ContactUs from "./ContactUs";
import Posts from "./Posts";
import {useState, Suspense} from "react";
import Tabs from "./Tabs";

function App() {
    const [tab, setTab] = useState('about')
    return (
        <Suspense fallback={<h1>🌀 Loading...!!!</h1>}>
            <Tabs isActive={tab === 'about'}
              onClick={() => {
                setTab('about')
            }}
              tab="About"/>
            <Tabs isActive={tab === 'contact_us'}
              onClick={() => {
                setTab('contact_us')
            }}
              tab="Contact Us"/>
            <Tabs isActive={tab === 'posts'}
              onClick={() => {
                setTab('posts')
            }}
              tab="Posts"/>
            <hr/>
            {tab === 'about' && <About/>}
            {tab === 'contact_us' && <ContactUs/>}
            {tab === 'posts' && <Posts/>}
        </Suspense>
    );
}

export default App;
