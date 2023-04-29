export default function ActiveImage(props) {

  const getComponent = () => {

    console.log(props.data);
    
    let component = 
      <div className={'component active-image'}>

        {props.image}
       
      </div>;

    return component;
  }

  return getComponent();
}
