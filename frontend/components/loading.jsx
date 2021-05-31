import React from 'react';
import ReactDOM from "react-dom";
import { ClapSpinner } from "react-spinners-kit";

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }

  }

  render() {
    const { loading } = this.state;
    return <ClapSpinner class="loading-spinner" size={48} color="##00c805" loading={loading}/>
  }
}

export default Loading;