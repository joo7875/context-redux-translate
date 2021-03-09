import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // has to be exactly contextType
  // Button.contextType = LanguageContext;
  // static contextType = LanguageContext; 

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {({ language }) => this.renderSubmit(language)}
          </LanguageContext.Consumer>
        </button>
    );
  }

  render() {
    return (
      // Consumer has only one func child
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;