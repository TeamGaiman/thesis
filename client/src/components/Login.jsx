import React from 'react';
import { Form, FormGroup, FormControl, Col, Button, Navbar, Nav, NavItem } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.googleSignIn = this.googleSignIn.bind( this );
  }

  googleSignIn () {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup( provider )
      .then((result) => {
        console.log( 'GOOGLE SIGN IN RESULT', result );
        this.props.handleLoggedIn();
      });
  }

  // fullPage() {
  //   new fullpage('#fullpage', {
  //     autoScrolling: true,
  //     scrollHorizontally: true
  //   });
    
  //   //methods
  //   fullpage_api.setAllowScrolling(false);
  // }

  render () {
    return (
      <div className="splash">
        <Navbar inverse collapseOnSelect staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Rally</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={this.googleSignIn}>
                Sign in with Google
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <div id="fullpage">
          <div className="section">
            <div className="splash"></div>
          </div>
          <div className="section">
            <div className="splash"></div>
          </div>
        </div> */}


        {/* <Button
          // bsSize="large"
          onClick={this.googleSignIn}>
          <img
            src="https://www.bergeyselectric.com/content/wp-content/uploads/2011/11/google.jpg"
            style={{ width: '20%', height: '20%' }}
          />
          Continue
        </Button> */}
      </div>
    );
  }
}


export default Login;