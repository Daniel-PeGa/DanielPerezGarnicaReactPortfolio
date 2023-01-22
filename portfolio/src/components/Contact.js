import React from 'react';

function Contact() {
    
    return (
        <div>    
    <nav className="contact-me-container">
    <h1 className="contact-me-list" id="contact-me">Contact Me!</h1>
    <ul className="smList noList flexCenterRow">
        <li><a href="https://www.facebook.com/profile.php?id=100010868464967" className="fa fa-facebook textBlack text-decorations itemMargin"> Facebook</a></li>
        <li><a href="https://twitter.com/daniel_pega0716" className="fa fa-twitter textBlack text-decorations itemMargin"> Twitter</a></li>
        <li><a href="https://www.instagram.com/danielpega_/" className="fa fa-instagram textBlack text-decorations itemMargin"> Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/daniel-perez-garnica-10b956159/" className="fa fa-linkedin textBlack text-decorations itemMargin"> Linkedin</a></li>
        <div className="phone">
          <li><a href="tel:629-239-5033" className="fa fa-phone text-decorations textBlack"> (629) 239-5033</a></li>
        </div>
    </ul>  
  </nav>

  <div>
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email Address</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Message</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
      </form>
    </div>
    
    </div>
    );
}

export default Contact;