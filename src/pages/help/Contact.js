import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

export default function Contact() {

  const data = useActionData();

  /* this "post" method does not actually send a post request,
   its just react-router handling this form method ,
   when later used in actual post request it will access the method type from it */
  return (
    <div className="contact">
        <h3>Contact</h3>

    <Form method="post" action="/help/contact">
        <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
        </label>
        <label>
            <span>Your message</span>
            <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      {data && data.error && <p>{data.error}</p>}
    </Form>

    </div>
  )
}

export const contactAction = async ({ request }) => {
  console.log(request)

  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message")
  }

  console.log(submission);

  // send post request to api ~ 
  if(submission.message.length<10){
    return {error: "error message!"}
  }


  //redirect to homepage after submission

  return redirect("/");
}