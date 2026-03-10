import React, { useState } from 'react';
import { usePerson } from '../context/PersonContext';
import { Navbar, SocialLinks } from '../components/PersonaComponents';
import { useLanguage } from '../context/LanguageContext';

const CandidacyPage = () => {
    const { person, loading } = usePerson();
    const { language } = useLanguage();
    const [selectedItem, setSelectedItem] = useState(null);
    const [showPdf, setShowPdf] = useState(false);

    if (loading || !person) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--scout-purple)', fontWeight: 'bolder', fontSize: '1.5rem', background: '#f8fafc' }}>
                SCOUTING THE WORLD...
            </div>
        );
    }

    const { candidacy } = person.sections;

    return (
        <main style={{ minHeight: '100vh', overflowY: 'auto' }}>
            <Navbar navData={person.sections.nav} />
            
            <section style={{ padding: '10rem 2rem 5rem', background: 'linear-gradient(135deg, var(--scout-purple) 0%, #3d1a78 100%)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
                
                <h1 className="animate-fade-in-up" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', marginBottom: '0.5rem', color: 'var(--scout-yellow)', textTransform: 'uppercase' }}>
                    {language === 'es' ? 'Conectar, Liderar, Transformar' : 
                     language === 'en' ? 'Connect, Lead, Transform' : 
                     language === 'pt' ? 'Conectar, Liderar, Transformar' : 
                     'التواصل، القيادة، التحول'}
                </h1>
                
                <h2 className="animate-fade-in-up delay-100" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', fontWeight: '400', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                    {language === 'es' ? 'Una propuesta para fortalecer la Red Interamericana de Jóvenes' :
                     language === 'en' ? 'A proposal to strengthen the Interamerican Youth Network' :
                     language === 'pt' ? 'Uma proposta para fortalecer a Rede Interamericana de Jovens' :
                     'اقتراح لتعزيز شبكة الشباب عبر الأمريكتين'}
                </h2>

                <div className="animate-fade-in-up delay-200" style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '20px',
                    padding: '2rem 2.5rem',
                    maxWidth: '850px',
                    margin: '0 auto 2.5rem',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
                }}>
                    <p style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', opacity: 1, lineHeight: '1.7', margin: 0 }}>
                        {language === 'es' ? (
                            <>
                                <strong style={{ color: 'var(--scout-yellow)', fontWeight: '700', display: 'block', marginBottom: '0.8rem' }}>Las juventudes scouts de las Américas tienen ideas, energía y ganas de liderar.</strong>
                                <span style={{ opacity: 0.9 }}>Esta propuesta busca fortalecer nuestra red para que esté mejor conectada, tenga más espacios de colaboración y pueda generar resultados reales para el Movimiento Scout en toda la región.</span>
                            </>
                        ) : language === 'en' ? (
                            <>
                                <strong style={{ color: 'var(--scout-yellow)', fontWeight: '700', display: 'block', marginBottom: '0.8rem' }}>Scout youth in the Americas have ideas, energy, and a desire to lead.</strong>
                                <span style={{ opacity: 0.9 }}>This proposal seeks to strengthen our network so that it is better connected, has more collaborative spaces, and can generate real results for the Scout Movement throughout the region.</span>
                            </>
                        ) : language === 'pt' ? (
                            <>
                                <strong style={{ color: 'var(--scout-yellow)', fontWeight: '700', display: 'block', marginBottom: '0.8rem' }}>As juventudes escoteiras das Américas têm ideias, energia e vontade de liderar.</strong>
                                <span style={{ opacity: 0.9 }}>Esta proposta busca fortalecer nossa rede para que esteja melhor conectada, tenha mais espaços de colaboração e possa gerar resultados reais para o Movimento Escoteiro em toda a região.</span>
                            </>
                        ) : (
                            <>
                                <strong style={{ color: 'var(--scout-yellow)', fontWeight: '700', display: 'block', marginBottom: '0.8rem' }}>شباب الكشافة في الأمريكتين لديهم الأفكار والطاقة والرغبة في القيادة.</strong>
                                <span style={{ opacity: 0.9 }}>يسعى هذا الاقتراح إلى تعزيز شبكتنا بحيث تكون متصلة بشكل أفضل، وتحتوي على مساحات تعاونية أكبر، ويمكنها تحقيق نتائج حقيقية للحركة الكشفية في جميع أنحاء المنطقة.</span>
                            </>
                        )}
                    </p>
                </div>

                <div className="scrolling-greetings-container">
                    <div className="scrolling-greetings-text">
                        ¡HOLA! — OLÁ! — HELLO! — BONJOUR! — ¿PURA VIDA? — ¿QUÉ XOPA? — ¿QUÉ ONDA!
                    </div>
                </div>
            </section>
            
            <section style={{ padding: '6rem 2rem 2rem', background: 'var(--white)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', background: '#000', aspectRatio: '16/9' }}>
                        {candidacy.videoUrl?.startsWith('data:video') ? (
                            <video 
                                src={candidacy.videoUrl} 
                                controls 
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                            />
                        ) : (
                            <iframe 
                                src={candidacy.videoUrl} 
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                title="Candidacy Video"
                            ></iframe>
                        )}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-light)', padding: '5rem 0' }}>
                <div className="container">
                    <div className="proposal-grid" style={{ gap: '2.5rem' }}>
                        {candidacy.items.map((item, idx) => (
                            <div key={idx} className="proposal-card animate-fade-in-up" style={{ 
                                padding: '3rem 2rem', 
                                transform: 'translateY(0)', 
                                transition: 'all 0.3s ease',
                                background: 'white',
                                borderRadius: '15px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                animationDelay: `${idx * 150}ms`,
                                cursor: 'pointer'
                            }} 
                                onClick={() => setSelectedItem(item)}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-15px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}>
                                
                                <div style={{ width: '80px', height: '80px', borderRadius: '20px', overflow: 'hidden', marginBottom: '1.5rem', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                                    <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h3 style={{ marginBottom: '1.5rem', color: 'var(--scout-purple)', fontSize: '1.8rem', fontWeight: '800' }}>
                                    {item.title[language]}
                                </h3>
                                <p style={{ color: 'var(--scout-blue)', fontWeight: 'bold', fontSize: '1rem', marginTop: 'auto', padding: '0.8rem 1.5rem', border: '2px solid var(--scout-blue)', borderRadius: '30px' }}>
                                    {language === 'es' ? 'Ver más' : language === 'en' ? 'See more' : language === 'pt' ? 'Ver mais' : 'شاهد المزيد'}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="animate-fade-in-up" style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <button 
                                onClick={() => setShowPdf(true)}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                                style={{
                                    background: 'var(--scout-purple)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '1.2rem 3rem',
                                    fontSize: '1.3rem',
                                    fontWeight: '800',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    position: 'relative',
                                    zIndex: 2
                                }}
                            >
                                <span style={{ fontSize: '1.8rem', color: 'white' }}>📄</span> 
                                {language === 'es' ? 'Ver Propuesta Completa' : language === 'en' ? 'View Full Proposal' : language === 'pt' ? 'Ver Proposta Completa' : 'عرض المقترح الكامل'}
                            </button>
                            <img 
                                src="/idea.png" 
                                alt="Idea Emoji" 
                                className="emoji-idea"
                                style={{
                                    position: 'absolute',
                                    right: '-45px',
                                    bottom: '-35px',
                                    width: '130px',
                                    zIndex: 3,
                                    pointerEvents: 'none',
                                    filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.2))',
                                    transform: 'rotate(-5deg)'
                                }} 
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Modal */}
            {selectedItem && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 1000, padding: '1rem'
                }} onClick={() => setSelectedItem(null)}>
                    <div style={{
                        background: 'white', borderRadius: '20px', padding: '0',
                        maxWidth: '600px', width: '90%', position: 'relative',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                        animation: 'fadeInUp 0.3s ease-out',
                        overflow: 'hidden'
                    }} onClick={e => e.stopPropagation()}>
                        
                        <div style={{ position: 'relative', height: '200px' }}>
                            <img src={selectedItem.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <button onClick={() => setSelectedItem(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>✕</button>
                        </div>

                        <div style={{ padding: '2rem' }}>
                            <h2 style={{ color: 'var(--scout-purple)', margin: '0 0 1rem' }}>{selectedItem.title[language]}</h2>
                            <p style={{ lineHeight: '1.6', color: '#444', fontSize: '1.1rem' }}>
                                {selectedItem.desc[language]}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* PDF Modal */}
            {showPdf && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    zIndex: 2000, padding: '2rem'
                }} onClick={() => setShowPdf(false)}>
                    <div className="pdf-modal-inner" style={{
                        background: 'white', borderRadius: '15px', overflow: 'hidden',
                        maxWidth: '900px', width: '100%', height: '90vh', position: 'relative',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                        display: 'flex', flexDirection: 'column'
                    }} onClick={e => e.stopPropagation()}>
                        <div style={{ background: 'var(--scout-purple)', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                            <h3 style={{ margin: 0, color: 'var(--scout-yellow)' }}>DOC</h3>
                            <button onClick={() => setShowPdf(false)} style={{ background: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>✕</button>
                        </div>
                        <iframe 
                            src={candidacy.proposalPdfUrl} 
                            style={{ width: '100%', height: '100%', border: 'none' }}
                        ></iframe>
                    </div>
                </div>
            )}

            <SocialLinks />
        </main>
    );
};

export default CandidacyPage;
