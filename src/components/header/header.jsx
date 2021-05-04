import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { newsLetterApi } from '../../services/APIservice'
import './Header.css'

export default function header(props) {
    console.log(props)
    // const [item_search, setSearchText] = useState({name: ''})
    // let history = useHistory()
    // const handleChange =  (event) => {
    //     console.log(event)
  
    //     const value = event.currentTarget.value
    //     const name = event.currentTarget.name
        
    //     setSearchText({...item_search, [name]: value})
    //     item_search.name = value
  
    //     console.log(item_search.name)
    //     console.log(value)
    // }
    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     console.log('item_search !')
    //     //ajax
    //     const result = await newsLetterApi(item_search)
    //     // console.log(result, typeof result)
    //     if(result && result.data) {
  
    //         // history.push("/")
    //     }
    // }

  return (
    <section>
        <nav>
            <div className="nav_title">
                <a className="title_style" href="#">Music Store</a>
            </div>
            <div className="nav_center">
                <div className="nav_link">
                    <ul>
                        <li>
                            <a class="nav-item" href="http://localhost:3000">Home</a>
                        </li>
                        <li>
                            <a class="nav-item" href="http://localhost:3000/artists">Artiste</a>
                        </li>
                        <li>
                            <a class="nav-item" href="http://localhost:3000/album">Album</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#">Playlist</a>
                        </li>
                        <li>
                            <a class="nav-item" href="http://localhost:3000/about">About</a>
                        </li>
                    </ul>
                </div>
                <form className="nav_search">
                    <input className="form-control mr-sm-2 nav_search_input" type="text" size="30" placeholder="Search" value="" />  {/* onChange={handleChange} */}
                    <button className="btn btn-secondary my-2 my-sm-0 nav_search_button" type="submit" >Search</button> {/* onClick={handleSubmit} */}
                </form>
            </div>
            <div className="nav_basket">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </nav>
    </section>
  )
}
