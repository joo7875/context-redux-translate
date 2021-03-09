import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';

class App extends React.Component {

  // state ={ language: 'english' };

  // // callback method we pass into some data
  // onLanguageChange = language => {
  //   this.setState({ language });
  // };

  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector />

          <ColorContext.Provider value='red'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>

        {/* <LanguageSelector onLanguageChange={this.onLanguageChange} /> */}

        {/* doesn't matter if you put the context component inside or outside of a component */}
        {/* <ColorContext.Provider value='red'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider> */}
      </div>
    );
  }
}

export default App;