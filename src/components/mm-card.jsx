import React from 'react';
import MMFooter from './mm-footer';

class MMCard extends React.Component {
 
  render(){
    //kate: map style prop to dynamic image url 
    const imgStyle = {
      backgroundImage: 'url(' + this.props.cardImage + ')',
    };
    //kate: card type and main content reused
    const cardType = this.props.cardType;
    const cardMain = <p>The title above should use the same style as the h2 at the top of this page but not be an H2 itself.</p>;
    //kate: determining content based on card type
    let cardContent 
    if (cardType === 'text') {
      cardContent = 
      <React.Fragment>   
         {cardMain}       
        <p>This card has extra content in it and so it's content is taller than other cards.</p>
      </React.Fragment>
    }
    else {
      cardContent = 
      <React.Fragment>   
        {cardMain}       
      </React.Fragment>
    }

    //kate: render card with dynamic img, title, category, content and footer
    return <div>
      <div class="mm-card">     
        <div class="image" style={imgStyle}></div>           
        <div class="content">
            <p class="category-title">{this.props.cardCategory}</p>
            <p class="card-title">{this.props.cardTitle}</p>
            {cardContent}     
            {/* kate: pass card type - determines footer content and CTA */}
            <MMFooter footerType={cardType} />
        </div>
      </div>
    </div>
  }

}
export default MMCard;