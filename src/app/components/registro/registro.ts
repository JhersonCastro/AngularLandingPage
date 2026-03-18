import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  nombre = '';
  email = '';
  password = '';
  confirmPassword = '';
  terminos = false;

  errorNombre = '';
  errorEmail = '';
  errorPassword = '';
  errorConfirm = '';
  errorTerminos = '';

  mostrarExito = false;

  validarNombre() {
    if (!this.nombre.trim()) {
      this.errorNombre = 'El nombre es obligatorio.';
      return false;
    }
    this.errorNombre = '';
    return true;
  }

  validarEmail() {
    const value = this.email.trim();

    if (!value) {
      this.errorEmail = 'El correo es obligatorio.';
      return false;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
      this.errorEmail =
        'Ingrese un correo válido (ej: nombre@dominio.com).';
      return false;
    }

    this.errorEmail = '';
    return true;
  }

  validarPassword() {
    if (!this.password) {
      this.errorPassword = 'La contraseña es obligatoria.';
      return false;
    }

    if (this.password.length < 6) {
      this.errorPassword = 'Mínimo 6 caracteres.';
      return false;
    }

    this.errorPassword = '';
    return true;
  }

  validarConfirm() {
    if (!this.confirmPassword) {
      this.errorConfirm = 'Debe confirmar la contraseña.';
      return false;
    }

    if (this.password !== this.confirmPassword) {
      this.errorConfirm = 'Las contraseñas no coinciden.';
      return false;
    }

    this.errorConfirm = '';
    return true;
  }

  validarTerminos() {
    if (!this.terminos) {
      this.errorTerminos = 'Debe aceptar los términos.';
      return false;
    }

    this.errorTerminos = '';
    return true;
  }

  registrar() {
    const valNombre = this.validarNombre();
    const valEmail = this.validarEmail();
    const valPassword = this.validarPassword();
    const valConfirm = this.validarConfirm();
    const valTerminos = this.validarTerminos();

    if (valNombre && valEmail && valPassword && valConfirm && valTerminos) {
      this.mostrarExito = true;
    } else {
      this.mostrarExito = false;
    }
  }

  ocultarMensaje() {
    this.mostrarExito = false;
  }

}