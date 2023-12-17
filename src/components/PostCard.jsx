import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='h-50px bg-gray-100 rounded-xl px-2 py-8'>
                <div className='justify-center mb-4 '>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl h-40  w-full mx-auto object-scale-down' />

                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>

        </Link>
    )
}

export default PostCard