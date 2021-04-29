import React from 'react'
import './Footer.css';
import Social from "./social_footer";
import News from "./newsletter_footer";
import Map from "./website_map";

export default function footer() {
//    const Footer = () => (
//     <footer className="footer">
//         <p>Some footer nonsense!</p>
//     </footer>
//     )

//   return render(<Footer key = "2"/>, document.getElementById("root"))

    return (
        <footer className="bg-secondary">
            <div class="wrapper">
                <Social/>
                <News/>
                <Map/>
            </div>
        </footer>
    );
}