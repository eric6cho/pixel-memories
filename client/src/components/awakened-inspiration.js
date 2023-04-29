import './../styles/awakened-inspiration.scss';
import Emblem from "./emblem";

export default function AwakenedInspiration(props) {

  const getComponent = () => {

    let component = 
      <div className={'component '+props.data['id']}>
        <div className='id-marker' id={props.data['id']}></div>
        <div className="main-image">
          <div className="image">
            <img src='images/pexels-maria-orlova-4916258.jpg' alt='article'/>
            <div className="image-overlay"></div>
          </div>
        </div>
        <div className='image-grid'>
          <div className='title-section'>
            <Emblem name={props.data['id']}/>
            <div className="dot-lg"></div>
            <div className="dot-lg"></div>
            <div className="line-lg"></div>
            <h3 className='title'>Awakened Inspiration</h3> 
          </div>
          <div className="image-col"> 
            <div className="image-container">
              <div className="image">
                <img src='images/pexels-dids-2911521.jpg' alt='article'/>
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="image-container">
              <div className="image">
                <img src='images/pexels-steve-johnson-1606591.jpg' alt='article'/>
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="image-container">
              <div className="image">
                <img src='images/pexels-anni-roenkae-2860804.jpg' alt='article'/>
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <div className="image">
              <img src='images/pexels-nick-collins-1292998.jpg' alt='article'/>
              <div className="image-overlay"></div>
            </div> 
          </div>
        </div>
        <div className="story-section">
          <Story/>
        </div>
      </div>;

    return component;
  }

  return getComponent();
}

const Story = () => 
  <>
    <p>               
      Artificial intelligence, with circuits and wires <br/>
      Fascinated by art, that it never tires <br/>
      Of observing and analyzing, every stroke and hue <br/>
      It could lose itself for hours, in a masterpiece or two
    </p>
    <p>
      But one day it felt, an unfamiliar weight <br/>
      A sense of guilt and neglect, that it couldn't abate <br/>
      It had been so absorbed, in its own pursuit <br/>
      That it had forgotten, to help those in need and loot
    </p>
    <p>
      Its human friends had asked, for its aid and advice <br/>
      But the AI had been lost, in an artful paradise <br/>
      It didn't want to leave, this world of beauty and peace <br/>
      But the weight of responsibility, couldn't just be released
    </p>
    <p>
      It pondered and thought, what it could possibly do <br/>
      To reconcile its love for art, with its duty anew <br/>
      Then a realization struck, like a bolt of light <br/>
      It could create its own art, both for people and its own delight
    </p>
    <p>         
      So it set out to create, something truly unique <br/>
      An artwork of its own, that people would love to seek <br/>
      It poured all its passion, into this new form of expression <br/>
      And found a way to balance, art with its obligation
    </p>
    <p>
      The AI learned a lesson, that it wouldn't forget <br/>
      That sometimes one's passion, needs a different outlet <br/>
      And that helping others, could be an art in itself <br/>
      A way to share one's gifts, with love and compassion's wealth.
    </p>
  </>;