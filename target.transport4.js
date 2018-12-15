function TargetTransport4(creep){


      var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                          structure.structureType == STRUCTURE_SPAWN ||
                          structure.structureType == STRUCTURE_TOWER)
                          && structure.energy < structure.energyCapacity;
              }
          });
          if(!target){
            return null;
          } else{
            return target.id;
          }

}


module.exports = TargetTransport4;
