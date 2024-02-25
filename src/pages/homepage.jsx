import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

function Homepage({ TasksValue }) {
  return (
    <main className="main">
      <section className="welcome">
        <h1>Welcome to Mesa Pioneer Construction</h1>

      </section>

      <div className="friend">
        <h2>Your Friend in the Constuction Business</h2>
        </div>

      <section className="ourServices">
        <h2>Our Services</h2>
        <ul>
          <li>Residential Construction</li>
          <li>Renovation and Remodeling</li>
        </ul>
      </section>

      <section id="portfolio">
            <h2>Portfolio</h2>
        </section>
    </main>
  );
}
export default Homepage;
