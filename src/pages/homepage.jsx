import { Link } from 'react-router-dom';


function Homepage({ TasksValue }) {

    return(
        <main className='main'>
            
    <header>
        <h1>Mesa Pioneer Construction</h1>
    </header>

    <nav>
        <a href="#home">Home</a> |
        <a href="#services">Services</a> |
        <a href="#portfolio">Portfolio</a> |
        <a href="#contact">Contact</a>
    </nav>

    <section id="home">
        <h2>Welcome to Our Construction Company</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac suscipit libero.</p>
    </section>

    <section id="services">
        <h2>Our Services</h2>
        <ul>
            <li>Construction Planning</li>
            <li>Building Design</li>
            <li>Project Management</li>
        </ul>
    </section>

    <section id="portfolio">
        <h2>Portfolio</h2>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@constructioncompany.com</p>
        <p>Phone: (123) 456-7890</p>
    </section>

    <footer>
        &copy; 2024 Construction Company
    </footer>
                <h1>Bridge CRM</h1>
                <h3>The working person's Customer Relationship Management tool</h3>
            <div className='homepageLayout'>
                <div className='leftColumn'>
                        <img className="frontPics" src="badbusiness.png"/>
                    <p className="LCText">
                        Sign up to start the free experience!  From here you can create or modify your contacts, put them into groups, and add your activities all online in your own personal environment.
                    </p>
                        <br/>
                        <Link className="LCLink" to='signup'>Click here to sign up for free!</Link>
                    </div>
                <div className='rightColumn'>
                        <img className="frontPics" src="goodbusiness.png"/>
                    <p className="RCText">
                        The full version of this program has all of the features that are on the free tier, except you get the following:  Bragging rights.  Offline installations.  More bragging rights.
                        </p>
                        <br/>
                        <Link 
                        className="RCLink"
                        to='cart'>Click here to buy the full experience!!! (not really)</Link>
                </div>
                <section className="contentSection">
                {TasksValue ? <Tasks/> : null}
                </section>
            </div>
        </main>
    );
};
    export default Homepage;