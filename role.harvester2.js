var rUn = require('run1');
var TargetTransport3 = require('target.transport3');
var roleHarvester2 = {

    /** @param {Creep} creep **/
    run: function(creep) {

  if(creep.carry.energy == 0 && !creep.memory.withdraw){
    creep.memory.transport = false;
    creep.memory.targeten = null;
    creep.memory.withdraw = true;
    creep.say('🔄 withdraw');
  }
  if(creep.carry.energy > 0 && !creep.memory.transport){
    creep.memory.targeten = TargetTransport3(creep);
    //creep.say('SToop');
    if(!creep.memory.targeten){
      //console.log('Stoop  ' + creep.name);
      creep.memory.transport = false;
    }else{
    creep.memory.transport = true;
    creep.memory.withdraw = false;
    console.log(creep.name, creep.memory.targeten);
    creep.say('🚚 Transport');
    }
  }
  if(creep.memory.transport) {
    var target = Game.getObjectById(creep.memory.targeten);
    if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
    creep.moveTo(target);
    } else {
          creep.memory.transport = false;
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

module.exports = roleHarvester2;
