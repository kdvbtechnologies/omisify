export default function EmptyStats() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="historical">
        <div className="historic">
          <p>Aucun Statistique !</p>
        </div>
      </div>
    </div>
  );
}
