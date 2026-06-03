import { Route, Routes } from 'react-router'
import Home from './pages/Home'

import UserSignIn from './pages/user/UserSignIn'
import UserSignUp from './pages/user/UserSignUp'
import UserSignOut from './pages/user/UserSignOut'
import UserProfile from './pages/user/UserProfile'
import UserForgetPass from './pages/user/UserForgetPass'

import CreateHackathon from './pages/participants/CreateHackathon'
import HackathonMgmt from './pages/participants/HackathonMgmt'
import SubmitHackathon from './pages/participants/SubmitHackathon'

import Scoring from './pages/judges/Scoring'

import Result from './pages/admin/Result'
import ManageUsers from './pages/admin/ManageUsers'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<UserSignIn />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/signout" element={<UserSignOut />} />
      <Route path="/forgetpass" element={<UserForgetPass/>} />


      <Route path="/createhackathon" element={<CreateHackathon />} />
      <Route path="/hackathonmgmt" element={<HackathonMgmt />} />
      <Route path="/scoring" element={<Scoring />} />


      <Route path="/submithackathon" element={<SubmitHackathon />} />
      <Route path="/result" element={<Result />} />
      <Route path="/manageusers" element={<ManageUsers />} />


    </Routes>
  )
}

export default App