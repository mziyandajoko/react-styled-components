import { CardStyle } from "./styles/Card.styled"
export default function  Card({item: {id, title, body, image,}}){
        return (
            <CardStyle>
                <div>
                <h2>{title}</h2>   
                <p>{body}</p>
                </div>
                <div>
                    <img src={`./images/${image}`} alt="image" />
                </div>
            </CardStyle>
        )
} 