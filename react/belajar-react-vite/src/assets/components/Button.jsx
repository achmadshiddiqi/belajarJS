export default function Button({ label, events, dis }) {
  return (
    <button onClick={events} key={label} disabled={dis == "yes" ? true : false}>
      {label}
    </button>
  );
}
