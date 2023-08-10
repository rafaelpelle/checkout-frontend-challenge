# checkout-frontend-challenge

## Live at:
[https://checkout-challenge.rafaelpelle.tech/](https://checkout-challenge.rafaelpelle.tech/)

<br>

## Descrição do desafio e requisitos técnicos

Click [aqui](challenge.md) para abrir.

<br>

## Requisitos para rodar o projeto:

```
Node.js versão 14 ou mais recente
NPM versão 5.2 ou mais recente
```

<br>

## Instruções para rodar o projeto:



### Instalar as dependências

```
npm install
```

<br>

### Iniciar o projeto no modo de desenvolvimento.

```
npm run start
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar no seu browser.

<br>

### Preparar o bundle de produção:

```
npm run build
```

<br>

### Executar os testes E2E:

```
npm run cypress
```

Lembre-se que o cypress está configurado para acessar o ambiente [http://localhost:3000](http://localhost:3000), então o projeto deve estar rodando antes de executar o comando de testes.

<br><br>

# Explicando algumas decisões:

### React + Redux
Talvez fosse mais rápido e menos verboso usar Next.js e React Query, mas escolhi implementar com React e Redux, pois foi comentado na entrevista que a vaga era para trabalhar em um projeto com essa stack. As sagas também são verbosas, mas traz para o projeto um padrão que ajuda muito no debug.

### JavaScript vs TypeScript
Acredito que o TypeScript traga muita qualidade para o projeto, além de deixar a vida dos devs mais fácil em muitas situações. Porém, é comum que ocorram problemas de compatibilidade entre libs e na tipagem de funções importadas dessas libs. Eu decidi pelo JavaScript puro para não ter o risco de atrasar a entrega.

### react-hook-form vs Formik
Atualmente o react-hook-form é mais popular que o Formik (downloads semanais no npm) e mais leve. Outro ponto positivo é que o react-hook-form não tem nenhuma dependência, já o Formik tem 7. E a principal vantagem: o react-hook-forms provoca menos rerenders na tela.

### Cobertura de testes
Testes de unidade e integração com o Jest + RTL são importantes para garantir que, quando vamos reusar componentes em diversos lugares de uma aplicação, eles vão se comportar como o esperado. Porém, leva mais tempo para escrever uma quantidade de testes a ponto de cobrir a aplicação de forma significativa. Preferi utilizar o cypress para realizar testes E2E, pelo tempo de implementação e para demonstrar conhecimento nessa ferramenta, que eu acho menos comum que o Jest.

### Fidelidade com o Layout
"Fidelidade com o layout proposto e atenção a detalhes (pixel perfect)" era um dos quesitos avaliados. No figma, temos alguns espaçamentos com "magic numbers" e algumas inconsistências, por exemplo os botões "primários" não são iguais nas duas telas (font-weight 400 e 700). Eu implementei esses "magic numbers" e inconsistências, para manter a fidelidade com o layout proposto.

### Inconsistência dos dados na tela de sucesso
O endpoint `/subscription` da API sempre responde os mesmos dados, independente dos dados que foram enviados no request. Logo, quando digitamos no formulário de pagamento nosso nome, CPF e parcelamento, esses dados vão ser enviados corretamente no request. Porém o response vai trazer outros dados, e na tela de sucesso vai mostrar sempre o nome, o CPF e o parcelamento fixo da API.
