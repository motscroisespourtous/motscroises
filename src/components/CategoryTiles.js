import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as arts from './ArtIndex';
import * as histoires from './HistoireIndex';
import categories from '../data/categories.json';
import list from '../data/list.json';
import {useStyles} from './CategoryTiles.styles';
// import bgArt from '../assets/category/art.jpg';
// import bgEnfant from '../assets/category/enfant.jpg';
// import bgGeo from '../assets/category/geo.jpg';
// import bgHistoire from '../assets/category/histoire.jpg';
// import bgNature from '../assets/category/nature.jpg';
// import bgScience from '../assets/category/science.jpg';
// import bgSport from '../assets/category/sport.jpg';



function CategoryTiles() {
    const classes = useStyles();
    const [gridListByCategory, setGridListByCategory] = useState('');
    const [isExpanded, setExpanded] = useState(false);
    const [isIndex, setIndex] = useState(null);
    // const [full, setFull] = useState(false);
    const [currentArtIndex, setCurrentArtIndex] = useState();
    // const [currentEnfantIndex, setCurrentEnfantIndex] = useState();
    // const [currentGeoIndex, setCurrentGeoIndex] = useState();
    const [currentHistoireIndex, setCurrentHistoireIndex] = useState();
    // const [currentNatureIndex, setCurrentNatureIndex] = useState();
    // const [currentScienceIndex, setCurrentScienceIndex] = useState();
    // const [currentSportIndex, setCurrenSportIndex] = useState();

    function showFull(index) {
        setIndex(index);
         setExpanded(!isExpanded);     
      }

    const renderArtPanel = () => {
      const ArtPanel = arts.default[currentArtIndex].component;
      return <ArtPanel />;
    };
    const renderHistoirePanel = () => {
        const HistoirePanel = histoires.default[currentHistoireIndex].component;
        return <HistoirePanel />;
    };
    const listResult = gridListByCategory.length > 0 && list.filter(grid => grid.cat === gridListByCategory);
    const GridContainer = ({grid, index}) => {
        if (grid.cat === 'art') {
            return (
                <button className={classes.itemList}
                    key={index}
                    onClick={() => 
                        {
                            setCurrentArtIndex(index);
                            setCurrentHistoireIndex();
                        }
                        }     
                >
                  {grid.name}
                </button>
            );
        } else if (grid.cat === 'histoire') {
            return (
                <button className={classes.itemList}
                    key={index}
                    onClick={() => {
                        setCurrentHistoireIndex(index);
                        setCurrentArtIndex();
                    }}
                        
                >
                  {grid.name}
                </button>
            );

        } else return false;
    }

    return (
        <>
            <ul className={classes.grid}>
                { categories.map((c, index) => {
                    return (
                        <li 
                            key={c.name}  
                            className={`${classes[c.additionalWidthCss]} ${classes[c.additionalHeightCss]} ${classes.gridItem} ${isExpanded && index === isIndex ? classes.opened :  '' }`}
                            >
                               
                            <h2>{c.name}</h2>
                            <div className={`${classes.tileWrapper} ${isExpanded && index === isIndex ? classes.smallTile :  '' }`}>
                              {isExpanded && index === isIndex && (
                                <button 
                                  aria-label={`Fermer la liste ${c.name}`}
                                  className={classes.closeButton} 
                                  onClick={() => {showFull(index);
                                }}><span aria-hidden='true'>X</span></button>)
                              }
                             
                              <div className={classes.gridItemInner} style={{ backgroundImage: `url(${require(`../assets/category/${c.illustration}`)} )`}}> 
                                {!(isExpanded && index === isIndex)  && (
                                <button className={classes.tileButton} onClick={() => {
                                    setGridListByCategory(c.theme);
                                    setCurrentHistoireIndex();
                                    setCurrentArtIndex();
                                    showFull(index);
                                    }}>Voir les grilles {c.name}</button> 
                                )} 
                              </div>
                            </div>
                            {isExpanded && index === isIndex && (<div className={classes.listItemsWrapper}>
                              { listResult.length > 0 && (
                                
                                <ul className={classes.listItems}>
                                  {listResult.map((grid, index) => {
                                    return (
                                      <li key={`${index}${grid}`}>
                                        <GridContainer grid={grid} index={index}/>    
                                      </li>
                                    );
                                  })}                 
                                </ul>
                              )
                              
                              }
                              {
                                currentArtIndex !== undefined && (
                                 <div>{renderArtPanel()}</div>                
                                )
                              }    
                              {
                                currentHistoireIndex !== undefined && (
                                 <div>{renderHistoirePanel()}</div>
                      
                                )
                              } 
                            </div>)}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

CategoryTiles.propTypes = {
    data: PropTypes.array,
    gridname: PropTypes.string,
  };
  
  CategoryTiles.defaultProps = {
    data: [],
    gridname: "",
  }


export default CategoryTiles;