import React from "react";

const Service = () => {
  const services = [
   {
    title:"Biometric Staff Management",
    description: " Accurate attendance tracking and access control are guaranteed with our advanced biometric authentication system. Enable staff collaboration and increased security in your facility. "
   },
   {
    title:"Doctors Appointment Scheduling",
    description: "Empower patients to make appointments with ease thanks to our user-friendly interface. Predict available doctor appointments and optimize doctor-patient interactions with real-time updates and automated reminders."
   },
   {
    title:"Specialized Units Management",
    description: " From maternity and emergency units to ICU and mortuary management, our HMS provides dedicated solutions to streamline processes and improve patient care across all specialized units."
   },
   {
    title:"Electronic Health Records (EHR)",
    description: "Digitize patient health records for easy access, storage, and retrieval. Ensure confidentiality and compliance with healthcare regulations through secure data management."
   },
   {
    title:"Inventory Management",
    description: "Efficiently manage medical supplies, equipment, and pharmaceuticals to avoid stockouts and minimize waste. Set up automated alerts for low inventory levels and expiring items."
   },
   {
    title:"Reporting and Analytics:",
    description: "Generate comprehensive reports on key performance indicators to drive informed decision-making. Gain insights into patient demographics, treatment outcomes, and resource utilization patterns."
   },
  ]
  return(
  <section id="service" className="small_pb">
    <div className="row align-items-center justify-content-center">
      <div className="col-lg-8 offset-lg-12 col-md-12 col-sm-12">
        <div className="title_default_light title_border text-center">
          <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
            MEET OUR SOLUTION FOR YOU
          </h4>
          <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          Mount Tech Solutions recognizes the challenges of running a healthcare facility. For this reason, we have designed a modern Hospital Management System (HMS) to streamline operations, improve the quality of patient care and increase efficiency. Our HMS services are tailored to meet the needs of hospitals, clinics, and healthcare providers, regardless of their size.
</p>
<h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
Our HMS Services
          </h4>
        </div>
      </div>
      <div className="row justify-content-center">
        {
        services.map((service, i)=>(
  <div className="col-lg-4 col-md-6 col-sm-12" key={i +1}>
    <div className="box_wrap text-center animation" data-animation="fadeInUp" data-animation-delay={`0.${i+1}s`}>
          <h4> {service.title}</h4>
          <p> {service.description}</p>
    </div>
  </div>
        ))
        }
      </div>
    </div>
    <div className="title_default_light title_border text-center mt-5">
          <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          SUBSCRIPTION PACKAGES
          </h4>
        <ul>
        <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{
    color: "#ffbf00"
}}>Basic Package: Ideal for small clinics and healthcare centers.</li>
         <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{
    color: "#ffbf00"
}}>Standard Package: Suitable for medium-sized hospitals and specialty clinics.</li>
         <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{
    color: "#ffbf00"
}}>Premium Package: Designed for large hospitals and healthcare networks..</li>
        </ul>
</div>

    <div className="title_default_light title_border text-center mt-5">
          <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
          Why Choose Mount Tech Solutions HMS?
          </h4>
        <ul>
        <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{
    color: "#ffbf00"
}}>Comprehensive Solution: Our HMS covers all essential aspects of hospital management, from staff attendance to patient care units.</li>
         <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{
    color: "#ffbf00"
}}>Advanced Features: With special biometric authentication and specialized unit management, we offer advanced functionality to enhance efficiency and patient outcomes.
</li>
         <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{
    color: "#ffbf00"
}}>Customizable Packages: Choose the package that best fits your institution's needs and budget.
</li>
         <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s" style={{
    color: "#ffbf00"
}}>Dedicated Support: Our experienced support team is available to assist you every step of the way, ensuring a smooth and successful experience with our HMS services.
</li>
        </ul>
        <h5>Experience the difference with Mount Tech Solutions HMS and take your healthcare facility to new heights. Contact us today to learn more and schedule a demo.

</h5>
</div>
  </section>
  ) 
};

export default Service;
