function TargetTransport3(creep){

    if(!Memory.targetTransport || Memory.targetTransport.length == 0){
      var targets = creep.room.find(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                          structure.structureType == STRUCTURE_SPAWN ||
                          structure.structureType == STRUCTURE_TOWER)
                          && structure.energy < structure.energyCapacity;
              }
          });
      Memory.targetTransport = targets.map(function(name) {
          return name.id
      });
    }
    if(Memory.targetTransport.length > 0){
      var target = Game.getObjectById(Memory.targetTransport[0]);
      if(target.energyCapacity == target.energy){
        Memory.targetTransport.shift();
      }else{
        if((target.energyCapacity - target.energy) <= creep.carry.energy){
          return Memory.targetTransport.shift();
          } else {
              return Memory.targetTransport[0];
            }
      }

      }
}


module.exports = TargetTransport3;
