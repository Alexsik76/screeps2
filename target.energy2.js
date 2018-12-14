var rUn = require('run1');
function TargetEnergy2(creep){


 //if(!creep.memmory.target){
 var storage = creep.room.storage;
 if(!storage){
   console.log('0000');
   var containers = creep.room.find(FIND_STRUCTURES, {
                             filter: (structure) => {
                             return (structure.structureType == STRUCTURE_CONTAINER)
                             }
                           });
 } else {
   if(creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
     creep.moveTo(creep.room.storage);
   }
 }
 if(!storage && containers.length == 0){
   console.log('1111');
   var sources = creep.room.find(FIND_SOURCES);
     if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
       creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
     }
 } else {
   console.log('2222' + containers[0].structureType);
   if(creep.withdraw(containers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
     creep.moveTo(containers[0]);
   }
 }

      }

module.exports = TargetEnergy2;
