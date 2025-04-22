#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(void)
{
  FILE *file = fopen("phoneBook.csv", "w");

  char name[100];
  char phone[100];

  printf("Enter name: ");
  scanf("%99s", name);
  printf("Enter phone: ");
  scanf("%99s", phone);

  fprintf(file, "%s,%s\n", name, phone);\
  fclose(file);
}