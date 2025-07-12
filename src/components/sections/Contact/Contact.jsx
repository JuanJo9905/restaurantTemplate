import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { restaurantData } from '../../../data/restaurantInfo';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Reserva enviada! Te contactaremos pronto para confirmar.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <h2 className="section-title">Contacto y Reservas</h2>
        <p className="contact__subtitle">
          Reserva tu mesa o contáctanos para cualquier consulta
        </p>

        <div className="grid grid-2">
          <div>
            <h3 className="contact__info-title">Información de Contacto</h3>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <MapPin size={20} />
              </div>
              <div>
                <p className="contact__info-label">Dirección</p>
                <p className="contact__info-value">{restaurantData.address}</p>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <Phone size={20} />
              </div>
              <div>
                <p className="contact__info-label">Teléfono</p>
                <p className="contact__info-value">{restaurantData.phone}</p>
              </div>
            </div>

            <div className="contact__info-item">
              <div className="contact__info-icon">
                <Clock size={20} />
              </div>
              <div>
                <p className="contact__info-label">Horarios</p>
                <p className="contact__info-value">{restaurantData.hours}</p>
              </div>
            </div>
          </div>

          <div className="card contact__form-card">
            <h3 className="contact__form-title">Reservar Mesa</h3>
            
            <form onSubmit={handleSubmit} className="contact__form">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="contact__form-input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="contact__form-input"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="contact__form-input"
              />

              <div className="contact__form-group">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  className="contact__form-input"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  className="contact__form-input"
                />
              </div>

              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
                className="contact__form-select"
              >
                <option value="">Número de comensales</option>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 personas</option>
                <option value="7+">7 o más personas</option>
              </select>

              <textarea
                name="message"
                placeholder="Mensaje adicional (opcional)"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="contact__form-textarea"
              />

              <button type="submit" className="btn contact__form-submit">
                <Phone size={20} />
                Enviar Reserva
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;