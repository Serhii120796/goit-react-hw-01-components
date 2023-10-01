import './Statistics.css';

export const Statistics = ({ title, stats }) => (
    <section className="statistics">
      {title && (<h2 className="stat-title">{title}</h2>)}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="stat-item" key={id} style={{
    width: `calc(100% / ${stats.length})`,
    backgroundColor: getRandomHexColor(),
  }}>
            <span className="stat-label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
