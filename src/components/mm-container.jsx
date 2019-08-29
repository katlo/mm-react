import React from 'react';
import MMCard from './mm-card';

class MMContainer extends React.Component {
  
  //kate: render page content including 3 ee cards
  render(){
    return <main class="container">
    
    <div>
      <h1>MassMutual</h1>
      <h2>Coding Exercise</h2>
      <p>Here is a simple coding exercise for front end development at MassMutual.
        What we are hoping is that you'll take roughly an hour, two max, to style this page
        to match the image. Please note that some styles on this page will differ
        slightly from our live site.</p>
    </div>
    <MMCard cardTitle="Austin Powers" cardImage="/images/austin.jpg" cardType="button" cardCategory="International Man of Mystery"/>
    <MMCard cardTitle="Zoolander" cardImage="/images/zoolander.jpg" cardType="link" cardCategory="Male Model of the Year"/>
    <MMCard cardTitle="Ron Burgundy" cardImage="/images/ronburgundy.jpg" cardType="text"  cardCategory="Legendary Anchorman"/>
    </main>
  }
}
export default MMContainer;