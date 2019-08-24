import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts.js'


class Blog extends Component {
    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
                            <li><a href="/" target="_blank" rel="noopener noreferrer">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts></Posts>
            </div>
        );
    }
}
export default Blog;