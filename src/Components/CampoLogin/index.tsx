//Estilos
import "./CampoLogin.css"

interface propsCampoLogin {
    htmlFor: any; 
    Label: String; 
    Type: any; 
    Id: any; 
    aoAlterar: any;
    Digitado: any;

}
const CampoLogin = (props: propsCampoLogin) => {

    const aoDigita = (evento:any) => {
        props.aoAlterar(evento.target.value);
    }

    return (
        <div className="card-content-area">
            <label htmlFor={props.htmlFor}>{props.Label}</label>
            <input value = {props.Digitado} onChange={aoDigita} type={props.Type} id={props.Id} autoComplete="off" />
        </div>
    )
}

export default CampoLogin;