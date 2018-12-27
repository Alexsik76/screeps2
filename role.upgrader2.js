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

              let targetToUpgrade = Game.rooms[Memory.targetInvasion].controller;
              console.log('targetToUpgrade = ' + targetToUpgrade);
            if(creep.upgradeController(targetToUpgrade) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targetToUpgrade, {visualizePathStyle: {stroke: '#ffffff'}});
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
