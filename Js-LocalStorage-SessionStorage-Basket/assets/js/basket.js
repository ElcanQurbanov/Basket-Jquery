"use strict";






let tableBody = document.querySelector("tbody");

let products = JSON.parse(localStorage.getItem("basket"));

// let totalPrice = document.querySelector("h3");

getBasketDatas();

function getBasketDatas() {

    if (products != null) {
        // let sum = 0;
        for (const product of products) {
            tableBody.innerHTML += `<tr data-id ="${product.id}">
            <td>
            <img src="${product.img}" alt="">
            </td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.count}</td>
            <td>${product.price} $</td>
            <td> <i class="fa-regular fa-trash-can delete"></i></td>
            </tr> `

            // sum += product.price * product.count;
            // totalPrice.innerText = "Total: $" + sum;
        }

        getBasketCount(products);
     

    } else {
      showAlert();
    }
}

function showAlert(){
    document.querySelector("table").classList.add("d-none");
    document.querySelector(".alert-warning").classList.remove("d-none");
    document.querySelector(".total-title").classList.add("d-none");
    document.querySelector(".total-title").nextElementSibling.classList.add("d-none")
}


function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count;
    }
    document.querySelector("sup").innerText = sum;
}


function deleteProduct(id) {
    products = products.filter(m => m.id != id);

    localStorage.setItem("basket", JSON.stringify(products));

    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Deleted successfully',
        showConfirmButton: false,
        timer: 1500
      })

}

let deleteIcons = document.querySelectorAll(".delete");

deleteIcons.forEach(icon => {
    icon.addEventListener("click", function () {

        let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        deleteProduct(id)

        this.parentNode.parentNode.remove();

        if (products.length ==  0) {
            localStorage.removeItem("basket")
            showAlert();
        }

        showTotalPrice();

        getBasketDatas(products);

       

        

        // window.location.reload

    })
});

function showTotalPrice() {
    if (JSON.parse(localStorage.getItem("basket")) != null) {
        let title = document.querySelector(".total-title")
        title.classList.remove("d-none")
        title.nextElementSibling.classList.remove("d-none")

        let sum = 0;
        for (const item of products) {
            sum+= parseInt(item.price);
        }

        title.nextElementSibling.innerText = sum + " $"
    }
}

showTotalPrice();

// let deleteBtn = document.querySelectorAll(".delete-btn");


// deleteBtn.forEach((btn) => {
//     btn.addEventListener("click", function () {
//         deleteItem(this);
//     });
// });


// function deleteItem(btn) {

//     if (products != null) {

//         let id = parseInt(btn.parentNode.parentNode.firstElementChild.getAttribute("data-id"));

//         products = products.filter((m) => m.id != id);

//         localStorage.setItem("basket", JSON.stringify(products));

//         btn.parentNode.parentNode.remove();
//         document.location.reload();

//     }
//     else {
//         document.querySelector("table").classList.add("d-none")
//         document.querySelector(".alert-warning").classList.remove("d-none");
//     }


// }

