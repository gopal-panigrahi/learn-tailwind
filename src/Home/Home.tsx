import { Link } from "react-router-dom";

function Home() {
  return (
    <ol>
      <li>
        <div className="mx-1 inline">Project 1:</div>
        <Link className="text-blue-500 underline" to="/project-1">
          Email Subscribe Card
        </Link>
      </li>
      <li>
        <div className="mx-1 inline">Project 2:</div>
        <Link className="text-blue-500 underline" to="/project-2">
          Pricing Grids
        </Link>
      </li>
      <li>
        <div className="mx-1 inline">Project 3:</div>
        <Link className="text-blue-500 underline" to="/project-3">
          Product Modal
        </Link>
      </li>
    </ol>
  );
}

export default Home;
