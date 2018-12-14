/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.doctor');
 * mod.thing == 'a thing'; // true
 */
var definition = require('definition');
var renew = require('renew');
var roleDoctor= {


    /** @param {Creep} creep **/
    run: function(creep) {



    var target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {return object.hits < object.hitsMax;
                              }
                });
                if(!Memory.invasion){

                    var pos3333 =  new RoomPosition(13, 43, Memory.roomName);
                    creep.moveTo(pos3333);
                } else{
            var pos3333 =  new RoomPosition(19, 9, 'E11N46');
            creep.moveTo(pos3333);
          }
        if(target == null){
        creep.memory.healing = false;
      }

	    if(!creep.memory.healing && target) {
	      creep.memory.healing = true;
	      creep.say('⛑️ Heal');
	    }
	    if(creep.memory.healing) {
        if(target) {
          creep.moveTo(target);
            if(creep.pos.isNearTo(target)) {
              creep.heal(target);
            }
            else {
              creep.rangedHeal(target);
            }
          }
        }
 //renew(creep);

  //      if(target == null && creep.memory.renew == false){
          //creep.memory.healing = false;
          //creep.say('Help')
  //        creep.moveTo(15, 9);
	//	    }
    }
};
module.exports = roleDoctor;
