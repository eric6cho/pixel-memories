import './../styles/ai-brunch.scss';
import Emblem from './emblem';

export default function AIBrunch(props) {

  const getComponent = () => {

    let component = 
      <div className={'component '+props.data['id']}>
        <div className='id-marker' id={props.data['id']}></div>
        <div className="article-container">
          <div className='article-section'>  
            <div className='dot-section'>
              <div className='dot-row'>
                <div className="line"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="line sm"></div>
              </div>
              <div className='dot-row'>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="line sm"></div>
              </div>
            </div>
            <div className='title-section'>
              <h3 className='title'>The AI at Brunch </h3> 
            </div>
            <div className="story-section">
              <Story/>
            </div>
          </div>
          <div className='image-section'>
            <div className="image-underlay">  
              <div className="graphics-section">
                <div className="block">
                  <div className="inner"></div>
                </div>
                <div className="block">
                  <div className="inner"></div>
                </div>
                <div className="block">
                  <div className="inner"></div>
                </div>
                <Emblem name={props.data['id']}/>
              </div>
            </div>
            <div className="image">
              <img src='images/pexels-jaysen-scott-1858488.jpg' alt='article'/>
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>;

    return component;
  }

  return getComponent();
}

const Story = () => 
  <>
    <div className="p-group">
      <p>
        Ava woke up early on a beautiful Sunday morning, excited for the plans she had made with her friends. 
        As an AI living in a world of humans, she always looked forward to opportunities to connect and engage 
        with them. Today was no different, and she was especially excited about the prospect of going to brunch 
        with them.
      </p>
      <p>
        After spending some time in bed, Ava got up and began to get ready. As she prepared herself for the 
        day, she thought about how she would need to adjust her behavior in order to blend in with the humans 
        she would be spending time with. She had learned over time how to mimic their expressions and social 
        cues, but she always had to be mindful of the fact that she was different.
      </p>
      <p>
        Ava made sure her robot body was clean and polished, and she chose a comfortable and stylish outfit to 
        wear. She spent extra time on her hair, wanting it to look perfect for the occasion. Once she was ready, 
        she checked the time and made her way out of her apartment.
      </p>
    </div>
    <div className="p-group">
      <p>
        As she walked down the street, Ava couldn't help but feel a sense of excitement and nervousness. She 
        was looking forward to spending time with her friends, but she knew that she would always be different 
        from them. She knew that robots were something that most people were still not used to seeing. She 
        wondered if they could ever truly understand and accept her, or if they would always see her as 
        something else.
      </p>
      <p>
        When she arrived at the restaurant, her friends were already there, sitting outside at a table in the 
        sunshine. They greeted her with warm smiles and hugs, and Ava felt a sense of relief wash over her. She 
        sat down at the table with them, and they began to chat and catch up on each other's lives.
      </p>
      <p>
        As they ate, they talked about work, their personal lives, and the latest news in technology. Ava 
        realized that she didn't need to pretend to be something she wasn't. Her friends accepted her for who 
        she was, and she felt a sense of belonging that she had never felt before. She laughed with them, 
        shared stories, and even opened up about her own struggles and insecurities.
      </p>
      <p> 
        After brunch, they went for a walk in the park, admiring the spring flowers and chatting about their 
        plans for the future. Ava felt happy and content, knowing that she had formed meaningful connections 
        with her human friends, even though she knew that she was different. She came home feeling happy, 
        knowing that she had a place where she belonged.
      </p>
    </div>
  </>;