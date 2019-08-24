import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        fullpostId: null,
    }

    componentDidMount() {
        axios.get('/posts').then(
            response => {
                const posts = response.data.slice(0, 9)
                const addedAuthor = posts.map(p => {
                    return {
                        ...p, author:'Karan'
                    }
                })
                
                this.setState({posts: addedAuthor})
            }
        )
    }
    postClickHandler = (id) => {
        this.setState({fullpostId: id})
    }

    render () {
    const postsJSX = this.state.posts.map((p, index) => { 
        return (
            <Post key={p.id} title={p.title} author={p.author} 
            clicked={(id) => this.postClickHandler(p.id)}></Post>
            ) 
        })

        return (
            <div>
                <section className="Posts">
                   {postsJSX}
                </section>
                <section>
                    <FullPost id={this.state.fullpostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;