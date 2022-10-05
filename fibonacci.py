
# Fibonacci series using recursion
def fibonacci(n, s):
    if n <= 1:
        return n
    print(s)
    return fibonacci(n-1, "n-1") + fibonacci(n-2, "n-2")

if __name__ == "__main__":
    n = 5
    print(fibonacci(n, "n"))