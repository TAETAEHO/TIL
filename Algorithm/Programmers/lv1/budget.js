/**
 * 프로그래머스 lv.1 - 예산
 * 입출력 예 #1
 * 각 부서에서 [1원, 3원, 2원, 5원, 4원]만큼의 금액을 신청했습니다.
 * 만약에, 1원, 2원, 4원을 신청한 부서의 물품을 구매해주면 예산 9원에서 7원이 소비되어 2원이 남습니다.
 * 항상 정확히 신청한 금액만큼 지원해 줘야 하므로 남은 2원으로 나머지 부서를 지원해 주지 않습니다.
 * 위 방법 외에 3개 부서를 지원해 줄 방법들은 다음과 같습니다.
 */

// Solution
function limitBudget(d, budget) {
  // d는 배열
  d.sort((a, b) => a - b);

  // 최대 줄 수 있는 부서의 수, 예산 합계
  let cnt = 0;
  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    cnt++;
    sum += d[i];

    if (sum > budget) cnt--;
  }

  return cnt;
}
