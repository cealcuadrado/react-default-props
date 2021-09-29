import React from 'react';

class Layout extends React.Component {
    render() {
        return (
          <div>
            <h1>{this.props.header}</h1>
            <p>{this.props.content}</p>
          </div>
        );
    }
}

Layout.defaultProps = {
  header: 'App header',
  content: 'App content',
};

export default Layout;