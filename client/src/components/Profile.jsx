import React from 'react';
import UpcomingMatches from './UpcomingMatches.jsx';
import RecentMatches from './RecentMatches.jsx';
import { Button } from 'react-bootstrap';
import ProfileInfo from './ProfileInfo.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: [],
      history: [],
      showProfileInfo: false
    };
    this.handleProfileLinkClick = this.handleProfileLinkClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleProfileLinkClick() {
    this.setState({showProfileInfo: true});
  }

  handleSubmit() {
    this.setState({showProfileInfo: false});
  }

  render() {
    const showProfileInfo = this.state.showProfileInfo;
    let view1, view2;

    if (showProfileInfo) {
      view1 = <ProfileInfo 
        handleSubmit={this.handleSubmit}
        userProfile={this.props.userProfile}
      />;
    } else {
      view1 = <UpcomingMatches upcoming={this.state.upcoming} />;
      view2 = <RecentMatches history={this.state.history} />;
    }

    return (
      <div>
        {this.state.showProfileInfo ? <div></div> : <div>Want to get personalized matches? <Button onClick={this.handleProfileLinkClick} bsStyle="success">Add Profile Info</Button></div>}
        
        {view1}
        {view2}
        
      </div>
    );
  }
}


export default Profile;