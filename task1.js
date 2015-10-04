var hours = process.argv[2];
var minutes = process.argv[3];
// Немного замечательного кода и магии
var m = matrix(100,7)//Создаём матрицу символов, для хранения в ней ASCII графики
var k = 0;//В этой переменной будем хранить номер столбца, с которого будет рисоваться очередной символ в матрице
var ch = '@';//Хранит символ используемый в ASCII графикие

main();

function main()
{ 
	if (minutes < 0 || minutes > 59 || hours < 0 || hours > 23)
		console.log('Время указано не верно');
	else
	{
		arabToRoman(hours);
		k = colon(matrix, k);
		arabToRoman(minutes);
		printMatrix(m); 
	}
}

function arabToRoman(num)
{
	var ar = [50, 40, 10, 9, 5, 4, 1, 0];
	var	i = 0;
	if (num == 0)
		k = zero(matrix, k);
	while (num > 0)
	{
		while (ar[i] <= num)
		{
			printRoman(matrix, ar[i]);
			num -= ar[i];
		}
		i++;
	}
}

function div(val, by)
{
	return (val - val % by) / by;
}

function matrix(n, m)
{
	matrix = [];
	for (var i = 0; i < m; i++)
	{
		matrix[i] = [];
		for (var j = 0; j < n; j++)
			matrix[i][j] = ' ';
	}
	return matrix;
}

function printMatrix(matrix)
{
	var m = matrix.length;
	var n = matrix[0].length;
	for (var i = 0; i < m; i++)
	{
		s = '';
		for (var j = 0; j < n; j++)
		{
			s += matrix[i][j];
 		}
		console.log(s);
	}
}

function colon(matrix, sCol)
{
	var m = matrix.length;
	m = div(m, 2);
	matrix[m - 1][sCol + 2] = ch;
	matrix[m + 1][sCol + 2] = ch;
	sCol += 6;
	return sCol;
}

function zero(matrix, sCol)
{
	var m = matrix.length;
	m = div(m, 2);
	for (var i = 0; i < 5; i++)
		matrix[m][sCol + i] = ch;
	sCol += 6;
	return sCol;
}

function one(matrix, sCol)
{
	var m = matrix.length;
	for (var i = 1; i < m - 1; i++)
	{
		matrix[i][sCol + 2] = ch;
	}
	for (var i = 0; i < 5; i++)
	{
		matrix[0][sCol + i] = ch;
		matrix[m - 1][sCol + i] = ch;
	}
	sCol += 6;
	return sCol;
}

function five(matrix, sCol)
{
	var m = matrix.length;
	for (var i = 2; i < m; i++)
	{
		matrix[i][sCol - 2 + i] = ch;
	}
	matrix[0][sCol] = ch;
	matrix[1][sCol] = ch;
	sCol += 10;
	for (var i = 2; i < m - 1; i++)
	{
		matrix[i][sCol - i] = ch;
	}
	matrix[0][sCol-2] = ch;
	matrix[1][sCol-2] = ch;
	return sCol;
}

function ten(matrix, sCol)
{
	var m = matrix.length;
	var sRow = 0;
	for (var i = 0; i < m; i++)
	{
		matrix[sRow + i][sCol + i] = ch;
	}
	sRow = m - 1;
	for (var i = 0; i < m; i++)
	{
		matrix[sRow - i][sCol + i] = ch;
	}
	sCol += 8;
	return sCol;
}

function fiveteen(matrix, sCol)
{
	var m = matrix.length;
	for (var i = 0; i < m; i++)
	{
		matrix[i][sCol] = ch;
	}
	for (var i = 1; i < 6; i++)
	{
		matrix[m - 1][sCol + i] = ch;
	}
	sCol += 5;
	matrix[m - 2][sCol] = ch;
	sCol += 2;
	return sCol;
}

function printRoman(matrix, num)
{
	switch (num)
	{
		case 50:
			k = fiveteen(matrix, k);
			break
		case 40:
		{
			k = ten(matrix, k);
			k = fiveteen(matrix, k);
			break
		}
		case 10:
			k = ten(matrix, k);
			break
		case 9:
		{
			k = one(matrix, k);
			k = ten(matrix, k);
			break
		}
		case 5:
			k = five(matrix, k);
			break
		case 4:
		{
			k = one(matrix, k);
			k = five(matrix, k);
			break
		}
		case 1:
			k = one(matrix, k);
			break
		case 0:
			k = zero(matrix, k);
			break
	}
}
