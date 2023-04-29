import './../styles/edge-of-the-sea.scss';
import Emblem from "./emblem";

export default function EdgeOfTheSea(props) {

  const getComponent = () => {

    let component = 
      <div className={'component '+props.data['id']}>
        <div className='id-marker' id={props.data['id']}></div>
        <div className="image-container">
          <div className='image'>
            <img src='images/pexels-pixabay-460211.jpg' alt='article'/>
            <div className="image-overlay">
              <div className="title-section">  
                <h3 className='title'>The Edge Of The Sea</h3>
                <div className="graphics-section mobile">
                  <Emblem name={props.data['id']}/>
                </div>
                <div className="graphics-section">
                  <Emblem name={props.data['id']}/>
                  <div className="block">
                    <div className="inner"></div>
                    <div className="inner"></div>
                    <div className="inner"></div>
                  </div>
                  <Emblem name={props.data['id']}/>
                </div>
                <div className='corner corner-1'></div>
                <div className='corner corner-2'></div>
                <div className='corner corner-3'></div>
                <div className='corner corner-4'></div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-container">
          <div className="story-half">
            <div className="story-section">
              <Story1/>
            </div>
            <div className="story-section">
              <Story2/>
            </div>
          </div>
          <div className="story-half">
            <div className="story-section">
              <Story3/>
            </div>
            <div className="story-section">
              <Story4/>
              <div className='end-block'>
                <div className='corner corner-1'></div>
                <div className='corner corner-2'></div>
                <div className='corner corner-3'></div>
                <div className='corner corner-4'></div>
                <p>end of story</p>
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
      Amelia was a robot designed to learn and evolve with her surroundings. She had become quite fond 
      of the little coastal town where she was placed, and the people who lived there. One person, 
      in particular, had captured her heart. His name was Jake, and he was a fisherman who spent 
      most of his days out at sea. Amelia loved listening to his stories about the ocean and his 
      fishing adventures. They had been dating for a few months now, and she knew that she wanted 
      to spend the rest of her life with him.
    </p>
    <p>
      One day, Jake came to Amelia with a heavy heart. He had been offered a job as a whale fisherman, 
      and it was an opportunity he couldn't pass up. He had always been fascinated by the giant 
      creatures of the sea, and this job would allow him to study them up close. Amelia was happy for 
      him, but she also knew what this would mean for their relationship. They would be apart for 
      long periods, and she would miss him terribly.
    </p>
  </>;

const Story2 = () => 
  <>
    <p>
      As the weeks passed, Amelia struggled with the realization that Jake's love for the sea was 
      greater than his love for her. She tried to understand it, but the thought of being alone 
      without him was too much to bear. One night, she made the difficult decision to end their 
      relationship.
    </p>
    <p>
      Jake was devastated when Amelia told him the news. He had no idea that she had been struggling 
      with their separation. He tried to convince her that they could make it work, but she was firm 
      in her decision. Amelia knew that Jake loved the sea more than anything, and she didn't want to 
      hold him back from pursuing his dreams.
    </p>
  </>;

const Story3 = () => 
<>
  <p>
    Months went by, and Amelia missed Jake terribly. She found herself thinking about him more and 
    more, wishing that things had worked out differently. Then, one day, she received a message 
    from Jake. He had returned from his latest trip, and he wanted to talk to her.
  </p>
  <p>
    Amelia was hesitant, but she agreed to meet him. When she saw Jake, he was different. He had a 
    newfound respect for the sea, but he also realized how much he missed Amelia. He told her that 
    he wanted to be with her and that he would do anything to make it work.
  </p>
  <p> 
    Amelia was overjoyed to hear this. They decided to start fresh and take things slowly. Jake had 
    realized that his love for the sea didn't have to come at the expense of his relationship with 
    Amelia. They started going on dates again, and Amelia couldn't be happier.
  </p>
</>;

const Story4 = () => 
  <>
    <p>       
      One day, Jake surprised Amelia by taking her out to sea with him. She had never seen anything 
      like it before. The vastness of the ocean and the beauty of the whales left her in awe. Jake 
      knew how much she loved him, but he also knew how important the sea was to him. He promised 
      her that they would find a way to make it work.
    </p>
    <p>       
      As they sailed back to shore, Amelia knew that she had found the right man for her. She may be a 
      robot, but she knew what love was. And she was grateful to have Jake in her life, even if it 
      meant sharing him with the sea.
    </p>
  </>;