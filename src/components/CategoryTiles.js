import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as arts from './ArtIndex';
import * as histoires from './HistoireIndex';
import categories from '../data/categories.json';
import gridList from '../data/gridList.json';
import {useStyles} from './CategoryTiles.styles';

function CategoryTiles() {
    const classes = useStyles();
    const [activeId, setActiveId] = useState();
    const [isExpanded, setExpanded] = useState(false);
    const [, setIndex] = useState('');
    const [list, setList] = useState();
    const [currentArtIndex, setCurrentArtIndex] = useState();
    // const [currentEnfantIndex, setCurrentEnfantIndex] = useState();
    // const [currentGeoIndex, setCurrentGeoIndex] = useState();
    const [currentHistoireIndex, setCurrentHistoireIndex] = useState();
    // const [currentNatureIndex, setCurrentNatureIndex] = useState();
    // const [currentScienceIndex, setCurrentScienceIndex] = useState();
    // const [currentSportIndex, setCurrenSportIndex] = useState();

    function hide(){
      setActiveId();
    }

    function displayList(index) {
      setList(index);
    }

    const renderArtPanel = () => {
      const ArtPanel = arts.default[currentArtIndex].component;
      return <ArtPanel />;
    };
    const renderHistoirePanel = () => {
        const HistoirePanel = histoires.default[currentHistoireIndex].component;
        return <HistoirePanel />;
    };
    
    const GridContainer = ({grid, index}) => {
      console.log(grid[0].name, index);
        if (grid[0].name === 'art') {
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
                  {grid[0].name}
                </button>
            );
        } else if (grid[0].name === 'histoire') {
            return (
                <button className={classes.itemList}
                    key={index}
                    onClick={() => {
                        setCurrentHistoireIndex(index);
                        setCurrentArtIndex();
                    }}
                        
                >
                  {grid[0].name}
                </button>
            );

        } else return false;
    }

    return (
      <>
            <ul className={classes.grid}>
                { categories.map((c, index) => {
                      const gridListResult = gridList.filter(grid => grid.id === index + 1);
                      const gridL = gridListResult[0].obj;
                    return (
                        <li 
                            key={c.name}  
                            className={`${classes.gridItem} ${activeId === c.id ? classes.gridOpened :  classes.gridClosed}`}
                            >
                               
                            <h2>{c.name}</h2>
                            <div className={`${classes.tileWrapper} ${activeId === c.id ? classes.smallTile :  '' }`}>
                              {activeId === c.id && (
                                <button 
                                  aria-label={`Fermer la liste ${c.name}`}
                                  className={classes.closeButton} 
                                  onClick={() => {hide(c.id);
                                }}><span aria-hidden='true'>X</span></button>)
                              }
                             
                              <div className={classes.gridItemInner} style={{ backgroundImage: `url(${require(`../assets/category/${c.illustration}`)} )`}}> 
                                {!(activeId === c.id)  && (
                                  <>
                                <button className={classes.tileButton} onClick={() => {
                                    setActiveId(c.id);
                                    displayList(c.id);
                                    setCurrentHistoireIndex();
                                    setCurrentArtIndex();
                                    }}>Voir les grilles {c.name}</button> 
                                
                                </>
                                )} 

                              </div>
                            </div>
                              <div className={`${classes.gridList} ${activeId === c.id ? classes.listOpened : classes.listClosed}`}>
                              {(list && gridL.length > 0) && (
                                <ul className={classes.listItems}>
                                  {gridL.map((l, index) => {
                                   
                                    return (
                                      <li key={l}>{l}  <GridContainer grid={gridListResult} index={index}/> </li>
                                    );
                                  })}
                                </ul>
                              )}
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
                            </div>

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