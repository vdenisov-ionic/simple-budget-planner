const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
// const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;
totalExpensesOutput.textContent = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value.trim();
    const enteredAmount = parseFloat(amountInput.value);

    if (enteredReason.length === 0 || enteredAmount <= 0) {
        // ---
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid inputs';
        alert.message = 'Please enter valid reason and amount!';
        alert.buttons = ['Okay'];
        document.body.appendChild(alert);
        alert.present();
        // ---

        return;
    }

    // add new item
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    expensesList.appendChild(newItem);

    // increase total amount
    totalExpenses += enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;

    clear();
});

cancelBtn.addEventListener('click', clear);
