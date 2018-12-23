var rUn = require('run1');
var TargetTransport4 = require('target.transport4');
var roleHarvester3 = {

    /** @param {Creep} creep **/
    run: function(creep) {

  if(creep.carry.utrium == 0 && !creep.memory.withdraw){
    creep.memory.transport = false;
    creep.memory.harvest = true;
    creep.say('HArvest');
  }
  //console.log('creep.memory.targeten = ' + creep.memory.targeten);
  //console.log('!creep.memory.targeten = ' + !creep.memory.targeten);
  if(creep.carry.utrium == creep.carryCapacity && !creep.memory.transport){
    creep.memory.targetres = creep.room.terminal;
    creep.memory.transport = true;
    creep.memory.withdraw = false;
    //console.log(creep.name, creep.memory.targeten);
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

  if(creep.memory.withdraw) {
    let target1 = Game.getObjectById('5bbcb32940062e4259e9414e');
    console.log(creep.name, target1);
    if(creep.harvest(target1, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target1);
    }
  }


      }
};
module.exports = roleHarvester3;