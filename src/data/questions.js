const questions = [
  {
    id: 0,
    question: "당신의 피부 톤은 어떤가요?",
    answers: [
      { text: "맑고 밝은 편", type: "spring" },
      { text: "노란기 도는 건강한 편", type: "autumn" },
      { text: "핑크빛이 도는 밝은 편", type: "summer" },
      { text: "붉거나 흰 편", type: "winter" },
    ],
  },
  {
    id: 1,
    question: "햇빛에 오래 노출되면 피부가 어떻게 변하나요?",
    answers: [
      { text: "쉽게 타지 않고 붉어진다", type: "summer" },
      { text: "금방 갈색으로 변한다", type: "autumn" },
      { text: "노란빛으로 그을린다", type: "spring" },
      { text: "붉게 달아오르거나 하얗게 유지된다", type: "winter" },
    ],
  },
  {
    id: 2,
    question: "손목의 혈관 색은 어떤가요?",
    answers: [
      { text: "푸른빛이 강하다", type: "summer" },
      { text: "초록빛이 강하다", type: "autumn" },
      { text: "푸른빛과 초록빛이 섞여 있다", type: "spring" },
      { text: "푸른빛이지만 피부가 매우 밝다", type: "winter" },
    ],
  },
  {
    id: 3,
    question: "흰색 옷을 입었을 때 얼굴이 어떻게 보이나요?",
    answers: [
      { text: "생기 있어 보인다", type: "spring" },
      { text: "피부가 더 하얘 보인다", type: "winter" },
      { text: "피부가 칙칙해 보인다", type: "autumn" },
      { text: "얼굴이 창백해 보인다", type: "summer" },
    ],
  },
  {
    id: 4,
    question: "가장 잘 어울리는 액세서리 색상은?",
    answers: [
      { text: "골드", type: "spring" },
      { text: "로즈골드", type: "autumn" },
      { text: "실버", type: "summer" },
      { text: "화이트골드/플래티넘", type: "winter" },
    ],
  },
  {
    id: 5,
    question: "입술 색은 어떤가요?",
    answers: [
      { text: "맑은 코랄/피치", type: "spring" },
      { text: "짙은 오렌지/브라운", type: "autumn" },
      { text: "핑크/로즈", type: "summer" },
      { text: "선명한 레드/버건디", type: "winter" },
    ],
  },
  {
    id: 6,
    question: "머리카락의 자연색은?",
    answers: [
      { text: "밝은 갈색, 노란빛", type: "spring" },
      { text: "짙은 갈색, 붉은빛", type: "autumn" },
      { text: "회갈색, 애쉬빛", type: "summer" },
      { text: "매우 검정, 푸른빛", type: "winter" },
    ],
  },
  {
    id: 7,
    question: "어울리는 립스틱 컬러는?",
    answers: [
      { text: "코랄, 피치, 오렌지", type: "spring" },
      { text: "브라운, 벽돌, 카멜", type: "autumn" },
      { text: "로즈, 핑크, 라벤더", type: "summer" },
      { text: "버건디, 푸시아, 레드", type: "winter" },
    ],
  },
  {
    id: 8,
    question: "가장 잘 어울리는 네일 컬러는?",
    answers: [
      { text: "살구, 연노랑, 민트", type: "spring" },
      { text: "카키, 브라운, 올리브", type: "autumn" },
      { text: "라벤더, 베이비핑크, 스카이블루", type: "summer" },
      { text: "네이비, 블랙, 푸시아", type: "winter" },
    ],
  },
  {
    id: 9,
    question: "가장 잘 어울리는 옷 색상은?",
    answers: [
      { text: "밝은 옐로우, 라이트 그린", type: "spring" },
      { text: "머스타드, 카멜, 카키", type: "autumn" },
      { text: "라벤더, 베이비블루, 연보라", type: "summer" },
      { text: "블랙, 화이트, 쨍한 블루", type: "winter" },
    ],
  },
  {
    id: 10,
    question: "눈동자 색은 어떤가요?",
    answers: [
      { text: "밝은 갈색, 노란빛", type: "spring" },
      { text: "짙은 갈색, 붉은빛", type: "autumn" },
      { text: "회갈색, 애쉬빛", type: "summer" },
      { text: "매우 검정, 푸른빛", type: "winter" },
    ],
  },
  {
    id: 11,
    question: "피부에 가장 잘 어울리는 블러셔 컬러는?",
    answers: [
      { text: "살구, 피치, 라이트 코랄", type: "spring" },
      { text: "브라운, 오렌지, 테라코타", type: "autumn" },
      { text: "로즈, 핑크, 라벤더", type: "summer" },
      { text: "버건디, 쿨핑크, 플럼", type: "winter" },
    ],
  },
  {
    id: 12,
    question: "가장 잘 어울리는 메이크업 스타일은?",
    answers: [
      { text: "맑고 투명한 메이크업", type: "spring" },
      { text: "음영감 있는 내추럴 메이크업", type: "autumn" },
      { text: "은은하고 부드러운 메이크업", type: "summer" },
      { text: "선명하고 또렷한 메이크업", type: "winter" },
    ],
  },
  {
    id: 13,
    question: "가장 잘 어울리는 헤어 컬러는?",
    answers: [
      { text: "라이트 브라운, 골드", type: "spring" },
      { text: "다크 브라운, 카키브라운", type: "autumn" },
      { text: "애쉬 브라운, 라벤더", type: "summer" },
      { text: "블루블랙, 버건디", type: "winter" },
    ],
  },
  {
    id: 14,
    question: "가장 잘 어울리는 쥬얼리 스타일은?",
    answers: [
      { text: "심플하고 가벼운 스타일", type: "spring" },
      { text: "빈티지, 클래식 스타일", type: "autumn" },
      { text: "로맨틱, 러블리 스타일", type: "summer" },
      { text: "모던, 시크 스타일", type: "winter" },
    ],
  },
  // 15~39: 새로운 질문 25개 추가
  {
    id: 15,
    question: "아침에 일어났을 때 피부 상태는?",
    answers: [
      { text: "맑고 투명하다", type: "spring" },
      { text: "붉은기가 돈다", type: "winter" },
      { text: "노란기가 돈다", type: "autumn" },
      { text: "창백하거나 핑크빛이다", type: "summer" },
    ],
  },
  {
    id: 16,
    question: "가장 잘 어울리는 선글라스 프레임 색상은?",
    answers: [
      { text: "밝은 베이지, 투명", type: "spring" },
      { text: "딥 브라운, 카키", type: "autumn" },
      { text: "로즈골드, 라벤더", type: "summer" },
      { text: "블랙, 실버", type: "winter" },
    ],
  },
  {
    id: 17,
    question: "가장 잘 어울리는 신발 색상은?",
    answers: [
      { text: "연베이지, 라이트 옐로우", type: "spring" },
      { text: "브라운, 카멜", type: "autumn" },
      { text: "라이트 그레이, 라벤더", type: "summer" },
      { text: "블랙, 화이트", type: "winter" },
    ],
  },
  {
    id: 18,
    question: "가장 잘 어울리는 가방 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 다크 그린", type: "autumn" },
      { text: "라벤더, 베이비블루", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 19,
    question: "가장 잘 어울리는 스카프/머플러 색상은?",
    answers: [
      { text: "라이트 오렌지, 옐로우", type: "spring" },
      { text: "브라운, 카키", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블루, 그레이", type: "winter" },
    ],
  },
  {
    id: 20,
    question: "가장 잘 어울리는 운동복 색상은?",
    answers: [
      { text: "라이트 그린, 민트", type: "spring" },
      { text: "카키, 브라운", type: "autumn" },
      { text: "라벤더, 연보라", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 21,
    question: "가장 잘 어울리는 모자 색상은?",
    answers: [
      { text: "연노랑, 라이트 베이지", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 화이트", type: "winter" },
    ],
  },
  {
    id: 22,
    question: "가장 잘 어울리는 양말 색상은?",
    answers: [
      { text: "연베이지, 라이트 옐로우", type: "spring" },
      { text: "브라운, 카키", type: "autumn" },
      { text: "라이트 그레이, 라벤더", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 23,
    question: "가장 잘 어울리는 패턴은?",
    answers: [
      { text: "플로럴, 도트", type: "spring" },
      { text: "체크, 아가일", type: "autumn" },
      { text: "스트라이프, 파스텔 패턴", type: "summer" },
      { text: "지브라, 레오파드", type: "winter" },
    ],
  },
  {
    id: 24,
    question: "가장 잘 어울리는 니트 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 25,
    question: "가장 잘 어울리는 셔츠/블라우스 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 26,
    question: "가장 잘 어울리는 아우터 색상은?",
    answers: [
      { text: "라이트 베이지, 옐로우", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연보라", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 27,
    question: "가장 잘 어울리는 팬츠 색상은?",
    answers: [
      { text: "라이트 베이지, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연보라", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 28,
    question: "가장 잘 어울리는 원피스 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 29,
    question: "가장 잘 어울리는 운동화 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연보라", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 30,
    question: "가장 잘 어울리는 슬랙스 색상은?",
    answers: [
      { text: "라이트 베이지, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연보라", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 31,
    question: "가장 잘 어울리는 스커트 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 32,
    question: "가장 잘 어울리는 재킷 색상은?",
    answers: [
      { text: "라이트 베이지, 옐로우", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연보라", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 33,
    question: "가장 잘 어울리는 후드/맨투맨 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 34,
    question: "가장 잘 어울리는 티셔츠 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 35,
    question: "가장 잘 어울리는 니트/스웨터 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 36,
    question: "가장 잘 어울리는 점퍼/코트 색상은?",
    answers: [
      { text: "라이트 베이지, 옐로우", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연보라", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 37,
    question: "가장 잘 어울리는 트레이닝복 색상은?",
    answers: [
      { text: "라이트 그린, 민트", type: "spring" },
      { text: "카키, 브라운", type: "autumn" },
      { text: "라벤더, 연보라", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 38,
    question: "가장 잘 어울리는 파우치/지갑 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
  {
    id: 39,
    question: "가장 잘 어울리는 스마트폰 케이스 색상은?",
    answers: [
      { text: "라이트 옐로우, 민트", type: "spring" },
      { text: "카멜, 브라운", type: "autumn" },
      { text: "라벤더, 연핑크", type: "summer" },
      { text: "블랙, 네이비", type: "winter" },
    ],
  },
];

export default questions;
