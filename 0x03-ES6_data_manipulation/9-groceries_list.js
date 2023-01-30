export default function groceriesList() {
  const veg = [[Apples, 10], [Tomatoes, 10], [Pasta, 1], [Rice, 1], [Banana, 5]];
  const grocery = new Map();
  for (const x of veg) grocery.set(x[0], x[1]);
  return grocery;
}
