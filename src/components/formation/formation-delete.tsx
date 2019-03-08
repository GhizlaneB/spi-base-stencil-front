import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { Formation } from '../../global/formation';


@Component({
    tag: 'formation-delete',
    styleUrl: 'formation-delete.scss',

})
export class EnseignantDelete {
    @Prop() match: MatchResults;
    @State() data :any[] = [] ;
    @Prop() history: RouterHistory;
    @State() formations : Formation;
    @State() apiRootUrl: string = 'https://api-dosispi.cleverapps.io/formations/';
    
    deleteData(frm) {
        fetch("https://api-dosispi.cleverapps.io/formations", {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body:JSON.stringify(frm),

          })
    .then(response => response.json());
  }

  componentWillLoad() {
    let codeFormation = this.match.params.codeFormation;
    

    console.log(this.match.params);
    return fetch(
        "https://api-dosispi.cleverapps.io/formations/" + codeFormation
    )
        .then(response => response.json())
        .then(data => {
            this.formations = data;
            console.log(codeFormation);
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
la formation qui a le code  <strong>{this.match.params.codeFormation}</strong>{this.deleteData(this.formations)} est bien supprimé.
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

   