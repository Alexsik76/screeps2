var rUn = require('run1');
function TargetEnergy(creep){


 //if(!creep.memmory.target){
  if(Memory.harvesting){
      var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
  } else{
    if (creep.room.storage && creep.room.storage.store[RESOURCE_ENERGY] > 1000){
      if(creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.storage, {reusePath: 50});
      }
    } else{
        if(creep.withdraw(Memory.container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(Game.getObjectById(Memory.containerId));
        }
      }
    }

      }

module.exports = TargetEnergy;
