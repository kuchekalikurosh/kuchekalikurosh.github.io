import profilePic from '../assets/profile.JPG'

function Home() {
  return (
    <main>
        <section className="container page-section text-center">
            <h1 className="display-1 fw-bold">Kurosh Kuchekali</h1>
            <p className="text-accent fs-5">Building software and interactive experiences</p>
        </section>

        <section className="image-section text-center">
            <img 
                src={profilePic}
                alt="Kurosh"
                className="profile-image"
            />
        </section>

        <section className="container about-section">
            <div className="content-narrow">
                <h2 className="mb-4">About Me</h2>

                <p className="mb-4 text-start">
                    Growing up, I loved all things computers. 
                    Just pondering what was happening inside this magical box cured my boredom for hours (and video games, of course). 
                </p>

                <p className="mb-4 text-start">
                    Over time, that curiosity evolved into a passion for Computer Science and understanding the systems that shaped our world.
                    From full-stack development to distributed systems, I strive to build thoughtful and practical solutions in an increasingly chaotic digital world - 
                    creating experiences that can bring a little more happiness to the people who use them.
                </p>
            </div>
        </section>

        <section className="container quote-section">
            <blockquote className="philosophy-quote">
                “I can become a good person and create one good person for the world.
                And if I can just do that, then maybe I can become someone who can
                create even more than that.”
            </blockquote>
        </section>
    </main>
  )
}

export default Home