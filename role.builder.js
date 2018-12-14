var rUn = require('run1');
var definition = require('definition');
var renew = require('renew');
var TargetEnergy = require('target.energy');
var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

      if(creep.memory.building && creep.carry.energy == 0) {
        creep.memory.building = false;
        creep.say('🔄 harvest');
      }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	      creep.memory.building = true;
	      creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
        for(var n in Game.rooms){
          var roomSearch = Game.rooms[n];
          console.log('Game.rooms[n] = ' + Game.rooms[n].name);
          var targets = roomSearch.find(FIND_CONSTRUCTION_SITES);
          creep.memory.targets = targets.slice();

        }
        console.log('Builder creep.memory.target =  ' + creep.memory.targets);
          //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        if(creep.memory.targets.length) {
          if(creep.build(creep.memory.targets[0]) == ERR_NOT_IN_RANGE) {
            rUn(creep, creep.memory.targets[0]);
          }
        }
	    } else {
            if(creep.carry.energy < creep.carryCapacity) {
              TargetEnergy(creep);
            }
        }

renew(creep);


    }
};

module.exports = roleBuilder;
