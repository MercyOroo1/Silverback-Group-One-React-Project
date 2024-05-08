import React, {useEffect, useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import {logout} from '../../firebase'
import { db } from '../../firebase'
import { DocumentReference, collection, doc, getDoc, query, where } from 'firebase/firestore'



// const emailval = document.getElementById("email-input").value
// const colRef = collection(db, "user")
// const q = query(colRef, where("email", "==", `${emailval}`))
// const names = getDoc(q).then(doc => doc.data().name).catch(err => console.log(err))


const Navbar = ({email}) => {
  const [names, setNames] = useState("bro👊");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colRef = collection(db, "user");
        const q = query(colRef, where("email", "==", email));
        console.log(q)
        const docSnap = await getDoc(q);
        setNames(docSnap.data().name);
        
      } catch (error) {
        console.log(error);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  console.log(names)

return (
    <div className='navbar'>
      <div className="navbar-left">
         <img src={logo} alt=""/>
         <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
         </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons' />
        <img src={bell_icon} alt="" className='icons'/>
        <p>{names}</p>
        <div className="navbar-profile">
        <img src={profile_img} alt="" className='profile'/>
        <img src={caret_icon} alt="" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of MoringaFlix</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar