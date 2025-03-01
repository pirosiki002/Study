export function Clock() {
  return <p>{new Date().toLocaleTimeString()}</p>;
}
