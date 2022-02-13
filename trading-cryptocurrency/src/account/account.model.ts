export interface AccountSchema {
  currency: string; // 화폐를 의미하는 영문 대문자 코드
  balance: string; // 주문가능 금액/수량
  locked: string; // 주문 중 묶여있는 금액/수량
  avg_buy_price: string; // 매수 평균가
  avg_buy_price_modified: boolean; // 매수 평균가 수정 여부
  unit_currency: string; // 평단가 기준 화폐
}
