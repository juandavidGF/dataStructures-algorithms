#include <iostream>

using namespace std;

long findSum(long n) {
  long sum = 0;
  for (long v = 1; v <= n; v++) {
      sum += v;
  }
  return sum;
}

long findSumN(long N) {
  long sum = N * (N + 1) / 2;
  return sum;
}

int main() {
  long n = 100000000000;
  cout << "the cumulative sum of " << n << " is:  " << findSum(n) << endl;
  cout << "the cumulative sum of " << n << " is:  " << findSumN(n) << endl;
  return 0;
}