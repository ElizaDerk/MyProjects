import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useState} from "react";
import debounce from "lodash.debounce";
import {fetchBrowseFilms, fetchSearchFilms} from "../store/features/films/thunk";


const Browse = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [inputFilm, setInputFilm] = useState('')
    const browseFilms = useSelector((state) => state.films.browseFilms)
    const searchList = useSelector((state) => state.films.searchList)

    useEffect(() => {
        dispatch(fetchBrowseFilms({
            s: 'Harry Potter', r: 'json', page: '1'
            })
        )
    }, [dispatch])

    useEffect(()=>{
        if (inputFilm !== ""){
            dispatch(fetchSearchFilms({
                s: inputFilm, r: 'json', page: '1'
            }))
        }
    }, [dispatch, inputFilm])

    const changeHandler = (event) => {
        setInputFilm(event.target.value);
    }

    const debouncedChangeHandler = useMemo(
        () => debounce(changeHandler, 100)
        , []);

    const onFilmClick = (id) => {
        navigate(`/title/${id}`)
    }

    return browseFilms.length === 0 ?
        <div>Loading</div>
        :
        (
            <div className="browse">
                <div>
                    <input onChange={debouncedChangeHandler} placeholder="Search Films" className="input-search"/>
                    <ul className="list-ul">
                        {searchList.map(searchFilm =>
                            <li className="list-li" onClick={() => { onFilmClick(searchFilm.imdbID)}} key={`list-${searchFilm.imdbID}`}>
                                <img src={searchFilm.Poster} alt={searchFilm.Title} style={{ width: '30px', height: "30px" }}/>
                                {searchFilm.Title}
                            </li>)}
                    </ul>

                </div>
                <div style={{display: 'flex', justifyContent: 'center', flexWrap: "wrap"}}>
                    {browseFilms.map(film => {
                        return(
                            <div className="film-list" onClick={()=> { onFilmClick(film.imdbID)}} key={film.imdbID}>
                                <img src={film.Poster} alt={film.Title}/>
                                <h3>{film.Title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}

export default Browse;
