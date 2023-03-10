import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import { validateEmail } from '../utils/helpers';


function Contact() {
//   const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);

//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!errorMessage) {
//   //     console.log('Submit Form', formState);
//   //   }
//   // };

//   // function refreshPage() {
//   //   window.location.reload(true);
//   // }


//   if (state.succeeded) {
//     return (
//       <div>
//         <p>Thanks for reaching out!</p>
//         <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
//         {/* This form button is broken. It was supposed to refresh the page so you can submit a new form, but I'm changing this bug into a feature that takes you back to the about section. */}
//       </div>
//     );
// }


//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`A ${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   return (
//     <div>
//       <p className="content is-medium">Contact Me</p>
//       <hr />
//       <form id="contact-form" onSubmit={handleSubmit}>
//         <div className="field">
//           <label className="label" htmlFor="name">Name</label>
//           <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="email">Email Address</label>
//           <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
//         </div>
//         <div className="field">
//           <label className="label" htmlFor="message">Message</label>
//           <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="is-danger">{errorMessage}</p>
//           </div>
//         )}
//         <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
//       </form>
//     </div>
//   );

return(
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
  </div>
    );
}

export default Contact;