import React, { useContext, useRef } from 'react'
import { PostList } from '../store/post-list-store.jsx';

function CreatePost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userID = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = '';
    postBodyElement.current.value = '';
    postTitleElement.current.value = '';
    reactionsElement.current.value = '';
    tagsElement.current.value = '';

    addPost(userID, postTitle, postBody, reactions, tags);

  }


  return (
    <>
      <form className='create-post' onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="ID" className="form-label" >Entey your Post ID</label>
          <input
            type="text"
            className="form-control"
            id="ID"
            ref={userIdElement}
            placeholder='Enter post ID #$%'
          />

        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label" >Post Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitleElement}
            placeholder='How are you feeling today...'
          />

        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label" >Post Content</label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            ref={postBodyElement}
            placeholder='Tell us more about it'
          />

        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label" >Number of Reactions</label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            ref={reactionsElement}
            placeholder='How many peoples have responded'
          />

        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label" >Post Title</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsElement}
            placeholder='Entery your # tags'
          />

        </div>


        <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </>
  )
}

export default CreatePost
