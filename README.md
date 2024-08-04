# Bloco de Notas para Animais

Este é um projeto de um bloco de notas para registrar informações sobre animais de estimação. Ele permite salvar, visualizar e apagar dados, e gerar um QR Code com as informações.

## Funcionalidades

- Registrar informações básicas do animal (nome, raça, data de nascimento, vacinas tomadas).
- Selecionar o gênero (macho ou fêmea) e, no caso de fêmea, registrar informações adicionais (número de filhotes e data de nascimento dos filhotes).
- Indicar se o animal é castrado ou não.
- Salvar os dados no servidor e gerar um QR Code com o link para visualização.
- Apagar os dados armazenados.

## Tecnologias Utilizadas

- **Frontend:** HTML, CSS, JavaScript, jQuery
- **Backend:** Node.js, Express
- **Outras:** Biblioteca jQuery QR Code

## Pré-requisitos

- Node.js instalado
- NPM instalado

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/Zeus-animi/animi-note.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Executando o Projeto

1. Inicie o servidor:
    ```bash
    node server.js
    ```
2. Abra o navegador e acesse:
    ```
    http://localhost:3000
    ```

## Estrutura do Projeto

- `public/`
  - `index.html`: Arquivo principal do frontend.
  - `styles.css`: Estilos do frontend.
  - `script.js`: Lógica do frontend.
- `server.js`: Código do servidor Node.js.

## Personalização

Para personalizar o projeto, você pode editar os arquivos `index.html`, `styles.css` e `script.js` de acordo com suas necessidades.

## Problemas Comuns

### Não consigo acessar o servidor pelo meu celular mesmo estando na mesma rede Wi-Fi

1. Verifique se você está usando o endereço IP correto do seu computador na rede local.
2. Certifique-se de que o firewall do seu computador não está bloqueando conexões de entrada na porta 3000.
3. Garanta que o servidor está configurado para aceitar conexões de todas as interfaces de rede.
4. Certifique-se de que ambos os dispositivos (computador e celular) estão realmente conectados à mesma rede Wi-Fi.
5. Verifique as configurações do seu roteador para garantir que não há isolamento de cliente habilitado.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
