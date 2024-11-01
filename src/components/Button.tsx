import './Button.css'
interface ButtonType{
    value:string;
    link: string;
    width?:number;
}

function Button(props: ButtonType) {
  return (
    <div className="button" style={{width: `${props.width}px`}}>
        <a href={props.link}>{props.value}</a>

    </div>
  )
}

export default Button