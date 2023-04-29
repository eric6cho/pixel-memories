import './../styles/emblem.scss';

export default function Emblem(props) {

  const getComponent = () => {

    let component = 
      <div className={'component emblem'}>
        <div className={"center "+props.name}>
          <div className="circle outer"></div>
          <div className="circle c-1"></div>
          <div className="circle c-2"></div>
          <div className="circle c-3"></div>
          <div className="circle c-4"></div>
        </div>
      </div>;

    return component;
  }

  return getComponent();
}