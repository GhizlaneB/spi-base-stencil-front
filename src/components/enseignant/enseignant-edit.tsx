import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Enseignant } from '../../global/enseignant';

@Component({
  tag: 'enseignant-edit',
  styleUrl: 'enseignant-edit.scss',
  shadow: true
})
export class EnsAdd {
  @State() value: string;
  @Prop() nom: string;
  adresse: string;
  codePostal: string;
  emailPerso: string;
  emailUbo: string;
  mobile: string;
  noEnseignant: number;
  pays: string;
  prenom: string;
  sexe: string;
  telephone: string;
  type: string;
  ville: string;

  @Prop() match: MatchResults


  @State() enseignant: Enseignant
  handleChangeNom(event) {
    this.nom = event.target.value;
  }
  handleChangeAdresse(event) {
    this.adresse = event.target.value;
  }
  handleChangeCodePostal(event) {
    this.codePostal = event.target.value;
  }
  handleChangeEmailPerso(event) {
    this.emailPerso = event.target.value;
  }
  handleChangeEmailUbo(event) {
    this.emailUbo = event.target.value;
  }
  handleChangeMobile(event) {
    this.mobile = event.target.value;
  }
  handleChangeNo(event) {
    this.noEnseignant = event.target.value;
  }
  handleChangePays(event) {
    this.pays = event.target.value;
  }
  handleChangePrenom(event) {
    this.prenom = event.target.value;
  }
  handleChangeType(event) {
    this.type = event.target.value;
  }
  handleChangeSexe(event) {
    this.sexe = event.target.value;
    console.log(event.target.value)
  }

  handleChangeVille(event) {
    this.ville = event.target.value;
    console.log(event.target.value)
  }
  handleChangeTelephone(event) {
    this.telephone = event.target.value;
    console.log(event.target.value)
  }

  postArticle(e) {
    e.preventDefault();
    console.log("!");
    const nom = this.nom;
    const prenom = this.prenom;
    const noEnseignant = this.noEnseignant;
    const adresse = this.adresse;
    const codePostal = this.codePostal;
    const pays = this.pays;
    const ville = this.ville;
    const sexe = this.sexe;
    const type = this.type;
    const mobile = this.mobile;
    const telephone = this.telephone;
    const emailUbo = this.emailUbo;
    const emailPerso = this.emailPerso;

    const payload = {
      nom,
      prenom,
      noEnseignant,
      adresse,
      codePostal,
      pays,
      ville,
      sexe,
      type,
      mobile,
      telephone,
      emailUbo,
      emailPerso
    };
    fetch("https://dosispi.cleverapps.io/enseignants", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(JSON.stringify(data));
      });
  }


  render() {
    return (

      <div class="hero-body">
        <div class="container">
          <div class="container is-fluid">
            <form>
              <section class="section">
                <div class="container">
                  <span class="title is-size-3 is-bold">
                    <br />
                    Formulaire d'ajout
         </span><br /><br />
                  <span class="is-size-5">
                  </span>
                  <div class="field">
                    <div class="field">
                      <p class="control is-expanded has-icons-left">
                        <input type="text" placeholder="Nom enseignant..." class="input is-primary " onInput={(event) => this.handleChangeNom(event)} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-user"></i>
                        </span>

                      </p>
                    </div>
                    <div class="field">
                      <p class="control is-expanded has-icons-left">
                        <input type="text" placeholder="Prenom enseignant..." class="input is-primary " onInput={(event) => this.handleChangePrenom(event)} />
                        <span class="icon is-small is-left">
                          <i class="fas fa-user"></i>
                        </span>

                      </p>
                    </div>
                  </div>
                  <div class="field">
                    <p class="control has-icons-left">
                      <span class="select" >
                        <select onInput={(event) => this.handleChangeSexe(event)}>
                          <option selected>F</option>
                          <option >H</option>
                        </select>
                      </span>
                      <span class="icon is-small is-left">
                        <i class="fas fa-transgender"></i>
                      </span>

                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input type="email" placeholder="Entrer votre email ubo " class="input is-primary " onInput={(event) => this.handleChangeEmailUbo(event)} />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>

                    </p>
                  </div>
                  <div class="field has-addons">
                    <p class="control">

                      <input type="email" placeholder="Email personnel " class="input is-primary " onInput={(event) => this.handleChangeEmailPerso(event)}>
                      </input>

                    </p>
                    <p class="control">
                      <a class="button is-static">
                        @gmail.com
    </a>
                    </p>


                  </div>


                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input type="text" placeholder="Entrer votre numéro de téléphone" class="input is-primary " onInput={(event) => this.handleChangeTelephone(event)} />
                      <span class="icon is-small is-left">
                        <i class="fas fa-phone-volume"></i>
                      </span>

                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input type="text" placeholder="Entrer votre numéro de mobile" class="input is-primary " onInput={(event) => this.handleChangeMobile(event)} />
                      <span class="icon is-small is-left">
                        <i class="fas fa-mobile-alt"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input type="text" placeholder="Entrer votre adresse " class="input is-primary " onInput={(event) => this.handleChangeAdresse(event)} />
                      <span class="icon is-small is-left">
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input type="text" placeholder="Entrer votre ville " class="input is-primary " onInput={(event) => this.handleChangeVille(event)} />
                      <span class="icon is-small is-left">
                        <i class="fas fa-city"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input type="text" placeholder="Entrer votre code postal " class="input is-primary " onInput={(event) => this.handleChangeCodePostal(event)} />
                      <span class="icon is-small is-left">
                      </span>
                    </p>
                  </div>

                  <div class="field">
                    <p class="control has-icons-left" onInput={(event) => this.handleChangePays(event)}>
                      <span class="select" >
                        <select>
                          <option selected>France</option>
                          <option>Maroc</option>
                          <option>USA</option>
                        </select>
                      </span>
                      <span class="icon is-small is-left">
                        <i class="fas fa-globe"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input type="text" placeholder="Entrer le type " class="input is-primary " onInput={(event) => this.handleChangeType(event)} />
                      <span class="icon is-small is-left">
                      </span>
                    </p>
                  </div>
                  <br />
                  <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                      <button onClick={this.postArticle.bind(this)} class="button is-primary ">Submit</button>
                    </p>
                    <p class="control">
                      <button type="reset" value="Vider les champs" class="button is-light is-trash " > Reset </button>

                    </p>
                  </div>
                  <br />
                </div>
              </section>
            </form>
          </div>

         </div>
         </div>



              );
            }
}