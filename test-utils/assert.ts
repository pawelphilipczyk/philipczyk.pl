import { expect } from "vitest";

/**
 * TDD-style assert helper compatible with ESM
 * Follows the assert API from tdd.mdc: { given, should, actual, expected }
 */
export function assert({
  given,
  should,
  actual,
  expected,
}: {
  given: string;
  should: string;
  actual: any;
  expected: any;
}) {
  const message = `Given ${given}, should ${should}`;
  expect(actual, message).toBe(expected);
}
