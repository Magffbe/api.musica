-- Active: 1697693948006@@localhost@5432@postgres
create table tbl_api_musica
(
    
    id serial PRIMARY key,
    artista VARCHAR(100),
    album VARCHAR(100),
    pista NUMERIC
    
    
    );

    CREATE TABLE tbl_artistas (
    id serial PRIMARY KEY,
    nombre VARCHAR(100),
    artista_id INT
);

CREATE TABLE tbl_albumes (
    id serial PRIMARY KEY,
    nombre VARCHAR(100),
    artista_id INT, 
    FOREIGN KEY (artista_id) REFERENCES tbl_artistas(id)
);

    
        
    
    

