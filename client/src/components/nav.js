import './../styles/nav.scss';

export default function Nav(props) {

  const getLinks = part =>
    Object.keys(props.allData[part]).map(key=>
      props.allData[part][key]['nav'] &&
      <a href={'#'+props.allData[part][key]['id']} className={'link'}>{key}</a>
    );

  const getComponent = () => {

    let component = 
      <div className='component nav'>
        <a href={'#home'} className={'link title'}>
          <div className="blue-dot"></div>
          <h3 className='title'>Synthetica</h3>
        </a>
        {getLinks('Part I')}
        {getLinks('Part II')}
      </div>;

    return component;
  }

  return getComponent();
}