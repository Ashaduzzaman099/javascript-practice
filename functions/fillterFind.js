const prices = [200, 50, 700, 500, 100];

const bestPrice = prices.filter((price) => {
  return price >= 200;
});
console.log(bestPrice);

const users = [
  {
    id: 2,
    name: "Ashik",
  },
  {
    id: 3,
    name: "Kabul Hossen",
  },
];

const user = users.find((u) => {
  return u.id === 2;
});

console.log(user);
