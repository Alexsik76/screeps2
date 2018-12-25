function TargetTransport4(creep){


      var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                          structure.structureType == STRUCTURE_SPAWN ||
                          structure.structureType == STRUCTURE_TOWER) &&
                          structure.energy < structure.energyCapacity;
              }
          });
          if(!target){
            if(creep.room.storage.store[RESOURCE_ENERGY] > 400000){
              return creep.room.terminal.id;
            }
          } else {
            return target.id;
          }

}
module.exports = TargetTransport4;
