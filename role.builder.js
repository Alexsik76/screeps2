var rUn = require('run1');
var definition = require('definition');
var renew = require('renew');
var TargetEnergy = require('target.energy');
var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
//creep.memory.targets = null;
      if(creep.memory.building && creep.carry.energy == 0) {
        creep.memory.building = false;
        creep.say('🔄 harvest');
      }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	      creep.memory.building = true;
	      creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
        console.log('creep.memory.targets' + (creep.memory.targets));
        if(!creep.memory.targets) {
          //creep.memory.targets = null;
          for(var n in Game.rooms){
          var roomSearch = Game.rooms[n].name;
          console.log('Game.rooms[n] = ' + Game.rooms[n].name);

          var targets = roomSearch.find(FIND_CONSTRUCTION_SITES);
          if(!creep.memory.targets){
          creep.memory.targets = targets.map(function(name) {
              return name.id
          });
          console.log(targets);
          } else {
          creep.memory.targets = creep.memory.targets.concat(targets);
          }
        }
        console.log('Builder creep.memory.target =  ' + creep.memory.targets);
          //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

        } else {
          var target = Game.getObjectById(creep.memory.targets[0]);
          if(creep.build(target) == ERR_NOT_IN_RANGE) {
            rUn(creep, target);
          }
          if(creep.build(target) == ERR_INVALID_TARGET){
            creep.memory.targets[0] = null;
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
