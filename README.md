<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="PROJETO_INTEGRADOR__ADOTE_UM_AMIGO_1"></a>PROJETO INTEGRADOR - ADOPT_FRIEND </h2>

:smiley_cat: :dog: :sparkles:



<p class="has-line-data" data-line-start="4" data-line-end="5">

<strong>Equipe composta por</strong>:

Alcelina Sttefanie,
Paloma Cristina,
Geisianne Lins,
Kevin Pinsan,
Beatriz Rodrigues


Todos estagiários na empresa Avanade do programa decola Dev 2021.</p>
------------------------------------------------------------------------

<h2 class="code-line" data-line-start=6 data-line-end=7 ><a id="Descrio_do_projeto_6"></a>Descrição do projeto:</h2>
<p class="has-line-data" data-line-start="8" data-line-end="9">Plataforma que conecta animais em situações de rua com familias disposta a adotá-los. Adotar uma animal é um gesto de amor. Atuamos com o objetivo de promover a conexão de animais em situações de vulnerabilidade a protetores e sociedade, criando projetos, estruturas, mecanismos e ferramentas que auxiliem o trabalho voltado para a causa animal.</p>
<p class="has-line-data" data-line-start="12" data-line-end="13">

<strong>Tecnologias Usadas:</strong></p>
<ul>
<li class="has-line-data" data-line-start="15" data-line-end="16">Git - Github</li>
<li class="has-line-data" data-line-start="16" data-line-end="17">Banco de Dados</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">Node.js</li>
<li class="has-line-data" data-line-start="18" data-line-end="20">JavaScript</li>
<li class="has-line-data" data-line-start="19" data-line-end="20">Sequelize</li>
<li class="has-line-data" data-line-start="20" data-line-end="20">Biblioteca Multer</li>
<li class="has-line-data" data-line-start="21" data-line-end="20">JWT - Json Web Token</li>
<li class="has-line-data" data-line-start="21" data-line-end="20">Express</li>
<li class="has-line-data" data-line-start="21" data-line-end="20">MySql2</li>
<li class="has-line-data" data-line-start="21" data-line-end="20">Uuid</li>
<li class="has-line-data" data-line-start="21" data-line-end="20">JWT</li>
<li class="has-line-data" data-line-start="21" data-line-end="20">Módulo -  Nodemon</li>
<li class="has-line-data" data-line-start="21" data-line-end="20">Sucrase</li>

</ul>

------------------------------------------------------------------------
<h2 class="code-line" data-line-start=20 data-line-end=21 ><a id="ANTES_DE_COMEAR_A_DESENVOLVER_20"></a>ANTES DE COMEÇAR A DESENVOLVER</h2>
<p class="has-line-data" data-line-start="21" data-line-end="22"><strong>Clone o repositório</strong></p>
<pre><code>    git@github.com:pahsantana/adopt_friend.git
</code></pre>
<p class="has-line-data" data-line-start="25" data-line-end="26"><strong>Entre na pasta do repositório que você acabou de clonar:</strong></p>
<pre><code> cd adopt_friend
</code></pre>

<p class="has-line-data" data-line-start="29" data-line-end="30"><strong>Para instalar todas as dependências necessárias para o projeto rodar</strong></p>
<pre><code>npm install
</code></pre>
<p class="has-line-data" data-line-start="29" data-line-end="30"><strong>Crie um Banco de Dados no MySql</strong></p>
<pre><code>CREATE DATABASE nome_banco;
</code></pre>
<p class="has-line-data" data-line-start="29" data-line-end="30"><strong>Agora crie as tabelas no banco de dados, rode esse comando no seu terminal
</strong></p>
<pre><code> npx sequelize-cli db:migrate
</code></pre>
<p class="has-line-data" data-line-start="29" data-line-end="30"><strong>Não se esqueça de logar na sessão</strong></p>
<pre><code>npm start
</code></pre>
<p class="has-line-data" data-line-start="29" data-line-end="30"><strong>Verifique que você está na branch master</strong></p>
<pre><code>git branch
</code></pre>
<p class="has-line-data" data-line-start="34" data-line-end="35"><strong>Se não estiver, mude para a sua branch main</strong></p>
<pre><code> git checkout main
</code></pre>
<p class="has-line-data" data-line-start="39" data-line-end="40"><strong>Agora, crie uma branch onde você vai guardar os commits do seu projeto</strong></p>
<pre><code>git checkout -b 'nome da branch'
</code></pre>




<h2 class="code-line" data-line-start=44 data-line-end=45 ><a id="DURANTE_O_DESENVOLVIMENTO_44"></a>DURANTE O DESENVOLVIMENTO</h2>
<p class="has-line-data" data-line-start="45" data-line-end="46"><strong>Para adicionar as alterações</strong></p>
<pre><code>git add .</code></pre>
<p class="has-line-data" data-line-start="49" data-line-end="50"><strong>Faça commits das alterações  no código regularmente</strong></p>
<pre><code>git commit -m 'alteração descrita'
</code></pre>
<p class="has-line-data" data-line-start="55" data-line-end="56"><strong>Lembre-se de sempre após um (ou alguns) commits atualizar o repositório remoto</strong></p>
<p class="has-line-data" data-line-start="57" data-line-end="58"><strong>Os comandos que mais utilizaremos com  frequência são:</strong></p>
<p class="has-line-data" data-line-start="59" data-line-end="64"><strong>git status</strong> (para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)<br>
<strong>git add</strong> (para adicionar arquivos ao stage do Git)<br>
<strong>git commit</strong> (para criar um commit com os arquivos que estão no stage do Git)<br>
<strong>git push -u nome-da-branch</strong> (para enviar o commit para o repositório remoto na primeira vez que fizer o push de uma nova branch)<br>
<strong>git push</strong> (para enviar o commit para o repositório remoto após o passo anterior)

<strong>git pull</strong> (para buscar as alterações que estão no repositório remoto no github)<br></p>

<h2 class="code-line" data-line-start=68 data-line-end=69 ><a id="Linkedin_dos_integrantes_68"></a>Rotas Principais:</h2>

Aqui ficam disponibilizadas todas nossas rotas devidamente testadas no Insonmia

| ROTA: | USUÁRIO |
| ------ | ------ |
| Atualizar Usuário |  http://localhost:8080/:id |
| Criar Usuário | http://localhost:8080/users |
| Listar Usuário | http://localhost:8080/users/:id |
| Deletar Usuário |http://localhost:8080/:id|
| ------------------------| ----------------------------------|
|<strong>ROTA:</strong>  | <strong>SESSION </strong>  |
| Login | http://localhost:8080/session |
| ------------------------| ----------------------------------|
|<strong>ROTA:</strong>  | <strong>PET </strong>  |
| Criar Pet | http://localhost:8080/users/:user_id/pets |
| Listar todos os Pets | http://localhost:8080/pets |
| Listar Pet por ID | http://localhost:8080/pets/:id|
| Atualizar Pet | http://localhost:8080/pets/:id|
| Deletar Pet | http://localhost:8080/pets/:id |
| Listar Pet Por Raça | http://localhost:8080/pets/breed |
| Listar Pet Por Porte | http://localhost:8080/pets/size|
| Listar Pet Castrado | http://localhost:8080/pets/castrated  |
| Listar Pet com Microchip | http://localhost:8080/pets/microchiped |
| Listar Pet Vacinado | http://localhost:8080/pets/vaccined |
| Listar Pet Disponivel para Doação | http://localhost:8080/pets/is_adopted |
|Listar User Relacionado ao Pet| http://localhost:8080/users/:user_id/pets |
| ------------------------| ----------------------------------|
|<strong>ROTA:</strong>  | <strong>ADDRESS </strong>  |
| Criar Endereço | http://localhost:8080/users/:user_id/address  |
| Atualizar Endereço | http://localhost:8080/address/:id |
| Listar Endereço por User|http://localhost:8080/users/:user_id/address|
| Deletar Endereço| http://localhost:8080/users/address/:id |



<h2 class="code-line" data-line-start=44 data-line-end=45 ><a id=""></a>Entrada Esperada No Insonmia
<p class="has-line-data" data-line-start="45" data-line-end="46"><strong></strong></p>


#### 

- Criar/Atualizar - Pet

    ```json
    {
    "name" : "nome_pet",
    "age" : 1,
    "size" : "porte_pet",
    "breed" : "raça",
    "weight" : 1.0,
    "vaccine" : true,
    "castration" : true,
    "microchip" : true
    }
    ```
	
	
- Criar/Atualizar - Usuário

    ```json
    {
    "name": "Nome Usuário",
    "cpf": "99999999999",
    "email": "email@exemplo.com",
    "phone": "97087-9999",
    "password": "sua_senha",
    "confirmPassword": "sua_senha"
    ```

- Login Sessão

    ```json
    {
    	"email": "email@exemplo.com",
    	"password": "sua_senha"
    }
    ```


