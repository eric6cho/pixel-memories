import ImageItem from './image-item';

export default function ImageGrid(props) {

  const getComponent = () => {
    
    let component = 
      <div className={'component image-grid'}>
        <div className="inner-grid">
          {Object.keys(props.imageGroups).reverse().map(groupTitle=>
            <>
              <h3 className='group-title'>{groupTitle}</h3>
              {props.imageGroups[groupTitle].map(item=>
                <div className="grid-item" onClick={()=>props.onSelect(item)}>
                  <ImageItem data={item}/>
                </div>
              )}
            </>
          )}
        </div>
      </div>;

    return component;
  }

  return getComponent();
}
