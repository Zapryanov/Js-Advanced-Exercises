import React, { Component } from 'react';
import Origamis from '../../components/origamis';
import PageLayout from '../../components/page-layout';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            posts: null
        }
    }

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
                </div>
                <Origamis length={3}/>
            </PageLayout>
        )
    }
}

export default ProfilePage