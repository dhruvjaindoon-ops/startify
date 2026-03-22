// REGISTER SYSTEM
function registerUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email }));

  document.getElementById("userMsg").innerText =
    "Welcome " + name + " 🎉";
}


// 50+ IDEAS
const ideas = [];

const categories = ["Tech", "Food", "Health", "Gaming", "Education"];

for (let i = 1; i <= 50; i++) {
  ideas.push({
    title: "Startup Idea " + i,
    category: categories[i % 5],
    problem: "People face inefficiency in this sector.",
    solution: "A digital platform solving problems using AI & automation.",
    target: "Students, Professionals, Businesses",
    revenue: "Subscription + Ads + Premium features",
    market: "Rapidly growing global market",
    uniqueness: "Affordable & scalable solution"
  });
}


// SHOW IDEAS
function showIdeas() {
  let filter = document.getElementById("categoryFilter").value;
  let container = document.getElementById("ideasContainer");

  container.innerHTML = "";

  let filtered = ideas.filter(i => filter === "All" || i.category === filter);

  filtered.forEach(i => {
    container.innerHTML += `
      <div class="card">
        <h3>${i.title}</h3>
        <p><b>Category:</b> ${i.category}</p>
        <p><b>Problem:</b> ${i.problem}</p>
        <p><b>Solution:</b> ${i.solution}</p>
        <p><b>Target:</b> ${i.target}</p>
        <p><b>Revenue:</b> ${i.revenue}</p>
        <p><b>Market:</b> ${i.market}</p>
        <p><b>Unique Value:</b> ${i.uniqueness}</p>
      </div>
    `;
  });
}

// AUTO LOAD
showIdeas();