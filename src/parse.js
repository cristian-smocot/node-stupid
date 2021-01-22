var fs = require('fs');

var content = fs.readFileSync('data.txt', {encoding: 'utf8'});
var data = { data: []};
content = content.replace('data : ', '').replace(/'/g, '"');
var subcontents = content.split('}');
subcontents.forEach(function (v) {
	if (v.search('{') > -1) {
		v += '}';
		data.data.push(JSON.parse(v.trim()));
	}
});

console.log(data);