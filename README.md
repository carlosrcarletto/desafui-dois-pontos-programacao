# Desafio de Testes Unitários e CI/CD com GitHub Actions

Este repositório contém uma solução completa para validação de fluxos de login com testes unitários nativos do Node.js, integrada com uma estratégia de automação em CI/CD utilizando três pipelines distintas no GitHub Actions.

---

## 🚀 Conceitos e Tecnologias Utilizadas

### 1. Ambiente e Testes
* **Node.js (v24):** Utilizado como ambiente de execução principal.
* **Node.js Test Runner Nativo (`node:test`):** Para manter o projeto leve e veloz, a solução utiliza o executor de testes nativo do Node.js. Isso elimina a necessidade de instalar frameworks de teste pesados (como Jest ou Mocha), reduzindo o tempo de inicialização tanto local quanto na pipeline.
* **Assert Nativo (`node:assert`):** Biblioteca padrão de asserções do Node.js para validação dos resultados esperados nos testes.

### 2. CI/CD (GitHub Actions)
Foram criadas três pipelines independentes sob a pasta `.github/workflows/` para atender a diferentes necessidades de execução de testes unitários:

#### 📊 1. Execução Manual com Relatórios (`01-manual-exec.yaml`)
Disparada manualmente através do botão **"Run workflow"** na aba Actions do GitHub.
* **Geração de Relatórios JUnit:** Os testes são executados exportando um arquivo XML estruturado (`report.xml`).
* **Armazenamento de Artefatos:** O relatório XML é guardado nos artefatos da execução (`actions/upload-artifact@v4`).
* **Aba de Relatório Interativo:** A pipeline renderiza uma aba interativa contendo o status de cada teste individual (verdes/vermelhos, tempos e logs de falha) utilizando a action `dorny/test-reporter`.
* **Resumo de Execução (Job Summary):** Uma tabela com a contagem de testes que passaram ou falharam é gerada no dashboard principal da execução usando `test-summary/action`.

#### ⏱️ 2. Execução Agendada (`02-scheduled-exec.yaml`)
Configurada para executar testes automaticamente em períodos definidos.
* **Gatilho:** Configurada com um agendador Cron (`schedule`) para rodar **a cada 5 minutos** (`*/5 * * * *`).
* **Garantia de Integridade:** Útil para monitorar a saúde do repositório de forma contínua e periódica.
* **Feedback Imediato:** Contém a mesma configuração robusta de relatórios visuais e interativos da pipeline manual para garantir que nenhuma alteração nova quebre os testes existentes.


#### 🔄 3. Execução Pós-Deploy / Contínua (`03-post-deploy-exec.yaml`)
Disparada de forma automatizada e contínua.
* **Gatilho:** Executada a cada `push` realizado em qualquer branch do repositório.
* **Feedback Imediato:** Contém a mesma configuração robusta de relatórios visuais e interativos da pipeline manual para garantir que nenhuma alteração nova quebre os testes existentes.

---

## 📂 Estrutura do Projeto

* `src/autenticacaoDoUsuario.js`: Contém a regra de negócio da função `fazerLogin` e a base de dados mockada de usuários.
* `test/autenticacaoDoUsuario.test.js`: Contém a suíte de testes unitários validando cenários como login com sucesso, usuário inexistente, credenciais expiradas e senha incorreta.
* `package.json`: Configurações do projeto e o script de execução `npm test` mapeado para `node --test`.
* `.github/workflows/`: Contém os três arquivos de definição das pipelines YAML.

---

## 🛠️ Como Executar os Testes Localmente

### Pré-requisitos
Ter o **Node.js (versão 18 ou superior)** instalado na sua máquina.

### Executando
Basta executar o script de teste padrão do npm:

```bash
npm test
```

Ou rodar o comando nativo do Node.js diretamente:

```bash
node --test
```
