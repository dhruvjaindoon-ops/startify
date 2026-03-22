const categories = [
"Sports","Technology","Food","Gaming","Health",
"Finance","Education","Travel","E-commerce","AI"
];

const ideas = [];

for(let i = 1; i <= 50; i++){

    let category = categories[i % categories.length];

    ideas.push({
        title: category + " Startup Idea " + i,
        category: category,
        problem: "Major gap in " + category + " industry causing inefficiency.",
        solution: "Digital platform solving key issues using automation & AI.",
        target: "Students, Professionals, Businesses in " + category,
        uniqueValue: "Affordable & scalable tech solution",
        marketSize: "Rapidly growing global " + category + " market",
        revenueModel: "Subscription + Ads + Premium",
        competition: "Existing competitors but high differentiation",
        scalability: "Cloud-based global expansion",
        funding: "₹20L seed investment",
        roadmap: "MVP → Beta → Monetization → Expansion"
    });
}

const container = document.getElementById("ideasContainer");

ideas.forEach((idea, index) => {

container.innerHTML += `
<div class="idea-card">
<h2>${idea.title}</h2>
<p><strong>Category:</strong> ${idea.category}</p>

<button onclick="togglePlan(${index})">View Full Plan</button>

<div class="full-plan" id="plan-${index}">
<p><strong>Problem:</strong> ${idea.problem}</p>
<p><strong>Solution:</strong> ${idea.solution}</p>
<p><strong>Target:</strong> ${idea.target}</p>
<p><strong>Unique Value:</strong> ${idea.uniqueValue}</p>
<p><strong>Market Size:</strong> ${idea.marketSize}</p>
<p><strong>Revenue Model:</strong> ${idea.revenueModel}</p>
<p><strong>Competition:</strong> ${idea.competition}</p>
<p><strong>Scalability:</strong> ${idea.scalability}</p>
<p><strong>Funding Required:</strong> ${idea.funding}</p>
<p><strong>Future Roadmap:</strong> ${idea.roadmap}</p>
</div>
</div>
`;

});

function togglePlan(index){
const plan = document.getElementById("plan-"+index);
plan.style.display = plan.style.display === "block" ? "none" : "block";
}