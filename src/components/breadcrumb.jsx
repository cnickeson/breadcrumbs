import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
  render() {
    //Grab the url if it exists and set up a route to recursively go through the paths
    const { url, name, isExact } = this.props;
    return (
        <li className="inline" style={{marginRight: '10px'}}>
          { isExact ? <p className="inline">{name}</p> : <Link to={url}>{name}</Link> }
          { !isExact && <div className="inline" style={{ marginLeft: '10px'}}> > </div>}
        </li>
    );
  }
}

Breadcrumb.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isExact: PropTypes.bool.isRequired
};

export default Breadcrumb;