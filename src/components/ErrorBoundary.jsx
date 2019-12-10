import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error: ", error);
    console.log("Error Info: ", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>There was a disturbance in the Force.</p>;
    }

    return this.props.children;
  }
}
