# 🚗 Volvo Cars - Front-end Coding Test (React + Next.js)

Este projeto é uma implementação do teste técnico de front-end proposto pela equipe da Volvo Cars (Global Online Digital). A proposta consiste em desenvolver uma interface web que exibe os carros da linha Recharge com base em um design fornecido para desktop e mobile.

### Explicação:
Utilizei a biblioteca Axios para fazer a requisição HTTP ao endpoint /api/cars.json, carregando os dados dos carros dinamicamente no frontend, o Vercel, que é uma plataforma recomendada e compatível com Next.js, permitindo fácil deploy com CI/CD, foi utilizado para o deploy do projeto.

### Tecnologias Utilizadas

- React com TypeScript

- Next.js

- Axios para requisições HTTP

- Vercel para deploy (ambiente de produção)

### 📦 Funcionalidades Implementadas
- Requisição dos dados
 - Utilizei o Axios para buscar os dados dos veículos a partir do arquivo public/api/cars.json.

- Renderização dinâmica da lista de veículos
  - Cada item exibe:
     - Modelo (modelName)
     - Tipo de carroceria (bodyType)
     - Tipo do modelo (modelType)
     - Imagem (imageUrl)
     - Botões de ação Learn e Shop, com links dinâmicos baseados no id

- Design responsivo (Desktop e Mobile)
  - A interface foi implementada conforme os arquivos de design disponibilizados, adaptando-se bem a diferentes tamanhos de tela.

- Componentização
  - Dividi a aplicação em componentes reutilizáveis e organizados, com foco em manutenibilidade e clareza.

- Acessibilidade
  - Apliquei boas práticas de acessibilidade (semântica, navegação por teclado, alt em imagens, etc).



