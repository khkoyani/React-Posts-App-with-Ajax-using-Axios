import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        fullpost: null,
        error: false
    }

    
    componentDidUpdate(prevProps, prevState) {
        if (!this.state.error) {
            if (this.props.id) {
                if (!this.state.fullpost  || (this.state.fullpost && this.state.fullpost.id !== this.props.id)) {
                    axios.get('/posts/' + this.props.id)
                    .then(r => {
                        this.setState({fullpost: r.data})
                    })
                    .catch(err => {
                        this.setState({error: true})
                    })
                }
            }
        }
    }
   
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id).then(r => console.log(r.data))
    }
    

    render () {
        let post = <p style={{textAlign: 'center'}}> <strong> Please select a Post!</strong></p>;
        if (this.state.error) {
            post = <p style={{textAlign: 'center'}}> <strong> Something went wrong!</strong></p>;
        } else {
            if (this.props.id) {
                post = <p style={{textAlign: 'center'}}> <strong> Loading Post... </strong></p>;
            }
            if (this.state.fullpost) {
                post = (
                    <div className="FullPost">
                        <h1>{this.state.fullpost.title}</h1>
                        <p>{this.state.fullpost.body}</p>
                        <div className="Edit">
                            <button onClick={()=> this.deletePostHandler()} className="Delete">Delete</button>
                        </div>
                    </div>
                );
            }   
        }
       
        return post;
    }
}

export default FullPost;