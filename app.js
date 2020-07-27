const reason = document.querySelector("#input-reason");
const amount = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const addBtn = document.querySelector("#btn-add");
const expenseList = document.querySelector("#expense-list");
const totExpense = document.querySelector("#total-expenses");

let tot = 0;

const clear = () => {
  reason.value = "";
  amount.value = "";
};

addBtn.addEventListener("click", () => {
  console.log("works");
  const enteredReason = reason.value;
  const enteredAmount = amount.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount.trim().length <= 0 ||
    enteredAmount <= 0
  ) {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Invalid Data';
    alert.message = 'Enter valid data';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
    return;
  }

  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;
  expenseList.appendChild(newItem);
  tot += +enteredAmount;
  totExpense.textContent = tot;
  clear();
});

cancelBtn.addEventListener("click", clear);
