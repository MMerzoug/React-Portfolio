

export default function Header({page, setPage}) {

    return (
        <header className="header" >
            <h1>
                Monique Merzoug
            </h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#" onClick={()=> setPage('about')}>About Me</a>
                        </li>
                        <li>
                            <a href="#" onClick={()=> setPage('work')}>Work</a>
                        </li>
                        <li>
                            <a href="#" onClick={()=> setPage('contact')}>Contact Me</a>
                        </li>
                        <li>
                            <a href="#" onClick={()=> setPage('resume')}>Resume</a>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}