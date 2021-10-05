/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components"
import ImgSlider from "./ImgSlider"
import NewDisney from "./NewDisney"
import Originals from "./Originals"
import Recommends from "./Recommends"
import Trending from "./Trending"
import Viewers from "./Viewers"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import db from "../Firebase"
import { setMovies } from "../feature/movie/movieSlice"
import { selectUserName } from '../feature/user/userSlice'

const Home = () => {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

    let recommends = []
    let newDisney = []
    let originals = []
    let trending = []


    useEffect(() => {
        // console.log("hello")
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                // console.log("RECOMMEND", recommends);
                // console.log("NEW", newDisney);
                // console.log("ORG", originals);
                // console.log("TREND", trending);
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends, { id: doc.id, ...doc.data() }];
                        break;
                    case 'new':
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }]
                        break;
                    case 'original':
                        originals = [...originals, { id: doc.id, ...doc.data() }]
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }]
                        break;
                    default:
                }
            })


            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisney,
                    original: originals,
                    trending: trending
                })
            )
        })
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    /* background: url('assets/images/home-background.png'); */
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: calc(3.5vw + 5px);

    &:after {
    background: url('assets/images/home-background.png') center center / cover
    no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;

    }
`
export default Home