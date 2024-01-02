import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { useSelector } from 'react-redux'
import { Container, PostCard } from '../components'
function Home() {
  const [posts, setPosts] = useState([])
  const authStatus = useSelector(state => state.auth.status)
  console.log((authStatus));

  useEffect(() => {
    appwriteService.getPosts((posts) => {
      console.log(posts)
      if (posts) setPosts(posts.documents)
    })
  })
  if (posts.length == 0) {
    return (
      <div className='w-full my-14 py-2 '>
        <div className='flex justify-center'>
          <div className='text-4xl'>Welcome to </div>
          <div className='flex justify-center text-center items-center ml-2 text-4xl text-black font-thin'><h1>Story<span className='text-gray-500'>Sync</span></h1></div>
        </div>
        <h4 className='text-xl mt-4'>Kindly Login or Signup</h4>
      </div>
    )
  }
  else {
    return (<div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (<div key={post.$id} className='p-2 w-1/4'>
            <PostCard {...post} />
          </div>))}
        </div>
      </Container>
    </div>)
  }
}

export default Home