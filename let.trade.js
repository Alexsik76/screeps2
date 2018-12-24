function letTrade(roomName){
  console.log('terminall = ' + Game.rooms[roomName].terminal.store[RESOURCE_ENERGY]);

  if(Game.rooms[roomName].terminal.store[RESOURCE_ENERGY] > 2000){
    //Game.market.createOrder(ORDER_SELL, RESOURCE_ENERGY, 0.08, 1000, roomName);
    const amountToBuy = 1000, maxTransferEnergyCost = 800;
    const orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_ENERGY});
console.log('terminall orders = ' + orders.length);
    const myOrders = Game.market.getAllOrders({roomName: roomName});
    console.log('terminall My orders = ' + myOrders.length);
for(let i=0; i<orders.length; i++) {
    const transferEnergyCost = Game.market.calcTransactionCost(
        amountToBuy, roomName, orders[i].roomName);
console.log('terminall orders transferEnergyCost= ' + transferEnergyCost);
    if(transferEnergyCost < maxTransferEnergyCost) {
        Game.market.deal(orders[i].id, amountToBuy, roomName);
        console.log('BUY BUY BUY');

        break;
    }
}

  }
};
module.exports = letTrade;
