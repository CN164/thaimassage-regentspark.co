import React from 'react'
import './Treatment.scss'
import { Helmet } from 'react-helmet-async';

const treatments = [
  {
    id: 1,
    title: "Thai Massage",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    description: "Traditional Thai Massage is performed without massage oil. The therapist uses the palms, thumbs and elbows to work on key pressure points, combined with stretching and gentle mobilisation of the main joints. This style effectively promotes circulation of the venous blood and lymphatic systems, helping to unblock problem areas and relieve pain."
  },
  {
    id: 2,
    title: "Relaxing Oil Massage",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
    description: "A relaxing full-body massage using long, slow but firm techniques to provide a gradual, soothing treatment. Smooth gliding strokes assist the circulation of venous blood and the lymphatic system, leaving you feeling deeply relaxed and restored."
  },
  {
    id: 3,
    title: "Deep Tissue Massage",
    image: "https://www.painawayclinic.com/wp-content/uploads/2020/07/blog-deep-tissue-massage-therapy-bangkok-everything-you-need-to-know.jpg",
    description: "Drawing on both traditional Thai and Western techniques, Deep Tissue Massage firmly reaches deeper layers of muscle to address pain and injury. It is ideal for treating repetitive strains and sports injuries, promoting gradual pain relief and connective tissue repair."
  },
  {
    id: 4,
    title: "Hot Stone Massage",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    description: "Smooth, heated stones are placed on specific parts of the body to ease muscle tension and damaged soft tissue throughout your body. Hot Stone Massage helps relieve muscle pain, reduce stress and anxiety, and promotes deeper, more restful sleep."
  },
  {
    id: 5,
    title: "Foot Reflexology",
    image: "/Foot_Reflexology.png",
    description: "A secret of stress relief — a deeper massage from the top of the feet, heels, toes to ankles. This focused treatment helps restore energy levels, relieve stress, and impart a feeling of general well-being throughout the body."
  }
]

function Treatment() {
  return (
    <div className="treatment-page">
      <Helmet>
        <title>Our Treatments | Amara Remedial Thai Massage</title>
        <meta name="description" content="Explore our treatments: Traditional Thai Massage, Relaxing Oil Massage, Deep Tissue, Hot Stone, and Foot Reflexology. Serving Regents Park, Sydney." />
      </Helmet>
      <div className="treatment-hero">
        <h1>Our Treatments</h1>
        <p>Discover our range of traditional and therapeutic massage treatments</p>
      </div>
      {treatments.map((treatment, index) => (
        <section
          key={treatment.id}
          className={`treatment-section${index % 2 === 1 ? ' reverse' : ''}`}
        >
          <div className="treatment-image">
            <img src={treatment.image} alt={treatment.title} />
          </div>
          <div className="treatment-text">
            <span className="treatment-number">0{treatment.id}</span>
            <h2>{treatment.title}</h2>
            <p>{treatment.description}</p>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Treatment
