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
    <section class="red">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Music Store</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03">
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
        </nav>
        <nav>
            <ul>                    
                <form class="form-inline ">
                    <input class="form-control mr-sm-2" type="text" size="80" placeholder="Search"/>
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </ul>
        </nav>
        <br/>
    </section>
  )
}
