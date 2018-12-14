var rUn = require('run1');
function TargetEnergy2(creep){


 //if(!creep.memmory.target){
 var sources = creep.room.storage;
 if(!sources){
   var sources = creep.room.find(FIND_STRUCTURES, {
                             filter: (structure) => {
                             return (structure.structureType == STRUCTURE_CONTAINER)
                             }
                           });
 } else {
   if(creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
     creep.moveTo(creep.room.storage);
   }
 }
 if(!sources){
   var sources = creep.room.find(FIND_SOURCES);
     if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
       creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
     }
 } else {
   if(creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
     creep.moveTo(sources[0]);
   }
 }

      }

module.exports = TargetEnergy2;
