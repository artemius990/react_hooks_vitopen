import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import Center from './components/Center/Center'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import Threenews from './components/Threenews/Threenews'
import Aboutus from './components/Aboutus/Aboutus'
import Aboutvitebsk from './components/Aboutvitebsk/Aboutvitebsk'
import Afisha from './components/Afisha/Afisha'
import Showplaces from './components/Showplaces/Showplaces'
import Job from './components/Job/Job'
import Sport from './components/Sport/Sport'
import Jobtransportaboutvit from './components/Jobtransportaboutvit/Jobtransportaboutvit'
import Contacts from './components/Contacts/Contacts'
import Hotnews1 from './components/Hotnews1/Hotnews1'
import Hotnews2 from './components/Hotnews2/Hotnews2'
import Hotnews3 from './components/Hotnews3/Hotnews3'
import Newsafishasport from './components/Newsafishasport/Newsafishasport'
import Transport from './components/Transport/Transport'
import Souvenirs from './components/Souvenirs/Souvenirs'

class App extends React.Component {
  render() {
    let abvit = this.props.db.aboutvit
    let sou = this.props.db.souvenirs

    return (
      <div className="App">
        <BrowserRouter>
          <Header />;
          <Menu />;
          <Route path="/About_us" render={() => <Aboutus />} />;
          <Route path="/Contacts" render={() => <Contacts />} />;
          <Route path="/Showplaces" render={() => <Showplaces />} />;
          <Route path="/Souvenirs" render={() => <Souvenirs sou={sou} />} />;
          <Newsafishasport />;
          <Route path="/Three_news" render={() => <Threenews />} />;
          <Route path="/Afisha" render={() => <Afisha />} />;
          <Route path="/Sport" render={() => <Sport />} />;
          <Route path="/Hotnews1" render={() => <Hotnews1 />} />;
          <Route path="/Hotnews2" render={() => <Hotnews2 />} />;
          <Route path="/Hotnews3" render={() => <Hotnews3 />} />;
          <Jobtransportaboutvit />;
          <Route path="/Job" render={() => <Job />} />;
          <Route path="/Transport" render={() => <Transport />} />;
          <Route
            path="/Aboutvitebsk"
            render={() => <Aboutvitebsk abvit={abvit} />}
          />
          ;
          <Center />;
          <Route path="/Showplaces" render={() => <Showplaces />} />;
          <Footer />;
        </BrowserRouter>
      </div>
    )
  }
}

export default App
