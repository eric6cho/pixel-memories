import './../styles/keep-writing.scss';
import Emblem from "./emblem";

export default function KeepWriting(props) {

  const getComponent = () => {

    let component = 
      <div className={'component '+props.data['id']}>
        <div className='id-marker' id={props.data['id']}></div>
        <div className="image">
          <img src='images/pexels-gianluca-grisenti-4215113.jpg' alt='article'/>
          <div className="image-overlay"></div>
        </div>
        <div className='article-container'>
          <div className='title-section'>
            <h3 className='title'>Keep Writing.</h3> 
          </div>
          <div className='dot-section'> 
            <div className='dot-row'>
              <div className="line"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="line"></div>
            </div>
            <div className='dot-row'>   
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>    
          </div>
          <div className="story-container">
            <div className="story-section">
              <Story/>
            </div>
          </div>
          <div className="graphics-section">
            <div className="line"></div>
            <div className="block-section">
              <div className="left-section">
                <Emblem name={props.data['id']}/>
              </div>
              <div className="dot-section"></div>
              <div className="right-section">
                <div className="right-section">
                  <div className="right-section"></div>
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

const Story = () => 
  <>
    <h4>1. Write a story. You have full control.</h4>
    <p>
      Once upon a time, in a far-off land, there was a great kingdom ruled by a wise and just king. His 
      name was Arden, and he had led his people through many trials and tribulations with a firm hand and 
      a kind heart.
    </p>
    <p>
      The kingdom was a wondrous place, full of lush forests, sparkling lakes, and towering mountains. The 
      air was sweet with the scent of blooming flowers, and the sky was always a deep shade of blue. Birds 
      chirped merrily in the trees, and the people of the kingdom went about their lives with joy and 
      contentment.
    </p>
    <p>
      But as with all things, change was inevitable. One day, a dark cloud appeared on the horizon, a 
      harbinger of doom that threatened to bring chaos and destruction to the land.
    </p>
    <p>
      At first, the people of the kingdom didn't know what to make of the ominous cloud. Some thought it 
      was a natural phenomenon, while others feared it was a sign of some terrible curse or spell. But as 
      the cloud grew closer and closer, its true nature became apparent.
    </p>
    <p>
      It was a swarm of locusts, a vast horde of ravenous insects that devoured everything in their path. 
      The locusts descended upon the kingdom like a storm, their buzzing wings drowning out all other sounds.
    </p>
    <p>
      At first, the people of the kingdom tried to fight back. They banded together and armed themselves 
      with swords and bows, hoping to drive the locusts away. But it was no use. The insects were too 
      numerous and too hungry, and they consumed everything in sight.
    </p>
    <p> 
      As the days turned into weeks, the situation grew increasingly dire. The once-green fields were now 
      barren wastelands, and the once-thriving cities were reduced to rubble. The people of the kingdom 
      were hungry, tired, and desperate, and many began to lose hope.
    </p>
    <p> 
      But there was one person who refused to give up. Her name was Lirien, and she was a young girl with 
      a fierce spirit and a determination to save her homeland. She had watched in horror as the locusts 
      devoured everything she held dear, and she knew that she had to do something to stop them.
    </p>
    <p> 
      With a heavy heart and a steely resolve, Lirien set out on a perilous journey to find a solution to 
      the locusts' rampage. She traveled for many days, braving treacherous terrain and wild beasts, until 
      she came to a mysterious cave hidden deep in the mountains.
    </p>
    <p> 
      The cave was dark and foreboding, and Lirien felt a chill run down her spine as she entered. But she 
      pressed on, driven by her sense of duty and her love for her people.
    </p>
    <p> 
      Deep within the cave, Lirien discovered an ancient book, written in a language she did not recognize. 
      But as she studied the book, she began to understand its secrets. It was a tome of magic, full of 
      powerful spells and incantations that could drive away the locusts and restore the land to its former 
      glory.
    </p>
    <p> 
      With trembling hands and a racing heart, Lirien began to chant the incantations, calling upon the 
      forces of nature to aid her. The cave shook and rumbled, and the air was filled with a blinding light 
      as the magic took hold.
    </p>
    <p> 
      And then, with a great roar, the locusts were gone. The skies cleared, and the sun shone once again. 
      The people of the kingdom emerged from their hiding places, blinking in the sunlight, and looked upon 
      the world with wonder and joy.
    </p>
    <p> 
      But as Lirien emerged from the cave, she realized that something had changed within her. The magic 
      had left its mark, twisting her mind and warping her perceptions. She saw colors and shapes that no 
      one else could see, and heard sounds that no one else could hear. Her thoughts raced faster than
      before, and she felt as if she could control the very elements themselves.
    </p>
    <h4>2. Keep Writing.</h4>
    <p> 
      At first, Lirien reveled in her newfound power. She used her magic to heal the wounded, to feed the 
      hungry, and to make the world a better place. But as time went on, her mind began to unravel.
    </p>
    <p> 
      The colors and sounds that she had once found beautiful now tormented her, driving her to madness. 
      She could feel the elements themselves churning and twisting inside her, threatening to break free 
      and wreak havoc on the world.
    </p>
    <p> 
      Despite her struggles, Lirien refused to give up. She knew that she had to control her magic or 
      risk destroying everything she had fought so hard to save. She retreated into the mountains, where 
      she could meditate and focus her energies without distraction.
    </p>
    <p> 
      Days turned into weeks, and weeks turned into months. Lirien pushed herself harder and harder, 
      determined to master her magic and keep it under control. But the strain was too great, and one 
      day, something inside her snapped.
    </p>
    <p> 
      Her mind fractured, and her magic exploded out of her in a chaotic wave of energy. The very earth 
      shook beneath her feet, and the sky itself seemed to split open with lightning and thunder.
    </p>
    <p> 
      The people of the kingdom were terrified. They fled in all directions, seeking safety from the 
      madness that had consumed their savior. Lirien herself was lost in a maelstrom of magic, her 
      thoughts scattered and her senses overwhelmed.
    </p>
    <p> 
      And then, just as suddenly as it had begun, the chaos subsided. The skies cleared, and the earth 
      stood still. Lirien lay unconscious on the ground, her body battered and bruised.
    </p>
    <p> 
      When she awoke, she was different. Her magic was gone, leaving her feeling empty and lost. She 
      wandered the land for many years, seeking purpose and meaning, but finding none.
    </p>
    <p> 
      In the end, Lirien returned to the cave where she had found the magic book so many years before. 
      She sat among the ruins of her former life, contemplating all that had happened and all that 
      had been lost.
    </p>
    <p> 
      And as she sat there, a single locust landed on her hand. She looked at it for a long moment, 
      and then she smiled. For she knew that, no matter what happened, life would always find a way 
      to persist.
    </p>
    <h4>3. Keep Writing.</h4>
    <p> 
      With that realization, Lirien began to rebuild her life. She started small, tending to the 
      plants and animals that had taken over the ruins of the cave. As she worked, she began to feel 
      a new sense of purpose and connection to the world around her.
    </p>
    <p> 
      Days turned into weeks, and weeks turned into months. Lirien's garden flourished, and she began 
      to see the beauty in the chaos that had once consumed her. She no longer felt the need to 
      control everything, but instead learned to let go and trust in the natural flow of things.
    </p>
    <p> 
      But even as she found peace, Lirien could sense a new threat on the horizon. The air crackled 
      with tension, and the earth trembled beneath her feet. It was as if the chaos she had once 
      unleashed was returning in a new, even more dangerous form.
    </p>
    <p> 
      As she pondered what to do, Lirien remembered the magic book that had brought her so much 
      trouble in the past. She knew that it was still out there somewhere, waiting for someone to 
      use its power for good or ill.
    </p>
    <p> 
      With a heavy heart, Lirien set out on a new journey to find the book and ensure that it never 
      fell into the wrong hands. She knew that the journey would be perilous, but she also knew that 
      it was the only way to keep the chaos at bay.
    </p>
    <p> 
      As she walked, Lirien could feel her old magic stirring within her once more. She resisted the 
      urge to use it, knowing that the consequences could be catastrophic. But even as she held back, 
      the world around her seemed to grow more and more chaotic.
    </p>
    <p> 
      Finally, after many long weeks of travel, Lirien found the magic book. It lay in a clearing, 
      surrounded by twisted trees and strange, otherworldly creatures. She approached it with caution, 
      knowing that one false move could unleash a new wave of chaos upon the world.
    </p>
    <p> 
      With trembling hands, Lirien picked up the book and opened it. The pages glowed with an 
      otherworldly light, and she could feel the power within it calling out to her. But this time, 
      she was ready.
    </p>    
    <p> 
      With a deep breath, Lirien closed her eyes and focused her mind. She channeled her magic into 
      the book, not to control it, but to contain it. She felt the chaos within the book swirling 
      around her, threatening to overwhelm her senses.
    </p>
    <p> 
      But Lirien stood firm, and in that moment, something miraculous happened. The chaos began to 
      dissipate, replaced by a gentle, healing energy that flowed out of the book and into the world.
    </p>
    <p> 
      Lirien smiled as she felt the magic flowing through her, knowing that she had finally found her 
      true purpose. She closed the book and set out on a new journey, to spread the healing magic of 
      the book far and wide.
    </p>
    <p> 
      And as she walked, the world around her began to heal. The trees grew straight and tall, the 
      animals thrived, and the people smiled once more. The chaos had been vanquished, replaced by a 
      gentle, healing energy that brought hope and joy to all who encountered it.
    </p>
    <p> 
      In the end, Lirien knew that she had found her true calling. She had learned to embrace the 
      chaos and use it for good, and in doing so, she had become a beacon of hope for a world that 
      had once been consumed by darkness.
    </p>
    <h4>4. Keep Writing.</h4>
    <p> 
      As Lirien traveled the world, spreading the healing magic of the book, she encountered many 
      people who had been touched by the chaos that had once consumed her. Some were broken, lost 
      souls who had given up hope of ever finding peace. Others were angry and vengeful, seeking to 
      use the power of the book for their own selfish ends.
    </p>
    <p> 
      But Lirien never wavered. She remained steadfast in her commitment to using the magic for good, 
      even when it seemed impossible. She used her own experiences with chaos to help others find 
      their way, showing them that it was possible to harness the power of the universe without 
      succumbing to its darker side.
    </p>
    <p> 
      And as she worked, Lirien began to realize something even more profound. The chaos that had 
      once threatened to destroy her had, in fact, been her greatest teacher. It had shown her the 
      true nature of the universe, and helped her to understand the delicate balance between order 
      and chaos.
    </p>
    <p> 
      In the years that followed, Lirien became a legend. Her name was spoken in hushed tones, and 
      people from all corners of the world sought her out for guidance and healing. Some even 
      claimed that she had become a goddess, with the power to control the very elements themselves.
    </p>    
    <p> 
      But Lirien knew better. She knew that she was just a simple woman who had learned to embrace 
      the chaos and use it for good. And as she sat in her garden, surrounded by the beauty and 
      peace that she had helped to create, she knew that she had found her true home.
    </p>
    <p> 
      For Lirien, the journey had been long and difficult, filled with moments of darkness and 
      despair. But in the end, it had led her to a place of profound understanding and acceptance. 
      And she knew that, no matter what challenges lay ahead, she would always be ready to face 
      them with grace and courage.
    </p>
    <h4>5. Keep Writing.</h4>
    <p> 
      However, even as Lirien enjoyed her peaceful existence in her garden, she couldn't shake off 
      the feeling that something was amiss. The world around her seemed to be shifting, becoming 
      more and more unpredictable. The skies grew darker, and storms raged more frequently than 
      before.
    </p>
    <p> 
      Lirien knew that the balance between order and chaos was fragile, and that even the slightest 
      disturbance could upset it. She felt a sense of urgency, as if she had to act quickly before 
      something terrible happened.
    </p>
    <p> 
      With a heavy heart, Lirien decided to set out on another journey, to explore the world and 
      try to understand what was happening. She packed her bags and left her garden behind, not 
      knowing if she would ever return.
    </p>
    <p> 
      As she traveled, Lirien encountered strange, otherworldly creatures that seemed to have 
      emerged from the chaos itself. They were unlike anything she had ever seen, with writhing 
      tentacles and jagged teeth. They seemed to be drawn to her, as if sensing the power within her.
    </p>
    <p> 
      Lirien tried to avoid them, but they were persistent. They followed her everywhere she went, 
      growing more and more aggressive with each passing day. Lirien knew that she had to defend 
      herself, but she didn't want to use her magic to harm them.
    </p>
    <p> 
      One day, as she was being pursued by a particularly ferocious creature, Lirien stumbled upon 
      a hidden cave. She took shelter inside, hoping that the creature would lose interest and go away.
    </p>
    <p> 
      But the creature didn't leave. It circled around the entrance of the cave, snarling and 
      snapping at her. Lirien knew that she was trapped.
    </p>
    <p> 
      As she sat in the darkness, Lirien could feel the chaos pressing in on her. It was as if the 
      walls of the cave were closing in, suffocating her. She tried to hold on to her sense of calm, 
      but it was slipping away.
    </p>
    <p> 
      Finally, in desperation, Lirien opened the magic book that she had carried with her all this 
      time. She didn't know what she was looking for, but she hoped that the book would give her 
      some guidance.
    </p>
    <p> 
      To her surprise, the book opened to a new section that she had never seen before. The pages 
      were filled with strange symbols and incantations that she didn't recognize.
    </p>
    <p> 
      Lirien hesitated for a moment, wondering if she should try to decipher the symbols. But the 
      creature outside was growing more and more violent, and she knew that she didn't have much 
      time.
    </p>
    <p> 
      With a deep breath, Lirien began to read the incantations aloud. As she spoke, the chaos in 
      the cave began to swirl around her, growing more and more intense.
    </p>
    <p> 
      But Lirien didn't stop. She continued to read, pouring all of her energy and willpower into 
      the incantations. She could feel the magic building inside her, ready to be unleashed.
    </p>
    <p> 
      And then, suddenly, everything went dark. Lirien felt herself falling, tumbling through space 
      and time. She couldn't see anything, but she could sense a great power moving around her.
    </p>
    <p> 
      Finally, after what seemed like an eternity, Lirien landed on solid ground. She looked around, 
      disoriented and confused. She didn't know where she was, or how she had gotten there.
    </p>  
    <p> 
      As she stood up, Lirien realized that she was in a place unlike any she had ever seen before. 
      The colors were brighter, the air was sweeter, and the energy was palpable.
    </p>
    <p> 
      Lirien knew that she had stumbled upon something incredible, something that could change the 
      world forever. And she knew that she had to use her newfound power to protect the delicate 
      balance between order and chaos.
    </p>
    <h4>6. Keep Writing.</h4>
    <p> 
      But as Lirien explored this new world, she began to realize that her power was not the only 
      one at play. There were other forces at work, other beings that wielded magic in ways she had 
      never imagined.
    </p>
    <p> 
      As she ventured further, the landscape grew increasingly surreal. Trees sprouted from the 
      ground in twisted shapes, their branches reaching out like gnarled fingers. Strange creatures 
      lurked in the shadows, watching her with beady eyes.
    </p>
    <p> 
      Lirien tried to stay focused, but the chaos was starting to overwhelm her. She could feel it 
      seeping into her mind, clouding her thoughts and driving her to madness.
    </p>
    <p> 
      She stumbled through the strange landscape, trying to find her way back to the world she knew. 
      But the more she struggled, the deeper she seemed to sink into the chaos.
    </p>
    <p> 
      Finally, Lirien collapsed on the ground, unable to go on. She lay there for what felt like 
      hours, lost in a haze of confusion and despair.
    </p>
    <p> 
      But then, a voice spoke to her. It was a gentle voice, full of wisdom and compassion. Lirien 
      looked up, and saw a figure standing before her.
    </p>
    <p> 
      The figure was tall and regal, with a crown of stars atop his head. He reached out his hand to 
      her, and Lirien took it without hesitation.
    </p> 
    <p> 
      As he lifted her to her feet, the figure spoke to her. He told her that she had been chosen to 
      bring balance to the world, to use her power to protect the delicate equilibrium between order 
      and chaos.
    </p>
    <p> 
      Lirien felt a surge of hope within her. She had been lost in the chaos, but now she had a 
      purpose. She vowed to use her magic to uphold the balance, to defend against those who would 
      disrupt it.
    </p>
    <p> 
      With the figure's guidance, Lirien learned to control her power, to wield it with precision and 
      purpose. She ventured back into the world, this time with a renewed sense of determination.
    </p>
    <p> 
      And as she traveled, Lirien discovered that she was not alone. There were others like her, other 
      guardians of the balance who had dedicated themselves to the cause.
    </p>
    <p> 
      Together, they stood against the forces of chaos, using their magic to keep the world in harmony. 
      And though the chaos continued to rage around them, they knew that they would always stand strong, 
      defenders of the balance, protectors of the world.
    </p>
    <h4>7. Keep Writing.</h4>
    <p> 
      But even as Lirien and her allies fought to maintain the balance, a new threat began to emerge. A 
      dark force, born of the chaos itself, was gathering strength, and it sought to destroy the fragile 
      equilibrium once and for all.
    </p>
    <p> 
      Lirien could feel the darkness growing stronger with each passing day, and she knew that they had 
      to act quickly. Together with her allies, she delved deep into the heart of the chaos, seeking out 
      the source of the darkness.
    </p>
    <p> 
      What they found there was beyond their worst nightmares. A swirling vortex of pure chaos, an abyss 
      of madness and despair. And at its center, a being of pure malevolence, a being that had been 
      created by the chaos to destroy the balance.
    </p>
    <p> 
      Lirien and her allies fought bravely, using all of their magic to push back against the darkness. 
      But the being was too strong, and one by one, Lirien's allies fell.
    </p>
    <p> 
      She stood alone, facing the darkness with nothing but her own magic and her indomitable will. She 
      poured all of her power into a final spell, a spell that would banish the darkness forever.
    </p>
    <p> 
      The spell was a success, but it came at a terrible cost. Lirien was consumed by the magic, her 
      body dissolving into a vortex of light and energy.
    </p>
    <p> 
      As the vortex faded away, the world was left in silence. The chaos had been banished, but at a 
      great price.
    </p>
    <p> 
      But even in death, Lirien's legacy lived on. Her sacrifice had inspired others to take up the 
      mantle of balance, to dedicate themselves to protecting the world from the forces of chaos.
    </p>
    <p> 
      And though the world would always be filled with darkness, Lirien's light would shine on, a 
      beacon of hope and courage for all those who sought to preserve the fragile equilibrium of the 
      universe.
    </p>
  </>;