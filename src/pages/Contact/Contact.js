import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import emailjs, { init } from 'emailjs-com';
import { Container } from 'react-bootstrap';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './Contact.css';
init("user_WUImOdavvetW0VE0Cnub5");



const SERVICE_ID = 'service_c1poeao';
const TEMPLATE_ID = "template_4cwj8ci";
const USER_ID = "user_WUImOdavvetW0VE0Cnub5";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 2000,
      easing: 'ease',
    });
  })
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success}',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <div className='conP'>
      <div className="contact-form " id="contact">
        <Container className=' pb-3'>
          <h2 className="text-light bg-dark rounded-pill p-1">Contact Me</h2>
        </Container>
        <div className="fw-bold"> <hr /> </div>


        <div data-aos="zoom-in">
          <Form className="bg-secondary" onSubmit={handleOnSubmit}>
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              name='user_email'
              placeholder='Email…'
              required
              icon='mail'
              iconPosition='left'
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Name'
              name='user_name'
              placeholder='Name…'
              required
              icon='user circle'
              iconPosition='left'
            />
            <Form.Field
              id='form-textarea-control-opinion'

              control={TextArea}

              name='user_message'
              placeholder='Message…'
              required
              icon='Message'
              iconPosition='left'
            />

            <Button type='submit' color='green'>Submit</Button>
          </Form>
        </div>

      </div>
    </div>






  );
};

export default Contact;