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

    postClickHandler = (id) => {
        this.props.history.push(this.props.match.url + id)
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
            }
        )
    }

    render() {
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
                <Route path={'/:id'} exact component={FullPost}></Route>
            </div>
        );
    }
}

export default Posts;