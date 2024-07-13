document.getElementById('connectButton').addEventListener('click', connectMetaMask);
document.getElementById('balanceButton').addEventListener('click', getBalance);

let web3;
let account;

async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            account = accounts[0];
            web3 = new Web3(window.ethereum);
            document.getElementById('balanceButton').disabled = false;
            alert('Connected: ' + account);
        } catch (error) {
            console.error(error);
            alert('Error connecting to MetaMask');
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask and try again.');
    }
}

async function getBalance() {
    if (web3 && account) {
        try {
            const balance = await web3.eth.getBalance(account);
            const etherBalance = web3.utils.fromWei(balance, 'ether');
            document.getElementById('balance').innerText = `Balance: ${etherBalance} ETH`;
        } catch (error) {
            console.error(error);
            alert('Error fetching balance');
        }
    } else {
        alert('Please connect to MetaMask first');
    }
}
