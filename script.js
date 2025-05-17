const user = [
  {username: "jaydie", password: "jayds20", fname: "Jaydie Reyes"},
  {username: "jasmine", password: "jaja123", fname: "Jasmine Manuel"},
  {username: "jurelle", password: "pandesal", fname: "Jurelle Mercado"}
];

function login(){
  const uname = document.loginfrm.uname.value;
  const pass = document.loginfrm.pass.value;

  const res = user.find(u => u.username === uname && u.password === pass);

  if(res){
      alert("Successful log in");
      window.location.href="OOP_GROUP.html";
      localStorage.setItem("fname",res.fname);
      localStorage.setItem("bal", res.bal);
  }
  else{
      document.getElementById("error-message").innerHTML ="Invalid username or password";
  }
};

function logout() {
  sessionStorage.removeItem("user");
  window.location.href = "LOG.html";
}

function showPage(page) {
  const userKey = sessionStorage.getItem("user");
  const user = users[userKey];
  if (!user) return;

  let content = "";
  switch (page) {
    case "home":
      content = `
        <h2>Member Overview</h2>
        <p><strong>${user.name}</strong><br/>Role: ${user.role}<br/>Status: Active</p>`;
      break;
    case "reflection":
      content = `<h2>Reflection</h2><p>This is a reflective summary of what you’ve learned from the course.</p>`;
      break;
    case "activity1":
      content = `<h2>Activity 1: Output Functions</h2><p>Example:<br><code>console.log("Hello, World!")</code></p>`;
      break;
    case "activity2":
      content = `<h2>Activity 2: Functions</h2><p>Example:<br><code>function greet() { alert("Hi!"); }</code></p>`;
      break;
    case "activity3":
      content = `<h2>Activity 3: Bitwise Operators</h2><p>Example: 5 & 3 = ${5 & 3}</p>`;
      break;
    case "activity4":
      content = `<h2>Activity 4: Input/Output</h2><p>Example:<br><code>let name = prompt("Enter name"); alert(name);</code></p>`;
      break;
    case "activity5":
      content = `<h2>Activity 5: Temperature Check</h2><p>Example:<br><code>let temp = 36.5;<br>if(temp > 37) alert("Fever");</code></p>`;
      break;
    default:
      content = `<p>Page not found.</p>`;
  }

  document.getElementById("pageContent").innerHTML = content;
}

window.onload = function () {
  if (location.pathname.includes("dashboard")) {
    const user = sessionStorage.getItem("user");
    if (!user) {
      window.location.href = "ProOOP.html";
    } else {
      showPage("home");
    }
  }
};
