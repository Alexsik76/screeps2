var rUn = require('run1');
var defendRoom = require('defend');
var definition = require ('definition');
var renew = require('renew');
var roleRAttacker1 = {
    /** @param {Creep} creep **/
    run: function(creep) {

      if(!Memory.invasion){
        console.log('Rattacker  Memory.invasion ' + Memory.invasion);
        var pos3333 =  new RoomPosition(13, 43, Memory.roomName);
        creep.moveTo(pos3333);
      }
       else {
            var pos3333 =  new RoomPosition(17, 3, 'E11N46');
            if(!creep.pos.isNearTo(pos3333) && !creep.memory.attack){
            creep.say('🛡️ To attack neighbor');
            creep.memory.attack = false;
            creep.moveTo(pos3333);
            } else {
              creep.memory.attack = true;
              }
      if(creep.memory.attack){
        if(!enemies){
          var enemies = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                                  filter: (structure) => {
                                  return (structure.structureType == STRUCTURE_WALL ||
                                  structure.structureType == STRUCTURE_TOWER ||
                                  structure.structureType == STRUCTURE_EXTENSION ||
                                  structure.structureType == STRUCTURE_SPAWN)
                                  }
                                  });
}
                if(enemies == null){
              //  creep.say('Attack creep');
                var enemies = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

            if(enemies) {
              if(creep.rangedAttack(enemies) == ERR_NOT_IN_RANGE) {

              creep.moveTo(enemies);

              }
              if(creep.pos.isNearTo(enemies)){
                creep.moveTo(new RoomPosition(13, 43, Memory.roomName));
                creep.rangedAttack(enemies);
            }

              } else {
                //creep.memory.attack = false;

                creep.moveTo(pos3333);
                creep.memory.attack = false;
              }

}
    }

  }
}
};
module.exports = roleRAttacker1;
