var a = 'Hello';

function hello() {
    let b = "Hello World";
    const c = "Hello World!";
    if (true) {
        let d = 'Hello World!!'
        debugger
        
    }
}

hello();



const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let miMoneyBox = moneyBox();

miMoneyBox(4); 
miMoneyBox(6);
miMoneyBox(10);