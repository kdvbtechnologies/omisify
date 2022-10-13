export default function StatsSeptProps({ sept, tsept }) {
  return (
    <>
      <div className="stats-cards">
        <div className="a">
          {sept.map((point) => (
            <p>
              {point.dSeptember} || {point.cSeptember} points
            </p>
          ))}
        </div>
      </div>
      <div className="total">
        <p>{tsept.total} points</p>
      </div>
    </>
  );
}
