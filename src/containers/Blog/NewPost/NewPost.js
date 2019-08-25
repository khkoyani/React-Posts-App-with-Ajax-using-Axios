import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Karan'
    }
    createPostHandler() {
        axios.post('/posts', this.state).then(r => {console.log(r.data)})
    }

    componentDidMount() {
        console.log(this.props)
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Karan">Karan</option>
                    <option value="George">George</option>
                </select>
                <button onClick={() => {this.createPostHandler()}}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;