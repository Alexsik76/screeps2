var definition = require('definition');
var renew = require('renew');
var TargetEnergy = require('target.energy');
var roleRepairer= {


    /** @param {Creep} creep **/
    run: function(creep) {


            var closestDamagedStructure = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax &&
                (structure.structureType != STRUCTURE_WALL || structure.structureType == STRUCTURE_WALL &&
                structure.hits < Memory.wallHit)
            });
            console.log('Memory.wallHit = ' + Memory.wallHit);

        if(!closestDamagedStructure){
        creep.memory.repair = false;
      }
      if(creep.memory.repair && creep.carry.energy == 0) {
        creep.memory.repair = false;
        creep.say('🔄 harvest');

	    }
	    if(!creep.memory.repair && creep.carry.energy == creep.carryCapacity && closestDamagedStructure) {
	      creep.memory.repair = true;
	      creep.say('🔧 Repair');
	    }
	    if(creep.memory.repair) {
        if(creep.carry.energy > 0) {
          if(creep.repair(closestDamagedStructure[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(closestDamagedStructure[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
          }

      } else {
          if(creep.carry.energy < creep.carryCapacity){
            TargetEnergy(creep);
          }
        }

 renew(creep);


    }
};
module.exports = roleRepairer;
