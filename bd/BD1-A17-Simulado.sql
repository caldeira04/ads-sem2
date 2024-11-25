DROP DATABASE IF EXISTS simulado;
CREATE DATABASE IF NOT EXISTS simulado;
USE simulado;

CREATE TABLE cidade (
 id   INT AUTO_INCREMENT,
 nome VARCHAR(45) NOT NULL,
 PRIMARY KEY (id)
);

CREATE TABLE fornecedor (
 id          INT AUTO_INCREMENT,
 cidade_id   INT NOT NULL,
 razaoSocial VARCHAR(45) NOT NULL,
 email       VARCHAR(255) NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (cidade_id) REFERENCES cidade(id)
);

CREATE TABLE produto (
 id            INT AUTO_INCREMENT,
 fornecedor_id INT NOT NULL,
 descricao     VARCHAR(45) NOT NULL,
 valor         DECIMAL(10,2) NULL,
 qtdEstoque    INT NULL,
 PRIMARY KEY (id),
 FOREIGN KEY (fornecedor_id) REFERENCES fornecedor (id)
);

INSERT INTO cidade(nome) VALUES('Pelotas');
INSERT INTO cidade(nome) VALUES('Arroio Grande');
INSERT INTO cidade(nome) VALUES('Camaquã');
INSERT INTO cidade(nome) VALUES('Morro Redondo');

INSERT INTO fornecedor(cidade_id, razaoSocial, email) VALUES(3, "Krolos", "krolos@uol.com.br");
INSERT INTO fornecedor(cidade_id, razaoSocial, email) VALUES(1, "Trecho", "trecho@outlook.com");
INSERT INTO fornecedor(cidade_id, razaoSocial, email) VALUES(4, "Estoqui", "estoqui@gmail.com");
INSERT INTO fornecedor(cidade_id, razaoSocial, email) VALUES(2, "Guanavara", "guanavara@bol.com.br");

INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(2, "Tequila", 90.58, 20);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(4, "Tequila Gold", 98.54, 30);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(3, "Vinho Bordeaux", 39.00, 30);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(1, "H2O", 9.27, 30);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(3, "Água Benta", 9.99, 40);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(1, "Água não Benta", 6.66, 40);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(2, "Limonada", 20, 20);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(4, "Toddynho", 5, 20);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(1, "BatGut", 2, 10);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(3, "Graspa", 28, 10);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(2, "Monster", 29, 30);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(4, "Blue Bull", 31, 30);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(3, "Água Lunar", 200, 25);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(2, "Suco de Vaca", 10, 25);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(1, "Lipton Tea", 25, 28);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(2, "Torresmo frito", 10, 42);
INSERT INTO produto(fornecedor_id, descricao, valor, qtdEstoque) VALUES(2, "Pasta de torresmo", 11, 3);

/* 00. Gere o diagrama Entidade Relacionamento do banco */

SELECT razaoSocial FROM FORNECEDOR ORDER BY razaoSocial DESC;
/* 01 - Elabore uma consulta que apresente os nomes dos fornecedores em ordem alfabética decrescente.
Resultado Esperado:
+------------+
| Fornecedor |
+------------+
| Trecho     |
| Krolos     |
| Guanavara  |
| Estoqui    |
+------------+ */

SELECT f.razaoSocial, c.nome AS cidade
FROM fornecedor f
JOIN cidade c ON f.cidade_id = c.id
ORDER BY c.nome ASC, f.razaoSocial DESC;
/* 02 - Escreva uma consulta que traga a razão social do fornecedor juntamente com o nome da cidade. 
A listagem deve seguir a ordem alfabética crescente das cidades, 
seguida pela razão social em ordem alfabética decrescente.
Resultado Esperado:
+------------+---------------+
| Fornecedor | Cidade        |
+------------+---------------+
| Guanavara  | Arroio Grande |
| Krolos     | Camaquã       |
| Estoqui    | Morro Redondo |
| Trecho     | Pelotas       |
+------------+---------------+ */

SELECT SUM(qtdEstoque) AS QtdEstoque FROM produto;
/* 03 - Escreva uma consulta que apresente o somatório total da quantidade de produtos em estoque.
Resultado Esperado:
+---------+
| Qtd Tot |
+---------+
|     433 |
+---------+ */

SELECT f.razaoSocial AS Fornecedor,
       p.descricao AS Produto
FROM fornecedor f
JOIN produto p ON f.id = p.fornecedor_id
ORDER BY f.razaoSocial ASC, p.descricao ASC;
/* 04 - Elabore uma consulta que exiba a Razão Social do Fornecedor junto com a descrição de cada produto fornecido. 
A listagem deve seguir a ordem alfabética das Razões Sociais, seguida pela descrição do produto.
Resultado Esperado:
+------------+-------------------+
| Fornecedor | Produto           |
+------------+-------------------+
| Estoqui    | Água Benta        |
| Estoqui    | Água Lunar        |
| Estoqui    | Graspa            |
| Estoqui    | Vinho Bordeaux    |
| Guanavara  | Blue Bull         |
| Guanavara  | Tequila Gold      |
| Guanavara  | Toddynho          |
| Krolos     | Água não Benta    |
| Krolos     | BatGut            |
| Krolos     | H2O               |
| Krolos     | Lipton Tea        |
| Trecho     | Limonada          |
| Trecho     | Monster           |
| Trecho     | Pasta de torresmo |
| Trecho     | Suco de Vaca      |
| Trecho     | Tequila           |
| Trecho     | Torresmo frito    |
+------------+-------------------+*/

SELECT f.razaoSocial,
       COUNT(p.id) AS Qtd
FROM fornecedor f
JOIN produto p ON f.id = p.fornecedor_id
GROUP BY f.razaoSocial
ORDER BY f.razaoSocial ASC;
/* 05 - Escreva uma consulta que apresente a Razão Social do fornecedor 
juntamente com a soma da quantidade de produtos fornecidos por cada fornecedor. 
Os dados devem ser agrupados por fornecedor e apresentados em ordem alfabética.
Resultado Esperado:
+-------------+-----+
| razaoSocial | Qtd |
+-------------+-----+
| Estoqui     |   4 |
| Guanavara   |   3 |
| Krolos      |   4 |
| Trecho      |   6 |
+-------------+-----+ */

SELECT descricao, valor
FROM produto
ORDER BY valor DESC
LIMIT 1;
/* 06 - Utilizando (LIMIT 1 ou IN e MAX), escreva uma consulta que retorne 
o nome e o valor do produto mais caro.
Resultado Esperado:
+------------+--------+
| Produto    | valor  |
+------------+--------+
| Água Lunar | 200.00 |
+------------+--------+ */

SELECT c.nome AS cidade, SUM(p.qtdEstoque) AS total_estoque
FROM cidade c
JOIN fornecedor f ON c.id = f.cidade_id
JOIN produto p ON f.id = p.fornecedor_id
GROUP BY c.id, c.nome
HAVING SUM(p.qtdEstoque) > 110;
/* 07 - Elabore uma consulta que exiba o nome da cidade 
juntamente com a quantidade total de produtos em estoque 
para aquelas cidades que possuem mais de 110 produtos em estoque.

Resultado Esperado:
+---------------+---------+
| Cidade        | Qtd Tot |
+---------------+---------+
| Pelotas       |     140 |
| Morro Redondo |     210 |
+---------------+---------+ */

UPDATE produto p
JOIN fornecedor f ON p.fornecedor_id = f.id
SET p.valor = 25.00
WHERE f.razaoSocial = 'Guanavara';
/* 08 - Escreva uma consulta que atualize o valor de todos os produtos fornecidos por "Guanavara" para 25.00. */

SELECT f.razaoSocial as Fornecedor,
       p.valor
JOIN produto p ON f.id = p.fornecedor_id

SELECT f.razaoSocial
FROM fornecedor f
JOIN produto p ON f.id = p.fornecedor_id
WHERE p.valor = (SELECT MIN(valor) FROM produto);
/* 09 - Elabore uma consulta que retorne a Razão Social do fornecedor que fornece o produto mais barato.
Resultado Esperado:
+------------+
| Fornecedor |
+------------+
| Krolos     |
+------------+ */

UPDATE produto p
JOIN fornecedor f ON p.fornecedor_id = f.id
SET p.qtdEstoque = p.qtdEstoque * 2
WHERE f.razaoSocial = 'Estoqui';
/* 10 -  Escreva uma consulta que atualize a quantidade em estoque de todos os produtos 
fornecidos por "Estoqui" para o dobro da quantidade atual. */