-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema biblioteca
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `biblioteca` ;

-- -----------------------------------------------------
-- Table `biblioteca`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Usuario` (
  `ID` INT NOT NULL,
  `IDNumber` INT NOT NULL,
  `FirstName` VARCHAR(35) NOT NULL,
  `SecondName` VARCHAR(35) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `FechaAlta` TIMESTAMP NOT NULL,
  `Activo` TINYINT(1) NOT NULL,
  `FechaNacimiento` TIMESTAMP NOT NULL,
  `Telefono` TINYINT NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `IDNumber_UNIQUE` (`IDNumber` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Libro`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Libro` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `ISBN` BIGINT NOT NULL,
  `Title` VARCHAR(100) NOT NULL,
  `Autor` VARCHAR(35) NOT NULL,
  `Editorial` VARCHAR(35) NOT NULL,
  `FechaPublicacion` TIMESTAMP NOT NULL,
  `Genero` VARCHAR(100) NOT NULL,
  `Idioma` VARCHAR(20) NOT NULL,
  `NumDeCopias` INT(5) NOT NULL,
  `Disponible` TINYINT(1) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ISBN_UNIQUE` (`ISBN` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Prestamos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Prestamos` (
  `ID` INT NOT NULL,
  `FechaDeInicio` TIMESTAMP NOT NULL,
  `FechaDeFin` TIMESTAMP NOT NULL,
  `ExpedidoPor` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `biblioteca`.`Trabajadores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `biblioteca`.`Trabajadores` (
  `ID` INT NOT NULL,
  `FirstName` VARCHAR(35) NOT NULL,
  `SecondName` VARCHAR(35) NOT NULL,
  `Departamento` ENUM("Administracion", "Bibliotecario", "Restaurador", "Archivador", "Limpieza") NOT NULL,
  `Salario` FLOAT NULL,
  `Email` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
