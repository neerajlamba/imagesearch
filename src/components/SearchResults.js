import React, { Component } from 'react';

class SearchResults extends Component {
  render() {
    return (
      <div className="image-results"> 
        {this.props.results.map(image => {
          return(
            <div>
              <a href = {image.user.links.html} alt = "linktounsplash" target ="_blank">
              <img className = "img-list" src={image.urls.small} alt="searchresult" key ={image.id}/>
              <div className = "middle">
                <p className="text">{image.user.username}</p>
              </div>
              </a>
            </div>
          )
        })}
      </div>
    );
  }
}

export default SearchResults;