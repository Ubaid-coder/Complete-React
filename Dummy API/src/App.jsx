import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SideBar from './components/SideBar.jsx'
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'
import { useState } from 'react'
import PostListProvider from './store/post-list-store.jsx'


function App() {

  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>

  )
}

export default App
