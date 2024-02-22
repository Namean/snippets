#include <stdio.h>

int main()
{
    int myAge = 43; // An int variable
    int* ptr = &myAge; // A pointer varaible, that stores the address of myAge
    
    printf("%d\n", myAge); // Output the value of myAge(43)
    printf("%p\n", &myAge); // Out the memory address of myAge 
    printf("%p\n", ptr); // Output the memory address of myAge with the pointer

    return 0;
}
