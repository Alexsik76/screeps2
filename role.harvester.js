/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */
var rUn = require('run1');
var TargetTransport = require('target.transport')
var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {


if(!creep.memory.targeten){
creep.memory.targeten = TargetTransport(creep).id;
}
if(!creep.memory.targetHarvest){
creep.memory.targetHarvest = Memory.containerId;
}


      var sources = creep.room.find(FIND_SOURCES);

      if(creep.memory.transport && creep.carry.energy == 0) {
        creep.memory.transport = false;
        creep.memory.targeten == null;
        creep.memory.targetHarvest = Memory.containerId;
        creep.say('🔄 harvest');
      }
	    if(!creep.memory.transport && creep.carry.energy == creep.carryCapacity) {
	      creep.memory.transport = true;
        creep.memory.targeten = TargetTransport(creep).id;
        creep.memory.targetHarvest = null;
	      creep.say('🚚 Transport');
	    }

	    if(creep.memory.transport) {

          let target = TargetTransport(creep);

            //  creep.say((target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE);
                if(creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {reusePath: 50});

                    //rUn(creep, target);

                }


	    }
	        else {
            if(creep.carry.energy < creep.carryCapacity) {
              if(Memory.harvesting){
                  var sources = creep.room.find(FIND_SOURCES);
                    if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                      creep.moveTo(sources[1], {reusePath: 50}, {visualizePathStyle: {stroke: '#ffaa00'}});
                    }
              } else{
                let target1 = Game.getObjectById(creep.memory.targetHarvest);
                  //creep.say('Go');

                     if(creep.withdraw(target1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        //creep.say('GoGoGo');

                        creep.moveTo(target1);
                      }
                    //  if(creep.withdraw(creep.room.storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    //    creep.moveTo(creep.room.storage);
                    //  }
                }
            }
          }

}
};

module.exports = roleHarvester;
