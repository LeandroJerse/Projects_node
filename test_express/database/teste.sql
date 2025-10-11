CREATE TABLE usuarios(
    id INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE,
    idade INT NOT NULL
    );

INSERT INTO usuarios(id,nome,email,idade) VALUES(2,"Maria","maria@email.com",20)