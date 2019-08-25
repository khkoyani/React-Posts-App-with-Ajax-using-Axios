import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        fullpost: null,
        error: false
    }
    
    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.fullpost || (this.state.fullpost && this.state.fullpost.id !== +this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { fullpost: response.data } );
                    } );
            }
        }
    }

     componentDidMount () {
        console.log('in mount', this.props);
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

   
    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id).then(r => console.log(r.data))
    }
    

    render () {
        let post = <p style={{textAlign: 'center'}}> <strong> Please select a Post!</strong></p>;
        if (this.state.error) {
            post = <p style={{textAlign: 'center'}}> <strong> Something went wrong!</strong></p>;
        } else {
            if (this.props.match.params.id) {
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