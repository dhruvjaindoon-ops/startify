// 🔐 OTP SYSTEM
let generatedOTP = "";

function sendOTP() {
  let email = document.getElementById("email").value;

  if (email === "") {
    alert("Enter email!");
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000);

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    to_email: email,
    otp: generatedOTP
  })
  .then(function() {
    document.getElementById("otpMsg").innerHTML = "📩 OTP sent to your email!";
  })
  .catch(function(error) {
    document.getElementById("otpMsg").innerHTML = "❌ Failed to send OTP";
    console.log(error);
  });
}

function verifyOTP() {
  let userOTP = document.getElementById("otpInput").value;

  if (userOTP == generatedOTP) {
    document.getElementById("otpMsg").innerHTML = "✅ Registration Successful!";
  } else {
    document.getElementById("otpMsg").innerHTML = "❌ Wrong OTP";
  }
}

// 🤖 AI SYSTEM
function generatePlan() {
  let input = document.getElementById("userInput").value.trim();
  let output = document.getElementById("output");

  if (input === "") {
    output.innerHTML = "Please enter something!";
    return;
  }

  let title = input.charAt(0).toUpperCase() + input.slice(1);
  let keyword = input.toLowerCase();

  let text = `
  <h2>${title} – Complete Guide</h2>

  <h3>1. Introduction</h3>
  <p>${title} ek important field hai jisme success consistency aur skills pe depend karti hai.</p>

  <h3>2. Roadmap</h3>
  <ul>
    <li>Basics samajhna</li>
    <li>Learning</li>
    <li>Practice</li>
    <li>Experience</li>
    <li>Growth</li>
  </ul>

  <h3>3. Skills</h3>
  <ul>
    <li>Communication</li>
    <li>Confidence</li>
    <li>Consistency</li>
  </ul>

  <h3>4. Learning</h3>
  <a href="https://www.youtube.com/results?search_query=${keyword}" target="_blank">
    ▶️ Learn ${title}
  </a>
  `;

  if (keyword.includes("business") || keyword.includes("cafe") || keyword.includes("shop")) {
    text += `
    <h3>5. Business Info</h3>
    <ul>
      <li>Licenses: GST, Shop License</li>
      <li>Cost: ₹5–15 Lakhs</li>
    </ul>
    `;
  }

  output.innerHTML = text;
}