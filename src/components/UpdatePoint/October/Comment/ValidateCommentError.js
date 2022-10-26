export default function ValidateCommentError() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="validate-comment-error">
        <div className="title">
          <p>Validation Impossible !</p>
        </div>
        <button>Réessayer</button>
      </div>
    </div>
  );
}
