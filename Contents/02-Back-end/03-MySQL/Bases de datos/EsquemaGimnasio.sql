-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gimnasio
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gimnasio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gimnasio` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `gimnasio` ;

-- -----------------------------------------------------
-- Table `gimnasio`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gimnasio`.`Usuarios` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(35) NOT NULL,
  `Altura` FLOAT NULL,
  `Edad` TINYINT NULL,
  `Activo` TINYINT(1) NOT NULL DEFAULT 1,
  `FechaInscripcion` TIMESTAMP NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gimnasio`.`Trabajadores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gimnasio`.`Trabajadores` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(35) NOT NULL,
  `Salary` FLOAT(5) NOT NULL,
  `Departmento` VARCHAR(50) NULL,
  `FechaContratación` TIMESTAMP NOT NULL,
  `TipoEmpleado` ENUM("Practicas", "Jornada Completa") NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gimnasio`.`Actividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gimnasio`.`Actividades` (
  `ID` INT NOT NULL,
  `Name` VARCHAR(50) NOT NULL,
  `Duracion` TINYINT(90) NOT NULL,
  `Trabajadores_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Trabajadores_ID`),
  INDEX `fk_Actividades_Trabajadores_idx` (`Trabajadores_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Actividades_Trabajadores`
    FOREIGN KEY (`Trabajadores_ID`)
    REFERENCES `gimnasio`.`Trabajadores` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gimnasio`.`Usuarios_has_Actividades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gimnasio`.`Usuarios_has_Actividades` (
  `Usuarios_ID` INT NOT NULL,
  `Actividades_ID` INT NOT NULL,
  `Actividades_Trabajadores_ID` INT NOT NULL,
  PRIMARY KEY (`Usuarios_ID`, `Actividades_ID`, `Actividades_Trabajadores_ID`),
  INDEX `fk_Usuarios_has_Actividades_Actividades1_idx` (`Actividades_ID` ASC, `Actividades_Trabajadores_ID` ASC) VISIBLE,
  INDEX `fk_Usuarios_has_Actividades_Usuarios1_idx` (`Usuarios_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_has_Actividades_Usuarios1`
    FOREIGN KEY (`Usuarios_ID`)
    REFERENCES `gimnasio`.`Usuarios` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_has_Actividades_Actividades1`
    FOREIGN KEY (`Actividades_ID` , `Actividades_Trabajadores_ID`)
    REFERENCES `gimnasio`.`Actividades` (`ID` , `Trabajadores_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
