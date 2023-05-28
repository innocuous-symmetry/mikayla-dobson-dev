import '../sass/pages/Technologies.scss';
import { MainTopic } from '../components/Technologies/MainTopic';
import { techList } from '../components/Technologies/techList';
import { v4 } from 'uuid';

export default function Technologies() {
    return (
        <div className="page technologies-page">
            <p className="tech-title">These are some of my most frequently used skills and technologies:</p>
            <div className="topics">
                {techList.map(item => {
                    return (
                        <MainTopic
                            key={v4()}
                            name={item.topic}
                            subtopics={item.subtopics}
                        />
                    );
                })}
            </div>
        </div>
    )
}