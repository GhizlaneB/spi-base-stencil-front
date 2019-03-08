import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { Enseignant } from '../../global/enseignant';


@Component({
    tag: 'enseignant-delete',
    styleUrl: 'enseignant-delete.scss',

})
export class EnseignantDelete {
    @Prop() match: MatchResults;
    @State() data :any[] = [] ;
    @Prop() history: RouterHistory;
    @State() enseignants : Enseignant;
    @State() apiRootUrl: string = 'https://api-dosispi.cleverapps.io/enseignants/';
    
    deleteData(ens) {
        fetch("https://api-dosispi.cleverapps.io/enseignants", {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body:JSON.stringify(ens),

          })
    .then(response => response.json());
  }

  componentWillLoad() {
    let noEnseignant = this.match.params.noEnseignant;
    

    console.log(this.match.params);
    return fetch(
        "https://api-dosispi.cleverapps.io/enseignants/" + noEnseignant
    )
        .then(response => response.json())
        .then(data => {
            this.enseignants = data;
            console.log(noEnseignant);
        });
    }

render() {
    return (
        <div>

        <div class="columns is-mobile is-centered">
       <br/>
       

<article class="message is-success ">
<div class="message-header is-mobile is-centered">
<br/>
<br/>


</div>

<div class="message-body">
L'Enseignant numéro  <strong>{this.match.params.noEnseignant}</strong>{this.deleteData(this.enseignants)} est bien supprimé.
</div>
</article>
        </div>)}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        
        </div>
        
    );
}
}

   