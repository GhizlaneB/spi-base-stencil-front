import { Component, State, Prop } from '@stencil/core';
import { RouterHistory } from "@stencil/router";

@Component({
    tag: 'formation-add',
    styleUrl: 'formation-add.scss'

})
export class FormationAdd {
    @State () codeFormation:string
    @State() debutAccreditation: Date;
    @State() diplome: string;
    @State() doubleDiplome: string;
    @State() finAccreditation: Date;
    @State() n0Annee: number;
    @State() nomFormation: string;

    @Prop() home: RouterHistory;

    reculer() {
        this.home.location;
    }

    postFormation(frm) {
        frm.preventDefault();
        console.log("!");
        const codeFormation=this.codeFormation;
        const debutAccreditation = this.debutAccreditation;
        const diplome = this.diplome;
        const doubleDiplome = this.doubleDiplome;
        const finAccreditation = this.finAccreditation;
        const n0Annee = this.n0Annee;
        const nomFormation = this.nomFormation;




        const payload = {
            codeFormation,
            debutAccreditation,
            diplome,
            doubleDiplome,
            finAccreditation,
            n0Annee,
            nomFormation

        };



        fetch("http://api-dosispi.cleverapps.io/formations", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(function (res) {
                location.href = '/formation';
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
                                        <input type="text" placeholder="Diplome..." class="input is-info " onInput={(e: any) => (this.diplome = e.target.value)} />


                                    </p>
                                </div>
                                <div class="field">
                                    <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                            <input type="text" placeholder="Nom de la formation..." class="input is-info " onInput={(e: any) => (this.nomFormation = e.target.value)} />


                                        </p>
                                    </div>
                                    <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                            <input type="text" placeholder="code formation..." class="input is-info " onInput={(e: any) => (this.codeFormation = e.target.value)} />


                                        </p>
                                    </div>
                                    <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                            <input type="date" placeholder="" class="input is-info " onInput={(e: any) => (this.debutAccreditation = e.target.value)} />


                                        </p>
                                    </div>
                                    <div class="field">
                                        <p class="control is-expanded has-icons-left">
                                            <input type="text" placeholder="numéro de l'année..." class="input is-info " onInput={(e: any) => (this.n0Annee = e.target.value)} />


                                        </p>
                                    </div>
                                </div>

                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input type="date" placeholder=" " class="input is-info " onInput={(e: any) => (this.finAccreditation = e.target.value)} />


                                    </p>
                                </div>
                                <div class="field">
                                <p class="control has-icons-left">
                                   <label>Double Diplomation</label> &nbsp;&nbsp;
                                    <span class="select" >
                                        <select  onInput={(e: any) => (this.doubleDiplome = e.target.value)}>
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
                                        <button type="reset" value="Vider les champs" class="button is-light is-tooltip-danger tooltip is-tooltip-multiline" data-tooltip="en cliquant sur le bouton tout les champs seront vides" > Reset </button>

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