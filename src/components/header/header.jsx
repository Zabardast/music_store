import React from 'react'
import './Header.css'

export default function header() {
    const menu = [
        {nom: "Home"    , url: "/"},
        {nom: "Contact" , url: "/contact"},
        // {nom: "A propos", url: "/about"},
        // {nom: "Private" , url: "/profil"},
        // {nom: "Posts"   , url: "/posts"},
    ]
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
                            <a class="nav-item" href="#">Home</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#">Artiste</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#">Album</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#">Playlist</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#">About</a>
                        </li>
                    </ul>
                </div>
                {/* <div className="nav_search"> */}
                    <form className="nav_search">
                        <input className="form-control mr-sm-2 nav_search_input" type="text" size="30" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0 nav_search_button" type="submit">Search</button>
                    </form>
                {/* </div> */}
            </div>
            <div className="nav_basket">
                {/* <a className="title_style" href="#">Music Store</a> */}
            </div>
        </nav>
        {/* <nav class="navbar navbar-expand-lg navbar-light debug">
            <a class="title_style" href="#">Music Store</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                 aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" >
                        <a class="nav-link" href="#">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Artiste</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Album</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Playlist</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav> */}
        {/* <nav>
            <ul>                    
                <form class="form-inline ">
                    <input class="form-control mr-sm-2" type="text" size="80" placeholder="Search"/>
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </ul>
        </nav> */}
    </section>
  )
}
