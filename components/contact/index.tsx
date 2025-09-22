import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return <section id="Contact" className="contact-page-sec py-16 text-white">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row -mx-6">
      
      {/* Formulario */}
      <div className="w-full lg:w-2/3 px-6 mb-12 lg:mb-0">
        <div className="contact-page-form rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Contact me</h2>
          <form action="contact-mail.php" method="post" className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                className="flex-1 p-3 rounded-md border text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="E-mail" 
                required
                className="flex-1 p-3 rounded-md border text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 md:mt-0"
              />
            </div>

            <div className="flex flex-col md:flex-row md:space-x-4">
              <input 
                type="text" 
                name="phone" 
                placeholder="Phone Number"
                className="flex-1 p-3 rounded-md border text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 md:mt-0"
              />
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject"
                className="flex-1 p-3 rounded-md border text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 md:mt-0"
              />
            </div>

            <textarea 
              name="message" 
              placeholder="Write Your Message"
              className="w-full p-3 rounded-md border text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              rows={6}
            ></textarea>

            <div>
              <input 
                type="submit" 
                value="Send Now"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md cursor-pointer transition-colors mt-4"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Mapa */}
      <div className="w-full lg:w-1/3 px-6">
        <div className="contact-page-map rounded-lg overflow-hidden shadow-lg h-full">
          {/* Descomenta tu iframe si quieres mostrar el mapa */}
   
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d210.3104092159142!2d-116.85419536277738!3d32.5003232441967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1758502452199!5m2!1ses!2smx"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  </div>
</section>
};

export default Contact;

