/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.ranger');
 * mod.thing == 'a thing'; // true
 */
//var FindContainers = require('findcontainer');
var rUn = require('run1');
var defendRoom = require('defend');
var definition = require ('definition');
var renew = require('renew');
var roleRanger= {



    /** @param {Creep} creep **/
    run: function(creep) {


            var pos1 = creep.room.getPositionAt(1, 14);
            var pos2 = creep.room.getPositionAt(3, 14);
            var pos3 = creep.room.getPositionAt(18, 8);
            var pos4 = creep.room.getPositionAt(18, 6);
            var perimeter = [pos1, pos2, pos3, pos4];
        if(!defendRoom(Memory.roomName)){
            if(typeof(creep.memory.i)== 'undefined')
                {
                    creep.memory.i = 0;
                    //var target = perimeter[creep.memory.i];
                    //rUn(creep, target);
                }
                var target = perimeter[creep.memory.i];

            if(creep.pos.isEqualTo(target)){
              creep.say('🛡️ To explore');
               if(creep.memory.i < 3){
                creep.memory.i = creep.memory.i + 1;
                } else{
                creep.memory.i = 0;
                }
                }
            // target = perimeter[creep.memory.i];
             rUn(creep, target);

        }


renew(creep);
    if(defendRoom(Memory.roomName)){

      if(!creep.memory.attack){
        creep.say('⚔️ To attack');
        defendRoom(Memory.roomName);
        creep.memory.path = null;
        creep.memory._move = null;
        creep.memory.attack = true;
      } else {
            if(creep.attack(defendRoom(Memory.roomName)[0]) == ERR_NOT_IN_RANGE) {

            creep.moveTo(defendRoom(Memory.roomName)[0]);
          }
        }
    } else {
        creep.memory.attack = false;
    }


    }
};
module.exports = roleRanger;
