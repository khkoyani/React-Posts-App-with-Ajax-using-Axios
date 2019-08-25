import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post.js'
import './Posts.css'
// import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

class Posts extends Component {
    state = {
        posts: [],
        fullpostId: null,
    }
    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then(r => {
                const posts = r.data.slice(0, 9)
                const addedAuthor = posts.map(p => {
                    return {
                        ...p, author:'Karan'
                    }
                })
                
                this.setState({posts: addedAuthor})
            })
            .catch( error => {
                console.log( error );
            } );
    }
    postClickHandler = (id) => {
        console.log(this.state.fullpostId)
        this.props.history.push('/posts/' + id)
        

    }

    

    render() {
        console.log(this.props)
        const postsJSX = this.state.posts.map((p, index) => { 
            return (
                // <Link to={{pathname: '/' + p.id}} key={p.id}>
                //     <Post  title={p.title} author={p.author} 
                //     clicked={(id) => this.postClickHandler(p.id)}>
                //     </Post>
                // </Link>
                <Post  title={p.title} author={p.author} key={p.id}
                    clicked={(id) => this.postClickHandler(p.id)}>
                    </Post>
                
                ) 
            })

        return (
            <div>
                <section className="Posts">
                    {postsJSX}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}></Route>
                
                
            </div>
        );
    }
}

export default Posts;

// {url: "/posts/1", method: "get", headers: {…}, baseURL: "https://jsonplaceholder.typicode.com", transformRequest: Array(1), …}
// FullPost.js:13 {id: "1"}
// index.js:11 {url: "/posts/1", method: "get", headers: {…}, baseURL: "https://jsonplaceholder.typicode.com", transformRequest: Array(1), …}
// FullPost.js:13 {id: "1"}
// index.js:11 {url: "/posts/1", method: "get", headers: {…}, baseURL: "https://jsonplaceholder.typicode.com", transformRequest: Array(1), …}
// FullPost.js:13 {id: "1"}
// index.js:11 