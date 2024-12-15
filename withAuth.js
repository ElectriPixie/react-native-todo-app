import React, { Component } from 'react';
import { Redirect } from 'react-router-native';
import axios from 'axios';

const withAuth = (ProtectedComponent) => {
  return(
    class extends Component {
      constructor() {
        super();
        this.state = {
          loading: true,
          redirect: false
        };
      }
      
      componentDidMount(){
        console.log("Sending Token: ", this.props.token);
        axios.get("http://10.0.2.2:4000/checkToken", { headers: {Authorization: "Bearer " + this.props.token } })
          .then( res => {
            if (res.status === 200){
              console.log("token valid!");
              this.setState({ loading: false });
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.log("token invalid");
            console.error(err);
            this.setState({ loading: false, redirect: true });
          });
      }

      render() {
        const { loading, redirect } = this.state;
        if (loading) {
          return null;
        }
        if (redirect) {
          return <Redirect to="/login" />;
        }
        return (
          <>
            <ProtectedComponent {...this.props} />
          </>
        );
      }
    }
  );
}

export default withAuth;
