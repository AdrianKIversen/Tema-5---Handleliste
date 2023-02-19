  

    const shoppingList = document.querySelector(".item-container");
    const addButton = document.querySelector("form button");
    const newItemInput = document.querySelector("form input");
    

    
    addButton.addEventListener("click", addItem);

    
    shoppingList.addEventListener("click", removeItem);

    function addItem(event) {
      event.preventDefault();

      
      const newItemText = newItemInput.value;

     
      const newListItem = document.createElement("div");
      newListItem.classList.add("item");

      
      const newItem = document.createElement("span");
      newItem.textContent = newItemText;

      
      const removeButton = document.createElement("div");
      removeButton.classList.add("remove");
      removeButton.textContent = "⤫";

const clearAllButton = document.querySelector("#clear-all");

clearAllButton.addEventListener("click", clearAllItems);

function clearAllItems() {
  const listItems = document.querySelectorAll(".item-container .item-container>div");
  listItems.forEach(listItem => listItem.remove());
}

document.body.style.overflow = "hidden";
      

          const quantitySelect = document.createElement("div");
        quantitySelect.classList.add("quantity");
        quantitySelect.innerHTML = `
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        `;

        newListItem.appendChild(newItem);
        newListItem.appendChild(removeButton);
        newListItem.appendChild(quantitySelect);

        shoppingList.appendChild(newListItem);

        newItemInput.value = "";
      }

      function removeItem(event) {
        if (event.target.classList.contains("remove")) {
          event.target.parentElement.remove();
        }

      newListItem.appendChild(newItem);
      newListItem.appendChild(removeButton);

      shoppingList.appendChild(newListItem);

      newItemInput.value = "";
    }

    function removeItem(event) {
      if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
      }
    }





    

    



    





    
