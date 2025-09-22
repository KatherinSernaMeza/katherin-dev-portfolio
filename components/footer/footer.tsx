import React from 'react'

function Footer() {
  return (
    <footer className="footer-section">
    <div className='container m-auto'>
        <div className=" pt-5 pb-5">
            <div className="row footer-cta">
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="cta-text">
                            <h4>Dirección</h4>
                            <span>Fracc. Villa del Sol, Priv. Bonaire 23787 C-25, Tijuana B.C Mexico</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="fas fa-phone"></i>
                        <div className="cta-text">
                            <h4>Teléfono</h4>
                            <span>+52 (664) 443 39 78</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <i className="far fa-envelope-open"></i>
                        <div className="cta-text">
                            <h4>Correo electrónico</h4>
                            <span>katherin.serna.m@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-content pt-5 pb-5">
            <div className="row footer-content-row">
                <div className="col-xl-4 col-lg-4 mb-50">
                <div className="w-full lg:w-1/3 mb-12 lg:mb-0">
              <div className="footer-widget">
                    {/* Logo */}
                    <div className="footer-logo mb-4">
                      <a href="index.html">
                        {/* <img src="https://i.ibb.co/QDy827D/ak-logo.png" className="w-32" alt="logo" /> */}
                      </a>
                    </div>

                    {/* Texto */}
                    <div className="footer-text mb-4">
                      <p className="text-gray-300 text-sm">
                        Gracias por visitar mi portafolio 💛. Siempre abierta a nuevas ideas y proyectos.
                      </p>
                    </div>

                    {/* Redes sociales */}
                    <div className="footer-social-icon flex items-center space-x-3">
                      <span className="text-white font-semibold mr-3">Follow me</span>
                      <a href="#" className="text-white hover:text-blue-600 transition-colors">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="text-white hover:text-blue-400 transition-colors">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="text-white hover:text-red-500 transition-colors">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </div>
              </div>
            </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Pages</h3>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Experience">Experience</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                            <h3>Social</h3>
                        </div>
                        <ul>
                            <li><a href="https://github.com/">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/katherin-serna/">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-4 px-6">
  <div className="text-center lg:text-left">
    <p>Copyright &copy; 2025, All Right Reserved <a href="https:www.katherin.dev">katherin.dev</a></p>
  </div>
  <ul className="flex space-x-4 text-center lg:text-right">
    <li><a href="#">Home</a></li>
    <li><a href="#Projects">Projects</a></li>
    <li><a href="#Skills">Skills</a></li>
    <li><a href="#Experience">Experience</a></li>
    <li><a href="#Contact">Contact</a></li>
  </ul>
</div>
</footer>
  )
}

export default Footer