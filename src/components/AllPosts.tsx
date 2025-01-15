'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Post from './Post'
import { service, Service } from '../../Appwrite/config'
import { Models } from 'appwrite'
export default function AllPosts() {
  const [posts, setPosts] = useState<Models.Document[]>(
    []
  );
  useEffect(() => {
    service.listPost([]).then((posts) => {
      if (posts) {
          setPosts(posts.documents)
      }
      console.log(posts?.documents);
  })
 
  }, [])
 
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post id={post.$id} />
      ))}
    </div>
  )
}

