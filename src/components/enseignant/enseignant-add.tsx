import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from "@stencil/router";

@Component({
    tag: 'enseignant-add',
    styleUrl: 'enseignant-add.scss'

})
export class EnseignantAdd {

    @State() adresse: String;
    @State() codePostal: String;
    @State() emailPerso: String;
    @State() emailUbo: String;
    @State() mobile: String;
    @State() nom: String;
    @State() pays: String;
    @State() prenom: String;
    @State() sexe: String;
    @State() telephone: String;
    @State() type: String;
    @State() ville: String;
    @State() selectValue: string;

    @Prop() home: RouterHistory;

    reculer() {
        this.home.location;
    }

    postEnseignant(ens) {
        ens.preventDefault();
        console.log("!");

        const adresse = this.adresse;
        const codePostal = this.codePostal;
        const emailPerso = this.emailPerso;
        const emailUbo = this.emailUbo;
        const mobile = this.mobile;
        const nom = this.nom;
        const pays = this.pays;
        const prenom = this.prenom;
        const sexe = this.sexe;
        const telephone = this.telephone;
        const type = this.type;
        const ville = this.ville;

        const payload = {

            adresse,
            codePostal,
            emailPerso,
            emailUbo,
            mobile,
            nom,
            pays,
            prenom,
            sexe,
            telephone,
            type,
            ville
        };



        fetch("http://api-dosispi.cleverapps.io/enseignants", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(function (res) {
                location.href = '/enseignant';
                return res.json();
            })
            .then(function (data) {
                console.log(JSON.stringify(data));
            });
    }

    componentWillLoad() {
        this.render();
    }

    render() {
        return (
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
                                    <input type="text" placeholder="Nom enseignant..." class="input is-primary " onInput={(e: any) => (this.nom = e.target.value)} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>

                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="text" placeholder="Prenom enseignant..." class="input is-primary " onInput={(e: any) => (this.prenom = e.target.value)} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>

                                </p>
                            </div>
                        </div>
                        <div class="field">
                                <p class="control has-icons-left">
                                    <span class="select" >
                                    <select  onInput={(e: any) => (this.sexe = e.target.value)} >
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
                                <input type="email" placeholder="Entrer votre email ubo " class="input is-primary " onInput={(e: any) => (this.emailUbo = e.target.value)} />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>

                            </p>
                        </div>
                        <div class="field has-addons">
                            <p class="control">
                            
                                <input type="email" placeholder="Email personnel " class="input is-primary " onInput={(e: any) => (this.emailPerso = e.target.value)} >
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
                                    <input type="text" placeholder="Entrer votre numéro de téléphone" class="input is-primary " onInput={(e: any) => (this.telephone = e.target.value)} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-phone-volume"></i>
                                    </span>

                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="text" placeholder="Entrer votre numéro de mobile" class="input is-primary " onInput={(e: any) => (this.mobile = e.target.value)} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-mobile-alt"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="text" placeholder="Entrer votre adresse " class="input is-primary " onInput={(e: any) => (this.adresse = e.target.value)} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="text" placeholder="Entrer votre ville " class="input is-primary " onInput={(e: any) => (this.ville = e.target.value)} />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-city"></i>
                                    </span>
                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="text" placeholder="Entrer votre code postal " class="input is-primary " onInput={(e: any) => (this.codePostal = e.target.value)} />
                                    <span class="icon is-small is-left">
                                    </span>
                                </p>
                            </div>

                            <div class="field">
                                <p class="control has-icons-left" onInput={(e: any) => (this.pays = e.target.value)}>
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
                                    <input type="text" placeholder="Entrer le type " class="input is-primary " onInput={(e: any) => (this.type = e.target.value)} />
                                    <span class="icon is-small is-left">
                                    </span>
                                </p>
                            </div>
                            <br />
                            <div class="field is-grouped is-grouped-centered">
                                <p class="control">
                                    <button onClick={this.postEnseignant.bind(this)} class="button is-success ">Submit</button>
                                </p>
                                <p class="control">
                                    <button type="reset" value="Vider les champs" class="button is-light " > Reset </button>

                                </p>
                            </div>
                            <br />
                        </div>
                </section>
                </form>
            </div>

                );
            }
}