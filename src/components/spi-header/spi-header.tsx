import { Component } from "@stencil/core";

@Component({
  tag: "spi-header",
  styleUrl: "spi-header.scss"
})
export class SpiHeader {
  burger!: any;
  menu!: any;

  toggleBurger() {
    console.log("quizz!!");
    this.burger.classList.toggle("is-active");
    this.menu.classList.toggle("is-active");
  }

  render() {
    return (
      <nav
        class="navbar is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-brand">
            <span class="navbar-item">
              <small class="id"><stencil-route-link url="/"><i class="fas fa-home"></i>&nbsp;&nbsp;SPI-ADM</stencil-route-link></small>
            </span>

            <a
              role="button"
              class="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-content"
              onClick={() => this.toggleBurger()}
              ref={el => (this.burger = el)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="navbar-content"
            class="navbar-menu"
            ref={el => (this.menu = el)}
          >
            <div class="navbar-end navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <i class="fas fa-chalkboard-teacher"></i> Enseignant
              </a>

              <div class="navbar-dropdown">
                <a href="/enseignant" class="navbar-item">

                <i class="far fa-id-card"></i>&nbsp; Afficher les enseignants
                </a>
                <a href="/enseignant/add" class="navbar-item">
                <i class="fas fa-plus"></i>&nbsp; Ajouter Enseignant
                </a>
               
                <a href="/enseignant/search" class="navbar-item">
                <i class="fas fa-search"></i>&nbsp; Chercher par email d'Ubo
               </a>
               <a href="/enseignant/searchByName" class="navbar-item">
               <i class="fas fa-search"></i>&nbsp;Chercher par nom
               </a>
              </div>

            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
              <i class="fas fa-book-open"></i> formation
              </a>

              <div class="navbar-dropdown">
                <a href="/formation" class="navbar-item">

                <i class="far fa-id-card"></i>&nbsp;  Afficher les formations
                </a>
                <a href="/formation/add" class="navbar-item">
                <i class="fas fa-plus"></i>&nbsp;  Ajouter formation
                </a>
              
                <a href="/formation/searchByName" class="navbar-item">
                <i class="fas fa-search"></i>&nbsp;Chercher par nom
               </a>

              </div>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
              <i class="fas fa-users"></i> promotion
              </a>

              <div class="navbar-dropdown">
                <a href="/formation" class="navbar-item">

                  Afficher les promotions
                </a>
                <a href="/formation/add" class="navbar-item">
                  Ajouter promotion
                </a>
                <a href="/enseignant/detail/edit" class="navbar-item">
                  Modifier promotion
                </a>
                <a href="/enseignant/search" class="navbar-item">
                  Chercher promotion
               </a>

              </div>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
              <i class="fas fa-user-graduate"></i> Candidat
              </a>

              <div class="navbar-dropdown">
                <a href="/candidat" class="navbar-item">

                  Afficher les candidats
                </a>
                <a href="/candidat/add" class="navbar-item">
                  Ajouter candidat
                </a>
                <a href="/candidat/detail/edit" class="navbar-item">
                  Modifier canidat
                </a>
                <a href="/candidat/search" class="navbar-item">
                  Chercher candidat 
               </a>
              

              </div>

            </div>
            </div>
          </div>
        
      </nav>

    );
  }
}
