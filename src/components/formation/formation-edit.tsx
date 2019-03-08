import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Formation } from '../../global/formation';

@Component({
  tag: 'formation-edit',
  styleUrl: 'formation-edit.scss',
  shadow: true
})
export class formationEdit {
  @State() value: string;
  @Prop() nomFormation: string;
  codeFormation: string;
  debutAccreditation: Date;
  diplome: string;
  doubleDiplome: string;
  finAccreditation: Date;
  n0Annee: number;

  @Prop() match: MatchResults


  @State() formation: Formation
  handleChangeNomFormation(event) {
    this.nomFormation = event.target.value;
  }
  handleChangeDoubleDiplome(event) {
    this.doubleDiplome = event.target.value;
  }
  handleChangeFinAccreditation(event) {
    this.finAccreditation = event.target.value;
  }
  handleChangeDebutAccreditation(event) {
    this.debutAccreditation = event.target.value;
  }
  handleChangeCodeFormation(event) {
    this.codeFormation = event.target.value;
  }
  
  handleChangeNoAnnee(event) {
    this.n0Annee = event.target.value;
  }
  handleChangeDiplome(event) {
    this.diplome = event.target.value;
  }
  

  postFormation(e) {
    e.preventDefault();
    console.log("!");
    const nomFormation = this.nomFormation;
    const codeFormation= this.codeFormation;
    const debutAccreditation= this.debutAccreditation;
    const diplome= this.diplome;
    const doubleDiplome= this.doubleDiplome;
    const finAccreditation= this.finAccreditation;
    const n0Annee= this.n0Annee;
   

    const payload = {
        nomFormation,
        codeFormation,
        debutAccreditation,
        diplome,
        doubleDiplome,
        finAccreditation,
        n0Annee,
    
    };
    fetch("https://dosispi.cleverapps.io/formations", {
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

        <div class="container is-fluid">
        <form>
            <section class="section">
                <div class="container">
                    <span class="title is-size-3 is-bold">
                        <br />
                        Formulaire de modification
                    </span><br /><br />
                    <span class="is-size-5">
                    </span>
                    <div class="field">
                        <div class="field">
                            <p class="control is-expanded has-icons-left">
                                <input type="text" placeholder="Diplome..." class="input is-info " onInput={(event) => this.handleChangeDiplome(event)}  />


                            </p>
                        </div>
                        <div class="field">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="text" placeholder="Nom de la formation..." class="input is-info "onInput={(event) => this.handleChangeNomFormation(event)}  />


                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="text" placeholder="code formation..." class="input is-info " onInput={(event) => this.handleChangeCodeFormation(event)} />


                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="date" placeholder="" class="input is-info " onInput={(event) => this.handleChangeDebutAccreditation(event)}  />


                                </p>
                            </div>
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input type="text" placeholder="numéro de l'année..." class="input is-info " onInput={(event) => this.handleChangeNoAnnee(event)}  />


                                </p>
                            </div>
                        </div>

                        <div class="field">
                            <p class="control is-expanded has-icons-left">
                                <input type="date" placeholder=" " class="input is-info " onInput={(event) => this.handleChangeDebutAccreditation(event)} />


                            </p>
                        </div>
                        <div class="field">
                        <p class="control has-icons-left">
                           <label>Double Diplomation</label> &nbsp;&nbsp;
                            <span class="select" >
                                <select  onInput={(event) => this.handleChangeDoubleDiplome(event)}>
                                    <option selected>O</option>
                                    <option>N</option>
                                </select>
                            </span>
                               
                            
                        </p>
                    </div>
                       
                        

                        <br />
                        <div class="field is-grouped is-grouped-centered">
                            <p class="control">
                                <button onClick={this.postFormation.bind(this)} class="button is-info ">Submit</button>
                            </p>
                            <p class="control">
                                <button type="reset" value="Vider les champs" class="button is-light"> Reset </button>

                            </p>
                        </div>

                        <br/>
                       
                    </div>
                    </div>
        </section>
        </form>
    </div>

        );
    }
}