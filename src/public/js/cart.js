// const addToCartForm = document.getElementById("addToCartForm");

// addCartForm.onsubmit = async (e) => {
//     e.preventDefault();

//     if (quantity.value >= 1) {
//         await addProductToCart(productId, quantity.value);
//     } else {
//         alert("La cantidad debe ser mayor o igual a 1");
//     }
// };

// async function addProductToCart(_productId, _quantity) {
//     try {
//         const result = await fetch(
//             `http://localhost:8080/api/carts/${cartId}/products/${_productId}`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ quantity: _quantity }),
//             }
//         );
//         if (result) {
//             alert("Producto añadido al carrito: 652ec71d9979b1abeaab9b8d");
//         }
//     } catch (err) {
//         alert(`Error: ${err}`);
//     }
// }


//REVISAR MAXI