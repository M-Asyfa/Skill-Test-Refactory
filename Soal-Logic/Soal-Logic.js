// 1
function isPalindrome(Words)
{
    let ReversedWords = "";

    for (i = Words.length - 1; i >= 0; i--)
    {
        ReversedWords = ReversedWords + Words[i];
    }
    
    // return Words;
    // return ReversedWords;

    if (ReversedWords.toLowerCase() == Words.toLowerCase())
    {
        return(true);
    }
    else if (ReversedWords.toLowerCase() != Words.toLowerCase())
    {
        return(false);
    }
}

console.log(isPalindrome("Radar"));
console.log(isPalindrome("Malam"));
console.log(isPalindrome("Kasur ini rusak"));
console.log(isPalindrome("Ibu Ratna antar ubi"));
console.log(isPalindrome("Malas"));
console.log(isPalindrome("Makan nasi goreng"));
console.log(isPalindrome("Balonku ada lima"));

// 2
function LeapYears(begin,end)
{
    let years = [];
    let num = 4;

    for (let i = begin + num; i <= end; i++)
    {
        if (i % num == 0)
        {
            years.push(i);
        }
    }

    return years
}

console.log(LeapYears(1900,2020));

// 3
function ReverseWords(words)
{
    // let kata = "Javascript";
    // let kataReversed = "";

    // for (let i = kata.length - 1; i >= 0; i--)
    // {
    //     kataReversed = kataReversed + kata[i];
    // }

    // console.log(kataReversed);
    // return kataReversed;

    let wordsCopy = '';
    let temp = '';

    for (let i = 0; i < words.length; i++)
    {
        if (words[i] != ' ')
        {
            temp += words[i];
        }

        if (words[i] == ' ' || i == words.length - 1)
        {
            let reverse = '';

            for (let j = temp.length - 1; j >= 0; j--)
            {
                reverse += temp[j];
            }

            wordsCopy += reverse + ' ';
            temp = '';
        }
    }
    
    return wordsCopy;
}

console.log(ReverseWords("Javascript"));
console.log(ReverseWords("I am A Great human"));

// 4
class FibonacciNo
{
	minValue(a, b)
	{
		if (a < b)
		{
			return a;
		}
		return b;
	}
	nearestFibonacciNo(n)
	{
		var a = 0;
		var b = 1;
		var c = a + b;
		while (c <= n)
		{
			a = b;
			b = c;
			c = a + c;
		}
		// Get min difference
		var min = this.minValue(n - a, n - b);
		if (min == n - a)
		{
			// min difference of a
			min = a;
		}
		else
		{
			// min difference of b
			min = b;
		}
		process.stdout.write("\n Given n : " + n);
		process.stdout.write("\n Result : " + min);
	}
}

function main()
{
	var task = new FibonacciNo();
	// Test A
	// num = 22 
	// output = 21
	task.nearestFibonacciNo(22);
	// Test B
	// num = 10 
	// output = 8
	task.nearestFibonacciNo(10);
}
main();

// 5
function FizzBuzz(n)
{
    let result = [];
    let str = "", a;

    for (a = 1; a <= n; a++)
    {
        // x = a % 3 == 0;
        // y = a % 5 == 0;
        if (a % 3 == 0 && a % 5 == 0)
        {
            str = "FizzBuzz"
        }
        else if (a % 3 == 0)
        {
            str = "Fizz"
        }
        else if (a % 5 == 0)
        {
            str = "Buzz"
        }
        else if (a % 3 != 0 && a % 5 != 0)
        {
            str = a;
        }
        
        result.push(str); 
    }

    return result;
}

console.log(FizzBuzz(15));