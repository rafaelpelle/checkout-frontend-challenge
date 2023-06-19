# checkout-frontend-challenge

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
Talvez fosse mais rápido e menos verboso usar Next.js e React Query, mas escolhi implementar com React e Redux, pois foi comentado na entrevista que a vaga era para trabalhar em um projeto com essa stack.

### JavaScript vs TypeScript
Acredito que o TypeScript traga muita qualidade para o projeto, além de deixar a vida dos devs mais fácil em muitas situações. Porém, é comum que ocorram problemas de compatibilidade entre libs e na tipagem de funções importadas dessas libs. Eu decidi pelo JavaScript puro para não ter o risco de atrasar a entrega.

### react-hook-form vs Formik
Atualmente o react-hook-form é mais popular que o Formik (downloads semanais no npm) e mais leve. Outro ponto positivo é que o react-hook-form não tem nenhuma dependência, já o Formik tem 7. E a principal vantagem: o react-hook-forms provoca menos rerenders na tela.

### Cobertura de testes
Testes de unidade e integração com o Jest + RTL são importantes para garantir que, quando vamos reusar componentes em diversos lugares de uma aplicação, eles vão se comportar como o esperado. Porém, leva mais tempo para escrever uma quantidade de testes a ponto de cobrir a aplicação de forma significativa. Preferi utilizar o cypress para realizar testes E2E, pelo tempo de implementação e para demonstrar conhecimento nessa ferramenta, que eu acho menos comum que o Jest.
