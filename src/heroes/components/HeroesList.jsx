import PropTypes from 'prop-types'
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';


export const HeroesList = ({publisher = ''}) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
            heroes && heroes.map( (hero) => (
                <HeroCard key={hero.id} {...hero} />
            ))
        }
    </div>
    )
}

HeroesList.propTypes = {
    publisher: PropTypes.string,
};


