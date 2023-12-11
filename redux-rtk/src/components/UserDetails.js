import React from 'react'
import { fakeUserData, fakeUserAvatar } from '../api/data'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser, deleteUser } from '../store/UserSlice'
import { addAdmin } from '../store/AdminSlice'


const UserDetails = () => {

  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  }
  const allUsers = useSelector((store) => {
    console.log("store",store)
    return store.users.usersArray;
  })
  const removeCurrentUser = (id) => {
    dispatch(removeUser(id))
  }
  const clearUsers = () => {
    dispatch(deleteUser())
  }
  const userInfo = {
    userName: fakeUserData(),
    userNameColor: fakeUserAvatar(),
  }
  const addNewAdmin = (payload) => {
    dispatch(addAdmin(payload));
  }

  return (
    <div>
      <div>
        <div>                
          <button onClick={() => {addNewUser(userInfo)}}>Add user</button>
          <button onClick={() => { clearUsers()}}>Clear users</button>
        </div>
        <div>                
          <button onClick={() => {addNewAdmin(userInfo)}}>Add admin</button>
        </div>
        <div>
            <p>Number of Users: {allUsers.count}</p>
        </div>
      </div>
      <ul className='userListContainer'>
        {
          allUsers.map((userObject,id) => {
            return <div  key={id}><li className='userListStyle' style={{color: userObject.userNameColor}}>
                {userObject.userName}
              <button onClick={() => {removeCurrentUser(id)}} className='buttonStyle'><span className="k-icon k-i-delete" style={{color: "red"}}/></button>
              </li>
              <hr style={{width: "250px",margin: 0}}/>
              </div>
          })
        }
      </ul>
    </div>
  )
}

export default UserDetails