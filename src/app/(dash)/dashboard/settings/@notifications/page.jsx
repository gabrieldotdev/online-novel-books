export default async function Notifications() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h2>Notifications</h2>;
}
