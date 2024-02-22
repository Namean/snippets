#include <stdio.h>

// Dereference

int main()
{
    int myAge = 43; // varaible declaration
    int* ptr = &myAge; // Pointer declartion


    // Reference: Output the memory address of myAge with the pointer
    print("%p\n", ptr);


    // Dereference: Output the value of myAge with the pointer(43)
