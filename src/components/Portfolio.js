import React, { Component } from 'react';

export default class Porfolio extends Component {
  handleButtonClick = () => {
    window.location.href = 'https://github.com/RakshulMahajan';
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div className="columns portfolio-item" key={index}>
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.imgurl}`} className="item-img" alt={item.name} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      
                      <button
                        id="btn"
                        className="details" 
                        onClick={this.handleButtonClick}
                      >
                        Details
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
