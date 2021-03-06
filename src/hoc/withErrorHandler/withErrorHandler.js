import React from 'react';

import Modal from '../../components/UI/Modal/Modal.js';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.request.eject(this.responseInterceptor);
    }

    _errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error !== null}
            modalClosed={this._errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  }
}

export default withErrorHandler;

