export default function Counter({ value, increase }) {
  return (
    <div>
      <button onClick={increase}>+1</button>
      <span>-----{value}</span>
    </div>
  );
}
