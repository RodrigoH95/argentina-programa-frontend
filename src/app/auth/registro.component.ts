import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./login.component.css']
})
export class RegistroComponent implements OnInit {
  isRegistered = false;
  isRegisterFail = false;
  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  email!: string;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string;
  isLogged = false;

  constructor(private tokenService: TokenService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        this.isRegistered = true;
        this.isRegisterFail = false;
        alert("Cuenta creada exitosamente");
        this.router.navigate(['/login']);
      }, err => {
        this.isRegistered = false;
        this.isRegisterFail = true;
        this.errorMessage = err.error;
        console.log(err);
      }
    )
  }

}
