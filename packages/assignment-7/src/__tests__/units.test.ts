import { describe, expect, test } from "vitest";
import { getDaysInMonth } from "../utils/getDatysInMonth";

describe("단위 테스트: 날짜 및 시간 관리", () => {
  describe("getDaysInMonth 함수", () => {
    test("일반적인 달의 일수를 정확히 반환한다", () => {
      expect(getDaysInMonth(2023, 3)).toBe(30);
      expect(getDaysInMonth(2023, 6)).toBe(31);
    });

    test("연도가 변경되어도 정확히 작동한다", () => {
      expect(getDaysInMonth(2000, 1)).toBe(29);
      expect(getDaysInMonth(2100, 1)).toBe(28);
    });

    test("반환값의 타입이 number인지 확인한다", () => {
      const months = Array.from({ length: 12 }, (_, index) => index);

      months.forEach((month) => {
        expect(typeof getDaysInMonth(2023, month)).toBe("number");
      });
    });

    test("모든 월의 일수가 0보다 큰지 확인한다", () => {
      const months = Array.from({ length: 12 }, (_, index) => index);

      months.forEach((month) => {
        expect(getDaysInMonth(2023, month)).toBeGreaterThan(0);
      });
    });

    test("모든 월의 일수가 32보다 작은지 확인한다", () => {
      const months = Array.from({ length: 12 }, (_, index) => index);

      months.forEach((month) => {
        expect(getDaysInMonth(2023, month)).toBeLessThan(32);
      });
    });
  });

  describe("getWeekDates 함수", () => {
    test.fails("주어진 날짜가 속한 주의 모든 날짜를 반환한다");
    test.fails("연도를 넘어가는 주의 날짜를 정확히 처리한다");
  });

  describe("formatWeek 함수", () => {
    test.fails("주어진 날짜의 주 정보를 올바른 형식으로 반환한다");
  });

  describe("formatMonth 함수", () => {
    test.fails("주어진 날짜의 월 정보를 올바른 형식으로 반환한다");
  });

  describe("isDateInRange 함수", () => {
    test.fails("주어진 날짜가 특정 범위 내에 있는지 정확히 판단한다");
  });
});
