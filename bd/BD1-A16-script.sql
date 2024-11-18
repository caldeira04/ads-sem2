DROP SCHEMA IF EXISTS aula16;
CREATE SCHEMA aula16;
USE aula16;

-- -----------------------------------------------------
-- Tabela PRODUTO
-- Descrição: Armazena informações sobre os produtos.
-- -----------------------------------------------------
CREATE TABLE produto (
  codigo     INT NOT NULL,
  descricao  VARCHAR(50) NOT NULL,
  qtdEstoque DECIMAL(10,2),
  precoVenda DECIMAL(10,2),
  PRIMARY KEY (codigo)
);

-- -----------------------------------------------------
-- Tabela CIDADE
-- Descrição: Armazena informações sobre as cidades.
-- -----------------------------------------------------
CREATE TABLE cidade (
  id   INT NOT NULL,
  nome VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- -----------------------------------------------------
-- Tabela CLIENTE
-- Descrição: Armazena informações sobre os clientes.
-- -----------------------------------------------------
CREATE TABLE cliente (
  codigo    INT NOT NULL,
  cidade_id INT NOT NULL,
  nome      VARCHAR(100) NOT NULL,
  email     VARCHAR(255),
  PRIMARY KEY (codigo),
  FOREIGN KEY (cidade_id) REFERENCES cidade (id)
);

-- -----------------------------------------------------
-- Tabela PEDIDO
-- Descrição: Armazena informações sobre os pedidos.
-- -----------------------------------------------------
CREATE TABLE pedido (
  numero         INT NOT NULL,
  cliente_codigo INT NOT NULL,
  dataHora       DATETIME NOT NULL,
  status         CHAR(2),
  PRIMARY KEY (numero),
  FOREIGN KEY (cliente_codigo) REFERENCES cliente (codigo)
);

/* 
Status de pedidos:
AP - Aguardando pagamento
PC - Pagamento confirmado
EA - Em andamento
PE - Pronto para ser enviado
ET - Entregue a transportadora
EN - Entregue
CC - Cancelado
PN - Pagamento não realizado
DV - Devolvido
*/

-- -----------------------------------------------------
-- Tabela PEDIDO_PRODUTO
-- Descrição: Relaciona produtos a pedidos.
-- -----------------------------------------------------
CREATE TABLE pedido_produto (
  pedido_numero  INT NOT NULL,
  produto_codigo INT NOT NULL,
  quantidade     DECIMAL(10,2) NOT NULL,
  precoVendido   DECIMAL(10,2),
  PRIMARY KEY (pedido_numero, produto_codigo),
  FOREIGN KEY (pedido_numero) REFERENCES pedido (numero), 
  FOREIGN KEY (produto_codigo) REFERENCES produto (codigo)
);


-- Populando a tabela CIDADE
INSERT INTO cidade (id, nome) VALUES
  (1, 'Pelotas'),
  (2, 'Arroio Grande'),
  (3, 'Capão do Leão'),
  (4, 'Herval'),
  (5, 'Chuí'),
  (6, 'Chuy'),
  (7, 'Rio Grande'),
  (8, 'Porto Alegre'),
  (9, 'Morro Redondo'),
  (10, 'Piratini'),
  (11, 'Canguçu'),
  (12, 'Arroio do Padre'),
  (13, 'São Lourenço do Sul'),
  (14, 'Pedro Osório'),
  (15, 'Bagé'),
  (16, 'Santa Maria');

-- Populando a tabela CLIENTE
INSERT INTO cliente (codigo, cidade_id, nome, email) VALUES
  (101, 1, 'Carlos Silva', 'carlos.silva@email.com'),
  (102, 2, 'Maria Santos', 'maria.santos@email.com'),
  (103, 3, 'Pedro Gómez', 'pedro.gomez@email.com'),
  (104, 4, 'Ana Hernández', 'ana.hernandez@email.com'),
  (105, 5, 'Luis García', 'luis.garcia@email.com'),
  (106, 6, 'Sofía López', 'sofia.lopez@email.com'),
  (107, 7, 'Diego Rodríguez', 'diego.rodriguez@email.com'),
  (108, 8, 'Valentina Martínez', 'valentina.martinez@email.com'),
  (109, 9, 'Manuel Fernandes', 'manuel.fernandes@email.com'),
  (110, 10, 'Elena Perez', 'elena.perez@email.com'),
  (111, 11, 'Javier Rodriguez', 'javier.rodriguez@email.com'),
  (112, 12, 'Sophia Brown', 'sophia.brown@email.com'),
  (113, 13, 'Lucas Martin', 'lucas.martin@email.com'),
  (114, 14, 'Martina Rossi', 'martina.rossi@email.com'),
  (115, 15, 'Luca Fischer', 'luca.fischer@email.com'),
  (116, 16, 'Mia Johnson', 'mia.johnson@email.com');

-- Populando a tabela PRODUTO
INSERT INTO produto (codigo, descricao, qtdEstoque, precoVenda) VALUES
  (201, 'Camiseta Estampada', 100, 30.00),
  (202, 'Calça Jeans Slim', 80, 90.00),
  (203, 'Tênis Esportivo', 60, 150.00),
  (204, 'Óculos de Sol Estiloso', 70, 70.00),
  (205, 'Short Esportivo', 120, 40.00),
  (206, 'Sapato Casual', 50, 120.00),
  (207, 'Relógio de Pulso do Faustão', 90, 80.00),
  (208, 'Bolsa Elegante', 40, 60.00),
  (209, 'Boné de Abacaxi', 150, 15.00),
  (210, 'Mochila Estampada', 70, 45.00),
  (211, 'Camiseta Estampada', 100, 30.00),
  (212, 'Calça Jeans Slim', 80, 90.00),
  (213, 'Tênis Esportivo', 60, 150.00),
  (214, 'Óculos de Sol Fashion', 70, 70.00),
  (215, 'Bermuda de Praia', 120, 40.00),
  (216, 'Sapato de corrida', 50, 120.00),
  (217, 'Relógio Analógico', 90, 80.00),
  (218, 'Bolsa Elegante', 40, 60.00),
  (219, 'Boné de Verão', 150, 15.00),
  (220, 'Mochila Esportiva', 70, 45.00);

-- Populando a tabela PEDIDO
INSERT INTO pedido (numero, cliente_codigo, dataHora, status) VALUES
  (301, 101, '2024-06-05 10:30:00', 'AP'),
  (302, 101, '2024-06-05 11:15:00', 'PC'),
  (303, 103, '2024-06-05 12:00:00', 'EA'),
  (304, 104, '2024-06-05 12:45:00', 'PE'),
  (305, 101, '2024-06-06 09:30:00', 'EA'),
  (306, 106, '2024-06-06 10:15:00', 'PE'),
  (307, 107, '2024-06-06 11:00:00', 'AP'),
  (308, 102, '2024-06-06 11:45:00', 'PC'),
  (309, 101, '2024-06-05 10:30:00', 'AP'),
  (310, 116, '2024-06-05 11:15:00', 'PC'),
  (311, 103, '2024-06-05 12:00:00', 'EA'),
  (312, 104, '2024-06-05 12:45:00', 'PE'),
  (313, 105, '2024-06-06 09:30:00', 'EA'),
  (314, 106, '2024-06-06 10:15:00', 'PE'),
  (315, 107, '2024-06-06 11:00:00', 'AP'),
  (316, 108, '2024-06-06 11:45:00', 'PC'); 

-- Populando a tabela PEDIDO_PRODUTO
INSERT INTO pedido_produto (pedido_numero, produto_codigo, quantidade, precoVendido) VALUES
  (301, 208, 2, 30.00),
  (301, 202, 1, 90.00),
  (302, 203, 1, 150.00),
  (302, 204, 2, 70.00),
  (302, 210, 3, 40.00),
  (303, 206, 1, 120.00),
  (303, 207, 2, 80.00),
  (304, 208, 1, 60.00),
  (305, 209, 4, 15.00),
  (306, 210, 2, 45.00),
  (307, 201, 2, 30.00),
  (307, 202, 1, 90.00),
  (307, 203, 1, 150.00),
  (308, 204, 2, 70.00),
  (309, 205, 3, 40.00),
  (310, 206, 1, 120.00),
  (311, 207, 2, 80.00),
  (312, 208, 1, 60.00),
  (313, 209, 4, 15.00),
  (314, 208, 1, 60.00),
  (315, 209, 4, 15.00),
  (316, 210, 2, 45.00);

/* Gere um script para: */

SELECT c.codigo AS cliente_codigo,
       c.nome AS cliente_nome,
       pe.numero AS pedido_numero,
       pe.dataHora AS data_pedido,
       pe.status AS status_pedido
FROM pedido pe
JOIN cliente c ON pe.cliente_codigo = c.codigo
WHERE pe.status IN ('AP', 'PC')
ORDER BY pe.dataHora DESC;
/* 1 - Listar código de cliente, nome de cliente, número do pedido, data do pedido, 
status do pedido, filtre somente pedidos  AP e PC. 
A consulta deve ser exibida em ordem decrescente de data (a data mais recente primeiro) 
+--------+--------------------+--------+---------------------+--------+
| codigo | nome               | numero | dataHora            | status |
+--------+--------------------+--------+---------------------+--------+
|    102 | Maria Santos       |    308 | 2024-06-06 11:45:00 | PC     |
|    108 | Valentina Martínez |    316 | 2024-06-06 11:45:00 | PC     |
|    107 | Diego Rodríguez    |    307 | 2024-06-06 11:00:00 | AP     |
|    107 | Diego Rodríguez    |    315 | 2024-06-06 11:00:00 | AP     |
|    101 | Carlos Silva       |    302 | 2024-06-05 11:15:00 | PC     |
|    116 | Mia Johnson        |    310 | 2024-06-05 11:15:00 | PC     |
|    101 | Carlos Silva       |    301 | 2024-06-05 10:30:00 | AP     |
|    101 | Carlos Silva       |    309 | 2024-06-05 10:30:00 | AP     |
+--------+--------------------+--------+---------------------+--------+
8 rows in set (0.00 sec) */

SELECT c.nome AS nome,
       ci.nome AS cidade,
       pe.status AS status
FROM pedido pe
JOIN cliente c on pe.cliente_codigo = c.codigo
JOIN cidade ci on c.cidade_id = ci.id
WHERE ci.nome = "PELOTAS"
ORDER BY pe.status ASC;
/* 2 - Listar o nome do cliente, nome da cidade e status do pedido 
para todos os pedidos feitos pela cidade de "Pelotas". 
Ordene os resultados por status do pedido em ordem alfabética. 
+--------------+---------+--------+
| nome         | nome    | status |
+--------------+---------+--------+
| Carlos Silva | Pelotas | AP     |
| Carlos Silva | Pelotas | AP     |
| Carlos Silva | Pelotas | EA     |
| Carlos Silva | Pelotas | PC     |
+--------------+---------+--------+
4 rows in set (0.00 sec) */


SELECT pe.numero AS pedido_numero,
       c.nome AS nome,
       p.descricao AS descricao
FROM pedido_produto pp
JOIN pedido pe ON pp.pedido_numero = pe.numero
JOIN cliente c ON pe.cliente_codigo = c.codigo
JOIN produto p ON pp.produto_codigo = p.codigo
ORDER BY pe.numero DESC;
  
/* 3 - Exibir o número do pedido, nome do cliente e descrição do produto 
para todos os produtos que foram pedidos. 
Filtre apenas os produtos que tenham sido pedidos 
e ordene os resultados por número do pedido em ordem decrescente. 
+---------------+--------------------+-----------------------------+
| pedido_numero | nome               | descricao                   |
+---------------+--------------------+-----------------------------+
|           316 | Valentina Martínez | Mochila Estampada           |
|           315 | Diego Rodríguez    | Boné de Abacaxi             |
|           314 | Sofía López        | Bolsa Elegante              |
|           313 | Luis García        | Boné de Abacaxi             |
|           312 | Ana Hernández      | Bolsa Elegante              |
|           311 | Pedro Gómez        | Relógio de Pulso do Faustão |
|           310 | Mia Johnson        | Sapato Casual               |
|           309 | Carlos Silva       | Short Esportivo             |
|           308 | Maria Santos       | Óculos de Sol Estiloso      |
|           307 | Diego Rodríguez    | Camiseta Estampada          |
|           307 | Diego Rodríguez    | Calça Jeans Slim            |
|           307 | Diego Rodríguez    | Tênis Esportivo             |
|           306 | Sofía López        | Mochila Estampada           |
|           305 | Carlos Silva       | Boné de Abacaxi             |
|           304 | Ana Hernández      | Bolsa Elegante              |
|           303 | Pedro Gómez        | Sapato Casual               |
|           303 | Pedro Gómez        | Relógio de Pulso do Faustão |
|           302 | Carlos Silva       | Tênis Esportivo             |
|           302 | Carlos Silva       | Óculos de Sol Estiloso      |
|           302 | Carlos Silva       | Mochila Estampada           |
|           301 | Carlos Silva       | Calça Jeans Slim            |
|           301 | Carlos Silva       | Bolsa Elegante              |
+---------------+--------------------+-----------------------------+
22 rows in set (0.00 sec) */

SELECT c.nome AS nome,
       c.email AS email,
       pe.dataHora AS dataHora
FROM pedido pe
JOIN cliente c ON pe.cliente_codigo = c.codigo
WHERE pe.status = "EA"
ORDER BY dataHora ASC;
/* 4 - Apresentar o nome do cliente, 
email e data do pedido para todos os pedidos com status "EA" (Em andamento). 
Ordene os resultados por data do pedido em ordem crescente. 
+--------------+------------------------+---------------------+
| nome         | email                  | dataHora            |
+--------------+------------------------+---------------------+
| Pedro Gómez  | pedro.gomez@email.com  | 2024-06-05 12:00:00 |
| Pedro Gómez  | pedro.gomez@email.com  | 2024-06-05 12:00:00 |
| Carlos Silva | carlos.silva@email.com | 2024-06-06 09:30:00 |
| Luis García  | luis.garcia@email.com  | 2024-06-06 09:30:00 |
+--------------+------------------------+---------------------+
4 rows in set (0.00 sec) */

SELECT c.nome AS nome,
       ci.nome AS cidade,
       pe.status AS status
FROM pedido pe
JOIN cliente c ON pe.cliente_codigo = c.codigo
JOIN cidade ci ON c.cidade_id = ci.id
WHERE c.nome LIKE "%Silva"
ORDER BY c.nome ASC;
/* 5 - Listar o nome do cliente, nome da cidade e status do pedido 
para todos os pedidos feitos por clientes que tenham "Silva" no nome. 
Ordene os resultados por nome do cliente em ordem alfabética. 
+--------------+---------+--------+
| nome         | nome    | status |
+--------------+---------+--------+
| Carlos Silva | Pelotas | AP     |
| Carlos Silva | Pelotas | PC     |
| Carlos Silva | Pelotas | EA     |
| Carlos Silva | Pelotas | AP     |
+--------------+---------+--------+
4 rows in set (0.00 sec) */

SELECT pe.numero AS NumeroPedido,
       p.descricao AS DescricaoProduto,
       pp.quantidade AS Quantidade,
       p.precoVenda AS PrecoVenda
FROM pedido_produto pp
JOIN pedido pe ON pp.pedido_numero = pe.numero
JOIN produto p ON pp.produto_codigo = p.codigo
WHERE pe.status NOT LIKE "DV" OR "CC" OR "PN"
ORDER BY pe.numero ASC;
/* 6 - Exibira o número do pedido, descrição do produto, 
quantidade e preço de venda para todos os produtos que foram pedidos. 
Filtre apenas os produtos que tenham sido pedidos 
e ordene os resultados por número do pedido em ordem crescente. 
+--------------+-----------------------------+------------+------------+
| NumeroPedido | DescricaoProduto            | Quantidade | PrecoVenda |
+--------------+-----------------------------+------------+------------+
|          301 | Calça Jeans Slim            |       1.00 |      90.00 |
|          301 | Bolsa Elegante              |       2.00 |      30.00 |
|          302 | Tênis Esportivo             |       1.00 |     150.00 |
|          302 | Óculos de Sol Estiloso      |       2.00 |      70.00 |
|          302 | Mochila Estampada           |       3.00 |      40.00 |
|          303 | Sapato Casual               |       1.00 |     120.00 |
|          303 | Relógio de Pulso do Faustão |       2.00 |      80.00 |
|          304 | Bolsa Elegante              |       1.00 |      60.00 |
|          305 | Boné de Abacaxi             |       4.00 |      15.00 |
|          306 | Mochila Estampada           |       2.00 |      45.00 |
|          307 | Camiseta Estampada          |       2.00 |      30.00 |
|          307 | Calça Jeans Slim            |       1.00 |      90.00 |
|          307 | Tênis Esportivo             |       1.00 |     150.00 |
|          308 | Óculos de Sol Estiloso      |       2.00 |      70.00 |
|          309 | Short Esportivo             |       3.00 |      40.00 |
|          310 | Sapato Casual               |       1.00 |     120.00 |
|          311 | Relógio de Pulso do Faustão |       2.00 |      80.00 |
|          312 | Bolsa Elegante              |       1.00 |      60.00 |
|          313 | Boné de Abacaxi             |       4.00 |      15.00 |
|          314 | Bolsa Elegante              |       1.00 |      60.00 |
|          315 | Boné de Abacaxi             |       4.00 |      15.00 |
|          316 | Mochila Estampada           |       2.00 |      45.00 |
+--------------+-----------------------------+------------+------------+
22 rows in set (0.00 sec) */

SELECT c.nome AS NomeCliente,
       c.email AS Email,
       pe.status AS StatusPedido
FROM pedido pe
JOIN cliente c ON pe.cliente_codigo = c.codigo
WHERE pe.status LIKE "PC"
ORDER BY c.nome ASC;
/* 7 - Apresenter o nome do cliente, email e status do pedido 
para todos os pedidos com status "PC" (Pagamento confirmado). 
Ordene os resultados por nome do cliente em ordem alfabética. 
+--------------------+------------------------------+--------------+
| NomeCliente        | Email                        | StatusPedido |
+--------------------+------------------------------+--------------+
| Carlos Silva       | carlos.silva@email.com       | PC           |
| Maria Santos       | maria.santos@email.com       | PC           |
| Mia Johnson        | mia.johnson@email.com        | PC           |
| Valentina Martínez | valentina.martinez@email.com | PC           |
+--------------------+------------------------------+--------------+
4 rows in set (0.00 sec) */

SELECT pe.numero AS pedido_numero,
       c.nome AS nome,
       COUNT(DISTINCT pp.produto_codigo)
FROM pedido_produto pp
JOIN pedido pe ON pp.pedido_numero = pe.numero
JOIN cliente c ON pe.cliente_codigo = c.codigo
GROUP BY pe.numero, c.nome; 

/* 8 - Exibir número do pedido, nome do cliente e a quantidade de diferentes itens de cada pedido 
+---------------+--------------------+-------------------------------------------------+
| pedido_numero | nome               | COUNT(DISTINCT (pedido_produto.produto_codigo)) |
+---------------+--------------------+-------------------------------------------------+
|           301 | Carlos Silva       |                                               2 |
|           302 | Carlos Silva       |                                               3 |
|           303 | Pedro Gómez        |                                               2 |
|           304 | Ana Hernández      |                                               1 |
|           305 | Carlos Silva       |                                               1 |
|           306 | Sofía López        |                                               1 |
|           307 | Diego Rodríguez    |                                               3 |
|           308 | Maria Santos       |                                               1 |
|           309 | Carlos Silva       |                                               1 |
|           310 | Mia Johnson        |                                               1 |
|           311 | Pedro Gómez        |                                               1 |
|           312 | Ana Hernández      |                                               1 |
|           313 | Luis García        |                                               1 |
|           314 | Sofía López        |                                               1 |
|           315 | Diego Rodríguez    |                                               1 |
|           316 | Valentina Martínez |                                               1 |
+---------------+--------------------+-------------------------------------------------+
16 rows in set (0.00 sec) */

SELECT pe.numero AS pedido_numero,
       c.nome AS nome,
       SUM(pp.quantidade)
FROM pedido_produto pp
JOIN pedido pe ON pp.pedido_numero = pe.numero
JOIN cliente c ON pe.cliente_codigo = c.codigo
GROUP BY pe.numero, c.nome;
/* 9 - Exibir número do pedido, nome do cliente e a quantidade total itens de cada pedido 
+---------------+--------------------+--------------------------------+
| pedido_numero | nome               | SUM(pedido_produto.quantidade) |
+---------------+--------------------+--------------------------------+
|           301 | Carlos Silva       |                           3.00 |
|           302 | Carlos Silva       |                           6.00 |
|           303 | Pedro Gómez        |                           3.00 |
|           304 | Ana Hernández      |                           1.00 |
|           305 | Carlos Silva       |                           4.00 |
|           306 | Sofía López        |                           2.00 |
|           307 | Diego Rodríguez    |                           4.00 |
|           308 | Maria Santos       |                           2.00 |
|           309 | Carlos Silva       |                           3.00 |
|           310 | Mia Johnson        |                           1.00 |
|           311 | Pedro Gómez        |                           2.00 |
|           312 | Ana Hernández      |                           1.00 |
|           313 | Luis García        |                           4.00 |
|           314 | Sofía López        |                           1.00 |
|           315 | Diego Rodríguez    |                           4.00 |
|           316 | Valentina Martínez |                           2.00 |
+---------------+--------------------+--------------------------------+
16 rows in set (0.00 sec) */

SELECT pe.numero AS pedido_numero,
       c.nome AS nome,
       SUM(pp.precoVendido) AS ValorTotalPedido
FROM pedido_produto pp
JOIN pedido pe ON pp.pedido_numero = pe.numero
JOIN cliente c ON pe.cliente_codigo = c.codigo
GROUP BY pe.numero, c.nome
ORDER BY pe.numero ASC;
/* 10 - Exibir número do pedido, nome do cliente e o valor total de cada pedido 
+---------------+--------------------+------------------+
| pedido_numero | nome               | ValorTotalPedido |
+---------------+--------------------+------------------+
|           301 | Carlos Silva       |         150.0000 |
|           302 | Carlos Silva       |         410.0000 |
|           303 | Pedro Gómez        |         280.0000 |
|           304 | Ana Hernández      |          60.0000 |
|           305 | Carlos Silva       |          60.0000 |
|           306 | Sofía López        |          90.0000 |
|           307 | Diego Rodríguez    |         300.0000 |
|           308 | Maria Santos       |         140.0000 |
|           309 | Carlos Silva       |         120.0000 |
|           310 | Mia Johnson        |         120.0000 |
|           311 | Pedro Gómez        |         160.0000 |
|           312 | Ana Hernández      |          60.0000 |
|           313 | Luis García        |          60.0000 |
|           314 | Sofía López        |          60.0000 |
|           315 | Diego Rodríguez    |          60.0000 |
|           316 | Valentina Martínez |          90.0000 |
+---------------+--------------------+------------------+
16 rows in set (0.00 sec) */

SELECT ci.nome AS nome,
       COUNT(pe.numero) AS QtdPedidos
FROM cidade ci
JOIN cliente c ON ci.id = c.codigo
JOIN pedido pe ON c.codigo = pe.cliente_codigo
GROUP BY ci.nome;
/* 11 - Exibir o nome da cidade e a quantidade de pedidos por cidade 
+---------------+----------------------+
| nome          | COUNT(pedido.numero) |
+---------------+----------------------+
| Pelotas       |                    4 |
| Capão do Leão |                    2 |
| Herval        |                    2 |
| Chuy          |                    2 |
| Rio Grande    |                    2 |
| Arroio Grande |                    1 |
| Chuí          |                    1 |
| Porto Alegre  |                    1 |
| Santa Maria   |                    1 |
+---------------+----------------------+
9 rows in set (0.00 sec) */

/* 12 - Exibir o codigo do cliente, nome do cliente e a quantidade de pedidos por cliente 
+--------+--------------------+-------------------+
| codigo | nome               | QuantidadePedidos |
+--------+--------------------+-------------------+
|    101 | Carlos Silva       |                 4 |
|    102 | Maria Santos       |                 1 |
|    103 | Pedro Gómez        |                 2 |
|    104 | Ana Hernández      |                 2 |
|    105 | Luis García        |                 1 |
|    106 | Sofía López        |                 2 |
|    107 | Diego Rodríguez    |                 2 |
|    108 | Valentina Martínez |                 1 |
|    116 | Mia Johnson        |                 1 |
+--------+--------------------+-------------------+
9 rows in set (0.00 sec) */
