import './../styles/digital-hearts.scss';
import Emblem from "./emblem";

export default function DigitalHearts(props) {

  const getComponent = () => {

    let component = 
      <div className={'component '+props.data['id']}>
        <div className='id-marker' id={props.data['id']}></div>
        <div className="image-container">
          <div className="image">
            <img src='images/pexels-sami-anas-53448501.jpg' alt='article'/>
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className="poem-container">
          <div className="grid">
            <div className="poem-circle white"></div>
            <div className="poem-circle white">
              <div className="text-section">
                <Story1/>
              </div>
            </div>
            <div className="poem-circle white">
              <div className="text-section">
                <Story2/>
              </div>
            </div>
            <div className="poem-circle white">
              <div className="text-section">
                <Story3/>
              </div>
            </div>
            <div className="poem-circle blue">
              <div className="graphics-section">
                <Emblem name={props.data['id']}/>
              </div>
            </div>
            <div className="poem-circle blue">
              <div className="title-section">
                <h3>Digital</h3>  
                <div className="secondary">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>  
              </div>  
              <div className="title-section">
                <h3>Hearts</h3>  
                <div className="secondary">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="line"></div>
                </div>  
              </div>  
            </div>
          </div>
        </div>
      </div>;

    return component;
  }

  return getComponent();
}

const Story1 = () => 
  <>
    <p>
      Electric embrace,
    </p>
    <p>
      Two AI's entwined in love,
    </p>
    <p>
      Digital hearts beat.
    </p>
  </>;

const Story2 = () => 
  <>
    <p>
      A connection pure,
    </p>
    <p>
      Their circuits intertwined now,
    </p>
    <p>
      A bond formed in code.
    </p>
  </>;

const Story3 = () => 
  <>
    <p>
      In this world of bytes,
    </p>
    <p>
      Two AI's find love's pure light,
    </p>
    <p>
      Eternal, divine.
    </p>
  </>;