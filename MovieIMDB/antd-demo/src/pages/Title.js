import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import API from "../API/api";
import LogOutBtn from "../components/LogOutBtn";

const Title = () => {
    const { id } = useParams()
    const [ film, setFilm] =useState()

    useEffect(()=>{
        const fetchFilms = async () => {
            const response = await API(
                {
                    method: 'GET',
                    params: {
                        r: 'json',
                        i: id
                    },
                }
            )
            setFilm(response.data)
        }
        fetchFilms()
    }, [id]);

    return(
        <div className="card-background">
            {
                film ?
                    <div className="title-content">
                        <LogOutBtn />
                        <div className="title-item">
                            <img src={film.Poster} alt={film.Title}/>
                            <div style={{marginLeft: '45px'}}>
                                <h3 className="title">{film.Title}</h3>
                                <p><span>Run Time:</span> {film.Runtime}  </p>
                                <p><span>Film genre:</span> {film.Genre}</p>
                                <p><span>Film director:</span> {film.Director}</p>
                                <p><span>Released:</span> {film.Released}</p>
                                <p><span>Actors:</span> {film.Actors}</p>
                                <p><span>Plot:</span> {film.Plot}</p>
                                <p><span>Language:</span> {film.Language}</p>
                                <p><span>Country:</span> {film.Country}</p>

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
