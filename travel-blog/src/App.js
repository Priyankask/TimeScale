import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <div className="grid-container__header">
          <div className ="main-nav">
            <div className="main-nav-logo">
              <div>
                Travelize
              </div>
              <span>
                My Traveling Experiences
              </span>
            </div>
            <div className="main-nav-tab">Home</div>
            <div className="main-nav-tab">Blog</div>
            <div className="main-nav-tab about">About</div>
          </div>
        </div>
        <div className="grid-container__heroBackground">
          <img src={heroBackground} alt="hero-background"></img>
        </div>
        <div className="grid-container__headshot">
          <img src={headshot} alt="headshot"></img>
        </div>  
        <div className="grid-container__description">
          <h2>A little about me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non porta velit. Praesent nec est eget ligula sollicitudin aliquet. Sed ligula ante, dapibus eget nisl quis, viverra sagittis ipsum. Vivamus sit amet turpis sit amet odio hendrerit rutrum. Nulla feugiat lacus sit amet erat scelerisque pulvinar ac et lectus. Nunc quis lobortis purus. Vivamus posuere sapien turpis, ut aliquet nisi congue quis. Nullam et congue dui, molestie ultrices lorem. Duis dignissim sem non erat convallis dictum.</p>
          <p>Sed lacinia metus est, nec sagittis sem faucibus et. Fusce consequat, turpis a egestas vehicula, elit massa imperdiet diam, vitae maximus urna augue consequat neque. Donec maximus eget ipsum nec iaculis. Cras at facilisis turpis. Praesent imperdiet metus id mauris luctus, viverra rhoncus nulla elementum. Suspendisse sollicitudin dolor vel augue finibus, et tincidunt felis interdum. Pellentesque vitae ligula sit amet magna laoreet porttitor</p>
          <p>Duis consectetur molestie nisl non consectetur. Praesent ut vulputate sem. Sed eu molestie eros. Pellentesque sed enim eget ipsum laoreet faucibus non sed turpis. In varius nunc auctor, venenatis tortor nec, fermentum lectus. Maecenas posuere ac orci quis eleifend. Vivamus eget auctor nibh. Mauris vestibulum magna luctus, laoreet dolor a, ornare sapien</p>
          <p>In laoreet scelerisque finibus. Morbi posuere dignissim est, nec eleifend risus imperdiet eget. Suspendisse potenti. Aliquam rhoncus aliquam tellus eu vehicula. Sed velit nisl, elementum eu nisl quis, laoreet eleifend neque.</p>
          <p>Praesent molestie lacinia pretium. Morbi scelerisque rutrum libero eget volutpat. Suspendisse potenti. Maecenas elementum faucibus diam a dictum. Nulla quis nulla a odio lacinia blandit. In congue mattis felis quis auctor. Cras eu libero augue. Mauris id metus ornare, rutrum ante in, convallis purus</p>
          <p>Nunc id condimentum nunc, id ultrices lorem. Vivamus eu augue pellentesque, fermentum massa in, laoreet nisi. Nullam bibendum mattis risus quis auctor. Aenean sit amet nunc pellentesque, eleifend massa nec, imperdiet ipsum. Donec ante dolor, ultrices at felis in, semper maximus tortor. Nulla maximus dictum efficitur. In vel est enim</p>
          <p>Nulla nisl dolor, semper sed pharetra et, pretium pretium turpis. Fusce venenatis tincidunt risus nec suscipit. Nullam ac leo iaculis, commodo lacus porta, tempus tellus. Nullam dapibus sit amet eros vitae iaculis. Duis consectetur quam at dolor pulvinar vehicula. Maecenas quis posuere risus. Aliquam sit amet nunc non elit congue sollicitudin. Fusce sed leo vel turpis feugiat euismod.</p>
        </div>
      </div>
      <div class="footer about">
        <div className="footer-copyright">@2020 Travelize</div>
        <div className="footer-privacy">Privacy Policy</div>
        <div className="footer-TC">Terms and Conditions</div>
      </div>
    </div>
  );
}

export default App;
