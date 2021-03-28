
document.getElementById("cancel").addEventListener("click", function () {
    let mycard2 = document.getElementById("card2");
    let mycvc2 = document.getElementById("cvc2");
    let myamount2 = document.getElementById("amount2");
    let myname2 = document.getElementById("name2");
    let mylast2 = document.getElementById("last2");
    let mycity2 = document.getElementById("city2");
    let mystate2 = document.getElementById("state2");
    let mypostal2 = document.getElementById("postal2");
    let mytarjeta2 = document.getElementById("tarjeta2");

    document.getElementById("card1").value = "";
    document.getElementById("cvc1").value = "";
    document.getElementById("amount1").value = "";
    document.getElementById("name1").value = "";
    document.getElementById("last1").value = "";
    document.getElementById("city1").value = "";
    document.getElementById("state1").value = "0";
    document.getElementById("postal1").value = "";
    document.getElementById("inlineRadio1").checked = false;
    document.getElementById("inlineRadio2").checked = false;
    document.getElementById("inlineRadio3").checked = false;
    document.getElementById("inlineRadio4").checked = false;
    document.getElementById("message1").value = "";

    card1.className = "form-control"
    cvc1.className = "form-control"
    amount1.className = "form-control"
    name1.className = "form-control"
    last1.className = "form-control"
    city1.className = "form-control"
    state1.className = "form-control"
    postal1.className = "form-control"

    if (mycard2 !== null) { mycard2.remove(); }
    if (mycvc2 !== null) { mycvc2.remove(); }
    if (myamount2 !== null) { myamount2.remove(); }
    if (myname2 !== null) { myname2.remove(); }
    if (mylast2 !== null) { mylast2.remove(); }
    if (mycity2 !== null) { mycity2.remove(); }
    if (mystate2 !== null) { mystate2.remove(); }
    if (mypostal2 !== null) { mypostal2.remove(); }
    if (mytarjeta2 !== null) { mytarjeta2.remove(); }
});

ok.addEventListener('click', function (e) {
    revisa = 0;
    let card1 = document.getElementById("card1");
    if (card1.value === "") {
        let cardAlert = document.createElement("div");
        let mycard2 = document.getElementById("card2");
        if (mycard2 !== null) { mycard2.remove(); }
        cardAlert.setAttribute("id", "card2");
        cardAlert.className = "text-danger";
        cardAlert.innerHTML = "<small>You must indicate a card number.</small>";
        document.getElementById("cardDiv").appendChild(cardAlert);
        card1.className = "form-control border border-danger";
        revisa = 1;
    } else if (isNaN(card1.value)) {
        let cardAlert = document.createElement("div");
        let mycard2 = document.getElementById("card2");
        if (mycard2 !== null) { mycard2.remove(); }
        cardAlert.setAttribute("id", "card2");
        cardAlert.className = "text-danger";
        cardAlert.innerHTML = "<small>It must be a number.</small>";
        document.getElementById("cardDiv").appendChild(cardAlert);
        card1.className = "form-control border border-danger";
        revisa = 1;
    } else if (card1.value.length !== 16) {
        let cardAlert = document.createElement("div");
        let mycard2 = document.getElementById("card2");
        if (mycard2 !== null) { mycard2.remove(); }
        cardAlert.setAttribute("id", "card2");
        cardAlert.className = "text-danger";
        cardAlert.innerHTML = "<small>It must contain 16 digits.</small>";
        document.getElementById("cardDiv").appendChild(cardAlert);
        card1.className = "form-control border border-danger";
        revisa = 1;
    } else {
        let mycard2 = document.getElementById("card2");
        if (mycard2 !== null) { mycard2.remove(); }
        card1.className = "form-control"
    }

    let cvc1 = document.getElementById("cvc1");
    if (cvc1.value === "") {
        let cvcAlert = document.createElement("div");
        let mycvc2 = document.getElementById("cvc2");
        if (mycvc2 !== null) { mycvc2.remove(); }
        cvcAlert.setAttribute("id", "cvc2");
        cvcAlert.className = "text-danger";
        cvcAlert.innerHTML = "<small>You must indicate a cvc.</small>";
        document.getElementById("cvcDiv").appendChild(cvcAlert);
        cvc1.className = "form-control border border-danger"
        revisa = 1;
    } else if (isNaN(cvc1.value)) {
        let cvcAlert = document.createElement("div");
        let mycvc2 = document.getElementById("cvc2");
        if (mycvc2 !== null) { mycvc2.remove(); }
        cvcAlert.setAttribute("id", "cvc2");
        cvcAlert.className = "text-danger";
        cvcAlert.innerHTML = "<small>It must be a number.</small>";
        document.getElementById("cvcDiv").appendChild(cvcAlert);
        cvc1.className = "form-control border border-danger"
        revisa = 1;
    } else if (cvc1.value.length !== 4) {
        let cvcAlert = document.createElement("div");
        let mycvc2 = document.getElementById("cvc2");
        if (mycvc2 !== null) { mycvc2.remove(); }
        cvcAlert.setAttribute("id", "cvc2");
        cvcAlert.className = "text-danger";
        cvcAlert.innerHTML = "<small>It must have 4 digits.</small>";
        document.getElementById("cvcDiv").appendChild(cvcAlert);
        cvc1.className = "form-control border border-danger"
        revisa = 1;
    } else {
        let mycvc2 = document.getElementById("cvc2");
        if (mycvc2 !== null) { mycvc2.remove(); }
        cvc1.className = "form-control"
    }

    let amount1 = document.getElementById("amount1");
    if (amount1.value === "") {
        let amountAlert = document.createElement("div");
        let myamount2 = document.getElementById("amount2");
        if (myamount2 !== null) { myamount2.remove(); }
        amountAlert.setAttribute("id", "amount2");
        amountAlert.className = "text-danger";
        amountAlert.innerHTML = "<small>You must indicate an amount.</small>";
        document.getElementById("amountDiv").appendChild(amountAlert);
        amount1.className = "form-control border border-danger"
        revisa = 1;
    } else if (isNaN(amount1.value)) {
        let amountAlert = document.createElement("div");
        let myamount2 = document.getElementById("amount2");
        if (myamount2 !== null) { myamount2.remove(); }
        amountAlert.setAttribute("id", "amount2");
        amountAlert.className = "text-danger";
        amountAlert.innerHTML = "<small>It must be a number.</small>";
        document.getElementById("amountDiv").appendChild(amountAlert);
        amount1.className = "form-control border border-danger";
        revisa = 1;
    } else if (amount1.value < 0) {
        let amountAlert = document.createElement("div");
        let myamount2 = document.getElementById("amount2");
        if (myamount2 !== null) { myamount2.remove(); }
        amountAlert.setAttribute("id", "amount2");
        amountAlert.className = "text-danger";
        amountAlert.innerHTML = "<small>It must be a positive number.</small>";
        document.getElementById("amountDiv").appendChild(amountAlert);
        amount1.className = "form-control border border-danger";
        revisa = 1;
    } else {
        let myamount2 = document.getElementById("amount2");
        if (myamount2 !== null) { myamount2.remove(); }
        amount1.className = "form-control";
    }

    let name1 = document.getElementById("name1");
    if (name1.value === "") {
        let nameAlert = document.createElement("div");
        let myname2 = document.getElementById("name2");
        if (myname2 !== null) { myname2.remove(); }
        nameAlert.setAttribute("id", "name2");
        nameAlert.className = "text-danger";
        nameAlert.innerHTML = "<small>You must indicate a name.</small>";
        document.getElementById("nameDiv").appendChild(nameAlert);
        name1.className = "form-control border border-danger"
        revisa = 1;
    } else {
        let myname2 = document.getElementById("name2");
        if (myname2 !== null) { myname2.remove(); };
        name1.className = "form-control";
    }

    let last1 = document.getElementById("last1");
    if (last1.value === "") {
        let lastAlert = document.createElement("div");
        let mylast2 = document.getElementById("last2");
        if (mylast2 !== null) { mylast2.remove(); }
        lastAlert.setAttribute("id", "last2");
        lastAlert.className = "text-danger";
        lastAlert.innerHTML = "<small>You must indicate a last name.</small>";
        document.getElementById("lastDiv").appendChild(lastAlert);
        last1.className = "form-control border border-danger"
        revisa = 1;
    } else {
        let mylast2 = document.getElementById("last2");
        if (mylast2 !== null) { mylast2.remove(); }
        last1.className = "form-control"
    }

    let city1 = document.getElementById("city1");
    if (city1.value === "") {
        let cityAlert = document.createElement("div");
        let mycity2 = document.getElementById("city2");
        if (mycity2 !== null) { mycity2.remove(); }
        cityAlert.setAttribute("id", "city2");
        cityAlert.className = "text-danger";
        cityAlert.innerHTML = "<small>You must indicate a city.</small>";
        document.getElementById("cityDiv").appendChild(cityAlert);
        city1.className = "form-control border border-danger"
        revisa = 1;
    } else {
        let mycity2 = document.getElementById("city2");
        if (mycity2 !== null) { mycity2.remove(); }
        city1.className = "form-control"
    }

    let state1 = document.getElementById("state1");
    if (state1.value === "0" || state1.value === "") {
        let stateAlert = document.createElement("div");
        let mystate2 = document.getElementById("state2");
        if (mystate2 !== null) { mystate2.remove(); }
        stateAlert.setAttribute("id", "state2");
        stateAlert.className = "text-danger";
        stateAlert.innerHTML = "<small>You must indicate a state.</small>";
        document.getElementById("stateDiv").appendChild(stateAlert);
        state1.className = "form-control border border-danger"
        revisa = 1;
    } else {
        let mystate2 = document.getElementById("state2");
        if (mystate2 !== null) { mystate2.remove(); }
        state1.className = "form-control"
    }

    let postal1 = document.getElementById("postal1");
    if (postal1.value === "") {
        let postalAlert = document.createElement("div");
        let mypostal2 = document.getElementById("postal2");
        if (mypostal2 !== null) { mypostal2.remove(); }
        postalAlert.setAttribute("id", "postal2");
        postalAlert.className = "text-danger";
        postalAlert.innerHTML = "<small>You must indicate a postal code.</small>";
        document.getElementById("postalDiv").appendChild(postalAlert);
        postal1.className = "form-control border border-danger"
        revisa = 1;
    } else if (isNaN(postal1.value)) {
        let postalAlert = document.createElement("div");
        let mypostal2 = document.getElementById("postal2");
        if (mypostal2 !== null) { mypostal2.remove(); }
        postalAlert.setAttribute("id", "postal2");
        postalAlert.className = "text-danger";
        postalAlert.innerHTML = "<small>It must be a number.</small>";
        document.getElementById("postalDiv").appendChild(postalAlert);
        postal1.className = "form-control border border-danger"
        revisa = 1;
    } else if (postal1.value.length !== 4) {
        let postalAlert = document.createElement("div");
        let mypostal2 = document.getElementById("postal2");
        if (mypostal2 !== null) { mypostal2.remove(); }
        postalAlert.setAttribute("id", "postal2");
        postalAlert.className = "text-danger";
        postalAlert.innerHTML = "<small>It must have 4 digits.</small>";
        document.getElementById("postalDiv").appendChild(postalAlert);
        postal1.className = "form-control border border-danger"
        revisa = 1;
    } else {
        let mypostal2 = document.getElementById("postal2");
        if (mypostal2 !== null) { mypostal2.remove(); }
        postal1.className = "form-control"
    }

    let inlineRadio1 = document.getElementById("inlineRadio1")
    let inlineRadio2 = document.getElementById("inlineRadio2")
    let inlineRadio3 = document.getElementById("inlineRadio3")
    let inlineRadio4 = document.getElementById("inlineRadio4")
    if (inlineRadio1.checked === false && inlineRadio2.checked === false && inlineRadio3.checked === false && inlineRadio4.checked === false) {
        let tarjetaAlert = document.createElement("div");
        let mytarjeta2 = document.getElementById("tarjeta2");
        if (mytarjeta2 !== null) { mytarjeta2.remove(); }
        tarjetaAlert.setAttribute("id", "tarjeta2");
        tarjetaAlert.className = "text-danger";
        tarjetaAlert.innerHTML = "<small>You must indicate a card brand.</small>";
        document.getElementById("tarjetaDiv").appendChild(tarjetaAlert);
        revisa = 1;
    } else {
        let mytarjeta2 = document.getElementById("tarjeta2");
        if (mytarjeta2 !== null) { mytarjeta2.remove(); }
    }

    if (revisa === 1) {
        e.preventDefault();
    }
})

