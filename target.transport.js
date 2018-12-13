function TargetTransport(creep){
  if(!Memory.readyToInvasion1){
var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN)
                    && structure.energy < structure.energyCapacity;
        }
          });
          if(targets.length > 0){
            return targets[0];
          } else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER)
                        && structure.energy < structure.energyCapacity;
                    }
                      });
                      if(targets.length > 0){
                        return targets[0];
                      } else {
                        return creep.room.storage;
                      }

          }
  }else{
    return creep.room.storage;
  }

}
module.exports = TargetTransport;
