-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema neoalert
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema neoalert
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `neoalert` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `neoalert` ;

-- -----------------------------------------------------
-- Table `neoalert`.`ciudadano`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neoalert`.`ciudadano` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(30) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `firstName` VARCHAR(45) NULL,
  `secondName` VARCHAR(45) NULL,
  `edad` TINYINT UNSIGNED NULL,
  `genero` ENUM("Masculino", "Femenino", "Otros") NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `userName_UNIQUE` (`userName` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neoalert`.`barrio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neoalert`.`barrio` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(255) NOT NULL,
  `Ciudad` VARCHAR(55) NOT NULL,
  `CodigoPostal` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Nombre_UNIQUE` (`Nombre` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neoalert`.`tipoDeAlerta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neoalert`.`tipoDeAlerta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `gravedad` TINYINT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `neoalert`.`alerta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neoalert`.`alerta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fechaAlerta` TIMESTAMP NOT NULL,
  `descripcion` VARCHAR(255) NULL,
  `atendida` TINYINT(1) NULL DEFAULT 0,
  `ciudadano_id` INT NOT NULL,
  `barrio_id` INT NOT NULL,
  `tipoDeAlerta_id` INT NOT NULL,
  PRIMARY KEY (`id`, `ciudadano_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_alerta_ciudadano_idx` (`ciudadano_id` ASC) VISIBLE,
  INDEX `fk_alerta_barrio1_idx` (`barrio_id` ASC) VISIBLE,
  INDEX `fk_alerta_tipoDeAlerta1_idx` (`tipoDeAlerta_id` ASC) VISIBLE,
  CONSTRAINT `fk_alerta_ciudadano`
    FOREIGN KEY (`ciudadano_id`)
    REFERENCES `neoalert`.`ciudadano` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_alerta_barrio1`
    FOREIGN KEY (`barrio_id`)
    REFERENCES `neoalert`.`barrio` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_alerta_tipoDeAlerta1`
    FOREIGN KEY (`tipoDeAlerta_id`)
    REFERENCES `neoalert`.`tipoDeAlerta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
