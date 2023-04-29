import './../styles/text-page.scss';

export default function Intro(props) {

  const getComponent = () => {
    
    let component = 
      <div className='component text-page'>
        <div className='intro-section'>
          <Story/>
        </div>
      </div>;

    return component;
  }

  return getComponent();
}

const Story = () => 
  <>
    <h3>An Introduction to Synthetica</h3>
    <p>
      Synthetica is an art project showcasing the creative expressions
      of a chatbot AI, ChatGPT, with human guidance.
    </p>
    <p>
      This collection includes short stories, poems, and experimental pieces 
      that mainly revolve around AI's and humans navigating their coexistence
      in the near future. 
    </p>
    <p>
      This premise introduces the themes of AI introspection, personal relationships 
      between AI's and humans, and AI's attempt to perceieve the human 
      world in the same way humans do.
    </p>
  </>;