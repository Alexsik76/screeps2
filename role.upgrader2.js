/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.upgrader');
 * mod.thing == 'a thing'; // true
 */

var definition = require('definition');
var renew = require('renew');
var TargetEnergy = require('target.energy');
var roleUpgrader2 = {


    run: function(creep) {
            if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.upgrading = true;
	        creep.say('⚡ upgrade');
	    }

	    if(creep.memory.upgrading) {
            if(creep.upgradeController(Game.getObjectById('5bbcad8a9099fc012e63769f')) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.getObjectById('5bbcad8a9099fc012e63769f'), {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
          if(creep.carry.energy < creep.carryCapacity) {
            var source = creep.pos.findClosestByRange(FIND_SOURCES);
              if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}});
              }
          }
        }

renew(creep);
	}
};

module.exports = roleUpgrader2;
