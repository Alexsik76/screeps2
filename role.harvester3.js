var rUn = require('run1');
var TargetTransport4 = require('target.transport4');
var roleHarvester3 = {

    /** @param {Creep} creep **/
    run: function(creep) {
  if(creep.carry.utrium == undefined && !creep.memory.harvest){
    creep.memory.transport = false;
    creep.memory.harvest = true;
    creep.say('HArvest');
  }

  if(creep.carry.U == creep.carryCapacity && !creep.memory.transport){

    if(creep.room.terminal.store[RESOURCE_ENERGY] < 2000){
      creep.memory.targetres = creep.room.terminal.id
    } else {
      creep.memory.targetres = creep.room.storage.id;
    }
    creep.memory.transport = true;
    creep.memory.harvest = false;
    creep.say('🚚 Transport');
    }
  if(creep.memory.transport) {
    let target = Game.getObjectById(creep.memory.targetres);

    if(creep.transfer(target, RESOURCE_UTRIUM) == ERR_FULL){
      creep.memory.transport = false;
    } else {
      if(creep.transfer(target, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }
    }
  }

  if(creep.memory.harvest) {
    let target1 = Game.getObjectById('5c1fdffde5f5aa183a685bb7');
    if(creep.withdraw(target1, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target1);
    }
  }


      }
};
module.exports = roleHarvester3;
