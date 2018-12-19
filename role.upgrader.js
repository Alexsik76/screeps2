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
var roleUpgrader = {

    /** @param {Creep} creep **/
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
        if(creep.pos.isNearTo(creep.room.controller)){
          creep.upgradeController(creep.room.controller);
        } else {
          creep.moveTo(creep.room.controller, {reusePath: 50}, {visualizePathStyle: {stroke: '#ffffff'}});
        }
        }
        else {
          if(creep.carry.energy < creep.carryCapacity) {
            TargetEnergy(creep);
          }
        }

renew(creep);
	}
};

module.exports = roleUpgrader;
