import React from 'react'
import './Footer.css';
import Social from "./social_footer";
import News from "./newsletter_footer";
import Map from "./website_map";

export default function footer() {
    return (
        <footer className="bg-secondary footer">
            <div class="wrapper">
                <Social/>
                <News/>
                <Map/>
            </div>
        </footer>
    );
}
