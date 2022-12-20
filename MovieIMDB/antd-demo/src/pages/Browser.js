import {useNavigate} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import API from "../API/api";
import debounce from "lodash.debounce";
import LogOutBtn from "../components/LogOutBtn";

const Browser =() => {

    const [browseFilms, setBrowseFilms] = useState([]);
    const [inputFilm, setInputFilm] = useState('')
    const [searchList, setSearchList] = useState([])

    const fetchFilms = async (params, setter) => {
        const response = await API({
            method: 'GET',
            params
        })
        if (response.data.Search){
            setter(response.data.Search)
        }else{
            setter([])
        }
    }

    useEffect(() => {
        fetchFilms({
            s: 'Harry Potter', r: 'json', page: '1'
        }, setBrowseFilms)
    }, [])

    useEffect(()=>{
        if (inputFilm !== ''){
            fetchFilms({
                s: inputFilm, r: 'json', page: '1'
            }, setSearchList)
        }
    }, [inputFilm])

    const changeHandler = (event) => {
        setInputFilm(event.target.value);
    }
    const debouncedChangeHandler = useMemo(
        () => debounce(changeHandler, 10), []);

    const navigate = useNavigate()
    const onFilmClick = (id) => {
        navigate(`/title/${id}`)
    }


    return browseFilms.length === 0 ?
        <div>Loading</div>
        :
        (
            <div className="browse">
                <div className="input-wrapper">
                    <LogOutBtn />
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
                </div>
                <div style={{display: 'flex', flexWrap: "wrap"}}>
                    {browseFilms.map(film => {
                        return(
                            <div className="film-list" onClick={()=> { onFilmClick(film.imdbID)}} key={film.imdbID}>
                                <img className="film-poster" src={film.Poster} alt={film.Title}/>
                                <h3>{film.Title}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
}


export default Browser;

