import './card.scss';
import useInnerHtml from '../../utility/useInnerHtml';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
const MyCard = (props)=> {
    const htmlContent = useInnerHtml(props.info?.description?.featuresBenefits)
    return(
        <Card variant="outlined" sx={{marginBottom: '0.5em', width: '300px'}}>
            <CardHeader title={props.info?.sortingDisplayName}/>
             <CardContent>
             {htmlContent}
            </CardContent>
            {/* <div className="card_wrapper">
            <h3 color='text.secondary'>{props.info?.sortingDisplayName}</h3>
            <div className="description">
                {htmlContent}
            </div>
            </div> */}
        </Card>
        
    );
}
export default MyCard;