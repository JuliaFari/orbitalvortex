// src/pages/Home.js
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Orbital Vortex</h1>
      <Link to="/login">
        <button>Começar</button>
      </Link>
    </div>
  );
}