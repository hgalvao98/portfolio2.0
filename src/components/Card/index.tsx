import { CardContainer } from './styles';

interface Props {
  name: string;
  title: string;
  img: string;
  description: string;
  position: string;
  order: number;
}

export default function Card(props: Props) {
  return (
    <CardContainer style={{ order: props.order }}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={props.img} alt="Avatar" />
          </div>
          <div className="flip-card-back">
            <h1>{props.title}</h1>
            <p>{props.position}</p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
