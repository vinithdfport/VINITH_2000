#include <stdio.h>
#include <stdlib.h>

int main() {
    int ptr = (int) malloc(sizeof(int));
    *ptr = 100;
    free(ptr); // ptr becomes a dangling pointer after free()
    // printf("%d", *ptr); // Undefined behavior
    ptr = NULL; // Avoid dangling pointer
    return 0;
}