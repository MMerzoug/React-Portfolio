import portrait from  '../assets/portrait.jpg'

export default function About() {
    // For image google framer motion to toggle betwwen color and transitions
    return (
        <section>
            <figure class="wrapper">
                <img src={portrait} class="box" alt="Picture of Monique Merzoug" />
            </figure>
            <h2> About Me</h2>
            <div className="content-about-me">
                <p>
                    Hello!
                </p>
                <p>
                    My name is Monique, and I am a recent Full Stack Web Development graduate with a passion for
                    enhancing
                    businesses' Omni Channel experience. As an business leader, I possess strong visual merchandising
                    and
                    people management skills, which I'm eager to combine with my web development expertise to maximize
                    the
                    potential of your online presence.
                </p>
                <p>
                    Throughout my career, I've proven to be results-driven and committed to delivering exceptional
                    outcomes
                    for both clients and team members. My diverse skill set allows me to approach projects with a
                    comprehensive understanding of various facets of the business world.
                </p>
                <p>
                    I am thrilled to join your team and bring my unique blend of skills to the table. My ultimate goal
                    is to
                    magnify your business's profits, ensuring that your digital presence is not only visually appealing
                    but
                    also highly functional and user-friendly.
                </p>
                <p>
                    I look forward to working with you and contributing to the ongoing success of your business.
                </p>

            </div>
        </section>
    )
}