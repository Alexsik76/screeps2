var rUn = require('run1');
var definition = require('definition');
var renew = require('renew');
var TargetEnergy2 = require('target.energy2');
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

        targets1 =_.forEach(Game.rooms, room => room.find(FIND_CONSTRUCTION_SITES));
        if(!creep.memory.targets) {
          //creep.memory.targets = null;
          for(var n in Game.rooms){
          var roomSearch = Game.rooms[n].name;
          var targets = Game.rooms[roomSearch].find(FIND_CONSTRUCTION_SITES);
          if(!creep.memory.targets){
          creep.memory.targets = targets.map(function(name) {
              return name.id
          });
          } else {
          creep.memory.targets = creep.memory.targets.concat(targets);
          }
        }
        } else {
          var target = Game.getObjectById(creep.memory.targets[0]);
          if(creep.build(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
          }
          if(creep.build(target) == ERR_INVALID_TARGET){
            creep.say('stop');
            creep.memory.targets[0] = null;
          }
        }
	    } else {
            if(creep.carry.energy < creep.carryCapacity) {

              TargetEnergy2(creep);
            }
        }

renew(creep);


    }
};

module.exports = roleBuilder;
