import './../styles/home.scss';

export default function Home(props) {

  const getComponent = () => {

    let component = 
      <div className='component home'>
        <div className='id-marker' id={'home'}></div>
        <div className="image">
          <img src='images/pexels-berkay-i̇lhan-4412789.jpg' alt='article'/>
          <div className="image-overlay"></div>
        </div>
        <div className='title-section'> 
          <h3 className='title'>
            <span className="blue-dot"></span>
            Synthetica
          </h3>
          <h4 className='subtitle'>
            a collection of an AI's thoughts in short form literature
          </h4>    
        </div>
      </div>;

    return component;
  }

  return getComponent();
}