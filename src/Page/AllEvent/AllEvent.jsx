import { PropTypes } from 'prop-types';
import { useLang } from '../../hooks/useLang';
import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card';
import AddButton from "../../components/AddButton/AddButton";
import SortButton from "../../components/SortButton/SortButton";
import FilterButton from "../../components/FilterButton/FilterButton";
import styles from '../AllEvent/AllEvent.module.css';

const AllEvent = ({ events, onSort,array, onFilter,setInActivPage,isActivPage }) => { 
     const {lang} = useLang();
    return (
        <>
            <section className={styles.conteiner}>
                <div className={styles.conteinerTitel}>
                    <div className={styles.conteinerButton}> 
                        <FilterButton onFilter={ onFilter} />
                        <SortButton onSort={onSort} />
                        <AddButton/>               
                    </div>
                    {lang === 'en' ?
                        <h2 className={styles.titel} >My events</h2> :
                        <h2 className={styles.titel} >Мої події</h2>
                    }
                </div>                        
                <div className={styles.wrapper}>
                    {events.map (event=>(
                    <Card item={event}   key={event.id}/>))}   
                </div>
                <div className={styles.conteinerPagination}>
                    <Pagination array={array} isActivPage={isActivPage} setInActivPage={setInActivPage}/>
                </div>
            </section>
            
        </>       
    )
};

export default AllEvent;

AllEvent.propTypes = {    
    events: PropTypes.arrayOf(PropTypes.shape()), 
    onSort: PropTypes.func,
    onFilter:PropTypes.func,
    setInActivPage: PropTypes.func,
    array: PropTypes.array,
    isActivPage:PropTypes.number
}