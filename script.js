let accounts = [];

// Open Create Account section
function openCreateAccount() {
    document.getElementById("banking").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("createAccountPanel").style.display = "block";
}

// Open Search Account section
function openSearchAccount() {
    document.getElementById("banking").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("searchAccountPanel").style.display = "block";
}


// CREATE ACCOUNT
function createAccount() {

    const accountNumber =
        Number(document.getElementById("accountNumber").value);

    const name =
        document.getElementById("customerName").value.trim();

    const type =
        document.getElementById("accountType").value;

    const balance =
        Number(document.getElementById("initialBalance").value);


    // Check input
    if (!accountNumber || name === "" || balance < 0) {

        document.getElementById("createResult").innerText =
            "Please enter valid account details.";

        return;
    }


    // Check duplicate account
    for (let i = 0; i < accounts.length; i++) {

        if (accounts[i].accountNo === accountNumber) {

            document.getElementById("createResult").innerText =
                "Account number already exists.";

            return;
        }
    }


    // Create account
    const account = {

        accountNo: accountNumber,

        name: name,

        type: type,

        balance: balance
    };


    // Store account
    accounts.push(account);


    document.getElementById("createResult").innerText =
        "✓ Account created successfully!";


    // Clear inputs
    document.getElementById("accountNumber").value = "";

    document.getElementById("customerName").value = "";

    document.getElementById("initialBalance").value = "";
}



// SEARCH ACCOUNT
function searchAccount() {

    const accountNumber =
        Number(document.getElementById("searchNumber").value);


    let foundAccount = null;


    // Linear Search
    for (let i = 0; i < accounts.length; i++) {

        if (accounts[i].accountNo === accountNumber) {

            foundAccount = accounts[i];

            break;
        }
    }


    const result =
        document.getElementById("searchResult");


    if (foundAccount === null) {

        result.innerHTML =
            "<p>❌ Account not found.</p>";

        return;
    }


    result.innerHTML = `

        <div class="account-result">

            <h3>✓ Account Found</h3>

            <p>
                <strong>Account Number:</strong>
                ${foundAccount.accountNo}
            </p>

            <p>
                <strong>Customer Name:</strong>
                ${foundAccount.name}
            </p>

            <p>
                <strong>Account Type:</strong>
                ${foundAccount.type}
            </p>

            <p>
                <strong>Balance:</strong>
                ₹${foundAccount.balance.toFixed(2)}
            </p>

        </div>

    `;
}
// ===============================
// DEPOSIT MONEY
// ===============================

function depositMoney() {

    const accountNumber =
        Number(document.getElementById("depositAccountNumber").value);

    const amount =
        Number(document.getElementById("depositAmount").value);

    const result =
        document.getElementById("depositResult");


    if (!accountNumber || amount <= 0) {

        result.innerText =
            "Please enter a valid account number and amount.";

        return;
    }


    // Linear Search
    let account = null;

    for (let i = 0; i < accounts.length; i++) {

        if (accounts[i].accountNo === accountNumber) {

            account = accounts[i];

            break;
        }
    }


    if (account === null) {

        result.innerText =
            "❌ Account not found.";

        return;
    }


    // Deposit
    account.balance += amount;


    result.innerText =
        `✓ ₹${amount.toFixed(2)} deposited successfully. New balance: ₹${account.balance.toFixed(2)}`;


    // Clear fields
    document.getElementById("depositAccountNumber").value = "";

    document.getElementById("depositAmount").value = "";
}



// ===============================
// WITHDRAW MONEY
// ===============================

function withdrawMoney() {

    const accountNumber =
        Number(document.getElementById("withdrawAccountNumber").value);

    const amount =
        Number(document.getElementById("withdrawAmount").value);

    const result =
        document.getElementById("withdrawResult");


    if (!accountNumber || amount <= 0) {

        result.innerText =
            "Please enter a valid account number and amount.";

        return;
    }


    // Linear Search
    let account = null;

    for (let i = 0; i < accounts.length; i++) {

        if (accounts[i].accountNo === accountNumber) {

            account = accounts[i];

            break;
        }
    }


    if (account === null) {

        result.innerText =
            "❌ Account not found.";

        return;
    }


    // Check sufficient balance
    if (amount > account.balance) {

        result.innerText =
            "❌ Insufficient balance.";

        return;
    }


    // Withdraw
    account.balance -= amount;


    result.innerText =
        `✓ ₹${amount.toFixed(2)} withdrawn successfully. Remaining balance: ₹${account.balance.toFixed(2)}`;


    // Clear fields
    document.getElementById("withdrawAccountNumber").value = "";

    document.getElementById("withdrawAmount").value = "";
}
// ===============================
// CHECK BALANCE
// ===============================

function checkBalance() {

    const accountNumber =
        Number(document.getElementById("balanceAccountNumber").value);

    const result =
        document.getElementById("balanceResult");


    if (!accountNumber) {

        result.innerHTML =
            "<p>❌ Please enter a valid account number.</p>";

        return;
    }


    // Linear Search
    let account = null;

    for (let i = 0; i < accounts.length; i++) {

        if (accounts[i].accountNo === accountNumber) {

            account = accounts[i];

            break;
        }
    }


    if (account === null) {

        result.innerHTML =
            "<p>❌ Account not found.</p>";

        return;
    }


    result.innerHTML = `
        <div class="account-result">

            <h3>💰 Available Balance</h3>

            <p>
                <strong>Account Number:</strong>
                ${account.accountNo}
            </p>

            <p>
                <strong>Customer Name:</strong>
                ${account.name}
            </p>

            <p>
                <strong>Account Type:</strong>
                ${account.type}
            </p>

            <h2>
                ₹${account.balance.toFixed(2)}
            </h2>

        </div>
    `;

}
