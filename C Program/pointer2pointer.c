#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;
    int **ptr_to_ptr = &ptr; // Pointer to pointer

    printf("Value of num: %d\n", **ptr_to_ptr); // Dereferencing twice
    return 0;
}
