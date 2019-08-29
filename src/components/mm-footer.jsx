import React from 'react';

class MMFooter extends React.Component {
  
    //kate: determine footer cta based on card type (button, link or text)
    render(){
      const footerType = this.props.footerType;
      return (
      <footer>
       {(function() {
        switch(footerType) {
          case 'button':
            return (
              <React.Fragment>
               <div>
                  <button class="ima-button" data-toggle="tooltip" data-placement="bottom" title="I'm A Button!">
                    A BUTTON!
                  </button>
              </div>
              </React.Fragment>            
              )
          case 'link':
            return (
              <React.Fragment>
                <div>
                  <button class="ima-link" data-toggle="tooltip" data-placement="bottom" title="I'm A Link!">
                    A Link!
                  </button>
              </div>
              </React.Fragment>            
              )
          case 'text':
            return (
              <React.Fragment>
                <div>
                  <p>Just text</p>
                  <p>legal text</p>
                </div>
              </React.Fragment>            
              )              
          default:
            return null;
        }
      })()}      
      </footer>
      );
    }  
  }
  export default MMFooter;