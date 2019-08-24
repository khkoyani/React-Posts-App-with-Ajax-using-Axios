import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post.js'

class Posts extends Component {
    state = {
        posts: [],
        fullpostId: null,
    }

    postClickHandler = (id) => {
        this.setState({fullpostId: id})
    }

    componentDidMount() {
        axios.get('/posts')
            .then(r => {
                const posts = r.data.slice(0, 9)
                const addedAuthor = posts.map(p => {
                    return {
                        ...p, author:'Karan'
                    }
                })
                
                this.setState({posts: addedAuthor})
            }
        )
    }

    render() {
        const postsJSX = this.state.posts.map((p, index) => { 
            return (
                <Post key={p.id} title={p.title} author={p.author} 
                clicked={(id) => this.postClickHandler(p.id)}></Post>
                ) 
            })

        return (
            <section className="Posts">
                {postsJSX}
             </section>
        );
    }
}

export default Posts;