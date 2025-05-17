const users = {
    jaydie: { name: "Jaydie Reyes", role: "Developer", lastUpdate: "Completed Activity 3" },
    jasmine: { name: "Jasmine Manuel", role: "Designer", lastUpdate: "Reviewed Reflection Draft" },
    jurelle: { name: "Jurelle Mercado", role: "Tester", lastUpdate: "Started Activity 4" }
  };

  function login() {
    const user = document.getElementById("userSelect").value;
    if (!user) return alert("Please select a user");

    sessionStorage.setItem("user", user);
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    document.getElementById("userName").innerText = users[user].name;
    console.clear();
    showPage("home");
  }

  function logout() {
    sessionStorage.removeItem("user");
    location.reload();
    login("login");
  }

  function showPage(page) {
    console.clear();
    const userKey = sessionStorage.getItem("user");
    const user = users[userKey];
    if (!user) return;

    let content = "";
    if (page === "home") {
      content = `
        <h2>Member Overview</h2>
        <div class="card">
          <h3>${users.jaydie.name}</h3>
          <p>${users.jaydie.role}</p>
          <p>Last Update:<br>${users.jaydie.lastUpdate}</p>
          <span class="status">Active</span>
        </div>
        <div class="card">
          <h3>${users.jasmine.name}</h3>
          <p>${users.jasmine.role}</p>
          <p>Last Update:<br>${users.jasmine.lastUpdate}</p>
          <span class="status">Active</span>
        </div>
        <div class="card">
          <h3>${users.jurelle.name}</h3>
          <p>${users.jurelle.role}</p>
          <p>Last Update:<br>${users.jurelle.lastUpdate}</p>
          <span class="status">Active</span>
        </div>
      `;
    } else if (page === "reflection") {
      content = `<h2>Reflection</h2><p>This is a reflective summary of what you’ve learned from the course.</p>`;
    } else if (page === "activity1") {
      content = `<h2>Activity 1: Output Functions</h2><p>Example:<br><code>console.log("Hello, World!")</code></p>`;
    } else if (page === "activity2") {
      content = `<h2>Activity 2: Functions</h2><p>Example:<br><code>function greet() { alert("Hi!"); }</code></p>`;
    } else if (page === "activity3") {
      content = `<h2>Activity 3: Bitwise Operators</h2><p>Example: 5 & 3 = ${5 & 3}</p>`;
    } else if (page === "activity4") {
      content = `<h2>Activity 4: Input/Output</h2><p>Example:<br><code>let name = prompt("Enter name"); alert(name);</code></p>`;
    } else if (page === "activity5") {
        content = `<h2>Temperature Checker</h2>

    <label for="temp">Temperature (°C):</label><br>
    <input type="text" name="temp" id="temp"/><br><br>
    <button onclick="checkTemperature()">Check</button>

    <div id="result"></div>`;
    } else {
      content = `<p>Page not found.</p>`;
    }

    document.getElementById("pageContent").innerHTML = content;
  }
  window.onload = () => {
    const user = sessionStorage.getItem("user");
    if (user) {
      document.getElementById("loginBox").classList.add("hidden");
      document.getElementById("mainContent").classList.remove("hidden");
      document.getElementById("userName").innerText = users[user].name;
      showPage("home");
    }

    function showAlert() {
      alert("Button clicked!");
    }

    function changeText() {
      document.getElementById("textBox").textContent = "The text has been changed!";
    }

    function changeColor() {
      const box = document.getElementById("textBox");
      box.style.color = box.style.color === "red" ? "black" : "red";
    }