var rUn = require('run1');
var defendRoom = require('defend');
var definition = require ('definition');
var renew = require('renew');
var roleInvader = {
    /** @param {Creep} creep **/
    run: function(creep) {

      if(!Memory.invasion){
        var pos3333 =  new RoomPosition(44, 28, Memory.roomName);
        creep.moveTo(pos3333);
      } else{
  var pos3333 =  new RoomPosition(2, 29, 'E12N47');
           if(!creep.pos.isNearTo(pos3333)&&!creep.memory.invade){
           //creep.say('To invade');
           creep.memory.invade = false;
           creep.moveTo(pos3333);
         } else {
           creep.memory.invade = true;
         }
       }
         if(creep.memory.invade){

             var enemies = creep.room.controller;
             console.log(creep.name, enemies.structureType);
          if(!enemies.my && enemies.owner != 'None') {
              if(creep.attackController(enemies) == ERR_NOT_IN_RANGE) {
                creep.say('Attack');
                creep.moveTo(enemies);
              }
            } else {

                if(creep.claimController(enemies) == ERR_NOT_IN_RANGE) {
                creep.say('invade');
                creep.moveTo(enemies);
                }
              }

              }



/*
            if(creep.rangedAttack(enemies) == ERR_NOT_IN_RANGE) {


            creep.moveTo(enemies);
          } else {
        creep.rangedAttack(enemies);
            }
          }
*/



  }
};
module.exports = roleInvader;
