# FALHAS NA ENGENHARIA DE SOFTWARE

## Therac-25 (1985)

O Therac-25 foi uma máquina de radioterapia desenvolvida nos anos 1980 pela empresa AECL (Atomic Energy of Canada Limited) para tratar pacientes com câncer. Infelizmente, o Therac-25 ficou famoso por uma série de acidentes graves que ocorreram devido a falhas de software e design. Entre 1985 e 1987, pelo menos seis pacientes foram gravemente feridos ou morreram após serem expostos a doses massivas de radiação.

Esses acidentes ocorreram porque o software do Therac-25 tinha erros críticos que permitiam que a máquina aplicasse doses de radiação muito superiores ao que era seguro. Além disso, não havia sistemas de segurança adequados para prevenir ou alertar sobre esses erros.

O caso do Therac-25 é amplamente estudado na engenharia de software e em outras áreas relacionadas como um exemplo de como a falta de testes rigorosos e a subestimação da importância de sistemas de segurança podem ter consequências desastrosas.

## Bug do Milênio (01/2000)

O Bug do Milênio ocorreu no início dos anos 2000, decorrente de uma falha de softwares mais antigos. A ocorrência se deve ao fato de que antigamente, os computadores estavam programados para ler a data com apenas os dois últimos dígitos do ano, fazendo com que na troca, o "99" tenha sido alterado para "00", mantendo o "19" intacto, fazendo com que os computadores mostrassem o ano como 1900 - um salto de 100 anos para o passado.

Apesar de ter gerado grande pânico no mundo inteiro na época, o bug do milênio se mostrou praticamente inofensivo, já que a maioria das empresas onde as consequências poderiam ser mais graves já haviam sido atualizadas ou trocado os computadores por mais máquinas mais modernas, principalmente pelo advento e popularização da internet e do Windows 95.

De qualquer forma, o custo do Bug do Milênio foi alto, já que diversos programadores antigos foram retirados de suas aposentadorias para atualização urgente dos sistemas na década de 90.

## Crowdstrike (07/2024)

A falha no sistema da CrowdStrike em julho de 2024, que resultou em uma interrupção global, foi causada por um erro em uma atualização do sensor Falcon, utilizado para proteção contra ameaças cibernéticas. A atualização, conhecida como "Channel File 291", introduziu um bug devido a uma lógica incorreta no tratamento de parâmetros do sistema Windows. Especificamente, o sistema foi programado para lidar com 20 parâmetros, mas a atualização incluiu 21, o que resultou em uma leitura fora dos limites da memória e, consequentemente, em um crash do sistema operacional.

Esse erro causou uma interrupção massiva que afetou milhões de usuários, incluindo interrupções em estações de televisão, aeroportos e até hospitais. Embora a CrowdStrike tenha rapidamente identificado e corrigido o problema, o incidente destacou vulnerabilidades na gestão de atualizações automáticas e levou a críticas sobre a necessidade de maior controle e testes rigorosos antes de lançamentos de software críticos.

A empresa se desculpou publicamente e iniciou uma análise profunda para evitar que falhas semelhantes ocorram no futuro, além de ajustar seus processos de atualização para permitir que os clientes controlem melhor quando essas atualizações são implementadas.

# COMO SURGIU A ENGENHARIA DE SOFTWARE?

O termo Engenharia de Software foi idealizado na Alemanha em 1968 pela OTAN (Organização do Tratado Atlântico Norte), por causa da crise de software que se tinha naquela época, onde ainda não havia sido criado padrões sistemáticos a serem seguidos de maneira organizada para criar softwares.

E quando o cliente pedia para desenvolver um produto que resolvesse o problema dele, os programadores  se juntavam e construíam o software de maneira desorganizada, cada um desenvolvia do seu jeito.

E no final produto a ser construído tinha que ser cancelado pois o software antes de ser concluído já começava a dar muito prejuízo para o cliente, como o estouro de orçamento, atrasos de entrega e péssima qualidade.

A crise de software só foi acabar em 1970 quando de fato a Engenharia de Software foi criada, sendo desenvolvido vários padrões, processos, metodologias e documentações que permitisse a criação de softwares de maneira sistemática, contendo um inicio, meio e fim bem organizado e definido, com o objetivo de facilitar o desenvolvimento, atender a necessidade do cliente e manter a eficiência  entregando um produto de alta qualidade.

# LINHA DO TEMPO - EVOLUÇÃO DA ENGENHARIA DE SOFTWARE

## 1. Primeira era (1950 - 1960)

Não haviam metodologias estruturadas. O software era escrito em linguagem de máquina/Assembly e usado como um acessório do hardware.

## 2. Segunda era (1960 - 1970)

Chegam as contas da falta de organização da primeira era, causando problemas significativos na entrega de software, incluindo atrasos nos prazos, estouros de orçamento, além de gerar software de péssima qualidade

## 3. Terceira era (1970 - 1980)

Surgem metodologias organizadas para o desenvolvimento de software, valendo a menção ao modelo Cascata, onde se fazia um levantamento de requisitos + design, para então ser realizada a implementação, testes e enfim a manutenção.

## 4. Quarta era (1980 - 1990)

Aqui a cultura do "reuso" entrou em cena, valorizando muito a reutilização de componentes antigos para principalmente aumentar a produtividade e velocidade de entregas, resultando no desenvolvimento de bibliotecas e frameworks, cultura que é usada até hoje.

## 5. Quinta era (1990 - 2000)

Surgem metodologias ágeis, que incentivam e auxiliam com entregas incrementais e iterativas, gerando um ambiente de colaboração contínua entre a equipe e o cliente, também possibilitando a mudança do projeto durante o desenvolvimento do mesmo.

## 6. Sexta era (2000 - atualmente)

Segue o aperfeiçoamento das metodologias ágeis, que se tornam mais comuns no ambiente atual de desenvolvimento. Projetos são entregues em tempo recorde, já que todas etapas do desenvolvimento ocorrendo simultaneamente.
