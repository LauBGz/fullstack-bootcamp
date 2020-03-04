-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema neocoffee
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema neocoffee
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `neocoffee` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `neocoffee` ;

-- -----------------------------------------------------
-- Table `neocoffee`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `neocoffee`.`User` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `UserName` VARCHAR(30) NOT NULL,
  `Password` VARCHAR(250) NOT NULL,
  `FirstName` VARCHAR(45) NULL,
  `SecondName` VARCHAR(45) NULL,
  `SignUpDate` TIMESTAMP NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  UNIQUE INDEX `UserName_UNIQUE` (`UserName` ASC) VISIBLE,
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
