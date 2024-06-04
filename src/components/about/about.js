
import useFetch from '../../utility/useFetch';
const About = () => {
  const [data] = useFetch('https://marketplace.bnymellon.com/public/mp/prod/enAboutUsCms.json');
  const markup = { __html: data?.block?.text };
  return (
    <>
      <div>about</div>
      <div>{data?.block?.shortDescription}</div>
      <div dangerouslySetInnerHTML={markup}></div>
    </>

  )
}
export default About