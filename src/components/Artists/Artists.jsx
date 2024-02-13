import ArtistOne from './images/1.png'
import ArtistTwo from './images/2.png'
import ArtistThree from './images/3.png'

const Artists = () => {
  return (
    <div className='artists-list'>
      <h3>Artistas</h3>
      <div className='artists'>
        <div className='artist-item'>
          <img src={ArtistOne.src} alt='' />
          <h5>Arlene McCoy</h5>
        </div>
        <div className='artist-item'>
          <img src={ArtistTwo.src} alt='' />
          <h5>Darlene Robert</h5>
        </div>
        <div className='artist-item'>
          <img src={ArtistThree.src} alt='' />
          <h5>Courtney Henry</h5>
        </div>
      </div>
    </div>
  )
}

export default Artists
