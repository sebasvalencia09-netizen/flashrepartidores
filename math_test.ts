import { assertEquals } from "https://deno.land/std@0.224.0/testing/asserts.ts";

Deno.test("suma básica", () => {
  assertEquals(1 + 1, 2);
});

Deno.test("operaciones matemáticas", () => {
  assertEquals(2 * 3, 6);
  assertEquals(10 / 2, 5);
});
