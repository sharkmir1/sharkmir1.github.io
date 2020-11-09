import React from 'react';

class WindowResize extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        windowSize: "",
        thumbWidth: 75
      };
    }
  
    handleResize = e => {
      const windowSize = window.innerWidth;
      const thumbWidth = (windowSize >= 480 && 100) || 75;
      this.setState(prevState => {
        return {
          windowSize,
          thumbWidth
        };
      });
    };
  
    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
  
    render() {
      return (
        <div>
          <h2>window size: {this.state.windowSize}</h2>
          <h3>thumbnail width: {this.state.thumbWidth}</h3>
        </div>
      );
    }
  }
  
//   ReactDOM.render(<App />, document.getElementById("root"));
export default WindowResize;