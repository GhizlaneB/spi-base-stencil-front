import { Component, State, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Formation } from '../../global/formation';


@Component({
  tag: 'formation-detail',
  styleUrl: 'formation-detail.scss'
})
export class FormationDetail {


    @Prop() match: MatchResults;
    @State() formation: Formation

    componentWillLoad() {
        let codeFormation = this.match.params.codeFormation;

        console.log(this.match.params);
        return fetch(
            "https://api-dosispi.cleverapps.io/formations/" + codeFormation
        )
            .then(response => response.json())
            .then(data => {
                this.formation = data;
                console.log(codeFormation);
            });
        }

  render() {
    return(
     //is-bordered is-striped is-narrow is-hoverable is-fullwidth
     <div class="container is-fluid">
     <div class="card">
  <header class="card-header">
  
    <p class="card-header-title">
    Code de la formation : {this.formation.codeFormation}
    </p>
  </header>
  <div class="card-content">
    <div class="content">
    
    <div class="content">
     <p>Nom de la formation:&nbsp;&nbsp;{this.formation.nomFormation}</p>
    </div>
    <div class="content">
     <p> debut d'accreditation: &nbsp;&nbsp; {this.formation.debutAccreditation}</p>
    </div>
    <div class="content">
     <p> fin d'accreditation: &nbsp;&nbsp;&nbsp;{this.formation.finAccreditation}</p>
    </div>
    <div class="content">
     <p>diplome: &nbsp;&nbsp;{this.formation.diplome}</p>
    </div>
    <div class="content">
     <p>double diplomation:&nbsp;&nbsp; {this.formation.doubleDiplome}</p>
    </div>
    <div class="content">
     <p> numéro d'année:&nbsp;&nbsp;&nbsp;{this.formation.n0Annee}</p>
    </div>
   
  <footer class="card-footer">
  <stencil-route-link url={'/formation/delete/' + this.formation.codeFormation}> <button class="button is-danger">Delete<i class="fas fa-trash-alt"></i></button></stencil-route-link>
  <stencil-route-link url={'/formation/edit/' + this.formation.codeFormation}> <button class="button is-warning">Edit<i class="fas fa-edit"></i></button></stencil-route-link>

  </footer>
  
</div>
<br/>
</div>
  
 
</div>
<br/>
<br/>
<br/>
<br/>
<br/><br/>
<br/>
<br/>
<br/>
</div>
      
);
}}

