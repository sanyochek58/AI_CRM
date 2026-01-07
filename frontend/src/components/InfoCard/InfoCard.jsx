import "./InfoCard.css";

export default function InfoCard({ imgName, title = "Info Card Title", value, trend, text }) {
  return (
    <div className="info-card">
      <div className="info-card-header">
        <div className="info-card-icon">
          {imgName && <img src={imgName} alt="info icon" />}
        </div>
        <p className="info-card-title">{title}</p>
      </div>

      {value ? (
        <div className="info-card-stats">
          <span className="info-card-value">{value}</span>
          {trend && <span className={`info-card-trend ${trend > 0 ? 'positive' : 'negative'}`}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>}
        </div>
      ) : (
        <p className="info-card-text">
          {text || "This is some information inside the info card."}
        </p>
      )}
    </div>
  );
}