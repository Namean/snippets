#include <stdio.h>

int main()
{
    int myNumbers[4] = {25, 50, 75, 100};

    printf("\n");
    printf("%d\n", *(myNumbers + 1)); // myNumbers[2].value
    printf("%d\n", *(myNumbers + 2)); // myNumbers[3].value

    return 0;
}
