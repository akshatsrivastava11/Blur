import React, { useEffect, useState } from 'react';
import { service } from '../../Appwrite/config';
import { Models } from 'appwrite';

export default function Post({ id }: { id: string }) {
  const [post, setPost] = useState<Models.Document | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await service.getPost(id);
        setPost(data ?? null); 
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchPost();
  }, [id]);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div className="bg-gray-800 rounded-lg p-4 shadow-md">
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <button className="text-gray-400 hover:text-blue-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <span className="text-sm font-bold my-1"></span>
          <button className="text-gray-400 hover:text-red-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="flex-grow">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-300 mb-2">{post.content}</p>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-2">Posted by u/Anonymous</span>
            <span className="mr-2">•</span>
            <span>{new Date(post.$createdAt).toLocaleString()}</span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
