# Pruebas: Calculadora simple

| # | Llamada | Resultado esperado | Resultado obtenido |
|---|---------|--------------------|--------------------|
| 1 | calcular(3, 4, "*") | 12 | 12 |
| 2 | calcular(3, 0, "/") | null | null |
| 3 | calcular(6, 3, "%") | 0 | 0 |
| 4 | calcular(10, 4, "-") | 6 | 6 |
| 5 | calcular(5, 2, "x") | null | null |

## Nota
El enunciado dice que calcular(6, 3, "%") devuelve 1, pero 6 entre 3
tiene residuo 0, así que el resultado correcto es 0.
