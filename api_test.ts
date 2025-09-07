import { assertEquals } from "https://deno.land/std@0.224.0/testing/asserts.ts";

Deno.test("API fake devuelve objeto", async () => {
  const fakeFetch = async () =>
    Promise.resolve({ ok: true, json: () => ({ id: 1, nombre: "Flash" }) });

  const res = await fakeFetch();
  const data = res.json();

  assertEquals(res.ok, true);
  assertEquals(data.id, 1);
  assertEquals(data.nombre, "Flash");
});
