import React from 'react';

class Widgets extends React.Component {
  constructor(props) {
    super(props);
    if (props.app_type) {
      window.app_type = props.app_type;
    }
  }

  componentDidMount() {
    Widgets.appendStyle();
    Widgets.appendScript();
  }

  static appendStyle() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/style-min.css';

    document.head.appendChild(link);
  }

  static appendScript() {
    const script = document.createElement('script');
    script.src = '/bzcalc-core-min.js';
    script.async = true;
    script.onload = Widgets.scriptLoaded;

    document.body.appendChild(script);
  }

  static scriptLoaded() {
    window.app_type = 'd8';
    // window.app_type = 'native';
    // window.app_type = '';
    window.bzHome();
    // window.bzChannels();
    // window.bzPersonalized();
    // window.bzHeadlines();
  }

  render() {
    return <div className="main-container container" id="bzface"
                role="main">&nbsp;</div>;
  }
}

export default Widgets;
