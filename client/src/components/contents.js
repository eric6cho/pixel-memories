import './../styles/contents.scss';
import Emblem from "./emblem";

export default function Contents(props) {

  const getComponent = () => {

    let data = props.allData;
  
    const getContentList = (part,classes='') =>
      Object.keys(data[part]).map(key=>
        data[part][key]['content']&&
        <a className={'chapter '+classes} href={'#'+data[part][key]['id']}>
          <div className="emblem-section">
            <Emblem name={data[part][key]['id']}/>
              <h4 className="navigation-text">Go to {data[part][key]['title']}</h4>
          </div>
          <div className="line-section"></div>
          <div className="text-section"> 
            <h4 className='chapter-title'>
              {data[part][key]['type']==='story'&&
                <span className='number'>{key+'. '}</span>
              }
              {data[part][key]['title']}
            </h4>
            {data[part][key]['description']!==''&&
              <p className="chapter-description">  
                {data[part][key]['description']}
              </p>
            }
          </div>
        </a>  
      );

    let component = 
      <div className='component contents'>
        <div className='contents-section'>
          <h3>Contents</h3>
          <div className="contents">
            <div className="contents-other">
              {getContentList('Pre','full')}
            </div>
            <div className="contents-main">
              <div className="contents-list">
                {getContentList('Part I')}
              </div>
              <div className="contents-list right">
                {getContentList('Part II','right')}
              </div>
            </div>
            <div className="contents-other right">
              {getContentList('Post','full right')}
            </div>
          </div>
        </div>
      </div>;

    return component;
  }

  return getComponent();
}