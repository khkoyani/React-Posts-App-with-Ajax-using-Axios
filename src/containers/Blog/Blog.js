import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts.js';
import {Route, Switch, NavLink} from 'react-router-dom';
import NewPost from './NewPost/NewPost.js'
import FullPost from './FullPost/FullPost.js'


class Blog extends Component {
    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' > Home </NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?q=testing'
                            }}> New Post </NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route path='/new-post'  component={NewPost}></Route>
                    <Route path='/posts'  component={Posts}></Route>
                    {/* <Route path='/:id' component={FullPost}></Route> */}
                </Switch>


            </div>
        );
    }
}
export default Blog;