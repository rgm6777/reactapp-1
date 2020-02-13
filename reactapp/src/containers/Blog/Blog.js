import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';
import Posts from '../Posts/Posts';
// import NewPost from './../NewPost/NewPost';
const aysncNewPost = asyncComponent(() => {
    return import('./../NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeStyle={{
                                    color: '#fa923f',
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={aysncNewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route component={() => <h1 style={{color: 'red', fontSize: '40', textAlign: 'center'}}>Error 404: Page not found!</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;