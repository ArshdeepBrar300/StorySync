import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import Loader from '../components/Loader';
import appwriteService from "../appwrite/config";

function AllPosts() {

    async function fetchPosts() {
        const postsAppwrite = await appwriteService.getPosts([])

        if (postsAppwrite) {
            setPosts(postsAppwrite.documents)
            setLoading(false)
        }
    }
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetchPosts()

    }, [])
    return (
        loading ? <Loader /> :
            (posts.length !== 0 ? (<div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>)
                :
                (<Container>
                    <div className='h-screen flex items-center justify-center '>
                        <h2 className='text-4xl '>Oops , No Posts!</h2>
                    </div>
                </Container>)

            )
    )
}

export default AllPosts