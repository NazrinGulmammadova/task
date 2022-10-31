int num = 313;
int remain;
int sum = 0;
while (num > 0)
{
    remain = num % 10;
    num = num / 10;
    sum = sum + remain;
}
Console.WriteLine(sum);