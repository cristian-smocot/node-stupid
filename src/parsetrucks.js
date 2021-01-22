var fs = require('fs');

var content = fs.readFileSync('data/trucks.data', {encoding: 'utf8'});
var stats = {};

content.split('\n').forEach(function(line) {
	var split = line.split(',');
	var count = 1 * split[1];
	var key = split[0].split(' ')[1];
	 if (typeof stats[key] === 'undefined') stats[key] = count;
	 else stats[key] += count;

});

console.log(stats);
console.log(stats.trailblazer);
