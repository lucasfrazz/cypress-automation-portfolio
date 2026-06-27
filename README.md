# Automação de Testes E2E com Cypress

![Cypress Tests](https://github.com/LucasFrazaoCrespo/cypress-automation-portfolio/actions/workflows/cypress.yml/badge.svg)

Projeto de testes automatizados end-to-end desenvolvido para portfólio de QA, utilizando [Cypress](https://www.cypress.io/) com o site de prática [Sauce Demo](https://www.saucedemo.com).

## Tecnologias

- **Cypress 13** — framework de automação E2E moderno, rápido e confiável
- **JavaScript** — linguagem dos testes
- **GitHub Actions** — CI/CD rodando os testes automaticamente a cada push

## Cobertura de Testes

### Login (`login.cy.js`)
| Cenário | Tipo |
|---|---|
| Login com credenciais válidas | Positivo |
| Erro com senha incorreta | Negativo |
| Erro com campos em branco | Negativo |
| Bloqueio de usuário travado (locked_out_user) | Negativo |

### Produtos (`produtos.cy.js`)
| Cenário | Tipo |
|---|---|
| Listagem de produtos após login | Positivo |
| Ordenação por preço (menor → maior) | Positivo |
| Abertura de página de detalhes | Positivo |
| Logout | Positivo |

### Carrinho (`carrinho.cy.js`)
| Cenário | Tipo |
|---|---|
| Adicionar produto ao carrinho | Positivo |
| Adicionar múltiplos produtos | Positivo |
| Remover produto do carrinho | Positivo |
| Fluxo completo de checkout | Positivo |

**Total: 12 cenários automatizados**

## Como Executar

### Pré-requisitos
- Node.js 18+ instalado

### Instalação

```bash
git clone https://github.com/LucasFrazaoCrespo/cypress-automation-portfolio.git
cd cypress-automation-portfolio
npm install
```

### Execução

```bash
# Rodar todos os testes no terminal (headless)
npm test

# Abrir interface visual do Cypress
npm run test:open
```

## Estrutura do Projeto

```
cypress-automation-portfolio/
├── .github/
│   └── workflows/
│       └── cypress.yml       # Pipeline de CI com GitHub Actions
├── cypress/
│   └── e2e/
│       ├── login.cy.js       # Testes de autenticação
│       ├── produtos.cy.js    # Testes de listagem e navegação
│       └── carrinho.cy.js    # Testes de carrinho e checkout
├── cypress.config.js
├── package.json
└── README.md
```

## CI/CD — GitHub Actions

Os testes rodam automaticamente a cada `push` ou `pull request` para `main`. O workflow:

1. Faz checkout do código
2. Instala dependências com `npm ci`
3. Executa os testes no Chrome (headless)
4. Em caso de falha, salva screenshots como artefatos

## Boas Práticas Aplicadas

- Seletores via `data-test` (resistentes a mudanças de CSS/classes)
- `beforeEach` para configuração de estado inicial isolado por suíte
- Cenários positivos e negativos (happy path + edge cases)
- Testes independentes entre si — sem dependência de ordem
- Pipeline de CI garantindo que nenhum commit quebre os testes

## Autor

**Lucas Frazão Crespo**
- GitHub: [@LucasFrazaoCrespo](https://github.com/LucasFrazaoCrespo)
- Email: lucas.isj@gmail.com
