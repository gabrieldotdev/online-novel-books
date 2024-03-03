export default async function Revenue() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h2>Revenue metrics</h2>;
}
