export type Warning = `NONE` | `CAUTION`;

export interface MarketSchema {
  market: string; // 업비트에서 제공중인 시장 정보
  korean_name: string; // 거래 대상 암호화폐 한글명
  english_name: string; // 거래 대상 암호화폐 영문명
  market_warning?: Warning; // 유의 종목 여부
}
