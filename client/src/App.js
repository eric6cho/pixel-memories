import React, { useState, useEffect, useRef } from "react";
import './styles/main.scss';
import ImageGrid from './components/image-grid';
import ImageItem from './components/image-item';
import Emblem from "./components/emblem";

export default function App() {

  const [activeImage,setActiveImage ] = useState(null);

  const getComponent = () => {
  
    const imagesByYear = data.reduce((imagesByYear, item) => {
      const group = (imagesByYear[item['year']] || []);
      group.push(item);
      imagesByYear[item['year']] = group;
      return imagesByYear;
    }, {});
  
    let app = 
      <div className="App">
        <div className="main-grid">
          <div className="underlay-container">
            <div className="underlay">
              <div className="tag">
                <div className="inner-tag">
                  <Emblem/>
                  <h1>pixel memories</h1>
                </div>
              </div>
            </div>
          </div>
          <ImageGrid images={data} imageGroups={imagesByYear} onSelect={setActiveImage}/>
          <div className={'component active-image'}>
            <div className="active-image-outer-border">
              <div className="active-image-inner-border">
                <ImageItem data={activeImage?activeImage:data[0]}/>
              </div>
            </div>
          </div>
        </div>
      </div>;

    return app;
  };

  return getComponent();
}

let data = [

  // 2022

  {
    'image':'images/2023-4-27-331-Bhtd04qF.png',
    'location':'Atlanta',
    'year':'2022',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-332-pkuv4h8o.png',
    'location':'Atlanta',
    'year':'2022',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-345-hEm7bmNc.png',
    'location':'Las Vegas',
    'year':'2022',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-345-pTakrfLE.png',
    'location':'Las Vegas',
    'year':'2022',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-343-bbSVanvz.png',
    'location':'Las Vegas',
    'year':'2022',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-343-n9dJ55wd.png',
    'location':'Las Vegas',
    'year':'2022',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-312-LCxFyh62.png',
    'location':'Las Vegas',
    'year':'2022',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-334-a2gM1P3A.png',
    'location':'Las Vegas',
    'year':'2022',
    'notes':'',
  },
  {
    'image':'images/2023-4-19-1366-sNSDaeJM.png',
    'location':'Las Vegas',
    'year':'2022',
    'notes':'We chose whether to go out to McDonalds or Omnia for the night. We got burgers after this',
  },
  {
    'image':'images/2023-4-27-335-Qzxl2CBJ.png',
    'location':'Las Vegas',
    'year':'2022',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-313-hNwvF8yK.png',
    'location':'Philadelphia',
    'year':'2022',
    'notes':'',
  }, 
  {
    'image':'images/2023-4-20-790-hPPovKyb.png',
    'location':'Savannah',
    'year':'2022',
    'notes':'Cynthia watching a boat going down the river during my birthday lunch',
  },
  {
    'image':'images/2023-4-27-330-S3zKmlJi.png',
    'location':'Manhattan',
    'year':'2022',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-333-PFn8lakh.png',
    'location':'Manhattan',
    'year':'2022',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-332-D3CbEzvS.png',
    'location':'Manhattan',
    'year':'2022',
    'notes':'',
  },  

  // 2021

  {
    'image':'images/2023-4-27-325-Iy75TVEy.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-326-wH8Hf49w.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-327-Ysp893zV.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-327-ZpUnj0TM.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-328-RNCdFo4q.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'',
  },  
  {
    'image':'images/2023-4-19-1349-4a8o0Veq.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'Shannon, Eddie, and I shared dinner here at Foreign Cinema. Remember to take friends here next time I visit.',
  },
  {
    'image':'images/2023-4-19-1356-ggK1UQ55.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'Shannoon and Eddie found a hidden art gallery',
  },
  {
    'image':'images/2023-4-19-1357-CYQ5Eyj8.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'Live, laugh, love type of energy',
  },
  {
    'image':'images/2023-4-19-1376-7HNZx30K.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'Finding a nice spot near the Golden Gate Bridge to watch the sunset',
  },
  {
    'image':'images/2023-4-19-1376-Y8bgMq4k.png',
    'location':'San Francisco',
    'year':'2021',
    'notes':'Taking a picture of Eddie while he takes a picture of the skies',
  },
  {
    'image':'images/2023-4-27-346-WX0LdBmk.png',
    'location':'Los Angeles',
    'year':'2021',
    'notes':'',
  },
  {
    'image':'images/2023-4-19-1349-16cmElgs.png',
    'location':'Los Angeles',
    'year':'2021',
    'notes':'Shannon said that the lighting and background had villain energy.',
  },
  {
    'image':'images/2023-4-19-1352-bTEOseiU.png',
    'location':'Los Angeles',
    'year':'2021',
    'notes':'Taking a nap. brb',
  },
  {
    'image':'images/2023-4-19-1353-4CMeCNe7.png',
    'location':'Los Angeles',
    'year':'2021',
    'notes':'Hand hearts at Griffith Observatory',
  },
  {
    'image':'images/2023-4-19-1355-MLbEGcog.png',
    'location':'Los Angeles',
    'year':'2021',
    'notes':'Emily said I should take pictures because I had the nicest camera. That was not true',
  },

  // 2020

  {
    'image':'images/2023-4-27-319-Uz89B6UV.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-320-0VvwtCLb.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-321-f0Umz08U.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-321-o1F8l7Zm.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-322-EWtNfYoP.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-323-JpueaLKm.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-323-qnSiYI5F.png',
    'location':'Atlanta',
    'year':'2020',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-324-i3lxFWDJ.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-1118-2tDxLrun.png',
    'location':'Atlanta',
    'year':'2020',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-1122-UYr9lpE5.png',
    'location':'Athens',
    'year':'2020',
    'notes':'Chloe said she looked like a traffic cone',
  },
  {
    'image':'images/2023-4-25-1124-iuK0NlFY.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-1123-zi5QrX1f.png',
    'location':'Athens',
    'year':'2020',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-312-iL0YT1xP.png',
    'location':'Atlanta',
    'year':'2020',
    'notes':'',
  },  
  {
    'image':'images/2023-4-19-1378-HhEQpoEq.png',
    'location':'Athens',
    'year':'2020',
    'notes':'During the picnic on the parking deck rooftop',
  },
  {
    'image':'images/2023-4-19-1377-0Nbd0Vvn.png',
    'location':'Athens',
    'year':'2020',
    'notes':'Cynthia created an accidental album cover while hiding from the camera',
  },
  {
    'image':'images/2023-4-27-314-HB3NGeZu.png',
    'location':'Atlanta',
    'year':'2020',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-315-Nsl274WL.png',
    'location':'Atlanta',
    'year':'2020',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-315-wpcE9tog.png',
    'location':'Atlanta',
    'year':'2020',
    'notes':'',
  },

  // 2019

  {
    'image':'images/2023-4-25-281-wCqbPiWB.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-282-xTCqOwJW.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-291-aCxaxmrq.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-291-C9MkuRbH.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-291-rm7ayqp1.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-293-7C4HeXOQ.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-293-FQei09pJ.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-299-P64nTM4r.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-300-ezH7wCKg.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-346-mE69a85T.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-348-FWiQ0Cel.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-361-hxcIkYIg.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-19-1383-UWd1IYp2.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'Riding scooters with Andrew before getting to the formal dinner',
  },
  {
    'image':'images/2023-4-19-1385-XsmsxbRb.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'Taken from the Yale NUS library while studying for finals',
  },
  {
    'image':'images/2023-4-19-1386-07MqqSRP.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'Made many core memories here. Hopefully I\'ll come back to visit soon',
  },
  {
    'image':'images/2023-4-19-1388-ZxLC990p.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'Milk Tea and Vanilla is the best combo for ice cream',
  },
  {
    'image':'images/2023-4-19-1389-gw2ZF2WQ.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'Random building while on a daytrip',
  },
  {
    'image':'images/2023-4-19-1433-1TgXEUbX.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'A lily garden at downtown by the bay',
  },
  {
    'image':'images/2023-4-19-1434-aIQqdoai.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'Close up of downtown buildings part 1',
  },
  {
    'image':'images/2023-4-19-1435-alb0ZM1T.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'Close up of downtown buildings part 2',
  },
  {
    'image':'images/2023-4-19-1434-w1CuQAzE.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'The outside of a food court that I found through a foodie youtuber',
  },
  {
    'image':'images/2023-4-19-1439-ZxEb4nLb.png',
    'location':'Singapore',
    'year':'2019',
    'notes':'Trying to find some famous skewers inside this food court',
  },
  {
    'image':'images/2023-4-25-284-k4kt5hu7.png',
    'location':'Bali',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-285-IRqUPH8Y.png',
    'location':'Bali',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-290-pwH19Wo8.png',
    'location':'Bali',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-291-ZYLPMoBD.png',
    'location':'Bali',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-292-g6g9Hf3o.png',
    'location':'Bali',
    'year':'2019',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-360-7BWlFxBW.png',
    'location':'Taipei',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-360-qDrV5ZdD.png',
    'location':'Taipei',
    'year':'2019',
    'notes':'',
  },  
  {
    'image':'images/2023-4-19-1390-5lKYYDAL.png',
    'location':'Taipei',
    'year':'2019',
    'notes':'Views of Taipei from the Taipei 101 observatory',
  },
  {
    'image':'images/2023-4-19-1390-HHe7OOPL.png',
    'location':'Taipei',
    'year':'2019',
    'notes':'Above the front gates of Chiang Kai-shek Memorial',
  },
  {
    'image':'images/2023-4-27-347-LlXHmQxQ.png',
    'location':'Bangkok',
    'year':'2019',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-347-x0Fvb6lb.png',
    'location':'Bangkok',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-1123-EihA6Q5C.png',
    'location':'Athens',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-1123-oVawfpTk.png',
    'location':'Athens',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-1125-2I61JP15.png',
    'location':'Athens',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-311-KiezCki3.png',
    'location':'Grand Canyon',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-318-nxA1sU0z.png',
    'location':'Atlanta',
    'year':'2019',
    'notes':'',
  },
  {
    'image':'images/2023-4-19-1381-tdjb1nLs.png',
    'location':'Athens',
    'year':'2019',
    'notes':'Kayla and I came here to see a lake but it was too dark to see anything',
  },

  // 2018

  {
    'image':'images/2023-4-20-1018-svgvcNJ1.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-20-1019-VUVadijY.png',
    'location':'Atlanta',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-20-1035-ZjVWlKg9.png',
    'location':'Athens',
    'year':'2018',
    'notes':'Tony wanted to catch the sunset before getting to dinner',
  },
  {
    'image':'images/2023-4-25-303-gIjyp2pI.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-304-3VKir2Mc.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-304-qvRpG2Pg.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-305-lx92PQqv.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-306-eZzcJpnP.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-307-NFxOzkUs.png',
    'location':'Atlanta',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-309-tdhUM4mr.png',
    'location':'Atlanta',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-310-rSe8PxYb.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-310-Ryvhf7Em.png',
    'location':'Destin',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-312-u01IgapM.png',
    'location':'Destin',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-311-T9DHTkvP.png',
    'location':'Destin',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-314-2fUGj4I3.png',
    'location':'Atlanta',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-316-u11RaKqR.png',
    'location':'Atlanta',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-317-f49y1kiv.png',
    'location':'Atlanta',
    'year':'2018',
    'notes':'',
  },  
  {
    'image':'images/2023-4-27-361-u2nqIsYV.png',
    'location':'Atlanta',
    'year':'2018',
    'notes':'',
  },  
  {
    'image':'images/2023-4-25-316-Hmcnq1zA.png',
    'location':'',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-321-TXpXdXLW.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },
  {
    'image':'images/2023-4-20-1026-U5mGD6NF.png',
    'location':'Athens',
    'year':'2018',
    'notes':'',
  },

  // 2017

  {
    'image':'images/2023-4-20-1010-YqGMpiKk.png',
    'location':'Athens',
    'year':'2017',
    'notes':'A flower in the north campus gardens part 1',
  },
  {
    'image':'images/2023-4-20-1017-i3eePznN.png',
    'location':'Athens',
    'year':'2017',
    'notes':'A flower in the north campus gardens part 2',
  },
  {
    'image':'images/2023-4-20-1010-zl02YvxY.png',
    'location':'Athens',
    'year':'2017',
    'notes':'Behind this house, there is a fountain where people like to jump in before graduating',
  },
  {
    'image':'images/2023-4-20-1011-PZ0b5uyW.png',
    'location':'Athens',
    'year':'2017',
    'notes':'A path leading into a garden and a koi pond',
  },
  {
    'image':'images/2023-4-20-1016-3pJo2X56.png',
    'location':'Athens',
    'year':'2017',
    'notes':'Exploring the landscape architecture building part 1',
  },
  {
    'image':'images/2023-4-20-1017-uKQp8uxw.png',
    'location':'Athens',
    'year':'2017',
    'notes':'Exploring the landscape architecture building part 2',
  },
  {
    'image':'images/2023-4-20-1017-MhLMvb4w.png',
    'location':'Athens',
    'year':'2017',
    'notes':'My favorite place to study was a boba cafe that was in a basement',
  },
  {
    'image':'images/2023-4-20-1021-CJHCB4K1.png',
    'location':'Atlanta',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-20-1024-pqjOy9LW.png',
    'location':'Atlanta',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-20-1023-crLcBMwp.png',
    'location':'Athens',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-20-1026-Dq4ZphtO.png',
    'location':'Athens',
    'year':'2017',
    'notes':'Mike screaming',
  },
  {
    'image':'images/2023-4-20-1028-U0rONXSE.png',
    'location':'Atlanta',
    'year':'2017',
    'notes':'Money cat money cat money cat',
  },
  {
    'image':'images/2023-4-25-315-c8P60kIt.png',
    'location':'Athens',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-318-JMn5LGDC.png',
    'location':'Atlanta',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-318-li9U0eNw.png',
    'location':'Atlanta',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-322-siZbKRio.png',
    'location':'Athens',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-25-322-Sjz5FRFZ.png',
    'location':'Athens',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-362-a883bs2V.png',
    'location':'Athens',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-362-eGaeOr8i.png',
    'location':'Athens',
    'year':'2017',
    'notes':'Touring the business college with Anaya',
  },  
  {
    'image':'images/2023-4-27-363-NJOyadNt.png',
    'location':'Athens',
    'year':'2017',
    'notes':'',
  },
  {
    'image':'images/2023-4-27-363-Pyj2xwxE.png',
    'location':'Athens',
    'year':'2017',
    'notes':'',
  },  

  // 2016

  {
    'image':'images/2023-4-20-1015-ei3iQmoL.png',
    'location':'Atlanta',
    'year':'2016',
    'notes':'Taking Charlie on his first nature trail',
  },
  {
    'image':'images/2023-4-20-1014-NJZSgFDz.png',
    'location':'Athens',
    'year':'2016',
    'notes':'Key lime pie ice cream',
  },
  {
    'image':'images/2023-4-20-1018-6Xj9Sv6Q.png',
    'location':'Athens',
    'year':'2016',
    'notes':'Sunsets over Sanford stadium',
  },
  {
    'image':'images/2023-4-27-316-Eq2J68Dq.png',
    'location':'Atlanta',
    'year':'2016',
    'notes':'',
  },
  {
    'image':'images/2023-4-20-1008-v3YnY3NB.png',
    'location':'Atlanta',
    'year':'2016',
    'notes':'Charles poses for the camera',
  },
  {
    'image':'images/2023-4-20-1006-ROoPOdQz.png',
    'location':'Atlanta',
    'year':'2016',
    'notes':'Took Charles to look at the fishes at Petsmart. He didn\'t seem to understand what he was looking at',
  },
  {
    'image':'images/2023-4-20-1009-cuwsCZIh.png',
    'location':'Athens',
    'year':'2016',
    'notes':'Don\'t cry over spilled milk, but its okay to shed a tear over dropped ice cream',
  },
  {
    'image':'images/2023-4-20-1009-vEfRHVRv.png',
    'location':'Manhattan',
    'year':'2016',
    'notes':'Sunset in the city. Right through the buildings. 10/10',
  },
  {
    'image':'images/2023-4-20-1008-ElVXFTqJ.png',
    'location':'Manhattan',
    'year':'2016',
    'notes':'Times square during my high school graduation trip',
  }, 
];