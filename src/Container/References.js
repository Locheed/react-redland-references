import React, { Component } from 'react';

import Synopsis from '../Components/Synopsis/Synopsis';
import './References.css';


class References extends Component {
  state = {
    // restRoute: 'http://localhost/redlab-jobseeker/wp-json/sections/v1/references', for local development
    restRoute: 'https://redland.mikavesasto.com/wp-json/sections/v1/references',
    wpData: [],
    itemHeading: '',
    itemImage: '',
    itemTagline: '',
    synopsis: '',
    overlay: ''
  }
  componentDidMount() {
    fetch(this.state.restRoute)
      .then(res => res.json())
      .then(data => this.setState({ wpData: data }));
  }
  // Select active item and open synopsis
  setActiveItem = (item, i) => {
    this.setState({
      itemHeading: item.post_title,
      itemImage: item.acf.reference_image.url,
      itemImageAlt: item.acf.reference_image.alt,
      itemTagline: item.acf.reference_tagline,
      itemSynopsis: item.post_content,
      itemFullImage: item.acf.reference_full_image.sizes.large,
      synopsis: 'synopsis-visible',
      overlay: 'overlay-visible'
    })
  }
  // Close synopsis window
  closeSynopsis = () => {
    this.setState({ synopsis: '', overlay: '' });
  }
  render() {
    return (
      <div className="App">
        <Synopsis
          visible={this.state.synopsis}
          heading={this.state.itemHeading}
          image={this.state.itemImage}
          imageFull={this.state.itemFullImage}
          imageAlt={this.state.itemImageAlt}
          tagline={this.state.itemTagline}
          synopsis={this.state.itemSynopsis}
          closeSynopsis={this.closeSynopsis}
        />
        <div className={`reference-container ${this.state.overlay}`}>
          {this.state.wpData.map((item, i) => {
            return (
              <div className="reference-item" onClick={() => this.setActiveItem(item, i)} key={item.ID}>
                <div className="reference-item-image">
                  <img src={item.acf.reference_image.url} alt={item.acf.reference_image.alt} />
                  <h2 className="reference-item-heading">{item.post_title}</h2>
                  <p className="reference-item-tagline">{item.acf.reference_tagline}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default References;
