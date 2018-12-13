/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('run1');
 * mod.thing == 'a thing'; // true
 */




    /** @param {Creep} creep **/
    function rUn(creep, target) {


        if(!creep.memory.path || creep.moveByPath(creep.memory.path) != OK) {
          creep.memory.path = creep.pos.findPathTo(target);
        }
        if(creep.pos.isNearTo(target)){
          creep.memory.path = null;
        }

    };

module.exports = rUn;
