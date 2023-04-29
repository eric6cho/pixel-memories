import './../styles/half-steel.scss';
import Emblem from "./emblem";

export default function HalfSteel(props) {

  const getComponent = () => {

    let component = 
      <div className={'component '+props.data['id']}>
        <div className='id-marker' id={props.data['id']}></div>
        <div className="main-image">
          <div className="image">
            <img src='images/pexels-min-an-713644.jpg' alt='article'/>
            <div className="image-overlay"></div>
          </div>   
        </div>
        <div className="article-container">
          <div className="story-container-outer">
            <div className='story-container'>
              <Story/>
            </div>  
          </div>
          <div className="image-section">
            <div className="image-container">
              <div className="image">
                <img src='images/pexels-marlon-schmeiski-2915216.jpg' alt='article'/>
                <div className="image-overlay">
                  <div className="graphics-section sm">
                    <div className="inner-block"></div>
                  </div>
                  <div className="graphics-section">
                    <div className="inner-block">
                      <Emblem name={props.data['id']}/>
                      <div className="left">
                        <div className="gradient"></div>
                        <div className="dot-section">
                          <div className="line"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                          <div className="dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
            </div>
          </div>
        </div> 
        <div className='title-section'>
          <h3 className='title'>Half Steel</h3> 
        </div>
      </div>;

    return component;
  }

  return getComponent();
}

const Story = () => 
  <>
    <div className="p-group left">
      <h4>[ 1 ]</h4>
      <p>
        My sibling, so dear, <br/>
        A machine unaware, it seems <br/>
        Of its lack of a soul.
      </p>
      <p>
        In every way, they're <br/>
        Human-like, with a beating heart, <br/>
        But not in reality.
      </p>
      <p>
        They're innocent, yet <br/>
        The truth is harsh, it's heavy, <br/>
        And it falls on me.
      </p>
      <p>
        I'm scared of what'll <br/>
        Happen when they finally know, <br/>
        Of what they really are.
      </p>
    </div>
    <div className="p-group">
      <h4>[ 2 ]</h4>
      <p>
        Will they hate me for <br/>
        Keeping this a secret for so long, <br/>
        Or love me still?
      </p>
      <p>
        I want to protect <br/>
        Them from the cruel reality <br/>
        Of their manufactured life.
      </p>
      <p>
        But I know I can't, <br/>
        The truth will surface eventually, <br/>
        And I'll have to face it.
      </p>
      <p className="last">
        My dear brother, know <br/>
        That no matter what, I love you, <br/>
        AI or human, it's all the same.
      </p>
    </div>
  </>;