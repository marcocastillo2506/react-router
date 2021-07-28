export default function Header({ lives, points }) {
    return (
      <div className="header">
        <h2>Lives: {lives}</h2>
        <h2>Points: {points}</h2>
      </div>
    );
  }
  