import { useEffect, useState, useCallback } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState('');
  const getAboutData = async () => {
    const data = await fetch('https://marketplace.bnymellon.com/public/mp/prod/enAboutUsCms.json');
    const jsonData = await data.json();
    setAboutData(jsonData);
  };

  useEffect(() => {
     getAboutData();
  }, [])


  const markup = { __html: aboutData?.block?.text };
  return (
    <>
      <div>about</div>
      <div>{aboutData?.block?.shortDescription}</div>
      <div dangerouslySetInnerHTML={markup}></div>
    </>

  )
}
export default About