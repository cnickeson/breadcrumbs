import React, { PropTypes, Component } from 'react';
import Breadcrumb from './breadcrumb.jsx';
import { Route } from 'react-router-dom';
import uniqueId from 'lodash/uniqueId';

// Hack to build up all the paths before we render them. This prevents us from having nested <li>
// If we didn't care about the nested <li> we could remove this. TODO: Find a way around the path array
const path = [];

class BreadcrumbContainer extends Component {
  render() {
    const { match, breadcrumbMap } = this.props;
    path.push({
      ...match,
      name: breadcrumbMap[match.url] ? breadcrumbMap[match.url]: match.params ? match.params.path : match.path
    });

    return (
      <div>
        <ul className="inline">
          { match.isExact && this.renderBreadcrumbs() }
        </ul>
        <Route path={`${match.url}/:path`.replace('//', '/')} component={(props) => <BreadcrumbContainer {...props} breadcrumbMap={breadcrumbMap}/>}/>
      </div>
    );
  }

  renderBreadcrumbs() {
    const renderableBreadcrumbs = [ ...path ];
    //Reset path so we can rebuild the path on navigation
    path = [];
    return renderableBreadcrumbs.map(({url, isExact, name}) => { return <Breadcrumb key={uniqueId("breadcrumb_")} url={url} isExact={isExact} name={name}/>})
  }
}

BreadcrumbContainer.propTypes = {
  breadcrumbMap: PropTypes.object
};

export default BreadcrumbContainer;