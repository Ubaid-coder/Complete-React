import Post from './Post.jsx'
import { PostList as PostListData } from '../store/post-list-store'
import { useContext, useEffect, useState} from 'react'
import WelcomeMessage from './WelcomeMessage.jsx'
import Loader from './Loader.jsx'



function PostList() {

  const { postList, addInitialPosts } = useContext(PostListData)
  const [fetching, setfetching] = useState(false);
  
 useEffect(() => {
  setfetching(true);

  const controller = new AbortController();
  const signal = controller.signal;

  fetch('https://dummyjson.com/posts', signal )
  .then((res) => res.json())
  .then((data) => {
    addInitialPosts(data.posts);
    setfetching(false);
  })
  
  return() => {
    console.log('Cleaning up useEffect.');
    controller.abort();
  }  
 }, [])
  

  return (
    <>
     {fetching && <Loader />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => {
        return (
          <Post key={post.id} post={post} />
        )
      })}
    </>
  )
}

export default PostList
