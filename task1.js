var hours = process.argv[2];
var minutes = process.argv[3];
// Немного замечательного кода и магии
if (minutes >= 0 && minutes <= 59 && hours >= 0 && hours <= 23)
{
	var forty = [];
	var nine = [];
	var four = [];
	var heightOfSymbol = 7;
	var zero = ['     ','     ','     ','@@@@@','     ','     ','     '];
	var one = ['@@@@@ ','  @   ','  @   ','  @   ','  @   ','  @   ','@@@@@ '];
	var five = ['@       @ ','@       @ ','@       @ ',' @     @  ','  @   @   ','   @ @    ', '    @     '];
	var ten = ['@     @ ',' @   @  ','  @ @   ','   @    ','  @ @   ',' @   @  ','@     @ '];
	var fiveteen = ['@      ','@      ','@      ','@      ','@      ','@    @ ','@@@@@@ '];
	var colon = ['   ','   ',' @ ','   ',' @ ','   ','   '];
	for (var i = 0; i < heightOfSymbol; i++)
	{
		forty[i] = ten[i] + fiveteen[i];
		nine[i] = one[i] + ten[i];
		four[i] = one[i] + five[i];
	}
	var res = [];
	arabToRoman(hours);
	res.push(colon);
	arabToRoman(minutes);
	for (var i = 0; i < heightOfSymbol; i++)
	{
		var s = '';
		for (var j = 0; j < res.length; j++)
		{
			s += (res[j][i]);
		}
		console.log(s);
	}
}
else
{
	var er = 'Не верно указаны ';
	if (hours < 0)
	{
		console.log(er + 'часы (не должны быть меньше нуля)');
	}
	if (hours > 23)
	{
		console.log(er + 'часы (не должны быть больше 23)');
	}
	if (minutes < 0)
	{
		console.log(er + 'минуты (не должны быть меньше нуля)');
	}
	if (minutes > 59)
	{
		console.log(er + 'минуты (не должны быть больше 59)');
	}
	
}
function arabToRoman(num)
{
	var arabSymbol = [50, 40, 10, 9, 5, 4, 1, 0];
	var romanSymbol = [fiveteen, forty, ten, nine, five, four, one, zero];
	var	i = 0;
	if (num == 0)
	{
		res.push(romanSymbol[romanSymbol.length - 1]);
	}
	while (num > 0)
	{
		while (arabSymbol[i] <= num)
		{
			res.push(romanSymbol[i]);
			num -= arabSymbol[i];
		}
		i++;
	}
}