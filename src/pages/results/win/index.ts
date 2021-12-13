export function initWin(change) {
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="cont-win">
          <div class="star-contenedor">
            <my-estrella star="green" class="estrella"></my-estrella>
            <game-text class="texto" tag="h1">Ganaste</game-text>   
          </div>
          <div class="score-and-button">
            <score-table></score-table>        
            <div class="boton-contenedor">
              <game-button class="boton">Volver a jugar!</game-button>
            </div>
          </div>
        </div>
          `;

  const style = document.createElement("style");
  style.textContent = `
          .cont-win{
            background-color: #888949E5;
            padding:30px;
            height:100vh;
          }
          @media(min-width:677px){
            .cont-win{
              display:flex;
              flex-direction:column;
              gap:20px;
            }
          }
          .cont-win .texto{
            --verde:white;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            position: absolute;  
            top:60px;
          }
          .estrella{
            margin:0 auto;
            width:260px;

          }
          .star-contenedor{
            display:flex;
            justify-content: center;
          }
          .score-table{
            border:solid;
            display:block;
          }
          .boton-contenedor{
            margin-top:15px;
          }
          @media(min-width:677px){
            .score-and-button{
              display:flex;
              justify-content:space-evenly;
              align-items:center;
            }
          }
          `;

  div.appendChild(style);
  const button = div.querySelector(".boton");

  button.addEventListener("click", () => {
    change("/instructions");
  });
  return div;
}
