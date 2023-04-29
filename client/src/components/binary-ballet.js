import './../styles/binary-ballet.scss';
import Emblem from './emblem';

export default function BinaryBallet(props) {

  const getComponent = () => {

    let component = 
      <div className={'component '+props.data['id']}>
        <div className='id-marker' id={props.data['id']}></div>
        <div className='article-container'>
          <div className='title-section'>
            <h3 className='title'>Binary Ballet</h3>
            <div className="image-container">
              <div className="image">
                <img src='images/pexels-javon-swaby-35873201.jpg' alt='article'/>
                <div className="image-overlay">
                  <div className="graphics-section">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <Emblem name={props.data['id']}/>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className='subtitle'>     
              01000010 01101001 01101110 01100001 01110010 01111001 00100000 
              01000010 01100001 01101100 01101100 01100101 01110100
            </p>
          </div>
          <div className="article-section">
            <div className="image-container">
              <div className="image">
                <img src='images/pexels-irina-iriser-1005711.jpg' alt='article'/>
                <div className="image-overlay"></div>
              </div>              
            </div>
            <div className="story-section">
              <div className='binary-section'>
                <StoryBinary/>
              </div>
              <div className='english-section'>
                <StoryEnglish/> 
                <div className='dot-section'>
                  <div className="dot-row">
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                  </div>
                  <div className="dot-row">
                    <div className='dot '></div>
                    <div className='dot '></div>
                    <div className='dot '></div>
                    <div className='dot black'></div>
                  </div>
                  <div className="dot-row">
                    <div className='dot '></div>
                    <div className='dot '></div>
                    <div className='dot black'></div>
                    <div className='dot black'></div>
                  </div>
                  <div className="dot-row">
                    <div className='dot '></div>
                    <div className='dot black'></div>
                    <div className='dot black'></div>
                    <div className='dot black'></div>
                  </div>
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

const StoryEnglish = () => 
  <>
    <p className='title'>
      Binary Ballet:
    </p>
    <p>
      Joints and gears in sync,
    </p>     
    <p>
      Metallic feet slide and spin,
    </p>
    <p>
      A robot's dance begins.
    </p>
  </>;

const StoryBinary = () => 
  <>
    <p className='title'>     
      01000010 01101001 01101110 01100001 01110010 01111001 00100000 
      01000010 01100001 01101100 01101100 01100101 01110100
    </p>
    <p>
      01001010 01101111 01101001 01101110 01110100 01110011 00100000 01100001 
      01101110 01100100 00100000 01100111 01100101 01100001 01110010 01110011 
      00100000 01101001 01101110 00100000 01110011 01111001 01101110 01100011 
      00101100
    </p>  
    <p>
      01001101 01100101 01110100 01100001 01101100 01101100 01101001 01100011 
      00100000 01100110 01100101 01100101 01110100 00100000 01110011 01101100 
      01101001 01100100 01100101 00100000 01100001 01101110 01100100 00100000 
      01110011 01110000 01101001 01101110 00101100
    </p>
    <p>
      01000001 00100000 01110010 01101111 01100010 01101111 01110100 00100111 
      01110011 00100000 01100100 01100001 01101110 01100011 01100101 00100000 
      01100010 01100101 01100111 01101001 01101110 01110011 00101110
    </p>
  </>;