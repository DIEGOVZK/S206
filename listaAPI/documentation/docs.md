## Execução dos testes

Para executar os testes usando o Newman,  
você pode usar o seguinte comando:

```sh
npm i
```
Seguido por:  

```sh
npm run newman:htmlextra
```

Os report dos últimos testes executados estão em [./newman/report.html](../newman/report.html).

## Testes de API para https://open-meteo.com/

### Casos Positivos 🟩
### Format / historical temperature variation
1. Verifica-se se o status code é 200.
2. Verifica-se se o tempo de geração da resposta é inferior a 100us para 10 dias de dados.
3. Verifica-se se o esquema da resposta é válido para os 10 dias de dados com os parâmetros fornecidos.
4. Verifica-se se o array de datas inicia e termina corretamente.

### Format / rain forecast
1. Verifica-se se o status code é 200.
2. Verifica-se se o tempo de geração da resposta é inferior a 80us para 7 dias de dados.
3. Verifica-se se o array de datas inicia e termina corretamente para 7 dias de dados no futuro.
4. Verifica-se se a faixa de probabilidade de precipitação está entre 0 e 100%.

### Format / snow formation in location
1. Verifica-se se o status code é 200.
2. Verifica-se se o tempo de geração da resposta é inferior a 50us para 1 dia de dados.
3. Verifica-se se todos os valores de queda de neve e profundidade de neve são zeros.

### Casos Negativos 🟥
### Error / invalid location
1. Verifica-se se o status code é 400.
2. Verifica-se se a mensagem de erro informa sobre latitude inválida.

### Error / future date beyond limit
1. Verifica-se se o status code é 400.
2. Verifica-se se a mensagem de erro informa sobre dias de previsão inválidos, dado mais de 16 dias.