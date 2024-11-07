#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40};
    int *ptr = arr;

    printf("First element: %d\n", *ptr);    
    ptr++;
    printf("Second element: %d\n", *ptr);
    return 0;
}
