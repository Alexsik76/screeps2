function TargetTransport4(creep){


      var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
              filter: (structure) => {
                  return (structure.structureType == STRUCTURE_EXTENSION ||
                          structure.structureType == STRUCTURE_SPAWN) &&
                          structure.energy < structure.energyCapacity;
              }
          });
          if(!target){
            let towers = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER)}
                  });
                  if(towers && towers != null){
                    var summ_towers = 0;
                    for(var i = 0; i < towers.length; i++){
                      summ_towers += towers[i].energy;
                    }
                    var average_sum = summ_towers / towers.length;
                  }

            target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER) &&
                    structure.energy <= average_sum;
                    }
                });
          }
          if(!target){
            if(creep.room.storage.store[RESOURCE_ENERGY] > 400000){
              return creep.room.terminal.id;
            }
          } else {
            return target.id;
          }

}
module.exports = TargetTransport4;
