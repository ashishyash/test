import useFetch  from "../../utility/useFetch";
import useInnerHtml from "../../utility/useInnerHtml";
const Support = () => {
     const [support] = useFetch('https://marketplace.bnymellon.com/public/mp/prod/support.json');
     const [supportContact] = useFetch('https://marketplace.bnymellon.com/public/mp/prod/enSupportContacts.json');
     const [gettingStarted] = useFetch('https://marketplace.bnymellon.com/public/mp/prod/enSupportGettingStarted.json');
     const supportHtml = useInnerHtml(supportContact?.block?.text)
     return(
        <>
            Support page
            {supportHtml? supportHtml: ''}
        </>
    );
}

export default Support;