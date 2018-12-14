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
        //towers.forEach(tower => tower.repair(targetStructure[0]));
  //      var rooms = Game.rooms;
        console.log('Game rooms ' + Game.rooms.length);
  //      rooms.forEach(room => room.find(FIND_CONSTRUCTION_SITES));
        //console.log('Targets to build: ' + targets1);
//        console.log('creep.memory.targets' + (creep.memory.targets));
        if(!creep.memory.targets) {
          //creep.memory.targets = null;
          for(var n in Game.rooms){
          var roomSearch = Game.rooms[n].name;
          console.log('Game.rooms[n] = ' + Game.rooms[n].name);

          var targets = Game.rooms[roomSearch].find(FIND_CONSTRUCTION_SITES);
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
