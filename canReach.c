//https://leetcode.com/problems/jump-game-vii/
// #include <stdio.h>
// #include <string.h>

char canReach(char * s, int minJump, int maxJump){
  register int N = 0;
  while(s[N]) N++;
  // int N = strlen(s);
  if (s[N-1] != '0') {
    return (char) 0;
  }

  char dp[N];
  dp[0] = 1;
  register int jumpsInWindow = 0;

  register int i;
  for (i = 1; i < N; i++) {
    // printf("----\n");
    dp[i] = 0;
    if (i < minJump) {
      dp[i] = 0;
      // printf("i < minJump\n");
      // printf("%i %i %i\n", i, jumpsInWindow, dp[i]);
      continue;
    }
    if (dp[i-minJump]) {
      jumpsInWindow++;
      // printf("i-minJump: dp[%i-%i-1]=1 => ++jumpsInWindow = %d\n", i, minJump, jumpsInWindow);
    }
    if (i <= maxJump ) {
      if (s[i] == '0') {
        dp[i] = 1;
      }
      // printf("i <= maxJump\n");
      // printf("%i %i %i\n", i, jumpsInWindow, dp[i]);
      continue;
    }
    if (dp[i-maxJump-1]) {
      jumpsInWindow--;
      // printf("i-maxJump: dp[%i-%i-1]=1 => --jumpsInWindow = %d\n", i, maxJump, jumpsInWindow);
    }
    // printf("%i %i %i\n", i, jumpsInWindow, dp[i]);
    if (jumpsInWindow > 0 && s[i] == '0') {
      dp[i] = 1;
    }
  }
  // for (int i = 0; i < N; i++)
  //   printf("%d ", dp[i]);

  return dp[N-1];
}

// int main() {
//   canReach("011010", 2, 3);
// }