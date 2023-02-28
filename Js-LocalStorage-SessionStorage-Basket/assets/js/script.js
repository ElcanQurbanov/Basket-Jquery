"use strict";

// localStorage.setItem("name", "Cavid");
// localStorage.setItem("surname", "Ismayilzade");


// localStorage.removeItem("name");
// console.log(localStorage.getItem("name"));

// let names = ["Pervin", "Elekber", "Aksin"];


// localStorage.setItem("names", JSON.stringify(names));

// console.log(JSON.parse(localStorage.getItem("names")));




// document.querySelector("button").onclick = function() {
//     // localStorage.removeItem("name");
//     // localStorage.clear();

//     let datas = JSON.parse(localStorage.getItem("names"));

//     for (const item of datas) {
//         console.log(item);
//     }
// }


// sessionStorage.setItem("email", "testEmail@gmail.com");

// console.log(sessionStorage.getItem("email"));




let cardBtns = document.querySelectorAll("#shop a");

let products = [];

if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"));
}


cardBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let productImg = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = this.previousElementSibling.previousElementSibling.innerText;
        let productPrice = parseInt(this.parentNode.children[1].innerText);
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

        let existProduct = products.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
            existProduct.price = productPrice * existProduct.count;
        } else {
            products.push({
                id: productId,
                name: productName,
                img: productImg,
                description: productDesc,
                price: productPrice,
                count: 1
            })
        }

        localStorage.setItem("basket", JSON.stringify(products));

        getBasketCount(products);

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })

    })
});

function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count;  
    }
    document.querySelector("sup").innerText = sum;
}

getBasketCount(products);