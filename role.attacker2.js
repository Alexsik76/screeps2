var rUn = require('run1');
var defendRoom = require('defend');
var definition = require ('definition');
var renew = require('renew');
var roleAttacker2 = {
    /** @param {Creep} creep **/
    run: function(creep) {
          var enemies = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                                  filter: (structure) => {
                                  return (structure.structureType == STRUCTURE_WALL ||
                                  structure.structureType == STRUCTURE_TOWER ||
                                  structure.structureType == STRUCTURE_EXTENSION ||
                                  structure.structureType == STRUCTURE_SPAWN)
                                  }
                                  });

      if(enemies == null){
                enemies = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        }
            if(enemies) {
              creep.moveTo(enemies);
                if(creep.pos.isNearTo(enemies)) {
                  creep.attack(enemies);

                }
              } else {
                if(!creep.memory.nf){
                  creep.memory.nf = 'Flag1';
                } else {

                  let targetFlag = Game.flags[creep.memory.nf];
                  console.log(targetFlag.name);
                  if(creep.pos.isNearTo(targetFlag)){
                    creep.memory.nf = targetFlag.memory;
                  } else {
                    console.log('MoveTo' + targetFlag.name);
                    console.log('MoveTo2' + creep.memory.nf);
                    creep.moveTo(Game.flags[creep.memory.nf]);
                  }
                }
  }




}
};
module.exports = roleAttacker2;
