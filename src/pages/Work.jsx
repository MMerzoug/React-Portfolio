import linguiniImg from '../assets/linguini.jpg'
import Job_BIImg from '../assets/Job-BI.jpg'
import Code_EImg from '../assets/Code-E.jpeg'
import HoriseoImg from '../assets/Horiseo.png'
import Note_Taker_AssistantImg from '../assets/Note_Taker_Assistant.png'
import Offline_Text_EditorImg from '../assets/Offline_Text_Editor.jpeg'


export default function Work() {

    const projects = [
        {
            name: 'Code-E',
            description: ' Code-E is a full-stack web applicationthat helps users simplify their coding journey. Code-E aims to enhance developers coding skills and provide valuable insights into their code. This application is built using React, GraphQL, Node, Express, MongoDB, Mongoose, and is deployed on Heroku.',
            img:  Code_EImg , 
            alt: 'image of Code-E landing page',
            href: "https://best-code-bot-ever-6c020fa64dc5.herokuapp.com"
        },
        {
            name: 'Linguini',
            description: 'The linguini-language-tutoring repository is a full-stack web application that allows students to schedule tutoring sessions with tutors. The application is built using Express, MySQL, Sequelize, Node, and Passport.',
            img:  linguiniImg , 
            alt: 'image of linguini landing page',
            href: "https://pasta-fagioli-b817a8e5488d.herokuapp.com/"
        },
        {
            name: 'Job.BI',
            description: ' Job.BI is an education and career resource webpage that provides users with a platform to explore courses and job opportunities. It aims to assist individuals in enhancing their knowledge, skills, and career prospects by offering a curated collection of courses and job postings.',
            img:  Job_BIImg , 
            alt: 'image of Job.BI landing page',
            href: "https://markthos.github.io/Job.BI/."
        },
        {
            name: 'Horiseo',
            description: ' This project involves optimizing a marketing agencies website to comply with accessibility standards, enhancing its search engine optimization (SEO). By leveraging semantic HTML elements, logical structure, accessible alt attributes, proper heading hierarchy, and descriptive titles, the website became more user-friendly and inclusive. The process underscored the interplay between accessibility, user experience, and SEO, highlighting the importance of these elements in creating an effective web presence.',
            img:  HoriseoImg , 
            alt: 'image of Horiseo landing page',
            href:"https://mmerzoug.github.io/Challenge-01-HTML-CSS-Git/"
        },
        {
            name: 'Note Taker Assistant',
            description: ' This is a simple note-taking application designed to assist small business owners in organizing their thoughts and keeping track of tasks. Users can write and save notes, view existing notes, and delete notes if the Bonus functionality is implemented.',
            img:  Note_Taker_AssistantImg , 
            alt: 'image of Note Taker Assistant landing page',
            href: "https://note-taker-assistant-4646e0adb56a.herokuapp.com"
        },
        {
            name: 'Offline Text Editor',
            description: ' Offline Text Editor is a project that allows you to edit and save text even when you are offline. It includes features for storing and retrieving text from an IndexedDB database, making it useful for scenarios where internet connectivity may be unreliable.',
            img:  Offline_Text_EditorImg , 
            alt: 'image of Offline Text Editor landing page',
            href:"https://github.com/MMerzoug/Offline-Text-Editor"
        },
    ]

    return (
        <section id="work" className="work">
            <h2>Work</h2>

            {projects.map(project => (
                <div class="content" id="prework-study-guide">
                    <a href={ project.href}>
                        <img src={project.img} alt={project.alt} />
                    </a>
                    <p>{project.description}</p>
                </div>
            ))}
        </section>
    )
}