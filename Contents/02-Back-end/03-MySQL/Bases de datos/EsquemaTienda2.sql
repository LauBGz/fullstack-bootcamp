-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema tienda
-- -----------------------------------------------------
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Usuarios` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(35) NOT NULL,
  `Apellidos` VARCHAR(35) NOT NULL,
  `Email` VARCHAR(35) NOT NULL,
  `Usuario` VARCHAR(10) NOT NULL,
  `Contraseña` VARCHAR(10) NOT NULL,
  `FechaDeNacimiento` TIMESTAMP NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  UNIQUE INDEX `Usuario_UNIQUE` (`Usuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Compra` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `FechaPedido` TIMESTAMP NOT NULL,
  `NumPedido` TINYINT NOT NULL,
  `PrecioTotal` FLOAT NOT NULL,
  `Usuarios_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Usuarios_ID`),
  INDEX `fk_Compra_Usuarios_idx` (`Usuarios_ID` ASC) VISIBLE,
  UNIQUE INDEX `NumPedido_UNIQUE` (`NumPedido` ASC) VISIBLE,
  CONSTRAINT `fk_Compra_Usuarios`
    FOREIGN KEY (`Usuarios_ID`)
    REFERENCES `mydb`.`Usuarios` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Proveedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Proveedores` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(35) NOT NULL,
  `TipoEmpresa` VARCHAR(35) NOT NULL,
  `NumRegMercantil` TINYINT NOT NULL,
  `NumIVA` TINYINT NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `NumRegMercantil_UNIQUE` (`NumRegMercantil` ASC) VISIBLE,
  UNIQUE INDEX `NumIVA_UNIQUE` (`NumIVA` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Productos` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(35) NOT NULL,
  `Precio` FLOAT NOT NULL,
  `Valoraciones` INT(5) NOT NULL,
  `Descripcion` TINYTEXT NULL,
  `Compra_ID` INT NOT NULL,
  `Compra_Usuarios_ID` INT NOT NULL,
  `Proveedores_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Compra_ID`, `Compra_Usuarios_ID`, `Proveedores_ID`),
  INDEX `fk_Productos_Proveedores1_idx` (`Proveedores_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_Proveedores1`
    FOREIGN KEY (`Proveedores_ID`)
    REFERENCES `mydb`.`Proveedores` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Envíos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Envíos` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Direccion` VARCHAR(45) NULL,
  `Precio` FLOAT NULL,
  `Compra_ID` INT NOT NULL,
  `Compra_Usuarios_ID` INT NOT NULL,
  `Proveedores_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Compra_ID`, `Compra_Usuarios_ID`, `Proveedores_ID`),
  INDEX `fk_Envíos_Compra1_idx` (`Compra_ID` ASC, `Compra_Usuarios_ID` ASC) VISIBLE,
  INDEX `fk_Envíos_Proveedores1_idx` (`Proveedores_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Envíos_Compra1`
    FOREIGN KEY (`Compra_ID` , `Compra_Usuarios_ID`)
    REFERENCES `mydb`.`Compra` (`ID` , `Usuarios_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Envíos_Proveedores1`
    FOREIGN KEY (`Proveedores_ID`)
    REFERENCES `mydb`.`Proveedores` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Categorías`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Categorías` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `nombreCat` VARCHAR(35) NOT NULL,
  `Productos_ID` INT NOT NULL,
  `Productos_Compra_ID` INT NOT NULL,
  `Productos_Compra_Usuarios_ID` INT NOT NULL,
  `Productos_Proveedores_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Productos_ID`, `Productos_Compra_ID`, `Productos_Compra_Usuarios_ID`, `Productos_Proveedores_ID`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombreCat` ASC) VISIBLE,
  INDEX `fk_Categorías_Productos1_idx` (`Productos_ID` ASC, `Productos_Compra_ID` ASC, `Productos_Compra_Usuarios_ID` ASC, `Productos_Proveedores_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Categorías_Productos1`
    FOREIGN KEY (`Productos_ID` , `Productos_Compra_ID` , `Productos_Compra_Usuarios_ID` , `Productos_Proveedores_ID`)
    REFERENCES `mydb`.`Productos` (`ID` , `Compra_ID` , `Compra_Usuarios_ID` , `Proveedores_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Metodos de pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Metodos de pago` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Tipo` ENUM("débito", "crédito", "paypal", "contrarembolso") NULL,
  `DireccionFacturacion` VARCHAR(45) NULL,
  `Usuarios_ID` INT NOT NULL,
  `Proveedores_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `Usuarios_ID`, `Proveedores_ID`),
  INDEX `fk_Metodos de pago_Usuarios1_idx` (`Usuarios_ID` ASC) VISIBLE,
  INDEX `fk_Metodos de pago_Proveedores1_idx` (`Proveedores_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Metodos de pago_Usuarios1`
    FOREIGN KEY (`Usuarios_ID`)
    REFERENCES `mydb`.`Usuarios` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Metodos de pago_Proveedores1`
    FOREIGN KEY (`Proveedores_ID`)
    REFERENCES `mydb`.`Proveedores` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
