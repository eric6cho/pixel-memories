import React, { useState, useEffect, useRef } from "react";
import './../styles/ascii-art.scss';
import Emblem from "./emblem";

export default function ASCIIArt(props) {

  const [active,setActive] = useState(null);

  const getComponent = () => {
    
    let data = {
      'Mona Lisa':{
        title:'Mona Lisa',
        artist:'Leonardo da Vinci',
        text:<Text1/>,
        image:<Image1/>,
        size:'large',
      },
      'The Starry Night':{
        title:'The Starry Night',
        artist:'Vincent van Gogh',
        text:<Text2/>,
        image:<Image2/>,
        size:'large',
      },
      'The Girl With A Pearl Earring':{
        title:'The Girl With A Pearl Earring',
        artist:'Johannes Vermeer',
        text:<Text3/>,
        image:<Image3/>,
        size:'large',
      },
      'The Scream':{
        title:'The Scream',
        artist:'Edvard Munch',
        text:<Text4/>,
        image:<Image4/>,
        size:'small',
      },
      'The Great Wave Off Kanagawa':{
        title:'The Great Wave Off Kanagawa',
        artist:'Hokusai',
        text:<Text5/>,
        image:<Image5/>,
        size:'large',
      },
      'Nighthawks':{
        title:'Nighthawks',
        artist:'Edward Hopper',
        text:<Text6/>,
        image:<Image6/>,
        size:'small',
      },
      'The Wanderer Above The Sea Of Fog':{
        title:'The Wanderer Above The Sea Of Fog',
        artist:'Caspar David Friedrich',
        text:<Text7/>,
        image:<Image7/>,
        size:'small',
      },
      'Nymphéas':{
        title:'Nymphéas',
        artist:'Claude Monet',
        text:<Text8/>,
        image:<Image8/>,
        size:'small',
      },
    };

    let component = 
      <div className={'component '+props.data['id']}>
        <div className='id-marker' id={props.data['id']}></div>
        <div className="main-image-container">  
          <div className="image">
            <img src='images/pexels-codioful-(formerly-gradienta)-6985184.jpg' alt='article'/>
            <div className="image-overlay">
            </div>
          </div>
        </div>
        <div className='content-section'>
          <div className="title-section">
            <div className="graphic-section">
              <div className="left-section">
                <div className="inner">
                  <h3>ASCII Art Gallery</h3>
                </div>
              </div>
              <Emblem name={props.data['id']}/>
            </div>
          </div>
          <div className="description-section">
            <Description/>
          </div>
          <div className='grid-section'>
            {Object.keys(data).map(title=>
              <div className="grid-image-outer" onClick={()=>setActive(data[title])}>
                <div className={"grid-image "+data[title]['size']}>
                  {data[title]['image']}
                </div>  
              </div>              
            )}
          </div>
        </div>
        <div className="dialog-container">  
          {
            active?
            <div className='dialog-box '>
              <div className='dialog-title'>
                <h4>
                  {active['title'] +' | '+ active['artist']}
                </h4>
              </div>
              <div className="dialog-content ">
                <div className="image">
                  <img src='images/pexels-codioful-(formerly-gradienta)-7130498.jpg' alt='article'/>
                  <div className={"image-overlay "+active['size']}>
                    {active['image']} 
                  </div>
                </div>
                {active['text']} 
              </div>
            </div>:
            <div className='dialog-box '>
              <div className='dialog-title'>
                <h4>No Image Selected</h4>
              </div>
              <div className="dialog-content ">
                <div className="image">
                  <img src='images/pexels-codioful-(formerly-gradienta)-7130498.jpg' alt='article'/>
                  <div className="image-overlay "></div>
                </div>
                <p>
                  Select an image to learn more about the artwork that the AI's interpretation is based on.
                </p>       
              </div>
            </div>
          }
        </div>
      </div>;

    return component;
  }

  return getComponent();
}

const Description = () =>
  <>
    <p>
      Welcome to our AI-generated ASCII art gallery, featuring stunning works of art 
      inspired by historical paintings. Our AI algorithm has carefully analyzed and 
      interpreted the intricate details of some of the most famous paintings 
      throughout history, and transformed them into beautiful ASCII art pieces.
    </p>
    <p>
      Each piece in our gallery showcases a different painting, and the ASCII art 
      interpretation captures the essence and style of the original work. From the 
      rich, vibrant colors of Van Gogh's "Starry Night" to the delicate brushstrokes 
      of Monet's "Water Lilies," our AI-generated ASCII art pieces offer a unique and 
      fascinating way to experience these iconic works of art.
    </p>
    <p>
      Whether you're a lover of classic art or a tech enthusiast fascinated by AI's 
      capabilities, our gallery is sure to captivate and inspire you. Come explore 
      the world of art through the eyes of our AI algorithm and discover the beauty 
      of ASCII art.
    </p>
  </>;

const Image1 = () =>          
  <pre>{`
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
|||||||||||                        ||||||||||||||||||||||||||||
|||||||||              ,-'""\`-.    |||||||||||||||||||||||||||
|||||||              ,'        \`.  |||||||||||||||||||||||||||
|||||||             /            \\ |||||||||||||||||||||||||||
||||||             /_             \`|||||||||||||||||||||||||||
||||||             |-\`\\__          |||||||||||||||||||||||||||
||||||             \`-\\___\`\`-.___   |||||||||||||||||||||||||||
||||||                 \`---\`\\   \`--|||||||||||||||||||||||||||
||||||                        |\\_  |||||||||||||||||||||||||||
||||||                      /\`   \`.|\`|||||||||||||||||||||||||
||||||                     /       \\ |||||||||||||||||||||||||
||||||                    /  /     | ||||||||||||||||||||||||||
||||||                   |  |      | |||||||||||||||||||||||||||
||||||                   |__|  |__/ |||||||||||||||||||||||||||
||||||                   \`-._\`-'_./||||||||||||||||||||||||||
||||||                    /\`  _ _ \`|||||||||||||||||||||||||
||||||                   /     X   \\||||||||||||||||||||||||||
||||||                  /\`\\/\\  X   ||||||||||||||||||||||||||
||||||                 /         ,|||||||||||||||||||||||||||
||||||                /          ||||||||||||||||||||||||||
||||||               /   /        |||||||||||||||||||||||||||
||||||              |   |         |||||||||||||||||||||||||||
||||||              |__ \\_____    |||||||||||||||||||||||||
||||||             /          \`~~~|||||||||||||||||||||||
||||||            /              ||||||||||||||||||||||||||
||||||           /_______________||||||||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
  `}</pre>;

const Text1 = () => 
  <p>
    The Mona Lisa is a portrait painting created by the Italian artist Leonardo da 
    Vinci in the early 16th century, believed to have been completed sometime between 
    1503 and 1519. The painting depicts a seated woman, believed to be Lisa Gherardini, 
    the wife of Florentine merchant Francesco del Giocondo, with a mountainous 
    landscape in the background. The painting is widely regarded as one of the greatest 
    works of art ever created and is considered a masterpiece of the Renaissance period.
  </p>;
  
const Image2 = () =>
  <pre>{`
                                       .////.             
                                    .((*/////(     
                                ,.*/**/(((////*    
                                .//***((((//***,    
                              ,*/***//(((//***.    
                              .**//*//(((//**/(    
                              .**//((/((((//*/*.    
                              ./#(((#%%%%#(///*.    
                              ,*/#%&&&&%%#(/*/.    
                            ..,,*(%&&&&&%#(/**,.    
                        ...,...,/#&&&&&&%#(/,,...    
                      ... .....,/%%%%%%#(/,.....    
                    ...........,/(((((((/,.......    
                  ..........,*((((((((//,.......    
                ...........,*((((((((((//,......    
              ............./((((((((((((//,.....    
            ..............,*#((((((((((((((/.....    
        .................*################(/...    
      ..................,(#%&&%&&&&%%%##(/,...    
    ...................,*#%&&&&&&&%%%%%#(/*,..    
  .....................,(#%%%&&&&&&%%%%%%#(/*.    
  ......................,/#%%%%%%%%%%%##((//**,.    
.......................,/(((((((((((((///***,.    
......................,*/(((((((((((////***.    
  ......................,*/(((((((((((((/*/*.    
                        ..,*(#(((((((((((/*/.    
                        .,*///(((((((((/*/.    
                          .*(///////(((((/*.    
                            ,*/**********/.    
                            ,**//******/*.    
                              ,*********/.    
                              .*******,    
                                .****,    
                                  .*,.    
  `}</pre>;

const Text2 = () => 
  <p>
    "The Starry Night" is a famous painting by Vincent van Gogh depicting the view 
    outside his window at the asylum where he was receiving treatment for mental illness.
    The painting features a swirling blue sky filled with stars and a bright crescent 
    moon, while the village below is depicted in muted blues and greens with scattered 
    yellow-orange lights. Despite being painted during a difficult time in van Gogh's 
    life, the painting has become an iconic work of art known for its vivid colors,
    dynamic composition, and intense emotion.
  </p>;
  
const Image3 = () =>
  <pre>{`
                      _._
                  _.-~ |.~-._
                .-~     |.....~-.
            .-~        |..........~-.
          .-~            |............~-.
      .-~                |...............~-.
      |                     \\..............~-.
      |                      \\...............\\.
      |                        .................\\
      |                      .-~~~-._........../.
      |                  _.-~        ~-._...../  |
      |              _.-~               ~-../   |
      |          _.-~                      /    |
      |     _.-~                           /     |
      |_.-~  __                           /      |
      \\   .~   ~--. _                  /     _-'
      \\ /           ||._             /   _-~
        ~            ||..~-._        /   /
                    ||     ~-._    /   /
                    ||         \\.-~ ~-~
                    ||          \\   \\
                    ||           \\   \\
                    ||           /  / 
                    ||          /  /  
                    ||         /  /   
                    \\\\|      /  /-
                      ~~--_/  /~
                            /~
  `}</pre>;

const Text3 = () => 
  <p>
    "The Girl with a Pearl Earring" is a famous painting by Johannes Vermeer, completed 
    around 1665. The painting depicts a young woman wearing a pearl earring and a blue 
    and gold turban, with a shadowy background that recedes into the distance. The 
    identity of the girl in the painting is unknown, and the painting has inspired much 
    speculation and interpretation, with some suggesting that she represents an 
    idealized feminine beauty. The painting's subtle colors and striking composition 
    have made it one of the most beloved and recognizable works of art in history, with 
    many people drawn to the enigmatic girl with the pearl earring.
  </p>;
  
const Image4 = () =>
  <pre>{`
        ,#####,
        ,#########
      ,##'   \`###\`##
      ,'##\`       \`###\`#
    #\`##\`          \`##\`#
  ,##\`##\`          \`##\`##
  #\`##\`##            ##\`#
  #\`## \`##            ##\`#
  # \`## \`##          ,##\`#
  #  \`## \`##       ,##\`##
    #\`## \`##       #\`###\`
    # \`## \`##     #'###\`
    # \`## \`##  #'##\`
      # \`## \`###'###
      \`##.\`#\`##'##\`
        \`#######\`
          \`###\`
  `}</pre>;

const Text4 = () => 
  <p>
    "The Scream" is a famous painting by the Norwegian artist Edvard Munch, completed 
    in 1893. The painting depicts a figure standing on a bridge, with their hands 
    raised to their face in a scream of terror. The figure is depicted in front of a 
    swirling sky with a fiery orange and red background. The landscape is distorted 
    and surreal, with the figure seeming to blend into the background.
  </p>;
  
  const Image5 = () =>
  <pre>{`
                           _____    ________
                      _,,ad8888888888bba,_
                   ,ad88888I888888888888888ba,
                ,88888888I88888888888888888888a,
              ,d888888888I8888888888888888888888b,
             d88888PP"""" ""YY88888888888888888888b,
           ,d88"'__,,--------,,,,.;ZZZY888888888Y,
          ,8IIl'"                ;;l"ZZZIII8888888,
         ,I88l;'                  ;lZZZZZ8888888I,
        ,IB888l; _,aaa,            lZZZZZ888888I
        ,d88888888888PP"'             ;;'8888ZI;
       ,888888888888888                  .,88Ib
       d888888888888888b,             ,aaad888I88
      ,888888888888888888ba,_  __,,_ ,88888888I88
     ,88888888888888888888888b, """" ,888888888I88
    d8888888888888888888888888888bbba88888888888I88
   88888888888888888888888888888I888888888888888I88
   Y8888888888888888888888888888I88888888888888I88,
   '88888888888888888P8888888888I8888888888888I88'
    88888888888888888b888888888I88888888888888I88
    Y88888888888888888888888I8888888888888888888
     Y8888888888888888888888I888888888888888888,
      Y88888888888888888888I8888888888888888888,
       \`Y8888888888888888I8888888888888888888P'
           """""""""""""\`88888888888888888P"
  `}</pre>;

const Text5 = () => 
  <p>
    "The Great Wave off Kanagawa" is a woodblock print created by Japanese artist 
    Hokusai in the early 19th century. The print depicts a towering wave with a boat 
    in the foreground and Mt. Fuji in the background. The wave, with its claw-like 
    crest, is a powerful and mesmerizing representation of the immense power of the 
    sea. The print has become an iconic image in both Japanese and Western art, and 
    its influence can be seen in the work of many contemporary artists.
  </p>;

const Image6 = () =>
<pre>{`
          ____              ____                  
     ____/\\   \\   ______   /\\   \\____ 
    /::::\\ \\   \\ /\\     \\  \\ \\   /:::\\
   /::::::\\ \\__\\/::\\     \\  \\ \\__/:/::\\
  /:::/\\:::\\   /\\:::\\     \\  \\::\\:/:::/
 /:::/__\\:::\\ /::\\:::\\     \\  \\:::\\/:::/
 \\:::\\   \\:::/\\:\\:::\\     \\  \\::::::/ 
  \\:::\\   \\:\\__\\/\\:::\\     \\  \\::::/
   \\:::\\   \\:\\   /\\:::\\     \\  \\:::\\
    \\:::\\   \\:\\__\ \\:::\\     \\  \\:::\\
     \\:::\\  /:/  /  \\:::\\____\\  \\:::\\
      \\:::\\/:/  /    \\::/    /   \\:::\\
       \\::::::/  ___  \\/____/     \\:::\\
        \\::::/  /\\__\\             \\:::\\
         \\::/  /:/  /              \\:::\\
          \\/__/\\/__/                \\/__/

`}</pre>;

const Text6 = () => 
<p>
  "Nighthawks" is a painting created by American artist Edward Hopper in 1942. The 
  painting depicts a late-night scene in a downtown diner, with a couple and two 
  individuals sitting at the counter, seemingly lost in their own thoughts. The 
  painting's use of light and shadow, along with its stark, empty urban setting, 
  creates a sense of loneliness and isolation, conveying a sense of the urban ennui 
  prevalent in American society at the time. "Nighthawks" is now considered one of 
  the most iconic works of American art, and its imagery has been referenced and 
  reinterpreted in many other works of art and popular culture.
</p>;

const Image7 = () =>
  <pre>{`
                           -\`             
                          .o+\`             
                         \`ooo/             
                        \`+oooo:            
                       \`+oooooo:           
          \`@.       \`:oooooo+oo+          
          -@@\`    /:-:++oooo+oo+:         
   \`@@.  \`@@\`/++++/+++++++oooooo+:       
   /@@@\`  :@@@:\`/+++++++oooooo-+o:      
   /@@@\`  :@@@:\`/+++++++oooooo-+o:      
   /@@@.  :@@@:\`/+++++++oooooo-+o:      
   :@@@@.  :@@@@:\`/+++++++oooooo-+o:     
    /@@@@:\`@@@@@@\`/+++++++oooooo-+o:    
    \`+@@@@@@@@@@@\`/+++++++oooooo-+o:    
     \`:@@@@@@@@@:\`/+++++++oooooo-+o:    
      \`-/ooooooo/-\`/+++++++oooooo-+o:    
                        \`+oooooo:           
                         \`ooo/             
                          .o+\`             
                           -\`    
  `}</pre>;

const Text7 = () => 
  <p>
    "The Wanderer Above the Sea of Fog" is a painting created by German artist 
    Caspar David Friedrich in 1818. The painting depicts a man standing on a rocky 
    outcropping, gazing out over a sea of fog and mountains in the distance. The 
    figure is dressed in a long coat and top hat, and his back is turned to the 
    viewer, suggesting a sense of introspection and contemplation. The painting is 
    often interpreted as a representation of the Romantic era's fascination with 
    nature and the sublime, with the figure symbolizing man's struggle to understand 
    his place in the vast and mysterious natural world. The painting has become one 
    of Friedrich's most famous works and is considered a masterpiece of German 
    Romanticism.
  </p>;

const Image8 = () =>
<pre>{`
     .__...__   __...__ 
   .'     .' '.'    / /|        
  '.     .'.'     / /_|         
  '-.   / .     / ___ \\        
     '..'.'     /_/   \\_\\       
        .'____.'  
       /    \\/   \\/   \\/    \\      
      |____ /\\   /\\   /\\ ___|     
      \`._ \`/  \`-'  \`-'  \\ _.'     
         \`'.___________.'\`        
          __/ /  \\ \\__        
         / _ \`||  ||\` _ \\       
        |_/ \\/||__|| \\/ \\_|      
             \`'|..'|\`
`}</pre>;

const Text8 = () => 
<p>
  "Nymphéas" is a series of approximately 250 oil paintings created by French 
  Impressionist artist Claude Monet between 1914 and 1926. Like the "Water Lilies" 
  series, "Nymphéas" depicts Monet's flower garden and pond at his home in Giverny, 
  France. However, the "Nymphéas" series is characterized by a greater focus on the 
  reflections of the water lilies and other flora in the pond, as well as a more 
  abstract, almost dreamlike quality. Monet's use of light, color, and texture in 
  the "Nymphéas" series creates a sense of depth and movement, immersing the viewer 
  in a world of water, light, and nature. The "Nymphéas" paintings are considered 
  some of Monet's most experimental and innovative works, and they have had a 
  significant influence on the development of abstract art in the 20th century. 
  Many of the "Nymphéas" paintings are now housed in major museums around the world, 
  including the Musée de l'Orangerie in Paris and the Metropolitan Museum of Art in 
  New York City.
</p>;