DROP DATABASE IF EXISTS ayd1_practica3;
CREATE DATABASE IF NOT EXISTS ayd1_practica3;

USE ayd1_practica3;

CREATE TABLE availability (
    value          INTEGER NOT NULL,
    tipo_giftcard  INTEGER NOT NULL
);

CREATE TABLE detalle_factura (
    factura_no_factura  INTEGER NOT NULL,
    giftcard            VARCHAR(8) NOT NULL
);

CREATE TABLE factura (
    no_factura       INTEGER NOT NULL AUTO_INCREMENT,
    usuario          INTEGER NOT NULL,
    tarjeta_credito  INTEGER NOT NULL, 
    CONSTRAINT factura_pk PRIMARY KEY ( no_factura )
);

CREATE TABLE giftcard (
    id             VARCHAR(8) NOT NULL,
    tipo_giftcard  INTEGER NOT NULL,
    duenio         INTEGER NOT NULL,
    value          INTEGER NOT NULL,
    CONSTRAINT giftcard_pk PRIMARY KEY ( id )
);

CREATE TABLE tarjeta_credito (
    id          INTEGER NOT NULL  AUTO_INCREMENT,
    no_tarjeta  VARCHAR(20) NOT NULL,
    mes         INTEGER NOT NULL,
    anio        INTEGER NOT NULL,
    cvv2        INTEGER NOT NULL,
    CONSTRAINT tarjeta_credito_pk PRIMARY KEY ( id )
);

CREATE TABLE tipo_giftcard (
    id          INTEGER NOT NULL  AUTO_INCREMENT,
    name        VARCHAR(50) NOT NULL,
    image       VARCHAR(300) NOT NULL,
    chargerate  FLOAT NOT NULL,
    active      CHAR(1) NOT NULL,
    CONSTRAINT tipo_giftcard_pk PRIMARY KEY ( id ),
    CONSTRAINT tipo_giftcard_un UNIQUE ( name )
);

CREATE TABLE tipo_usuario (
    id            INTEGER NOT NULL AUTO_INCREMENT,
    tipo_usuario  VARCHAR(100) NOT NULL,
    CONSTRAINT tipo_usuario_pk PRIMARY KEY ( id ),
    CONSTRAINT tipo_usuario_un UNIQUE ( tipo_usuario )
);

CREATE TABLE usuario (
    id                INTEGER NOT NULL  AUTO_INCREMENT,
    username          VARCHAR(50) NOT NULL,
    correo            VARCHAR(100) NOT NULL,
    contrasenia       VARCHAR(50) NOT NULL,
    nombres           VARCHAR(100) NOT NULL,
    apellidos         VARCHAR(100) NOT NULL,
    cui               VARCHAR(15) NOT NULL,
    fecha_nacimiento  DATE NOT NULL,
    tipo_usuario      INTEGER NOT NULL,
    CONSTRAINT usuario_pk PRIMARY KEY ( id )
);

CREATE TABLE value (
    id     INTEGER NOT NULL,
    value  INTEGER NOT NULL,
    CONSTRAINT value_pk PRIMARY KEY ( id ),
    CONSTRAINT value_un UNIQUE ( value )
);

ALTER TABLE availability
    ADD CONSTRAINT aviability_tipo_giftcard_fk FOREIGN KEY ( tipo_giftcard )
        REFERENCES tipo_giftcard ( id );

ALTER TABLE availability
    ADD CONSTRAINT aviability_value_fk FOREIGN KEY ( value )
        REFERENCES value ( id );

ALTER TABLE detalle_factura
    ADD CONSTRAINT detalle_factura_factura_fk FOREIGN KEY ( factura_no_factura )
        REFERENCES factura ( no_factura );

ALTER TABLE detalle_factura
    ADD CONSTRAINT detalle_factura_giftcard_fk FOREIGN KEY ( giftcard )
        REFERENCES giftcard ( id );

ALTER TABLE factura
    ADD CONSTRAINT factura_tarjeta_credito_fk FOREIGN KEY ( tarjeta_credito )
        REFERENCES tarjeta_credito ( id );

ALTER TABLE factura
    ADD CONSTRAINT factura_usuario_fk FOREIGN KEY ( usuario )
        REFERENCES usuario ( id );

ALTER TABLE giftcard
    ADD CONSTRAINT giftcard_tipo_giftcard_fk FOREIGN KEY ( tipo_giftcard )
        REFERENCES tipo_giftcard ( id );

ALTER TABLE giftcard
    ADD CONSTRAINT giftcard_usuario_fk FOREIGN KEY ( duenio )
        REFERENCES usuario ( id );

ALTER TABLE giftcard
    ADD CONSTRAINT giftcard_value_fk FOREIGN KEY ( value )
        REFERENCES value ( id );

ALTER TABLE usuario
    ADD CONSTRAINT usuario_tipo_usuario_fk FOREIGN KEY ( tipo_usuario )
        REFERENCES tipo_usuario ( id );

