export default function ValidateCommentSuccess() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  return (
    <div style={family}>
      <div className="validate-comment-success">
        <div className="title">
          <p>Validation Réussie !</p>
        </div>
        <button>Terminer</button>
      </div>
    </div>
  );
}
