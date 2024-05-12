document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const quantity = item.querySelector(".quantity");
    const price = parseFloat(
      item.querySelector(".price").innerText.replace("$", "")
    );
    const totalElement = document.getElementById("total-price");
    const likeBtn = item.querySelector(".like-btn");

    item.querySelector(".plus").addEventListener("click", () => {
      let currentQuantity = parseInt(quantity.innerText);
      quantity.innerText = ++currentQuantity;
      updateTotal();
    });

    item.querySelector(".minus").addEventListener("click", () => {
      let currentQuantity = parseInt(quantity.innerText);
      if (currentQuantity > 1) {
        quantity.innerText = --currentQuantity;
        updateTotal();
      }
    });

    item.querySelector(".delete-btn").addEventListener("click", () => {
      item.remove();
      updateTotal();
    });

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("liked");
    });

    function updateTotal() {
      let total = 0;
      items.forEach((item) => {
        const quantity = parseInt(item.querySelector(".quantity").innerText);
        const price = parseFloat(
          item.querySelector(".price").innerText.replace("$", "")
        );
        total += quantity * price;
      });
      totalElement.innerText = `$${total.toFixed(2)}`;
    }
  });
});
