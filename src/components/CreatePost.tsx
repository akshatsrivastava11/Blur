import React, { useState } from 'react';
import { ImageIcon, LinkIcon, TypeIcon } from 'lucide-react';
import './CreatePost.css';
import { service } from '../../Appwrite/config';
const CreatePost: React.FC = () => {
  const [activeTab, setActiveTab] = useState('post');
  const [doc,setdoc]=useState({
    title:"",
    content:""
  });
  const SubmitHandler= async (e)=>{

    e.preventDefault();
    const docs=await service.createPost(doc);
    console.log(docs);
  }


  return (
    <div className='head-div'>
    <form className="create-post-card">
      <div className="create-post-header">
        <h2>Create a post</h2>
      </div>
      <div className="create-post-content">
        <div className="user-info">
          <div className="avatar">
            <img src="/placeholder-avatar.jpg" alt="User" />
          </div>
          <span className="username">u/username</span>
        </div>
        <input 
          type="text"
          placeholder="Title"
          className="title-input"
          value={doc.title}
          onChange={(e)=>setdoc({...doc,title:e.target.value})}
        />
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'post' ? 'active' : ''}`}
            onClick={() => setActiveTab('post')}

          >
            Post
          </button>
          <button 
            className={`tab ${activeTab === 'image' ? 'active' : ''}`}
            onClick={() => setActiveTab('image')}
          >
            Image & Video
          </button>
          <button 
            className={`tab ${activeTab === 'link' ? 'active' : ''}`}
            onClick={() => setActiveTab('link')}
          >
            Link
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'post' && (
            <textarea 
              placeholder="Text (optional)"
              className="post-textarea"
              value={doc.content}
              onChange={(e)=>setdoc({...doc,content:e.target.value})}
            />
          )}
          
          {activeTab === 'image' && (
            <div className="image-upload-area">
              <ImageIcon size={48} />
              <span>Drag and drop or click to upload</span>
            </div>
          )}
          {activeTab === 'link' && (
            <input 
              type="text"
              placeholder="Url"
              className="link-input"
            
            />
          )}
        </div>
      </div>
      <div className="create-post-footer">
        <div className="footer-buttons">
          <button className="footer-button">
            <TypeIcon size={16} />
            Markdown
          </button>
          <button className="footer-button">
            <ImageIcon size={16} />
            OC
          </button>
          <button className="footer-button">
            <LinkIcon size={16} />
            Spoiler
          </button>
        </div>
        <button className="post-button"
        type='submit'
        onClick={SubmitHandler}
        >Post</button>
      </div>
    </form>
    </div>
  );
};

export default CreatePost;

