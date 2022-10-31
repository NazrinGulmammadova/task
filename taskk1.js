let sum=0;
let count=0;
let avarage;
for (let i=1; i<10; i++)
{
    if (i%2==0)
    {
        sum=sum+i;
        count++;
        avarage=sum/count;
    }
}
console.log(avarage);