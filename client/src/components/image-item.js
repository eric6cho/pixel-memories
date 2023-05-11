
export default function ImageItem(props) {

  const getComponent = () => {
    
    let component = 
      <div className={'component image-item'}>


        

        <div className="image-item-inner">

          <div className="image">
            <img src={props.data['image']} alt={'pixel-art'}/>
            <div className="image-overlay"></div>
          </div>

        </div>

    
        <div className="text-section">
          <p>{props.data['notes']}</p>
          <p>{props.data['location']}, {props.data['year']}</p>
        
        </div>
   


       
      </div>;

    return component;
  }

  return getComponent();
}
