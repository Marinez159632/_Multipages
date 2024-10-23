import './Home.css'

function Home() {
    return ( 
    <div className='home-container1'>
        
        <div className='home-container'>
        <div className="box1">
        <h1>Introduce myself</h1>
        <span>
          <div className="home-image"></div>
          <div className="home-text">
            <h2 className="home-title">
            </h2>
          </div>
        </span>
      </div>
      <div className="box2">
        <h2>ชื่อ : ศิรินทร์ จันทร์ทนต์</h2>
        <h2>รหัส : 66085170</h2>
        <h2>คณะ : เทคโนโลยีสารสนเทศ</h2>
        <h2>สาขา : วิทยาการคอมพิวเตอร์</h2>
        <h2>Email : sirin.cha@spumail.net</h2>
        <h2>คำคม : ทหารถือปืน แบกปืน ไปโบกตึก</h2>
      </div>
    </div>
    </div> );
}

export default Home;