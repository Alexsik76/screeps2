var rUn = require('run1');
var TargetTransport4 = require('target.transport4');
var roleHarvester2 = {

    /** @param {Creep} creep **/
    run: function(creep) {

  if(creep.carry.energy == 0 && !creep.memory.withdraw){
    creep.memory.transport = false;
    creep.memory.withdraw = true;
    //creep.say('Ã°Å¸âÆ withdraw');
  }
  console.log('creep.memory.targeten = ' + creep.memory.targeten);
  console.log('!creep.memory.targeten = ' + !creep.memory.targeten);
  if(creep.carry.energy > 0 && !creep.memory.transport){
    creep.memory.targeten = TargetTransport4(creep);
    creep.memory.transport = true;
    creep.memory.withdraw = false;
    //console.log(creep.name, creep.memory.targeten);
    creep.say('🚚 Transport');


    }
  if(creep.memory.transport) {
    let target = Game.getObjectById(creep.memory.targeten);
    if(creep.transfer(target, RESOURCE_ENERGY) == ERR_FULL){
      creep.memory.transport = false;
    } else {
      if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
      }
    }


  }

  if(creep.memory.withdraw) {
    let target1 = creep.room.storage;
    if(creep.withdraw(target1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target1);
    }
  }


      }
};
