function letTrade(roomName){
  console.log('Game.rooms[roomName].terminal.store[RESOURCE_UTRIUM] = ' + Game.rooms[roomName].terminal.store[RESOURCE_UTRIUM]);
  if(Game.rooms[roomName].terminal.store[RESOURCE_UTRIUM] > 1000 &&
  Game.rooms[roomName].storage.store[RESOURCE_ENERGY] > 100000){
    //Game.market.createOrder(ORDER_SELL, RESOURCE_ENERGY, 0.08, 1000, roomName);
    const amountToBuy = 1000, maxTransferEnergyCost = 800;
    const orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: RESOURCE_UTRIUM});
    console.log('Orders: ' + orders);
    const myOrders = Game.market.getAllOrders({roomName: roomName});
for(let i=0; i < orders.length; i++) {
    const transferEnergyCost = Game.market.calcTransactionCost(
        amountToBuy, roomName, orders[i].roomName);
    if(transferEnergyCost < maxTransferEnergyCost) {
        Game.market.deal(orders[i].id, amountToBuy, roomName);
        break;
    }
}

  }
};
module.exports = letTrade;
