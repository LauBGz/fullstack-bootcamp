-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema aerolinea
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema aerolinea
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `aerolinea` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `aerolinea` ;

-- -----------------------------------------------------
-- Table `aerolinea`.`Personal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Personal` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FirstName` VARCHAR(35) NOT NULL,
  `SecondName` VARCHAR(35) NOT NULL,
  `Salary` INT NOT NULL,
  `Position` ENUM("Pilotos", "Asistentes de vuelo", "Personal de tierra", "Personal de facturación") NOT NULL,
  `Aviones_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Aviones_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolinea`.`Aviones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Aviones` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Modelo` VARCHAR(45) NOT NULL,
  `Capacidad` SMALLINT NOT NULL,
  `Avionescol` VARCHAR(45) NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolinea`.`Vuelos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Vuelos` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NumVuelo` VARCHAR(6) NULL,
  `Origen` VARCHAR(45) NULL,
  `Destino` VARCHAR(45) NULL,
  `Duracion` TINYINT NULL,
  `FechaSalida` TIMESTAMP NULL,
  `FechaLlegada` TIMESTAMP NULL,
  `Aviones_ID` INT NOT NULL,
  `Personal_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Aviones_ID`, `Personal_ID`),
  INDEX `fk_Vuelos_Aviones_idx` (`Aviones_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Vuelos_Aviones`
    FOREIGN KEY (`Aviones_ID`)
    REFERENCES `aerolinea`.`Aviones` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolinea`.`Pasajeros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Pasajeros` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `NunIdentificativo` TINYINT NULL,
  `FirstName` VARCHAR(35) NULL,
  `SecondName` VARCHAR(35) NULL,
  `DateOfBirth` TIMESTAMP NULL,
  `Tratamiento` ENUM("Sr", "Sra") NULL,
  `Nacionalidad` VARCHAR(20) NULL,
  `MetodoPago` ENUM("PayPal", "Tarjeta", "Efectivo") NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolinea`.`Reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Reservas` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Asiento` VARCHAR(2) NULL,
  `Clase` ENUM("BÁSICA", "FLEXIBLE", "BUSSINESS") NULL,
  `Maletas` TINYINT(2) NULL,
  `EquipajeEspecial` TINYINT(1) NULL,
  `Seguro` TINYINT(1) NULL,
  `Precio` INT NULL,
  `Vuelos_ID` INT NOT NULL,
  `Vuelos_Aviones_ID` INT NOT NULL,
  `Vuelos_Personal_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Vuelos_ID`, `Vuelos_Aviones_ID`, `Vuelos_Personal_ID`),
  INDEX `fk_Reservas_Vuelos1_idx` (`Vuelos_ID` ASC, `Vuelos_Aviones_ID` ASC, `Vuelos_Personal_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Reservas_Vuelos1`
    FOREIGN KEY (`Vuelos_ID` , `Vuelos_Aviones_ID` , `Vuelos_Personal_ID`)
    REFERENCES `aerolinea`.`Vuelos` (`ID` , `Aviones_ID` , `Personal_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolinea`.`Personal_has_Vuelos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Personal_has_Vuelos` (
  `Personal_ID` INT NOT NULL,
  `Personal_Aviones_ID` INT NOT NULL,
  `Vuelos_ID` INT NOT NULL,
  `Vuelos_Aviones_ID` INT NOT NULL,
  `Vuelos_Personal_ID` INT NOT NULL,
  PRIMARY KEY (`Personal_ID`, `Personal_Aviones_ID`, `Vuelos_ID`, `Vuelos_Aviones_ID`, `Vuelos_Personal_ID`),
  INDEX `fk_Personal_has_Vuelos_Vuelos1_idx` (`Vuelos_ID` ASC, `Vuelos_Aviones_ID` ASC, `Vuelos_Personal_ID` ASC) VISIBLE,
  INDEX `fk_Personal_has_Vuelos_Personal1_idx` (`Personal_ID` ASC, `Personal_Aviones_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Personal_has_Vuelos_Personal1`
    FOREIGN KEY (`Personal_ID` , `Personal_Aviones_ID`)
    REFERENCES `aerolinea`.`Personal` (`ID` , `Aviones_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Personal_has_Vuelos_Vuelos1`
    FOREIGN KEY (`Vuelos_ID` , `Vuelos_Aviones_ID` , `Vuelos_Personal_ID`)
    REFERENCES `aerolinea`.`Vuelos` (`ID` , `Aviones_ID` , `Personal_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `aerolinea`.`Pasajeros_has_Reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Pasajeros_has_Reservas` (
  `Pasajeros_ID` INT NOT NULL,
  `Reservas_ID` INT NOT NULL,
  `Reservas_Vuelos_ID` INT NOT NULL,
  `Reservas_Vuelos_Aviones_ID` INT NOT NULL,
  `Reservas_Vuelos_Personal_ID` INT NOT NULL,
  PRIMARY KEY (`Pasajeros_ID`, `Reservas_ID`, `Reservas_Vuelos_ID`, `Reservas_Vuelos_Aviones_ID`, `Reservas_Vuelos_Personal_ID`),
  INDEX `fk_Pasajeros_has_Reservas_Reservas1_idx` (`Reservas_ID` ASC, `Reservas_Vuelos_ID` ASC, `Reservas_Vuelos_Aviones_ID` ASC, `Reservas_Vuelos_Personal_ID` ASC) VISIBLE,
  INDEX `fk_Pasajeros_has_Reservas_Pasajeros1_idx` (`Pasajeros_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Pasajeros_has_Reservas_Pasajeros1`
    FOREIGN KEY (`Pasajeros_ID`)
    REFERENCES `aerolinea`.`Pasajeros` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pasajeros_has_Reservas_Reservas1`
    FOREIGN KEY (`Reservas_ID` , `Reservas_Vuelos_ID` , `Reservas_Vuelos_Aviones_ID` , `Reservas_Vuelos_Personal_ID`)
    REFERENCES `aerolinea`.`Reservas` (`ID` , `Vuelos_ID` , `Vuelos_Aviones_ID` , `Vuelos_Personal_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
