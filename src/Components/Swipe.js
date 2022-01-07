import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from '@material-ui/core/';
import "../style.css";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyle=makeStyles((theme)=>({
  typography:{
    marginLeft: 10, 
    fontSize:22,
    paddingTop: 10,
    [theme.breakpoints.between('xs','sm')]:{
      fontSize:12
    }
  }
}));


const Swipe = () => {

  const classes=useStyle();

  return (
    <>
    <div style={{backgroundColor:"#0d0d0d"}}>
      <div className="container">
        <Typography  className={classes.typography} ><a style={{color:'white',fontWeight:800}} href="http://localhost:3000/Newrelease">New Releases Movie</a></Typography>
        <Swiper style={{ marginTop: 10 }} slidesPerView={8} spaceBetween={20} freeMode={true} pagination={{
          "clickable": true
        }} className="mySwiper">

          <SwiperSlide><img src="https://www.themoviedb.org/t/p/w440_and_h660_face/rAs2jOj6vntsQnEqvn6tH36fRdd.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.themoviedb.org/t/p/w440_and_h660_face/eSQvGZPUpDk9oCfi2R6NKzqPAV5.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.themoviedb.org/t/p/original/8mO2ZTTOnLnaEQd1sNZAE2XBoOg.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.godownloadmovies.com/wp-content/uploads/2020/08/10-Minutes-Gone.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.dvdsreleasedates.com/posters/800/T/The-Marksman-2021-movie-poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.dvdsreleasedates.com/posters/800/C/Crisis-2021-movie-poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/OIP.cUEVK63iGot1Tpw6ZjRhVAHaLH?pid=ImgDet&rs=1" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.dvdsreleasedates.com/posters/800/S/Skylines-2020-movie-poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fcFb3vQTCTvteMGNPJElu7CGylW.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/en/d/de/Playing_God_(2021_film).jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.cinesettai.in/wp-content/uploads/2020/12/Calls-Tamil-Movie-1.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://i.pinimg.com/originals/75/0c/20/750c209283f2aebca76d9cf39f42739f.jpg" alt="img" /></SwiperSlide>
        </Swiper>
      </div>

      <div >
        <Typography    className={classes.typography} ><a style={{color:'white',fontWeight:800}} href="http://localhost:3000/Newrelease">Trending Movies</a></Typography>
        <Swiper style={{ marginTop: 10 }} slidesPerView={8} spaceBetween={20} freeMode={true} pagination={{
          "clickable": true
        }} className="mySwiper">

          <SwiperSlide><img src="https://www.moviepostersgallery.com/wp-content/uploads/2020/08/Blackwidow2.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.alternateending.com/wp-content/uploads/2021/04/eK57azV2cy28NyziNhGFYwTAtNX.jpeg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/223846/TJ_VERT_MAIN_DOM_2764x4096.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://static.toiimg.com/photo/49713145.cms?imgsize=172810" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn.bollywoodmdb.com/movies/largethumb/2021/koi-jaane-na/koi-jaane-na-poster-3.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.themoviedb.org/t/p/original/dP0d0oHEpATYP62fZI452NegoB6.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://i.pinimg.com/736x/05/e1/82/05e182cb5e17642c7b8d98d9dedad7d2--funny-songs-bollywood-posters.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.themoviedb.org/t/p/original/zzDGXbFU8VIbT8V6skOFn3nGn0i.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://i.etsystatic.com/26431466/r/il/462c49/2997534217/il_1588xN.2997534217_6v1d.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.themoviedb.org/t/p/w440_and_h660_face/s8DAtleH5tvYlSEuwcc1TnZ1LLz.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.dvdsreleasedates.com/posters/800/M/Mortal-Kombat-2021-movie-poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://popcornusa.s3.amazonaws.com/movies/650/10773-14229-Pettajpg" alt="img" /></SwiperSlide>
        </Swiper>
      </div>

      <div >
        <Typography    className={classes.typography} ><a style={{color:'white',fontWeight:800}} href="http://localhost:3000/Newrelease">Latest Movies</a></Typography>
        <Swiper style={{ marginTop: 10 }} slidesPerView={8} spaceBetween={20} freeMode={true} pagination={{
          "clickable": true
        }} className="mySwiper">

          <SwiperSlide><img src="https://th.bing.com/th/id/OIP.iCfpcgakuDNSW97oyOBg0AHaKn?pid=ImgDet&rs=1" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://4.bp.blogspot.com/-74SLf8I1074/Wehs8-HpSFI/AAAAAAAAAZ8/CBuRj3M0KvIliSQAWKsA_x1VDGrZkB1oQCLcBGAs/s1600/thor-ragnarok-poster-main.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://1.bp.blogspot.com/-ZdKj49LTxGQ/XYzgLMLqyVI/AAAAAAAAEu8/PXxmkiXqYbgCsd8DtXCjDpUQ94DkSdAbgCLcBGAsYHQ/s1600/Marjaavaan-poster2.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/OIP.iRqgb0DJTU_VFXGnRvcNZAHaKz?pid=ImgDet&rs=1" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/R.bf98beca818acb09f8dcd5b7710a6a38?rik=3J5G18Yg82OZFA&riu=http%3a%2f%2fcomic-cons.xyz%2fwp-content%2fuploads%2fmarvel-cinematic-universe-ant-man-wasp-movie-poster.jpg&ehk=xH%2fJZ5jjCHXjLCrB1WbT3Izs%2fMT0UL87J47yO0M%2b2Rw%3d&risl=&pid=ImgRaw&r=0" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://i.pinimg.com/736x/e9/e8/17/e9e8179654fbbdd4849fe9a81f5b8fc2.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/en/6/64/Infamous_2020_poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/R.d5b3526df83c483ac997923b88bf8230?rik=Uk7fk2IxI6YtpA&riu=http%3a%2f%2fwww.filmofilia.com%2fwp-content%2fuploads%2f2011%2f03%2fthor_poster1.jpg&ehk=nWVyEpzZYzvyShfuV6rRqRPT4Lnb3zrCyX9W7jqeiY8%3d&risl=&pid=ImgRaw&r=0" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/OIP.WzkNXG6yjpLqvcinrNo5IwHaKs?pid=ImgDet&rs=1" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://starmarathi.in/wp-content/uploads/2016/04/Sairat-Marathi-Movie-Poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn1.marathistars.com/wp-content/uploads/2014/05/Lai-Bhaari-Marathi-Movie-Poster.jpg" alt="img" /></SwiperSlide>
        </Swiper>
      </div>


      <div >
        <Typography   className={classes.typography} ><a style={{color:'white',fontWeight:800}} href="http://localhost:3000/Newrelease">Hindi Movies</a></Typography>
        <Swiper style={{ marginTop: 10 }} slidesPerView={8} spaceBetween={20} freeMode={true} pagination={{
          "clickable": true
        }} className="mySwiper">

          <SwiperSlide><img src="https://s3.scoopwhoop.com/anj2/miscellaneous/f967abc5-ade7-45fb-8ca3-0a0490972652.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://dl6.wapkizfile.info/download/fd9ef50bf60bb0cd74b1941f860b3ee6/4867cb3f60384b2bae635efb1a5bb5bb/filmyzilla+wapzim+com/Kannum%20Kannum%20Kollaiyadithaal%20(2021)%20New%20South%20Full%20Movie%20Hindi%20Dubbed%20FilmyZilla.gif" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/OIP.mlYaNeeuwYLacHHhnQ0nQADhEs?pid=ImgDet&w=1500&h=2000&rs=1" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://i0.wp.com/www.hdvogo.com/wp-content/uploads/2020/02/Malang-2020-in-HD-Hindi-Full-Movie.jpg?fit=750%2C1000&ssl=1" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://blogtobollywood.com/wp-content/uploads/2016/12/Raees-New-Poster-768x1024.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://img.gurugamer.com/resize/740x-/2020/09/12/chhapaak-poster-b925.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://indiamovietv.com/icon/02/27/13/31/movies-to-watch-tamasha-hd-free-21-gomovies-full-blue.png" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://starsunfolded.com/wp-content/uploads/2017/07/Singham.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://qph.fs.quoracdn.net/main-qimg-34c1baae05e5b1e013980b4e419cdfb3" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.reviewsxp.com/blog/wp-content/uploads/2019/03/Bharat-577x807.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/OIP.U1waPunj0j0gDOO7iYGpwgHaJ4?pid=ImgDet&rs=1" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/OIP.TjJkry5cBdT4tTaz4nGaaQAAAA?pid=ImgDet&rs=1" alt="img" /></SwiperSlide>
        </Swiper>
      </div>


      <div >
        <Typography   className={classes.typography} ><a style={{color:'white',fontWeight:800}} href="http://localhost:3000/Newrelease">Tollywood Movies</a></Typography>
        <Swiper style={{ marginTop: 10 }} slidesPerView={8} spaceBetween={20} freeMode={true} pagination={{
          "clickable": true
        }} className="mySwiper">

          <SwiperSlide><img src="https://moviegalleri.net/wp-content/uploads/2019/10/Thalapathy-Vijay-Whistle-Movie-First-Look-Poster-HD.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/R.2e01ea6266ca6a60229c52b0fee798e1?rik=dM9V%2b8P1yRA2hg&riu=http%3a%2f%2fmoviegalleri.net%2fwp-content%2fgallery%2frace-gurram-movie-posters-wallpapers%2fallu_arjun_shruti_hassan_race_gurram_movie_posters_5881674.jpg&ehk=B0O04Lwu9fb3odYk1ME2ybEcflkouQA2DHq2TcpD0FI%3d&risl=&pid=ImgRaw&r=0" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://moviegalleri.net/wp-content/gallery/sankranti-2020-wishes-poster/krack-movie-happy-sankranti-2020-wishes-poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://i0.wp.com/dekhnews.com/wp-content/uploads/2015/08/mun.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/OIP.Eox9KzTCPfj1xthqQaXnJgHaKX?pid=ImgDet&rs=1" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://files.prokerala.com/movies/pics/800/movie-new-poster-114536.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.newsbugz.com/wp-content/uploads/2018/11/Mudra-Telugu-Movie-2-700x980.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.chitramala.in/wp-content/gallery/srimanthudu-movie-posters/Srimanthudu-Telugu-Movie-Latest-Poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://www.25cineframes.com/images/gallery/2015/10/varun-tej-puri-jagannath-loafer-telugu-movie-first-look-hd-posters/04-Varun-Tej-Puri-Jagannath-Loafer-Telugu-Movie-First-Look-HD-Posters.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/R.6a2b0c91ed472080ae4b53f679087d3d?rik=jEBYUtCSQE%2fJEw&riu=http%3a%2f%2fdatastore03.rediff.com%2fh1500-w1500%2fthumb%2f69586A645B6D2A2E3131%2f0eo3petyu8ipe3s6.D.0.Sarrainodu-Telugu-Movie-Poster.jpg&ehk=QCrAsuXicDdQ464reE5pvGt3IUOPVq%2bdVF5%2bk0xQKKI%3d&risl=1&pid=ImgRaw&r=0" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://moviegalleri.net/wp-content/uploads/2018/03/Gopichand-Pantham-Movie-First-Look-Poster-HD.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/R.54bdea39d0d3845808c16ac5f840e5dc?rik=1b9vU5CaGLptKg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gbSIIMPzIHE%2fUQz5f2t-h1I%2fAAAAAAABWWs%2ftw4JqsrbTRw%2fs1600%2fmirchi_movie_hq_wallpapers_posters_010.jpg&ehk=pYGCy1EDvNKWEeGi36NmcwLM%2b%2bxXmOiYzMIA1IltSeo%3d&risl=&pid=ImgRaw&r=0" alt="img" /></SwiperSlide>
        </Swiper>
      </div>


      <div >
        <Typography  className={classes.typography} ><a style={{color:'white',fontWeight:800}} href="http://localhost:3000/Newrelease">Marathi Movies</a></Typography>
        <Swiper style={{ marginTop: 10 }} slidesPerView={8} spaceBetween={20} freeMode={true} pagination={{
          "clickable": true
        }} className="mySwiper">

          <SwiperSlide><img src="https://3.bp.blogspot.com/-m4NvXm4lUTc/VrBYGu5wREI/AAAAAAAAAnk/tYOUeAC8Ehw/s1600/Mr-Mrs-Sadachari-Marathi-Movie-Poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://img.starbiz.com/resize/750x-/2020/05/19/nashibvaan-marathi-movies-2019-5f25.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn1.marathistars.com/wp-content/uploads/2016/01/Phuntroo-Poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://img.starbiz.com/resize/750x-/2020/05/19/miss-u-mister-marathi-movie-2019-2cbd.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://img.starbiz.com/resize/750x-/2020/05/19/thackeray-marathi-movie-2019-cf2e.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn1.marathistars.com/wp-content/uploads/2015/01/Baji-2015-Movie-Poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn1.marathistars.com/wp-content/uploads/2019/02/Luckee-Marathi-Movie-Poster-709x1024.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://megamarathi.com/wp-content/uploads/2015/12/poster-girl-marathi-movie-poster.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn1.marathistars.com/wp-content/uploads/2015/05/Killa-Marathi-Movie-Poster1.jpg" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/R.f3ac6c3b018af42936568aacd521775d?rik=mDivkCbTOQr6MQ&riu=http%3a%2f%2fcdn1.marathistars.com%2fwp-content%2fuploads%2f2017%2f04%2fBhetali-Tu-Punha-Marathi-Movie-Poster.jpg&ehk=QJyAm14u6Ncs3chBrrUtsLuLCXSrG5v1JglQh8405lQ%3d&risl=&pid=ImgRaw&r=0" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://th.bing.com/th/id/R.b060dc3cad11b3c15bfca801a0a446da?rik=pCFpHevPRl48Bg&riu=http%3a%2f%2fcdn1.marathistars.com%2fwp-content%2fuploads%2f2017%2f11%2fHampi-2017-Marathi-Movie-Poster.jpg&ehk=R2e0dEwI06Xs49PN%2feb45izL0yParRhVMnZvIG0OY9k%3d&risl=&pid=ImgRaw&r=0" alt="img" /></SwiperSlide>
          <SwiperSlide><img src="https://megamarathi.com/wp-content/uploads/2015/09/Mauli-Marathi-Movie-Posters.jpg" alt="img" /></SwiperSlide>
        </Swiper>
      </div>
      </div>

    </>
  )
}

export default Swipe
