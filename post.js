import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';

let e = React.createElement;


export default class Post extends React.Component {
render(){

    return (

    <div className="card w-75">
         <div className="card-header bg-primary text-white">
            User Name and Password 
             </div>   
    <div className="card-body">
            Input Username and Passsord
    </div>
    <div className="card-footer">
        <LikeButton />
   
    </div>
    </div>
    
        );
     }
}



//<ReplyButton />
  //      <Comment />
    //    <Comment />
      //  <Comment />





