import React from 'react'

export default function contact() {
  return (
    <section id="contact">
        
      
        <div className="form-group form">
          <h2 className="center">Contact</h2>

          <label>First Name* : </label>
          <input type="text" className="form-control" id="user_name" placeholder="First Name"/>
         
          <label>Last Name* : </label>
          <input type="text" className="form-control" id="user_lastname" placeholder="Last Name"/>
         
          <label for="exampleInputEmail1">Email address* : </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        
          <label>Phone Number* : </label>
          <input type="number" className="form-control" id="user_lastname" placeholder="Phone Number"/>
          
          <label>Message* : </label>
          <textarea className="form-control" id="exampleTextarea" rows="5" placeholder="Write youre message here . . . ."></textarea>

          <br/>
          <label>Required Information* :</label>
          <button className="btn btn-secondary my-2 my-sm-0 right" type="submit">Submit</button>

        </div>
      
    </section>
  )
}
