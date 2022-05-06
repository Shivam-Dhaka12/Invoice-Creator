const washcarEL = document.getElementById("washcar");
const mowlawnEL = document.getElementById("mowlawn");
const pullweedsEL = document.getElementById("pullweeds");
const listEl = document.getElementById("list");
const notesEl = document.getElementById("notes");
const totalEl = document.getElementById("total");
const sendbtnEl = document.getElementById("send-btn");

let services = []
let sum = 0;

sendbtnEl.addEventListener("click" , function () {
    washcarEL.disabled = false;
    washcarEL.border = "1px solid #D5D4D8";
    mowlawnEL.disabled = false;
    mowlawnEL.border = "1px solid #D5D4D8";
    pullweedsEL.disabled = false;
    pullweedsEL.border = "1px solid #D5D4D8";
    listEl.innerHTML = "";
    sum = 0;
    notesEl.textContent = "";
    totalEl.textContent = `$${sum}`;
})

function onClick(idEl) {
    idEl.addEventListener("click",function () {
        idEl.style.border = "2px solid #4A4E74";
        idEl.disabled = true;
        services.push(idEl.value);
        localStorage.setItem("services",JSON.stringify(services));
        renderitems(services);
        if (!notesEl.textContent) {
            notesEl.textContent = "We accept cash, credit card, or PayPal";
        }
        sum += 10;
        totalEl.textContent = `$${sum}`;
    })
}

onClick(washcarEL);
onClick(mowlawnEL);
onClick(pullweedsEL);

function renderitems(services) {

        let item = document.createElement("div");
        item.className = "list-item";
        let task  = document.createElement("div");
        let price = document.createElement("div");
        task.className = "task";
        price.className = "price";
        task.textContent = services[services.length -1];
        price.textContent = "$10";
        item.appendChild(task);
        item.appendChild(price);
        listEl.appendChild(item);

}
