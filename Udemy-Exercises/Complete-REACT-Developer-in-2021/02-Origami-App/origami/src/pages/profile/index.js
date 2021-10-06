import React, { Component } from 'react';
import Origamis from '../../components/origamis';
import PageLayout from '../../components/page-layout';
import UserContext from '../../Context';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            posts: null
        }
    }

    static contextType = UserContext;

    componentDidMount() {
        console.log(this.props.match.params.userId)
        this.getUser(this.props.match.params.userId)
    }

    getUser = async(id) => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!response.ok) {
            this.props.history.push("/error")
        }

        const user = await response.json();

        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length,
        })
    }

    logOut = () => {
        this.context.logOut();
        this.props.history.push("/");
    }

    render() {
        const { username, posts } = this.state;

        if (!username) {
            return (
                <PageLayout>
                    <div>Loading.....</div>
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <div>
                    <p>Username: {username}</p>
                    <p>Posts: {posts}</p>

                    <button onClick={this.logOut}>Logout</button>
                </div>
                <Origamis length={3}/>
            </PageLayout>
        )
    }
}

export default ProfilePage