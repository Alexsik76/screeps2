/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.miner0');
 * mod.thing == 'a thing'; // true
 */
var roleMiner0 = {
run: function(creep) {
                creep.moveTo(9,13, {visualizePathStyle: {stroke: '#ffaa00'}});
                 var sources = creep.room.find(FIND_SOURCES);
                creep.harvest(sources[1])

}
};
module.exports = roleMiner0;
