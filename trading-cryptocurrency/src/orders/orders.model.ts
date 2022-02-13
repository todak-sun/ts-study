export interface OrderChanceSchema {
  bid_fee: string; // 매수 수수료 비율
  ask_fee: string; // 매도 수수료 비율
  maker_bid_fee: string; // ??
  maker_ask_fee: string; // ??
  market: OrderMarketSchema; // 마켓에 대한 정보
  bid_account: AccountState; // 매수 시 사용하는 화폐의 계좌 상태
  ask_account: AccountState; // 매도 시 사용하는 화폐의 계좌 상태
}

export interface AccountState {
  currency: string; // 화폐를 의미하는 영문 대문자 코드
  balance: string; // 주문가능 금액/수량
  locked: string; // 주문 중 묶여있는 금액/수량
  avg_buy_price: string; // 매수평균가
  avg_buy_price_modified: boolean; // 매수평균가 수정 여부
  unit_currency: string; // 평단가 기준 화폐
}

export interface OrderMarketSchema {
  id: string; // 마켓의 유일한 키
  name: string; // 마켓 이름
  order_types: string[]; // 지원 주문 방식
  order_sides: string[]; // 지원 주문 동류
  bid: OrderConstraint; // 매수 시 제약사항
  ask: OrderConstraint; // 매도 시 제약사항
  max_total: string; // 최대 매도/매수 금액
  state: string; // 마켓 운영상태
}

export interface OrderConstraint {
  currency: string; // 화폐를 의미하는 영문 대문자 코드
  price_unit: string; // 주문금액 단위
  min_total: string; // 최소 매도/매수 금액
}
