#### Exercício 2: Para todos os testes desenvolvidos anteriormente, responda e justifique.
1. Os testes desenvolvidos são manuais ou automatizados?
> **Automatizados.** Após o desenvolvimento e a exportação dos arquivos de integração com o Newman, os testes podem ser executados programaticamente.
2. Alguns dos testes desenvolvidos são testes Fim-a-Fim (End-To-End)?
> Neste caso, **não**. Apesar dos testes interagirem com o endpoint do sistema, sendo ele uma API-as-a-Service, é impossível verificar se as requisições foram propriamente tratadas, sincronizadas com bancos de dados ou se os dados são fundamentalmente verídicos.
3. O que se deve fazer para que os testes desenvolvidos funcionem em modo regressão?
> **Executar os testes continuamente**. Caso algum teste que anteriormente retornava sucesso passe a falhar, assume-se que alguma funcionalidade da API sofreu regressão.