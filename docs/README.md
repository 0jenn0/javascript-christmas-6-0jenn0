<div align="center">
  
![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=5&animation=twinkling&height=230&section=header&text=우아한테크코스%206기%20프리코스%204주차&desc=🎄%20크리스마스%20프로모션%20%20🎄&fontSize=35&fontAlign=50&fontAlignY=33&descSize=28&descAlign=50&descAlignY=55)

</div>

# 📋 목차

- [📋 목차](#-목차)
- [🎄 미션 소개](#-미션-소개)
  - [1) 간단한 설명](#1-간단한-설명)
  - [2) 결과물](#2-결과물)
- [📦 패키지 구조](#-패키지-구조)
  - [1) 디렉터리 구조](#1-디렉터리-구조)
  - [2) 클래스 책임](#2-클래스-책임)
- [✅ 기능 구현 목록](#-기능-구현-목록)
  - [1) 필수 구현 사항](#1-필수-구현-사항)
  - [2) 개인적으로 추가하는 사항](#2-개인적으로-추가하는-사항)
- [📊 테스트 결과](#-테스트-결과)

</br>
<br/>

# 🎄 미션 소개

## 1) 간단한 설명

- 🎄우테코 식당에서 진행하는 2023년 크리스마스 프로모션을 위한 이벤트 플래너입니다.
- 사용자는 이 플래너를 통해 12월 중 식당 방문 날짜와 주문할 메뉴를 입력합니다.
- 주문 메뉴, 할인 전 총주문 금액, 증정 메뉴, 혜택 내역, 총혜택 금액, 할인 후 예상 결제 금액, 12월 이벤트 배지 등을 확인할 수 있습니다.

</br>

## 2) 결과물

<details>
<summary><h3>2-1) 방문 날짜입력 받기</h3></summary>
<div markdown="1">
  
<br/>
<img width="640" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/9e232f14-9352-4504-b0a6-a6382869b5e0">

- 예외 사항 발생 시, 재입력을 받습니다.

</div>
</details>

<details>
<summary><h3>2-2) 메뉴 입력받기</h3></summary>
<div markdown="1">
<img width="652" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/61a67aa7-266e-4b0b-a4e9-7432d4d59136">

- 메뉴판 보여주기를 추가하여 편하게 주문 할 수 있게 했습니다.
- 메뉴 주문과 관련된 이벤트 주의사항을 추가했습니다.
- 예외 사항 발생 시, 재입력을 받습니다.

</div>
</details>

<details>
<summary><h3>2-3) 주문 메뉴 출력하기</h3></summary>
<div markdown="1">
<img width="660" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/615bf0ab-14b1-47bc-868c-d2c791d8708d">

- 에피타이저 -> 메인 -> 디저트 -> 음료 순으로 출력하게 했습니다.
- 각 카테고리별로 사전식 오름차순 정렬을 했습니다.
</div>
</details>

<details>
<summary><h3>2-4) 이벤트 적용된 내역들 보여주기</h3></summary>
<div markdown="1">
<img width="714" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/27fe0d4f-e62e-4bab-8f69-976492853354">

- 이벤트 목표 중 하나인 "12월 이벤트 참여 고객의 5%가 내년 1월 새해 이벤트에 재참여하는 것"을 달성하기 위해, 이와 관련된 안내 사항을 추가했습니다.

<br/>
<img width="588" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/6ebb4783-1cc8-4201-8ceb-da89be94df2f">

- 총 주문 금액이 10,000원 미만일 경우 총주문 금액과 관련된 이벤트 주의사항을 출력하게했습니다.
</div>
</details>

<details>
  <summary>
    <h3>2-5) 결과물 전체모습</h3>
  </summary>
  <div markdown="1">
      <details>
  <summary> 2-5-1) 이벤트 참여 가능한 경우</summary>
  <div markdown="1">
    
  <br/>
  <img width="691" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/729effa4-808b-4755-a215-1a252a55c1c2">
  
  </div>
  </details>
  
  <details>
  <summary>2-5-2) 이벤트 참여 불가능한 경우</summary>
  <div markdown="1">
    
  <br/>
  <img width="690" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/842cf26a-25e7-4c00-a7ad-fc37ac7352b5">
  
  </div>
  </details>
    </div>
</details>

<br/>
<br/>

# 📦 패키지 구조

## 1) 디렉터리 구조

```
📦src
 ┣ 📂constants
 ┃ ┣ 📜errorMessage.js
 ┃ ┣ 📜eventConstants.js
 ┃ ┣ 📜menuConstants.js
 ┃ ┣ 📜symbol.js
 ┃ ┗ 📜viewMessages.js
 ┣ 📂Controller
 ┃ ┣ 📜ChristmasPromotion.js
 ┃ ┣ 📜PromotionInputController.js
 ┃ ┗ 📜PromotionViewController.js
 ┣ 📂Error
 ┃ ┗ 📜AppError.js
 ┣ 📂Model
 ┃ ┣ 📂Events
 ┃ ┃ ┣ 📜BadgeEvent.js
 ┃ ┃ ┣ 📜DdayEvent.js
 ┃ ┃ ┣ 📜GiftMenuEvent.js
 ┃ ┃ ┣ 📜SpecialEvent.js
 ┃ ┃ ┗ 📜WeeklongEvent.js
 ┃ ┣ 📜Calendar.js
 ┃ ┣ 📜OrderItem.js
 ┃ ┗ 📜OrderItemInventory.js
 ┣ 📂Service
 ┃ ┗ 📜ChristmasPromotionManager.js
 ┣ 📂utils
 ┃ ┣ 📜deepFreeze.js
 ┃ ┣ 📜executeOrRetryAsync.js
 ┃ ┣ 📜formatAsWon.js
 ┃ ┗ 📜formatForMenuBoard.js
 ┣ 📂Validator
 ┃ ┣ 📜DayValidator.js
 ┃ ┗ 📜OrderItemValidator.js
 ┣ 📂View
 ┃ ┣ 📜InputView.js
 ┃ ┗ 📜OutputView.js
 ┗ 📜App.js

```

## 2) 클래스 책임

| 모듈                   | 클래스                                                            | 책임                                               |
| ---------------------- | ----------------------------------------------------------------- | -------------------------------------------------- |
| 🎮 Controller          | ChristmasPromotion                                                | 프로모션의 전반적인 실행 흐름 제어                 |
| 🎮 Controller          | PromotionSetupController                                          | 사용자 입력 수집 및 초기 설정 수행                 |
| 🎮 Controller          | PromotionResultController                                         | 프로모션 결과 출력 제어                            |
| 🗂️ Model               | Calendar                                                          | 날짜 관련 계산 및 검증 담당                        |
| 🗂️ Model               | OrderItem                                                         | 개별 주문 항목의 가격 계산 및 정보 제공            |
| 🗂️ Model               | OrderItemInventory                                                | 주문된 모든 항목의 관리 및 카테고리별 집계         |
| 🗂️ Model</br>┗🎁Events | DdayEvent</br> WeeklongEvent</br> SpecialEvent</br> BadgeEvent</br> GiftMenuEvent | 각각의 이벤트별 할인 로직 및 혜택 정보 제공        |
| ⚙️ Service             | ChristmasPromotionManager                                         | 주문 정보를 바탕으로 총 할인액 계산 및 이벤트 실행 |
| 🛠️ Utils               | executeOrRetryAsync</br> formatAsWon</br> formatForMenuBoard              | 공통 기능 제공 (예외 처리, 금액 형식 포맷팅 등)    |
| 🔍 Validator           | DayValidator</br> OrderItemValidator                                  | 입력 값 검증 및 예외 처리                          |
| 🖼️ View                | InputView                                                         | 사용자로부터의 입력 받기                           |
| 🖼️ View                | OutputView                                                        | 사용자에게 정보 출력                               |

|flow chart|
|------|
|<img src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/4e133323-ad81-4c5f-9348-68715c5634eb" width="700px"/>|


<br/>
<br/>

# ✅ 기능 구현 목록

## 1) 필수 구현 사항

- [x] "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다."인사 출력
- [x] 방문하는 날짜 입력 받기
  - [x] 1이상 31이하의 숫자만 입력 받기
  - [x] 예외) "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요." 라는 에러 메시지
- [x] 주문 메뉴와 개수 입력 받기
  - [x] ,를 기준으로 구분한다.
  - [x] {메뉴이름}-{개수} 형식으로 입력받기
  - [x] 메뉴판에 없는 메뉴 : "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지
  - [x] 메뉴 개수는 1이상 20이하만 가능.
  - [x] 예외) 메뉴 개수 20개 이상일때 : "[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다."
  - [x] 예외) 메뉴 개수가 1이상인 숫자가아닐 때 : "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지
  - [x] 예외) 메뉴 형식 : "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
  - [x] 예외) 중복 메뉴 : "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지
  - [x] 예외) 음료만 주문 불가 : "[ERROR] 음료만 주문 불가합니다."
- [x] "12월 {방문날자}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!" 출력

- [x] 주문 메뉴 출력하기

  - [x] "{메뉴이름} {개수}개" 형식으로 출력하기

- [x] 할인 전 총주문 금액 계산하기
- [x] 할인 전 총주문 출력하기

  - 총주문 금액 10,000원 이상부터 이벤트가 적용됨

- [x] 증정 메뉴 출력하기

  - [x] 할인 전 총주문 금액이 12만원 이상일 경우 샴페인 1개 증정
  - [x] 없을 경우 "없음" 출력한다.

- [x] 혜택 내역 출력하기

  - [x] 총주문 금액 10,000원 이상부터 이벤트가 적용됨
    - [x] 혜택 내역이 없을 경우 "없음"을 출력한다.
  - [x] 크리스마스 디데이 할인 계산하고 출력하기
    - [x] 이 이벤트만 12월 1일부터 25일까지만 시행한다.
    - [x] 1,000원으로 시작하여 크리스마스가 다가올수록 날마다 할인 금액이 100원씩 증가
  - [x] 평일/주말 둘 중에 1개 할인 계산하고 출력하기
    - [x] 일요일~목요일은 평일 할인 출력한다.
      - [x] 디저트 메뉴 1개당 2,023원 할인한다.
    - [x] 금,토는 주말 할인을 계산하고 출력한다.
      - [x] 메인 메뉴를 메뉴 1개당 2,023원 할인한다.
  - [x] 특별 할인을 계산하고 출력한다.
    - [x] 12월의 모든 일요일과 크리스마스날은 총가격에서 1,000원 할인한다.
  - [x] 증정 이벤트 출력하기
    - [x] 증정 이벤트 할인 금액 계산하기

- [x] 총혜택 금액 출력하기
  - [x] 혜택 내역의 합산을 계산한다.
  - [x] 혜택 내역의 합산을 출력한다.
  - [x] 혜택 내역이 없을 경우 "0원"을 출력한다.
- [x] 할인 후 예상 결제 금액 출력하기 (할인 전 총주문 금액 - 총할인 금액)
- [x] 12월 이벤트 배지 출력하기
  - [x] 5천 원 이상: 별
  - [x] 1만 원 이상: 트리
  - [x] 2만 원 이상: 산타

* 공통 사항

  - [x] 모든 금액은 천단위 포맷팅 + "{금액}원"형식으로 출력한다.
  - [x] 모든 에러 메시지는 "[ERROR]"로 시작한다.

## 2) 개인적으로 추가하는 사항

- [x] 고객에게 안내할 이벤트 주의 사항

  - [x] 총주문금액이 10,000원 미만일시 "총주문 금액 10,000원 이상부터 이벤트가 적용됩니다." 안내문 출력
  - [x] 주문 입력 받을 때 메시지에 아래 사항 추가한다.
    - 음료만 주문 시, 주문할 수 없습니다.
    - 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.

- [x] 주문 입력 받을 때 메시지에 메뉴판 추가한다.

- [x] 뱃지 출력후 안내사항 추가하기

  - [x] "(배지에 따라 2024 새해 이벤트 참여 시, 각각 다른 새해 선물을 증정할 예정입니다.)"

  - [x] 주문 메뉴 출력을 애피타이저 -> 메인-> 디저트-> 음료 순으로, ㄱㄴㄷ순으로 한다.

</br>
<br/>

# 📊 테스트 결과

<details>
<summary><h2>1) Model</h2></summary>
<div markdown="1">
<table>
  <tr>
    <td colspan="3">OrderItem Test</td>
  </tr>
  <tr>
    <td colspan="3">
 <img width="547" alt="Badge Event" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/22b16577-f7b0-40df-878e-86ceb063c866">
    </td>
  </tr>

  <tr>
    <td colspan="3">OrderItemInventory Test</td>
  </tr>
  <tr>
    <td colspan="3">
  <img width="648" alt="Dday Event" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/c87c2f68-3105-49cb-a39c-4a45f8cd637e">
    </td>
  </tr>

  <tr>
    <td colspan="3">Calendar Test</td>
  </tr>
  <tr>
    <td colspan="3">
  <img width="542" alt="GiftMenu Event" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/a9025b72-f5e7-40f4-a2d3-bac3c1e8617b">
    </td>
  </tr>
</table>
</div>
</details>

<details>
<summary><h2>2) Model/Events</h2></summary>
<div markdown="1">
<table>

  <tr>
    <td colspan="3">Badge Event Test</td>
  </tr>
  <tr>
    <td colspan="3">
      <img width="554" alt="Badge Event" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/367e9ef3-7cbc-467e-979b-d9132d428675">
    </td>
  </tr>
  <tr>
    <td colspan="3">Dday Event Test</td>
  </tr>
  <tr>
    <td colspan="3">
      <img width="560" alt="Dday Event" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/958af9d6-13dd-4709-ab38-aa459b2abaff">
    </td>
  </tr>
  <tr>
    <td colspan="3">GiftMenu Event Test</td>
  </tr>
  <tr>
    <td colspan="3">
      <img width="576" alt="GiftMenu Event" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/eb196fe8-3a05-431e-acd6-202936ea4dcd">
    </td>
  </tr>
  <tr>
    <td colspan="3">Special Event Test</td>
  </tr>
  <tr>
    <td colspan="3">
      <img width="543" alt="Special Event" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/8d686a0e-8a62-4ccc-8af8-ea56bc435951">
    </td>
  </tr>
  <tr>
    <td colspan="3">Weeklong Event Test</td>
  </tr>
  <tr>
    <td colspan="3">
      <img width="548" alt="Weeklong Event" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/90e6bb0b-2b7b-465a-aacd-e87883bf8006">
    </td>
  </tr>
</table>
</div>
</details>

<details>
<summary><h2>3) Validator</h2></summary>
<div markdown="1">
<table>
  <tr>
    <td colspan="3">OrderItemValidator Test</td>
  </tr>
  <tr>
    <td colspan="3">
<img width="595" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/35a0f870-73d1-4406-912f-cb83d440c806">
    </td>
  </tr>
  <tr>
    <td colspan="3">DayValidator Test</td>
  </tr>
  <tr>
    <td colspan="3">
    <img width="552" alt="image" src="https://github.com/0jenn0/javascript-christmas-6-0jenn0/assets/130737187/a62b6269-76f6-4129-971a-036ca9487897">
    </td>
  </tr>
</table>
</div>
</details>
