import React, { Component } from 'react';

class ErrorBoundary extends Component<{}, { [key: string]: string | boolean }> {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false,
         error: '',
         errorInfo: '',
      };
   }

   static getDerivedStateFromError() {
      return {
         hasError: true,
      };
   }

   componentDidCatch(error, errorInfo) {
      this.setState({
         error: error,
         errorInfo: errorInfo,
      });
   }

   render() {
      if (this.state.hasError) {
         return (
            <h1>
               <p>Oops... Problems: {this.state.error}</p>
               <p>information: {this.state.errorInfo}</p>
            </h1>
         );
      }
      return this.props.children;
   }
}

export default ErrorBoundary;
