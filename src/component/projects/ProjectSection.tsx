import Section from "../section/Section";
import useAsyncProjects from "../../api/projects/Project";
import FullWidthProject, {IFullWidthProject, LoadingFWP} from "./FullWIdthProject";
import errorBackground from '../../media/images/error_bg.webp';

export default function ProjectSection(props: {}) {
    const { loading, error, projects } = useAsyncProjects();

    const renderSection = () => {
        if(loading)
            return <LoadingFWP/>;

        if(error)
            return <FullWidthProject
                theme={'red'}
                title={'An error occurred'}
                description={error.message}
                image={errorBackground}
                link={''}
                tags={[{name: 'oops', display: 'oops'}, { name: 'I', display: 'I' }, {name: 'did', display: 'did'}, {name: 'it', 'display': 'it'}, {name: 'again', display: 'aga<br>in'}]}
            />

        return projects.map(p => <FullWidthProject key={p?.title} {...p as IFullWidthProject} />);
    };

    return <Section id={'projects'} title={'Projects'} fullWidth>
        {
            renderSection()
        }
    </Section>
}