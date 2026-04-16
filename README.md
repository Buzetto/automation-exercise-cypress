# 🤖 Cypress E2E Automation - Automation Exercise

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Este repositório contém a automação completa de testes End-to-End (E2E) para a plataforma de e-commerce [Automation Exercise](https://automationexercise.com/). 

O objetivo principal deste projeto é demonstrar a aplicação de boas práticas de Quality Assurance (QA) em um ambiente realista, cobrindo 100% dos 26 casos de teste propostos pelo sistema, incluindo fluxos críticos de negócio como cadastro, checkout, manipulação de arquivos e validações dinâmicas.

## 🎯 Destaques e Arquitetura do Projeto

Este projeto foi construído pensando em escalabilidade e segurança de nível empresarial:

* **Cobertura Completa:** Todos os 26 Test Cases mapeados e automatizados com sucesso.
* **Arquitetura Segura (Segregação de Dados):**
    * **Fixtures (`cypress/fixtures/`):** Massa de dados não sensível (nomes e endereços fictícios) mapeada publicamente para facilitar o entendimento do fluxo de teste.
    * **Environment Variables (`cypress.env.json`):** Dados sensíveis (senhas do sistema) isolados e protegidos via `.gitignore`, garantindo segurança na integração com pipelines de CI/CD (ex: GitHub Actions).
* **Manipulação de Arquivos:** Automação avançada para interceptar e validar arquivos baixados pelo navegador (`cy.readFile`), bem como o envio nativo de anexos (`.selectFile`).

## 📁 Estrutura de Diretórios

```text
cypress/
  ├── e2e/               # Scripts de teste divididos por módulos (Login, Carrinho, etc.)
  ├── fixtures/          # Massa de dados pública (test-data.json)
  ├── support/           # Comandos customizados (commands.js) e configurações globais
cypress.config.js        # Configurações raiz do framework
.gitignore               # Regras de segurança e exclusão de rastreio
```

## 🚀 Como clonar e executar o projeto localmente

**Pré-requisitos**
Node.js instalado em sua máquina.
Git instalado.

**Passo 1: Clonar o repositório**
```Bash
git clone [https://github.com/Buzetto/automation-exercise-cypress.git](https://github.com/Buzetto/automation-exercise-cypress.git)
cd automation-exercise-cypress
```

**Passo 2: Instalar as dependências**
```Bash
npm install
```

**Passo 3: Configurar as Variáveis de Ambiente (Segurança)**
Por motivos de segurança e boas práticas, o arquivo contendo a senha do sistema não é versionado no GitHub. Para rodar os testes localmente, crie um arquivo chamado cypress.env.json na raiz do projeto contendo a seguinte estrutura:
```JSON
{
  "SENHA_SISTEMA": "InsiraASenhaAqui"
}
```

**Passo 4: Executar os testes**
Para abrir a interface gráfica nativa do Cypress e acompanhar os testes visualmente:
```Bash
npx cypress open
```

Para rodar todos os testes em modo "Headless" (em segundo plano, padrão utilizado em esteiras de CI/CD):
```Bash
npx cypress run
```

👨‍💻 Autor
Victor Augusto Buzetto Analista de Suporte Técnico em transição para Quality Assurance (QA)

💼 LinkedIn: [[Seu link do LinkedIn aqui](https://www.linkedin.com/in/victoraugustobuzetto/)]
