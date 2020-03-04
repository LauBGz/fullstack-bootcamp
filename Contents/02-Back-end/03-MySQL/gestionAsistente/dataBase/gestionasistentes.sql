-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gestionasistentess
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gestionasistentess
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gestionasistentess` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `gestionasistentess` ;

-- -----------------------------------------------------
-- Table `gestionasistentess`.`Asistente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gestionasistentess`.`Asistente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(35) NOT NULL,
  `telephone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `numberComp` TINYINT NULL DEFAULT 0,
  `paid` TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
