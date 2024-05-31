document.getElementById("cardForm").addEventListener("input", function(){
    const cardNumber = document.getElementById("cardNumber").value;
    const cardHolder = document.getElementById("cardHolder").value;
    const expiryMonth = document.getElementById("expiryMonth").value;
    const expiryYear = document.getElementById("expiryYear").value;

    document.getElementById("previewCardNumber").textContent = cardNumber.replace(/\d{4}(?=.)/g, "$& ");
    document.getElementById("previewCardHolder").textContent = cardHolder;
    document.getElementById("previewExpiryDate").textContent = `${expiryMonth}/${expiryYear}`;
});

document.getElementById("cardNumber").addEventListener("input", function(event){
    let input = event.target.value;
    let numbersOnly = input.replace(/\D/g, "");
    let cardNumber = numbersOnly.substring(0, 16);
    let formattedNumber = cardNumber.match(/.{1,4}/g);
    if (formattedNumber){
        formattedNumber = formattedNumber.join(" ");
    }
    event.target.value = formattedNumber;
});

document.getElementById("expiryMonth").addEventListener("input", function(event){
    let expiryMonth = event.target.value;
    if (expiryMonth < 10){
        event.target.value = `0${expiryMonth}`;
    }
});

document.getElementById("bankName").addEventListener("change", function(){
    document.getElementById("bankLogo").src = this.value;
});

document.getElementById("paymentSystem").addEventListener("change", function(){
    document.getElementById("paymentSystemLogo").src = this.value;
});

document.getElementById("cardForm").addEventListener("submit", function(event){
    event.preventDefault();
    let cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
    const bankLogo = document.getElementById("bankLogo").src;
    const paymentSystemLogo = document.getElementById("paymentSystemLogo").src;
    const cardHolder = document.getElementById("cardHolder").value;
    const expiryMonth = document.getElementById("expiryMonth").value;
    const expiryYear = document.getElementById("expiryYear").value;

    if (cardNumber.length !== 16){
        alert("Введите полный номер карты, состоящий из 16 цифр");
        return;
    }
    const row = `<tr>
        <td><img src="${bankLogo}" alt="Bank Logo" class="table-bank-logo"></td>
        <td><img src="${paymentSystemLogo}" alt="Payment System Logo" class="table-payment-logo"></td>
        <td>${cardNumber}</td>
        <td>${cardHolder}</td>
        <td>${expiryMonth}/${expiryYear}</td>
    </tr>`;
    document.querySelector("#cardData tbody").innerHTML += row;
    document.getElementById("cardForm").reset();
    document.getElementById("bankLogo").src = "";
    document.getElementById("previewCardNumber").textContent = "";
    document.getElementById("previewCardHolder").textContent = "";
    document.getElementById("previewExpiryDate").textContent = "";
    document.getElementById("paymentSystemLogo").src = "";
});
