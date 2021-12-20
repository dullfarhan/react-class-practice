//loop ==map , for-each

function Button({err,txt}) {
    
  return (
    <div>
      <button>{txt}</button>
      <span> {err}</span>
    </div>
  );
}
export default Button;