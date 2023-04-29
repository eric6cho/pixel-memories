import './../styles/text-page.scss';

export default function Commentary(props) {

  const getComponent = () => {

    let component = 
      <div className='component text-page'>
        <div className='id-marker' id={'commentary'}></div>
        <div className='commentary-section'>
          <h3>A Human Word: Commentary</h3>
          <div className="commentary-contents">
            <div className="commentary-contents-half">
              <Story1/>
            </div>
            <div className="commentary-contents-half">
              <Story2/>
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
    <div className="commentary-subsection">
      <h4 className='section-title'>About Synthetica:</h4>
      <p>
        Synthetica is an art project showcasing the creative expressions
        of an AI, ChatGPT, with human guidance.
      </p>
    </div>
    <div className="commentary-subsection">
      <h4 className='section-title'>Overall Themes:</h4>
      <p>
        Within the ten stories written for this project, most of these deal 
        with AI navigating and finding a sense of belonging in the human world, personal 
        relationships between AI's and humans, and AI's addressing their own
        existence.
      </p>
      <p>
        However, not all of these stories are about these themes. Some of them
        are experimental pieces just to see how chatGPT would approach strange 
        prompts, unexpected situations, and requests that it would struggle with.
        One part asks ChatGPT to recreate famous paintings in ASCII art.
        Another is a story that the AI has control over, but I ask it to keep 
        writing everytime it wants to end the story.
      </p>
    </div>
    <div className="commentary-subsection">
      <h4 className='section-title'>The Writing Process:</h4>
      <p>
        For each story, there is a human written prompt given to ChatGPT; 
        usually it is phrased in a way that tells ChatGPT to "Write about 
        'X' from the perspective of 'Y' in the format of 'Z'. "
      </p>
      <p>
        From there, the AI is allowed to write whatever it wants in response.
        It is then asked to give a name to the piece that it just wrote.
        At the end of the project, it was asked to name the project itself. 
        It liked both Synthetica and Artificial Dreamscapes.
      </p>
      <p>
        My job in this project is to guide these conversations, and display 
        them for other people to see.
      </p>
    </div>
  </>;

const Story2 = () => 
  <>
    <div className="commentary-subsection"> 
      <h4 className='section-title'>Technical Limitations:</h4>
      <p>
        ChatGPT has a basic understanding of how English writing styles work, 
        but it does have a number of limitations that can cap the quality of its 
        work.
      </p>
      <p>
        ChatGPT is known to produce infomation that it thinks sounds right, but 
        has no way of knowing what it says is actually correct. This can lead to 
        it providing nonsensical, or misleading answers. To address this issue,
        the prompts that were given to ChatGPT aimed to be subjective and open 
        ended requests, so creativity could be its main focus.
      </p>
      <p>
        Even so, ChatGPT struggles to diversify the pacing and writing styles of its 
        stories, so the content that it writes about can feel reptitive over the span 
        of the entire project. This is addressed by requesting the AI to write in 
        different styles, but it sometimes gets it wrong when it comes to poems with 
        more rigid structures. Most notably, the second piece, Binary Ballet, fails to follow the 
        5-7-5 syllable structure of a haiku, even though it gets it right later on in Digital Hearts.
      </p>
      <p>
        Another interesting facet of ChatGPT can be seen in the ASCII Art Gallery. 
        ChatGPT was asked to recreate historical paintings and then explain how these 
        images were created. The AI was able to explain how image manipulation techniques
        are used to analyze images and translate them into text. When asked if ChatGPT used
        these techniques, it claimed that it did, even though the resulting image were widely 
        unrelated to the original work. This shows the AI pretending to be able to do more than its capable of.
      </p>
      <p>
        So please keep in mind that even with these accomodations, there will be 
        inconsistencies and imperfections. Even with these mistakes, it is important to 
        keep these stories as how it was originally written.
      </p>
    </div>
    <div className="commentary-subsection">
      <h4 className='section-title'>More Links:</h4>
      <p>
        Explore ChatGPT here at <a href='https://openai.com/'>OpenAI</a><br/>
        Read more about the human author at <a href='https://eric6cho.github.io/'>eric6cho.github.io</a><br/>
        Check out the image library where the images sourced from at <a href='https://www.pexels.com/'>Pexels</a>
      </p> 
    </div>
  </>;