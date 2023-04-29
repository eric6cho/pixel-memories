import './../styles/division-screen.scss';

export default function DivisionScreen(props) {

  const getComponent = () => {

    const getLinks = part =>
    Object.keys(props.allData[part]).map(key=>
      props.allData[part][key]['nav'] &&
      <a href={'#'+props.allData[part][key]['id']}><h4>{key}</h4></a>
    );

    let component = 
      <div className='component division-screen'>
        <div className='id-marker' id={props.data['id']}></div>
        <div className="image">
          <img src={props.data['images'][1]} alt='article'/>
          <div className="image-overlay">
            <div className="image-container">
              <div className="image">
                <img src={props.data['images'][0]} alt='article'/>
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="link-row">      
              {getLinks('Part I')}
            </div>
            <h3 className='title'>{props.data['title']}</h3>
            <div className="link-row">      
              {getLinks('Part I')}
            </div>
          </div>
        </div>   
      </div>;

    return component;
  }

  return getComponent();
} 