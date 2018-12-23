function letTrade(roomName){
  if(Game.rooms.roomName.terminal.store[RESOURCE_ENERGY] > 2000){
    Game.market.createOrder(ORDER_SELL, RESOURCE_ENERGY, 0.08, 1000, roomName);
    const amountToBuy = 1000, maxTransferEnergyCost = 500;
    const orders = Game.market.getAllOrders({type: ORDER_SELL, resourceType: RESOURCE_ENERGY});

for(let i=0; i<orders.length; i++) {
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