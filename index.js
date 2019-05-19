const REGISTER_STATUS = {
      closed: 'CLOSED',
      insufficientFunds: 'INSUFFICIENT_FUNDS', 
      open: 'OPEN'
}

function checkCashRegister(price, cash, cid) {
      let cashRegister = { status: '', change: cid};
      const changeNeeded = parseFloat(cash - price).toFixed(2);
      const changeAvailable = getTotalCashRegisterChange(cid);
      console.log(changeNeeded)
      cashRegister.status = getTotalCashRegisterStatus(changeNeeded, changeAvailable);
}

function getTotalCashRegisterStatus(changeNeeded, changeAvailable){

}

function getTotalCashRegisterChange(changeInDrawer) {
      let total = 0;

      for (let change of changeInDrawer) {
            let changeValue = change[1];
            total += changeValue;      
      }

      return total.toFixed(2);
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], 
["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])