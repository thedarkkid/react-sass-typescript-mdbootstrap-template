import React from 'react';
import '../assets/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import SwitchMarkup from './SwitchMarkup';
import Navbar from './widgets/Navbar'

interface IState{
  history: any;
  navigation: any;
}



export default class App extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      history: {

      },
      navigation: [
        {title: "Home", path: "/", component: Home},
        {title: "About", path: "/about", component: About},
        {title: "Contact The Developer", path: "/contact", component: Contact}
      ]
    };
  }

  render(){
    return (
      <main>
        <Navbar navigation={this.state.navigation} />
        <SwitchMarkup navigation={this.state.navigation} error={Error} />
      </main>
    );
  }
  
}
