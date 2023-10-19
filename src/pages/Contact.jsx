import { useState } from "react";
import emailjs from 'emailjs-com'

export default function Contact() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        message:''
    })

const handleChange = (e)=> {
    const {name, value} = e.target
    setForm({...form, [name]: value})
}

const handleSubmit = (e)=> {
    e.preventDefault();

    emailjs.sendForm('service_ybshkcc', 'template_if0bfb9', e.target, 'AkE6SC4_K6hveR0Gg').then((result)=> {
        console.log(result.text);
    })
}


    return (
        <section id="contact-me" class="contact-me">
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label for="name">Name:</label>
                        <input 
                        type="text"  
                        name="name" 
                        placeholder="Your name goes here!" 
                        value={form.name} 
                        onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label for="mail">Email:</label>
                        <input 
                        type="email" 
                        name="email" 
                        placeholder=""
                        value={form.email}
                        onChange={handleChange}
                        />
                    </li>
                    <li>
                        <label for="msg">Message:</label>
                        <textarea 
                         name="message"
                         value={form.message}
                         placeholder="Let's work together!"
                         onChange={handleChange}
                         ></textarea>
                    </li>
                    <li class="button">
                        <button type="submit">Send your message</button>
                    </li>
                </ul>
            </form>
        </section>
    )
}