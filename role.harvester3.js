var rUn = require('run1');
var TargetTransport4 = require('target.transport4');
var roleHarvester3 = {

    /** @param {Creep} creep **/
    run: function(creep) {
//console.log(creep.name, creep.carry.utrium == undefined);
//console.log(creep.name, creep.carry.utrium == creep.carryCapacity);
  if(creep.carry.utrium == undefined && !creep.memory.harvest){
    creep.memory.transport = false;
    creep.memory.harvest = true;
    creep.say('HArvest');
  }

  //console.log('!creep.memory.targeten = ' + !creep.memory.targeten);
  if(creep.carry.U == creep.carryCapacity && !creep.memory.transport){
    creep.memory.targetres = creep.room.storage.id;
    creep.memory.transport = true;
    creep.memory.harvest = false;
    //console.log(creep.name, creep.memory.targeten);
    creep.say('🚚 Transport');
    }
  if(creep.memory.transport) {
    let target = Game.getObjectById(creep.memory.targetres);
    console.log('creep.carry.utrium == creep.carryCapacity = ' + ((creep.transfer(target, RESOURCE_UTRIUM) == ERR_FULL)));
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
    console.log(creep.name, target1);
    if(creep.withdraw(target1, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target1);
    }
  }


      }
};
module.exports = roleHarvester3;
