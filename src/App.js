import './App.css';
import Login from './components/Login';
import {Routes,Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import FeedPage from './components/FeedPage';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';
import UpdatePost from './components/UpdateForm';
import Admin from './components/Admin';
import OtherUserPosts from './components/OtherUser';

function App() {
  return (
    <div className="App">
      {/* <h1>J-Force</h1> */}
      {/* <Login /> */}
{/* <FeedPage /> */}
      <Routes>
        {/* <Route path="/" element={<SignUp />} />    */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/posts" element={<ViewPost />} />
        <Route path='/updatepost' element={<UpdatePost />} />
        <Route path='/otheruserposts' element={<OtherUserPosts/>} />
        <Route path = "/admin" element = {<Admin/>} />
        
    </Routes>

    </div>
  );
}

export default App;
