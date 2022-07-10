import '../sass/pages/Technologies.scss';
import { DocumentStyle } from '../styles/Style';
import { MainTopic } from '../components/Technologies/MainTopic';
import { techList } from '../components/Technologies/techList';
import { v4 } from 'uuid';

const { htmlTheme } = DocumentStyle;

export default function Technologies() {
    return (
        <div className="technologies-page" style={htmlTheme}>
            {techList.map(item => {
                return <MainTopic key={v4()} name={item.topic} subtopics={item.subtopics} />
            })}
        </div>
    )
}