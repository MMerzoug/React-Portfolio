import {Link} from "react-router-dom"

export default function Header({page, setPage}) {

    return (
        <header className="header" >
            <h1>
                Monique Merzoug
            </h1>
                <nav>
                    <ul>
                        <li>
                            {/* <a href="#" onClick={()=> setPage('about')}>About Me</a> */}
                            <Link to= "/" > About Me</Link>
                        </li>
                        <li>
                            {/* <a href="#" onClick={()=> setPage('work')}>Work</a> */}
                            <Link to= "/Work" > Work</Link>
                        </li>
                        <li>
                            {/* <a href="#" onClick={()=> setPage('contact')}>Contact Me</a> */}
                            <Link to= "/Contact" > Contact</Link>
                        </li>
                        <li>
                            {/* <a href="#" onClick={()=> setPage('resume')}>Resume</a> */}
                            <Link to= "/Resume" > Resume</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}