#include <iostream>

using namespace std;

int factorial(int n) {
  int fact = 1;
  for (int v = 1; v <= n; v++) {
      fact = fact * v;
  }
  return fact;
}

int main() {
  int n = 0;
  cout << "type an number" << endl;
  cin >> n;
  cout << factorial(n) << endl;
  return 0;
}