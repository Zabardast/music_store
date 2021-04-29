import React from 'react'

export default function newsletter_footer() {
  return (
    <div className="newsletter_footer">
        <h4>news letter</h4>
        <p>be the first one to know</p>
        <form id="center_content"> {/*className="form-inline my-2 my-lg-0"*/}
            <input type="text" placeholder="email@email.com"/> {/*className="form-control mr-sm-2" */}
            <button className="btn btn-secondary" id="lightgrey" type="submit">Valider</button>  {/*class="btn btn-secondary my-2 my-sm-0" */}
        </form>
    </div>
  )
}
