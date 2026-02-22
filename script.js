document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg").innerText = "Your message has been sent successfully!";
    this.reset();
});

function addTask(){
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    if(text === "") return;

    const li = document.createElement("li");
    li.innerHTML = text + "<button onclick='this.parentElement.remove()'>X</button>";

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}