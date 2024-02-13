# ClearConsole

[](https://cplusplus.com/articles/4z18T05o/#Introduction)

```cpp

#include <unistd.h>
#include <term.h>

void ClearScreen()
  {
  if (!cur_term)
    {
    int result;
    setupterm( NULL, STDOUT_FILENO, &result );
    if (result <= 0) return;
    }

  putp( tigetstr( "clear" ) );
  }

```

query: clear screen c++

https://cplusplus.com/articles/4z18T05o/
https://cplusplus.com/articles/4z18T05o/#POSIX
https://cplusplus.com/articles/4z18T05o/#Introduction

query: <term.h>
\_id: "",
id: ""
parent_id: hashString("clear screen c++")
term.h : header not found

sudo apt-get install libncurses5-dev
gcc my_program.c -o my_program -lncurses

query: undefined reference to std cout

https://stackoverflow.com/questions/28236870/error-undefined-reference-to-stdcout

```shell

g++ -Wall -Wextra -Werror -c main.cpp -o main.o
     ^^^^^^^^^^^^^^^^^^^^ <- For listing all warnings when your code is compiled.

```

`gcc main.cpp -lstdc++ -o main.o`
