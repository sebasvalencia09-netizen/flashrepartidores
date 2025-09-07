import { assertEquals, assertThrows } from "https://deno.land/std@0.224.0/testing/asserts.ts";

function saludo(nombre: string) {
  if (!nombre) throw new Error("Nombre requerido");
  return `Hola, ${nombre}!`;
}

Deno.test("función saludo válida", () => {
  assertEquals(saludo("Sebas"), "Hola, Sebas!");
});

Deno.test("función saludo con error", () => {
  assertThrows(() => saludo(""), Error, "Nombre requerido");
});
