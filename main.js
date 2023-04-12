let a = [];
let b = 0;
for (let i = 0; i < 5; i++) {
  a.push(Number(prompt("?")));
}
for (let i of a) {
  b += i;
}
document.querySelector(
  ".ii"
).textContent = `${a[0]} +${a[1]} +${a[2]} + ${a[3]} + ${a[4]}= ${b}`;
