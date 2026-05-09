import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePerson } from '../context/PersonContext';
import { uploadToR2 } from '../utils/r2';
import { Link } from 'react-router-dom';

const Shapes = () => (
    <div className="shapes-decor">
        <div className="shape rhombus"></div>
        <div className="shape circle"></div>
        <div className="shape semi"></div>
        <div className="shape hex"></div>
    </div>
);

const Navbar = ({ navData }) => {
    const { language, setLanguage, translations } = useLanguage();
    const { person } = usePerson();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container nav-content">
                <div className="logo-group">
                    <div className="scout-icon" style={{ display: 'grid', placeItems: 'center', fontSize: '1.5rem' }}>📢</div>
                    <span className="logo-text">CONSTRUYENDO LIDERAZGO JUVENIL</span>
                </div>

                <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </button>

                <div className={`nav-links-wrapper ${isMenuOpen ? 'active' : ''}`}>
                    <a href="/#vision" className="nav-link" onClick={() => setIsMenuOpen(false)}>{navData.about[language]}</a>
                    <a href="/#profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>{navData.bio[language]}</a>
                    <a href="/#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>{navData.experience[language]}</a>
                    <a href="/#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>{navData.testimonials[language]}</a>
                    <a href="/#gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>{navData.gallery ? navData.gallery[language] : 'Galería'}</a>
                    <a href="/#contact" className="nav-link-last" onClick={() => setIsMenuOpen(false)}>{navData.contact[language]}</a>
                    
                    {person?.settings?.candidacyEnabled !== false && (
                        <Link to="/candidatura" className="candidacy-btn-nav" onClick={() => setIsMenuOpen(false)}>
                            {navData.candidacy[language]}
                        </Link>
                    )}
                    
                </div>
            </div>
        </nav>
    );
};

const Hero = ({ person }) => {
    const { language } = useLanguage();
    const [firstName, lastName] = person.name.toUpperCase().split(' ');

    return (
        <header className="hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="animate-slide-in-left delay-100"><Shapes /></div>
                        <div className="name-banner animate-fade-in-up delay-200">
                            <span className="name-part name-said">{firstName}</span>
                            <span className="name-part name-ortega">{lastName}</span>
                        </div>
                        <span className="tagline-badge animate-fade-in-up delay-300">{person.tagline[language]}</span>
                        <p className="animate-fade-in-up delay-400" style={{ fontSize: '1.4rem', fontWeight: '600', color: 'var(--scout-blue)', lineHeight: '1.3' }}>
                            {person.sections.hero.subtitle[language]}
                        </p>
                    </div>
                    <div className="hero-image-wrapper animate-scale-in delay-500">
                        <img src="/fotoCandidatura/perfil.jpeg" alt={person.name} />
                    </div>
                </div>
            </div>
        </header>
    );
};

const VisionSection = ({ visionData }) => {
    const { language } = useLanguage();
    return (
        <section id="vision" className="section">
            <div className="container">
                <h2 className="section-title">
                    {visionData.title[language]} <i></i>
                </h2>
                <div className="info-cards">
                    {visionData.cards.map((card, idx) => (
                        <div key={idx} className="info-card">
                            <h3>{card.title[language]}</h3>
                            <p>{card.desc[language]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceSection = ({ expData }) => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleText = {
        es: isOpen ? "Ver menos ▲" : "Ver toda mi trayectoria ▼",
        en: isOpen ? "Show less ▲" : "View my full trajectory ▼",
        pt: isOpen ? "Ver menos ▲" : "Ver minha trajetória completa ▼",
        ar: isOpen ? "عرض أقل ▲" : "عرض مسيرتي الكاملة ▼"
    };

    // Show only first 3 items if not open, otherwise show all
    const displayedItems = isOpen ? expData.items : expData.items.slice(0, 3);

    return (
        <section id="experience" className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <h2 className="section-title">
                    {expData.title[language]} <i></i>
                </h2>
                <div className="timeline">
                    {displayedItems.map((item, idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">{item.year}</span>
                                <h4 style={{ color: 'var(--scout-purple)', marginBottom: '0.3rem' }}>{item.title[language]}</h4>
                                <p style={{ fontWeight: '500', fontSize: '0.9rem', opacity: 0.8 }}>{item.org}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {expData.items.length > 3 && (
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--scout-blue)',
                                color: 'var(--scout-blue)',
                                padding: '0.8rem 2rem',
                                borderRadius: '50px',
                                fontFamily: 'inherit',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'var(--transition)'
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--scout-blue)'; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--scout-blue)'; }}
                        >
                            {toggleText[language]}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

const CandidacySection = ({ candData }) => {
    const { language } = useLanguage();
    return (
        <section id="candidacy" className="section">
            <div className="container">
                <h2 className="section-title">
                    {candData.title[language]} <i></i>
                </h2>
                <div className="proposal-grid">
                    {candData.items.map((item, idx) => (
                        <div key={idx} className="proposal-card">
                            <h3 style={{ marginBottom: '1rem', color: 'var(--scout-yellow)' }}>{item.title[language]}</h3>
                            <p style={{ lineHeight: '1.4' }}>{item.desc[language]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = ({ testData }) => {
    const { language } = useLanguage();
    const { person, updatePerson } = usePerson();
    const [name, setName] = React.useState('');
    const [text, setText] = React.useState('');
    const [photoUrl, setPhotoUrl] = React.useState('');
    const [photoWithSaidUrl, setPhotoWithSaidUrl] = React.useState('');
    const [isUploading, setIsUploading] = React.useState(false);
    const [isUploadingWithSaid, setIsUploadingWithSaid] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const i18n = {
        es: { addBtn: "Publicar", publishing: "Publicando...", namePh: "Tu Nombre / Organización", textPh: "¿Cómo ha sido tu experiencia trabajando con Said?", photoBtn: "Tu Foto", photoWithSaidBtn: "Foto con Said (Opcional)", formTitle: "¡Suma tu Voz!", uploading: "Subiendo...", success: "¡Gracias! Tu comentario ha sido publicado.", error: "❌ No se pudo publicar. Revisa tu conexión." },
        en: { addBtn: "Publish", publishing: "Publishing...", namePh: "Your Name / Organization", textPh: "How has your experience working with Said been?", photoBtn: "Your Photo", photoWithSaidBtn: "Photo with Said (Optional)", formTitle: "Add your voice!", uploading: "Uploading...", success: "Thank you! Your comment has been published.", error: "❌ Failed to publish. Please check your connection." },
        pt: { addBtn: "Publicar", publishing: "Publicando...", namePh: "Seu Nome / Organização", textPh: "Como foi sua experiência de trabalho com Said?", photoBtn: "Sua Foto", photoWithSaidBtn: "Foto com Said (Opcional)", formTitle: "Adicione sua voz!", uploading: "Enviando...", success: "Obrigado! Seu comentário foi publicado.", error: "❌ Não foi possível publicar. Verifique sua conexão." },
        ar: { addBtn: "نشر", publishing: "جاري النشر...", namePh: "اسمك / منظمتك", textPh: "كيف كانت تجربتك في العمل مع سعيد؟", photoBtn: "صورتك الشخصية", photoWithSaidBtn: "صورة مع سعيد (اختياري)", formTitle: "أضف صوتك!", uploading: "جاري الرفع...", success: "شكراً لك! تم نشر تعليقك.", error: "❌ فشل النشر. يرجى التحقق من اتصالك." }
    };

    const handlePhotoUpload = async (e, type) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validaciones básicas
        if (!file.type.startsWith('image/')) {
            alert(language === 'es' ? "Por favor selecciona un archivo de imagen válido." : "Please select a valid image file.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            alert(language === 'es' ? "La imagen es demasiado pesada (máximo 5MB)." : "Image is too large (max 5MB).");
            return;
        }

        if (type === 'avatar') setIsUploading(true);
        else setIsUploadingWithSaid(true);

        try {
            console.log(`Subiendo ${type} a R2...`);
            const url = await uploadToR2(file);
            if (type === 'avatar') setPhotoUrl(url);
            else setPhotoWithSaidUrl(url);
            console.log(`${type} subida con éxito:`, url);
        } catch (error) {
            console.error("Error uploading image:", error);
            const msg = language === 'es' 
                ? "No se pudo subir la imagen. Verifica que el formato sea correcto o intenta con una imagen más pequeña." 
                : "Failed to upload image. Check the format or try a smaller image.";
            alert(msg);
        } finally {
            if (type === 'avatar') setIsUploading(false);
            else setIsUploadingWithSaid(false);
        }
    };

    const getCharCount = (str) => {
        return str.length;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !text || isSubmitting) return;

        if (getCharCount(text) > 300) {
            alert(language === 'es' ? "El testimonio no puede exceder los 300 caracteres." : "Testimonial cannot exceed 300 characters.");
            return;
        }

        setIsSubmitting(true);
        try {
            const newTestimonial = {
                name,
                text: { es: text, en: text, pt: text, ar: text },
                photo: photoUrl,
                photoWithSaid: photoWithSaidUrl
            };

            const newData = { ...person };
            newData.sections.testimonials.list.unshift(newTestimonial);
            
            await updatePerson(newData);

            setName('');
            setText('');
            setPhotoUrl('');
            setPhotoWithSaidUrl('');
            alert(i18n[language].success);
        } catch (error) {
            console.error(error);
            alert(i18n[language].error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const allTestimonials = testData?.list || [];
    const [selectedTestimonial, setSelectedTestimonial] = React.useState(null);

    const openModal = (t) => setSelectedTestimonial(t);
    const closeModal = () => setSelectedTestimonial(null);

    return (
        <section id="testimonials" className="section" style={{ background: 'var(--white)' }}>
            <div className="container">
                <h2 className="section-title">
                    {testData.title[language]} <i></i>
                </h2>

                <div className="add-testimonial-box">
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--scout-purple)' }}>{i18n[language].formTitle}</h3>
                    <form onSubmit={handleSubmit} className="testimonial-form">
                        <div className="form-groups-inline">
                            <div className="photo-upload-wrapper" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <label className="photo-upload-btn" style={{ opacity: isUploading ? 0.6 : 1, cursor: isUploading ? 'not-allowed' : 'pointer' }}>
                                        {isUploading ? i18n[language].uploading : i18n[language].photoBtn}
                                        <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e, 'avatar')} hidden disabled={isUploading || isUploadingWithSaid} />
                                    </label>
                                    {photoUrl && <img src={photoUrl} alt="Preview" className="photo-preview" />}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <label className="photo-upload-btn" style={{ background: 'var(--scout-purple)', opacity: isUploadingWithSaid ? 0.6 : 1, cursor: isUploadingWithSaid ? 'not-allowed' : 'pointer' }}>
                                        {isUploadingWithSaid ? i18n[language].uploading : i18n[language].photoWithSaidBtn}
                                        <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e, 'withSaid')} hidden disabled={isUploading || isUploadingWithSaid} />
                                    </label>
                                    {photoWithSaidUrl && <img src={photoWithSaidUrl} alt="Preview with Said" className="photo-preview" style={{ borderRadius: '8px' }} />}
                                </div>
                            </div>
                            <div className="form-group" style={{ flex: 1 }}>
                                <input className="testimonial-input" value={name} onChange={e => setName(e.target.value)} placeholder={i18n[language].namePh} required />
                            </div>
                        </div>
                        <div className="form-group" style={{ marginTop: '1rem', position: 'relative' }}>
                            <textarea className="testimonial-input" value={text} onChange={e => setText(e.target.value)} placeholder={i18n[language].textPh} rows={3} maxLength={320} required />
                            <div style={{ 
                                textAlign: 'right', 
                                fontSize: '0.75rem', 
                                marginTop: '0.3rem', 
                                color: getCharCount(text) > 300 ? 'red' : 'gray',
                                fontWeight: '600'
                            }}>
                                {getCharCount(text)} / 300 {language === 'es' ? 'caracteres' : 'characters'}
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="submit-testimonial-btn" 
                            disabled={isUploading || isUploadingWithSaid || isSubmitting || getCharCount(text) > 300}
                            style={{ opacity: (isUploading || isUploadingWithSaid || isSubmitting) ? 0.7 : 1 }}
                        >
                            {isSubmitting ? i18n[language].publishing : i18n[language].addBtn}
                        </button>
                    </form>
                </div>

                <div className="testimonial-grid" style={{ marginTop: '3rem' }}>
                    {allTestimonials.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="testimonial-card" 
                            style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
                            onClick={() => openModal(item)}
                        >
                            <div style={{ 
                                width: '100%', 
                                height: '180px', 
                                borderRadius: '15px', 
                                marginBottom: '1.2rem', 
                                overflow: 'hidden',
                                background: '#f1f5f9',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #f1f5f9'
                            }}>
                                {item.photoWithSaid ? (
                                    <>
                                        <div style={{
                                            position: 'absolute',
                                            top: -10, left: -10, right: -10, bottom: -10,
                                            backgroundImage: `url(${item.photoWithSaid})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'blur(10px) brightness(0.95)',
                                            opacity: 0.3,
                                            zIndex: 0
                                        }} />
                                        <img 
                                            src={item.photoWithSaid} 
                                            alt="Momento con Said" 
                                            style={{ 
                                                position: 'relative',
                                                zIndex: 1,
                                                maxWidth: '90%', 
                                                maxHeight: '90%', 
                                                objectFit: 'contain',
                                                borderRadius: '8px',
                                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                                            }} 
                                        />
                                    </>
                                ) : (
                                    <div style={{ color: '#cbd5e1', fontSize: '2.5rem' }}>📸</div>
                                )}
                            </div>
                            <div className="testimonial-text-content" style={{ 
                                marginBottom: '1.5rem', 
                                flex: 1,
                                display: '-webkit-box',
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                fontStyle: 'italic'
                            }}>"{item.text[language]}"</div>
                            
                            {item.text[language].length > 120 && (
                                <span style={{ color: 'var(--scout-purple)', fontWeight: '800', fontSize: '0.8rem', marginBottom: '1rem', display: 'block' }}>
                                    {language === 'es' ? 'Ver más...' : 'Read more...'}
                                </span>
                            )}

                            <footer className="testimonial-footer">
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--scout-coral)' }}>
                                    {item.photo ? (
                                        <img src={item.photo} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ background: 'var(--scout-purple)', width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'white' }}>{item.name[0]}</div>
                                    )}
                                </div>
                                <span style={{ fontWeight: '800', fontSize: '0.9rem' }}>{item.name}</span>
                            </footer>
                        </div>
                    ))}
                </div>

                {/* Testimonial Modal */}
                {selectedTestimonial && (
                    <div className="t-modal-overlay" onClick={closeModal} style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        zIndex: 2000, padding: '1rem'
                    }}>
                        <div className="t-modal-content animate-scale-in" onClick={e => e.stopPropagation()} style={{
                            background: 'white', borderRadius: '24px', maxWidth: '600px', width: '100%',
                            maxHeight: '90vh', overflowY: 'auto', padding: '2.5rem', position: 'relative'
                        }}>
                            <button onClick={closeModal} style={{
                                position: 'absolute', top: '1.5rem', right: '1.5rem',
                                background: '#f1f5f9', border: 'none', borderRadius: '50%',
                                width: '36px', height: '36px', cursor: 'pointer',
                                fontSize: '1.2rem', display: 'grid', placeItems: 'center'
                            }}>✕</button>

                            {selectedTestimonial.photoWithSaid && (
                                <div style={{ 
                                    width: '100%', height: 'auto', maxHeight: '400px',
                                    borderRadius: '16px', overflow: 'hidden', marginBottom: '2rem',
                                    background: '#f8fafc', border: '1px solid #eee'
                                }}>
                                    <img src={selectedTestimonial.photoWithSaid} alt="Full view" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </div>
                            )}

                            <div style={{ marginBottom: '2rem' }}>
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', fontStyle: 'italic', color: 'var(--text-dark)' }}>
                                    "{selectedTestimonial.text[language]}"
                                </p>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--scout-coral)' }}>
                                    {selectedTestimonial.photo ? (
                                        <img src={selectedTestimonial.photo} alt={selectedTestimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    ) : (
                                        <div style={{ background: 'var(--scout-purple)', width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'white' }}>{selectedTestimonial.name[0]}</div>
                                    )}
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, color: 'var(--scout-purple)', textTransform: 'none', letterSpacing: '0' }}>{selectedTestimonial.name}</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.6 }}>Testimonio verificado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

const BioSection = ({ bioData }) => {
    const { language } = useLanguage();
    
    const permanentBio = `Said Ortega es un líder juvenil de Panamá, estudiante de Derecho y actual Comisionado Nacional de Participación Juvenil de la Asociación Nacional de Scouts de Panamá. Su camino en el Movimiento Scout comenzó hace más de nueve años como joven participante del programa educativo, recorriendo cada etapa y alcanzando sus máximas condecoraciones: Scout Balboa, Caminante Istmeño y BP Rover.\n\nActualmente también se desempeña como Subdirector del Grupo Scout 15 Juan Demóstenes Arosemena, acompañando procesos de formación y liderazgo juvenil.\n\nFuera del Movimiento Scout, es voluntario activo de la Cruz Roja Panameña, donde se desempeña como Subdirector del organismo de juventud a nivel local y anteriormente fue Coordinador Nacional de Sector Escolar. Profesionalmente trabaja en gobiernos locales.\n\nEs un apasionado de las relaciones internacionales, la participación juvenil y la cooperación regional. Además, es coautor de dos libros publicados y actualmente se encuentra escribiendo un libro dirigido a jóvenes.\n\nCree firmemente que cuando los jóvenes cuentan con espacios reales para participar y liderar, el Movimiento Scout se vuelve más fuerte, innovador y relevante para la sociedad.`;

    return (
        <section id="profile" className="section" style={{ background: 'var(--white)' }}>
            <div className="container">
                <h2 className="section-title">
                    {bioData.title[language]} <i></i>
                </h2>
                <div className="bio-grid">
                    <div className="bio-main">
                        {permanentBio.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="bio-text" style={{ marginBottom: '1.2rem', lineHeight: '1.6' }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};



const ContactLinks = ({ contactData, socialLinks }) => {
    const { language } = useLanguage();

    return (
        <section id="contact" className="section" style={{ background: 'var(--white)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title" style={{ justifyContent: 'center' }}>
                    {contactData.title[language]}
                </h2>
                <p style={{ marginBottom: '3rem', fontWeight: '500', color: 'var(--scout-blue)' }}>{contactData.subtitle[language]}</p>
                <div className="link-grid">
                    {socialLinks.map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="social-button">
                            <div className="platform-info">
                                <span style={{ fontSize: '1.5rem' }}>{link.icon}</span>
                                <span>{link.platform}</span>
                            </div>
                            <span>➜</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SocialLinks = () => (
    <footer style={{ background: 'linear-gradient(135deg, #1a0533 0%, #3d1a78 50%, #6a1fc2 100%)', color: 'white', padding: '5rem 2rem 3rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            fontStyle: 'italic',
            fontWeight: '300',
            letterSpacing: '0.02em',
            color: 'rgba(255,255,255,0.7)',
            margin: '0 auto 0.6rem',
        }}>
            Tranquilo…
        </p>
        <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.2rem, 3.5vw, 2.2rem)',
            fontWeight: '800',
            lineHeight: '1.3',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            background: 'linear-gradient(90deg, #fff 0%, #d4b6ff 50%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        }}>
            solo estoy intentando que más jóvenes lideren el mundo.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}>
            <p style={{ fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.05em', margin: 0 }}>
                © {new Date().getFullYear()} SAID ORTEGA
            </p>
            <Link to="/mando" style={{ color: 'white', textDecoration: 'none', fontSize: '0.8rem', opacity: 0.6, transition: 'opacity 0.2s' }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.6}>
                🔒
            </Link>
        </div>
    </footer>
);

const GallerySection = ({ galleryData }) => {
    const { language } = useLanguage();
    if (!galleryData) return null;

    return (
        <section id="gallery" className="section" style={{ background: 'var(--bg-light)' }}>
            <div className="container">
                <h2 className="section-title">
                    {galleryData.title[language]} <i></i>
                </h2>
                <div className="gallery-grid">
                    {galleryData.images.map((src, idx) => (
                        <div key={idx} className="gallery-item">
                            <img src={src} alt={`Moment ${idx + 1}`} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ClosingPhrase = () => (
    <section
        id="closing"
        style={{
            background: 'linear-gradient(135deg, #1a0533 0%, #3d1a78 50%, #6a1fc2 100%)',
            color: 'white',
            padding: '6rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}
    >
        <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
            pointerEvents: 'none'
        }} />
        <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontStyle: 'italic',
            fontWeight: '300',
            letterSpacing: '0.02em',
            lineHeight: '1.6',
            opacity: 0.9,
            maxWidth: '760px',
            margin: '0 auto 1.2rem',
            color: 'rgba(255,255,255,0.75)'
        }}>
            Tranquilo…
        </p>
        <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(1.4rem, 4vw, 2.6rem)',
            fontWeight: '800',
            letterSpacing: '-0.01em',
            lineHeight: '1.3',
            maxWidth: '760px',
            margin: '0 auto',
            background: 'linear-gradient(90deg, #fff 0%, #d4b6ff 50%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        }}>
            solo estoy intentando que más jóvenes lideren el mundo.
        </h2>
    </section>
);

export { Navbar, Hero, VisionSection, BioSection, ExperienceSection, CandidacySection, TestimonialsSection, GallerySection, ContactLinks, SocialLinks, ClosingPhrase };

e };

