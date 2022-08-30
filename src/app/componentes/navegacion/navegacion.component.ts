import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  isLogged = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");
    body!.style.overflow = "visible";

    hamburger!.addEventListener("click", () => {
      hamburger!.classList.toggle("active");
      navMenu!.classList.toggle("active");
      if(hamburger!.className.includes("active")) {
        body!.style.overflow = "hidden";
      } else {
        (body!.style.overflow = "visible");
      }
    });

    document.querySelectorAll(".nav-link").forEach(elem => elem.addEventListener("click", () => {
      hamburger?.classList.remove("active");
      navMenu!.classList.remove("active");
      body!.style.overflow = "visible";
    }))

    this.tokenService.getToken() ? this.isLogged = true : this.isLogged = false;
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
