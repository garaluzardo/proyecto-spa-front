import "./About.css"

function About() {
    return (
        <div className="page">
            <div className="about-page">
                <section className="about-container">
                    <header>
                        <h1>about...</h1>
                    </header>

                    <div className="about-content">
                        <p>
                        Book Nook is a cozy corner designed for book lovers who want to keep an organized and accessible record of their books. The idea comes from my personal experience as a reader and the need to manage my personal library in a more comfortable and visually pleasant way.
                        </p>

                        <p>
                        I focused on maintaining a clean and minimalist design because I believe that an intuitive navigation experience is key to engaging the user. A good design can make the difference between abandoning an app or turning it into a space you always want to return to.
                        </p>

                        <p>With <strong>Book Nook</strong>, you can</p>

                        <ul>
                            <li>📚 Record your readings with dates, notes, and ratings.</li>
                            <li>⭐ Organize your books into custom shelves.</li>
                            <li>📖 Save pending titles and plan future readings.</li>
                            <li>📊 Track your progress and reading habits.</li>
                        </ul>

                   {/*      <h4 className="italic">
                        Reading is a refuge, and Book Nook wants to be its digital reflection.
                        </h4> */}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;