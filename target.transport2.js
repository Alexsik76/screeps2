function TargetTransport2(creep){

var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
            return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN)
                    && structure.energy < structure.energyCapacity;
        }
          });
          if(targets.length > 0){
            return targets[0];
          }else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_TOWER)
                        && structure.energy < structure.energyCapacity;
                    }
                      });
                      if(targets.length > 0){
                        return targets[0];
                      } 

          }
  }


module.exports = TargetTransport2;
