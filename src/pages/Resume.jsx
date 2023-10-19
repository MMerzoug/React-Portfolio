import Carousel from 'react-bootstrap/Carousel';
import MONIQUE_MERZOUG_RESUME_2023 from '../assets/MONIQUE_MERZOUG_RESUME_2023.pdf';

export default function resume() {
    return (
        <section>
        <h2>Resume</h2>
<div className='resume'>
<p>
                        Download my <a href={MONIQUE_MERZOUG_RESUME_2023} download> Resume </a>
                    </p>
</div>

<h2>References</h2>
        <Carousel>
            <Carousel.Item interval={5000}>
                <Carousel.Caption>
                    <p>
                        "I have had the privilege of working with Monique for the past 18 years and can
                        wholeheartedly attest to their exceptional work ethic and unwavering commitment to results. Monique consistently demonstrates a sense of urgency in tackling challenges and finding innovative solutions, which has significantly contributed to the success of our organization.
                    </p>
                    <p>
                        Monique's business acumen is unmatched, as she possess' an innate ability to understand
                        complex
                        issues, make informed decisions, and identify areas of opportunity for growth. As a leader,
                        Monique
                        inspires her team with a clear vision and direction, fostering a collaborative environment
                        that
                        encourages open communication, accountability, and high performance.
                    </p>
                    <p>
                        Throughout the years, Monique has proven to be an invaluable asset to our company, and I am
                        confident that her extensive experience, exceptional skills, and dedication to excellence
                        will
                        make
                        a lasting impact wherever she goes!"
                        <p>Boss</p>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>

                <Carousel.Caption>
                    <p>
                        "As a recent instructor of Monique, I can confidently vouch for her outstanding web
                        development
                        skills and comprehensive understanding of various programming languages. Monique
                        consistently
                        demonstrated a strong grasp of the subject matter, which translated into exceptional
                        problem-solving
                        abilities and overall performance in her coursework.
                    </p>
                    <p>
                        Monique's dedication to learning and applying new concepts, coupled with their ability to
                        tackle
                        complex challenges, sets her apart from her peers. I have no doubt that Monique will make a
                        significant impact in the field of web development."
                        <p>Instructor</p>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>

                <Carousel.Caption>
                    <p>
                        "As a mentor to Monique, I have had the pleasure of witnessing her impressive personal and
                        professional growth. Monique has consistently displayed a strong commitment to learning,
                        eagerly
                        seeking opportunities to expand her knowledge and enhance her skills.
                    </p>
                    <p>
                        In real-world situations, Monique has demonstrated the ability to apply her acquired skills
                        effectively, tackling challenges with creativity and resilience. Her dedication to
                        excellence
                        and
                        continuous improvement is truly inspiring, making Monique an outstanding individual to work
                        with."
                        <p>Mentor</p>
                    </p>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        </section>
    );

}

