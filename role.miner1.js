/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.miner1');
 * mod.thing == 'a thing'; // true
 */
   var roleMiner1 = {
run: function(creep) {

                creep.moveTo(6,10, {visualizePathStyle: {stroke: '#ffaa00'}});
                 var sources = creep.room.find(FIND_SOURCES);
                creep.harvest(sources[0])

}
};
module.exports = roleMiner1;
