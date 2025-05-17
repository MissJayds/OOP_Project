const user = [
    {username: "jaydie", password: "jaydie", fname: "Jaydie Reyes", bal: 20000},
    {username: "jasmine", password: "jasmine", fname: "Jasmine Manuel", bal: 25000},
    {username: "jurelle", password: "jurelle", fname: "Jurelle Mercado", bal: 30000}
];

function login(){
    const uname = document.loginfrm.uname.value;
    const pass = document.loginfrm.pass.value;

    const res = user.find(u => u.username === uname && u.password === pass);

    if(res){
        alert("Successful log in");
        window.location.href="ProOOP.html";
        localStorage.setItem("fname",res.fname);
        localStorage.setItem("bal", res.bal);
    }
    else{
        document.getElementById("error-message").innerHTML ="Invalid username or password";
    }
}