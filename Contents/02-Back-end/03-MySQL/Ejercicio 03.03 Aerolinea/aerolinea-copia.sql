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
-- Table `aerolinea`.`Avion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Avion` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FechaCreacion` TIMESTAMP NOT NULL,
  `Modelo` VARCHAR(45) NOT NULL,
  `Capacidad` SMALLINT NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aerolinea`.`Pasajero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Pasajero` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FechaCreacion` TIMESTAMP NOT NULL,
  `NunIdentificativo` TINYINT NOT NULL,
  `FirstName` VARCHAR(35) NOT NULL,
  `SecondName` VARCHAR(35) NOT NULL,
  `DateOfBirth` TIMESTAMP NOT NULL,
  `Tratamiento` ENUM('Sr', 'Sra') NOT NULL,
  `Nacionalidad` VARCHAR(20) NOT NULL,
  `MetodoPago` ENUM('PayPal', 'Tarjeta', 'Efectivo') NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `NunIdentificativo_UNIQUE` (`NunIdentificativo` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aerolinea`.`Vuelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Vuelo` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FechaCreacion` TIMESTAMP NOT NULL,
  `NumVuelo` VARCHAR(6) NOT NULL,
  `Origen` VARCHAR(45) NOT NULL,
  `Destino` VARCHAR(45) NOT NULL,
  `Duracion` TINYINT NOT NULL,
  `FechaSalida` TIMESTAMP NOT NULL,
  `FechaLlegada` TIMESTAMP NOT NULL,
  `Avion_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Avion_ID`),
  INDEX `fk_Vuelos_Aviones_idx` (`Avion_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Vuelos_Aviones2`
    FOREIGN KEY (`Avion_ID`)
    REFERENCES `aerolinea`.`Avion` (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aerolinea`.`Reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Reserva` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FechaCreacion` TIMESTAMP NOT NULL,
  `Asiento` VARCHAR(2) NULL DEFAULT NULL,
  `Clase` ENUM('BÁSICA', 'FLEXIBLE', 'BUSSINESS') NULL DEFAULT NULL,
  `Maletas` TINYINT NULL DEFAULT NULL,
  `EquipajeEspecial` TINYINT(1) NULL DEFAULT NULL,
  `Seguro` TINYINT(1) NULL DEFAULT NULL,
  `Precio` INT NULL DEFAULT NULL,
  `Vuelo_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Vuelo_ID`),
  INDEX `fk_Reservas_Vuelos1_idx` (`Vuelo_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Reservas_Vuelos2`
    FOREIGN KEY (`Vuelo_ID`)
    REFERENCES `aerolinea`.`Vuelo` (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aerolinea`.`Pasajero_Reserva`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Pasajero_Reserva` (
  `Pasajero_Reserva_ID` INT NOT NULL AUTO_INCREMENT,
  `Pasajero_ID` INT NOT NULL,
  `Reserva_ID` INT NOT NULL,
  `FechaCreacion` TIMESTAMP NOT NULL,
  INDEX `fk_Pasajeros_has_Reservas_Reservas1_idx` (`Reserva_ID` ASC) VISIBLE,
  INDEX `fk_Pasajeros_has_Reservas_Pasajeros1_idx` (`Pasajero_ID` ASC) VISIBLE,
  PRIMARY KEY (`Pasajero_Reserva_ID`, `Pasajero_ID`, `Reserva_ID`),
  CONSTRAINT `fk_Pasajeros_has_Reservas_Pasajeros11`
    FOREIGN KEY (`Pasajero_ID`)
    REFERENCES `aerolinea`.`Pasajero` (`ID`),
  CONSTRAINT `fk_Pasajeros_has_Reservas_Reservas2`
    FOREIGN KEY (`Reserva_ID`)
    REFERENCES `aerolinea`.`Reserva` (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aerolinea`.`Personal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Personal` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FechaCreacion` TIMESTAMP NOT NULL,
  `FirstName` VARCHAR(35) NOT NULL,
  `SecondName` VARCHAR(35) NOT NULL,
  `Salary` INT NOT NULL,
  `Position` ENUM('Pilotos', 'Asistentes de vuelo', 'Personal de tierra', 'Personal de facturación') NOT NULL,
  `Avion_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Avion_ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `aerolinea`.`Personal_Vuelo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `aerolinea`.`Personal_Vuelo` (
  `Personal_Vuelo_ID` INT,
  `Personal_ID` INT NOT NULL,
  `Vuelo_ID` INT NOT NULL,
  `FechaCreacion` TIMESTAMP NOT NULL,
  PRIMARY KEY (`Personal_Vuelo_ID`, `Personal_ID`, `Vuelo_ID`),
  INDEX `fk_Personal_has_Vuelos_Vuelos1_idx` (`Vuelo_ID` ASC) VISIBLE,
  INDEX `fk_Personal_has_Vuelos_Personal1_idx` (`Personal_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Personal_has_Vuelos_Personal111`
    FOREIGN KEY (`Personal_ID`)
    REFERENCES `aerolinea`.`Personal` (`ID`),
  CONSTRAINT `fk_Personal_has_Vuelos_Vuelos222`
    FOREIGN KEY (`Vuelo_ID`)
    REFERENCES `aerolinea`.`Vuelo` (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
