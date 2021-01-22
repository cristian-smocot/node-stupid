var chalk = require('chalk');

var winners = [11, 17, 30, 39, 45, 49];

var variants = [
	[ 4, 7, 10, 15, 20, 29],
	[ 2, 14, 17, 20, 24, 44]
];

var winnersStr = '';
winners.forEach(function (n) {
	winnersStr += (n >= 10 ? ' ' : '  ') + chalk.green.bold(n);
});
console.log(winnersStr);
console.log('-------------------');

variants.forEach(function(variant){
	var varStr='';
	variant.forEach(function(n){
		if (winners.indexOf(n)>-1)
			varStr += (n >= 10 ? ' ' : '  ') + chalk.green.bold(n);
		else
			varStr += (n >= 10 ? ' ' : '  ') + chalk.red(n);
	});
	console.log(varStr);
});

