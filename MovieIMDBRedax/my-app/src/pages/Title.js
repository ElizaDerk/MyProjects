import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFilmById} from "../store/features/films/thunk";
import {useEffect} from "react";


const Title = () => {
    const { id } = useParams()
    const film = useSelector( (state) => state.films.selectedFilm)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchFilmById({ r: 'json', i: id }))
    }, [dispatch, id]);

    return(
        <div>
            {
                film ?
                    <div className="title-content">
                        <div className="title-item">
                            <img src={film.Poster} alt={film.Title}/>
                            <div>
                                <h3>{film.Title}</h3>
                                <p><span>Run Time:</span> {film.Runtime}  </p>
                                <p><span>Film genre:</span> {film.Genre}</p>
                                <p><span>Film director:</span> {film.Director}</p>
                                <p><span>Film writer:</span> {film.Writer}</p>
                            </div>

                        </div>

                    </div>:
                    <div>
                        Loading
                    </div>
            }
        </div>
    )
}


export default Title;
