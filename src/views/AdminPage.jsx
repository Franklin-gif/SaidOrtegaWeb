import React, { useState, useEffect } from 'react';
import { usePerson } from '../context/PersonContext';
import { uploadToCloudinary } from '../utils/cloudinary';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AdminPage = () => {
    const { person, updatePerson } = usePerson();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    // Login state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'saidortega102004@gmail.com' && password === 'adminsaid123') {
            setIsAuthenticated(true);
            setLoginError('');
        } else {
            setLoginError('Credenciales incorrectas');
        }
    };

    if (!person) return <div style={{height: '100vh', display: 'grid', placeItems:'center'}}>Loading...</div>;

    if (!isAuthenticated) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f5f7', position: 'relative', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(78, 26, 138, 0.03)', borderRadius: '50%', filter: 'blur(80px)' }}></div>
                <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(255, 90, 95, 0.03)', borderRadius: '50%', filter: 'blur(80px)' }}></div>

                <form className="admin-login-form animate-fade-in-up" onSubmit={handleLogin}>
                    <button type="button" onClick={() => window.location.href = "/"} style={{ position: 'absolute', top: '25px', right: '25px', background: '#f8fafc', border: 'none', width: '36px', height: '36px', borderRadius: '50%', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', transition: 'all 0.2s' }} onMouseEnter={e => {e.currentTarget.style.color='#111'; e.currentTarget.style.background='#f1f5f9'}} onMouseLeave={e => {e.currentTarget.style.color='#64748b'; e.currentTarget.style.background='#f8fafc'}}>✕</button>
                    
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--scout-purple)', borderRadius: '18px', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.5rem', margin: '0 auto 1.5rem', boxShadow: '0 10px 20px rgba(78, 26, 138, 0.2)' }}>S</div>
                        <h2 style={{ color: '#111', marginBottom: '0.5rem', fontSize: '2rem', fontWeight: '900', fontFamily: 'Outfit, sans-serif' }}>Bienvenido</h2>
                        <p style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>Centro de Mando Personal</p>
                    </div>
                    
                    {loginError && <div style={{ background: '#fef2f2', color: '#dc2626', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', textAlign: 'center', fontSize: '0.9rem', fontWeight: '600', border: '1px solid #fee2e2' }}>{loginError}</div>}
                    
                    <div style={{ marginBottom: '1.2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '700', fontSize: '0.85rem', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '14px', border: '2px solid #f1f5f9', background: '#f8fafc', outline: 'none', transition: 'all 0.2s', fontSize: '1rem' }} placeholder="tu@correo.com" onFocus={e => {e.target.style.borderColor='var(--scout-purple)'; e.target.style.background='white'}} onBlur={e => {e.target.style.borderColor='#f1f5f9'; e.target.style.background='#f8fafc'}} required />
                    </div>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.6rem', fontWeight: '700', fontSize: '0.85rem', color: '#334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contraseña</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '14px', border: '2px solid #f1f5f9', background: '#f8fafc', outline: 'none', transition: 'all 0.2s', fontSize: '1rem' }} placeholder="••••••••" onFocus={e => {e.target.style.borderColor='var(--scout-purple)'; e.target.style.background='white'}} onBlur={e => {e.target.style.borderColor='#f1f5f9'; e.target.style.background='#f8fafc'}} required />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '1.1rem', background: 'var(--scout-purple)', color: 'white', border: 'none', borderRadius: '14px', fontWeight: '800', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 10px 20px -5px rgba(78, 26, 138, 0.4)' }} onMouseEnter={e => {e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 15px 30px -5px rgba(78, 26, 138, 0.5)'}} onMouseLeave={e => {e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 10px 20px -5px rgba(78, 26, 138, 0.4)'}}>Iniciar Sesión</button>
                </form>
            </div>
        );
    }

    return (
        <AdminDashboard />
    );
};

const AdminDashboard = () => {
    const { person, updatePerson, dbStatus } = usePerson();
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSavingGlobal, setIsSavingGlobal] = useState(false);

    // Local states for all sections to allow manual save
    const [localBio, setLocalBio] = useState({ es: '', en: '', pt: '', ar: '' });
    const [localTrajectory, setLocalTrajectory] = useState([]);
    const [localCandidacy, setLocalCandidacy] = useState(null);
    const [localGallery, setLocalGallery] = useState([]);
    const [localImagePath, setLocalImagePath] = useState('');
    
    const [isUploading, setIsUploading] = useState({
        gallery: false,
        video: false,
        profile: false,
        candidacy: {} // record of indices
    });

    const [newItemForm, setNewItemForm] = useState({ year: '', title: '', org: '' });

    useEffect(() => {
        if (person) {
            setLocalBio({ ...person.sections.bio.paragraph });
            setLocalTrajectory([...person.sections.experience.items]);
            setLocalCandidacy({ ...person.sections.candidacy });
            setLocalGallery([...person.sections.gallery.images]);
            setLocalImagePath(person.imagePath || '');
        }
    }, [person]);

    const triggerToast = (msg) => {
        setToastMsg(msg);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const fillTranslations = (text) => ({
        es: text || ""
    });

    const getAggregatedData = (overrides = {}) => {
        const newData = JSON.parse(JSON.stringify(person));
        
        // Sync Bio
        newData.sections.bio.paragraph = fillTranslations(overrides.bio?.es ?? localBio.es);
        
        // Profile Image
        newData.imagePath = overrides.imagePath ?? localImagePath;
        
        // Sync Trajectory (Auto-sorted by year descending)
        const trajToUse = overrides.trajectory || localTrajectory;
        const sortedTraj = [...trajToUse].sort((a, b) => {
            const yearA = parseInt(String(a.year).substring(0, 4)) || 0;
            const yearB = parseInt(String(b.year).substring(0, 4)) || 0;
            return yearB - yearA; 
        });

        newData.sections.experience.items = sortedTraj.map(item => ({
            ...item,
            title: fillTranslations(item.title.es)
        }));
        
        // Sync Candidacy
        const candToUse = overrides.candidacy || localCandidacy;
        if (candToUse) {
            newData.sections.candidacy = {
                ...candToUse,
                items: candToUse.items.map(item => ({
                    ...item,
                    title: fillTranslations(item.title.es),
                    desc: fillTranslations(item.desc.es)
                }))
            };
        }
        
        newData.sections.gallery.images = [...(overrides.gallery || localGallery)];
        return newData;
    };

    const executeSave = async (newData, successMsg) => {
        setIsSavingGlobal(true);
        try {
            await updatePerson(newData);
            triggerToast(successMsg);
        } catch (error) {
            triggerToast("❌ Error al guardar en la nube");
        } finally {
            setIsSavingGlobal(false);
        }
    };

    const handleSaveAllGlobal = () => {
        executeSave(getAggregatedData(), "¡Todos los cambios globales han sido guardados!");
    };

    const handleToggleCandidacyMode = () => {
        const newData = getAggregatedData();
        newData.settings = newData.settings || {};
        newData.settings.candidacyEnabled = !newData.settings.candidacyEnabled;
        executeSave(newData, `Modo candidatura ${newData.settings.candidacyEnabled ? 'activado' : 'desactivado'}`);
    };

    const handleSaveBio = () => {
        executeSave(getAggregatedData(), "Información de perfil actualizada globalmente");
    };

    const handleSaveTrajectory = () => {
        executeSave(getAggregatedData(), "Trayectoria guardada globalmente");
    };

    const handleAddTrajectoryItem = () => {
        if (!newItemForm.year || !newItemForm.title) {
            triggerToast("⚠️ Completa al menos el Año y el Título");
            return;
        }

        const newItem = { 
            year: newItemForm.year, 
            title: { es: newItemForm.title, en: newItemForm.title, pt: newItemForm.title, ar: "" }, 
            org: newItemForm.org 
        };
        
        const newList = [newItem, ...localTrajectory];
        
        // Use the same sort logic as getAggregatedData to keep UI consistent
        const sortedList = [...newList].sort((a, b) => {
            const yearA = parseInt(String(a.year).substring(0, 4)) || 0;
            const yearB = parseInt(String(b.year).substring(0, 4)) || 0;
            return yearB - yearA; 
        });

        setLocalTrajectory(sortedList);
        setNewItemForm({ year: '', title: '', org: '' }); // Reset form
        executeSave(getAggregatedData({ trajectory: sortedList }), "Hito añadido y ordenado correctamente");
    };

    const handleRemoveTrajectoryItem = (idx) => {
        const newList = [...localTrajectory];
        newList.splice(idx, 1);
        setLocalTrajectory(newList);
        executeSave(getAggregatedData({ trajectory: newList }), "Hito eliminado y guardado automáticamente");
    };

    const handleSaveCandidacy = () => {
        executeSave(getAggregatedData(), "Sección de candidatura guardada globalmente");
    };

    const handleAddCandidacyItem = () => {
        const newItem = { 
            title: { es: "Nueva Propuesta", en: "New Proposal", pt: "Nova Proposta", ar: "" }, 
            desc: { es: "Detalle...", en: "Detail...", pt: "Detalhe...", ar: "" }, 
            image: "https://via.placeholder.com/300"
        };
        const newList = {
            ...localCandidacy,
            items: [...localCandidacy.items, newItem]
        };
        setLocalCandidacy(newList);
        executeSave(getAggregatedData({ candidacy: newList }), "Propuesta añadida y guardada automáticamente");
    };

    const handleRemoveCandidacyItem = (idx) => {
        const newItems = [...localCandidacy.items];
        newItems.splice(idx, 1);
        const newList = { ...localCandidacy, items: newItems };
        setLocalCandidacy(newList);
        executeSave(getAggregatedData({ candidacy: newList }), "Propuesta eliminada y guardada automáticamente");
    };

    const handleSaveGallery = () => {
        executeSave(getAggregatedData(), "Galería guardada globalmente");
    };

    const handleVideoUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsUploading({...isUploading, video: true});
            try {
                const url = await uploadToCloudinary(file, "video");
                const newCandidacy = {...localCandidacy, videoUrl: url};
                setLocalCandidacy(newCandidacy);
                executeSave(getAggregatedData({ candidacy: newCandidacy }), "Video subido y guardado");
            } catch (err) {
                triggerToast("Error al subir video");
            } finally {
                setIsUploading({...isUploading, video: false});
            }
        }
    };



    const handleGalleryUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsUploading({...isUploading, gallery: true});
            try {
                const url = await uploadToCloudinary(file);
                const newList = [url, ...localGallery];
                setLocalGallery(newList);
                executeSave(getAggregatedData({ gallery: newList }), "Imagen lista y guardada");
            } catch (err) {
                triggerToast("Error al subir imagen");
            } finally {
                setIsUploading({...isUploading, gallery: false});
            }
        }
    };

    const handleUpdateCandidacyImage = async (idx, e) => {
        const file = e.target.files[0];
        if (file) {
            setIsUploading({...isUploading, candidacy: {...isUploading.candidacy, [idx]: true}});
            try {
                const url = await uploadToCloudinary(file);
                const newItems = [...localCandidacy.items];
                newItems[idx].image = url;
                const newCandidacy = { ...localCandidacy, items: newItems };
                setLocalCandidacy(newCandidacy);
                executeSave(getAggregatedData({ candidacy: newCandidacy }), "Imagen de propuesta lista y guardada");
            } catch (err) {
                triggerToast("Error al subir imagen");
            } finally {
                setIsUploading({...isUploading, candidacy: {...isUploading.candidacy, [idx]: false}});
            }
        }
    };

    const handleProfileImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setIsUploading({...isUploading, profile: true});
            try {
                const url = await uploadToCloudinary(file);
                setLocalImagePath(url);
                executeSave(getAggregatedData({ imagePath: url }), "Nueva foto lista y guardada");
            } catch (err) {
                triggerToast("Error al subir foto");
            } finally {
                setIsUploading({...isUploading, profile: false});
            }
        }
    };

    const tabs = [
        { id: 'dashboard', icon: '📊', label: 'Dashboard' },
        { id: 'general', icon: '⚙️', label: 'General' },
        { id: 'bio', icon: '📖', label: 'Biografía' },
        { id: 'trayectoria', icon: '⏳', label: 'Trayectoria' },
        { id: 'candidatura', icon: '🔥', label: 'Candidatura' },
        { id: 'testimonios', icon: '💬', label: 'Testimonios' },
        { id: 'galeria', icon: '📸', label: 'Galería' },
    ];

    const stats = [
        { label: 'Fotos', value: person.sections.gallery.images.length, color: 'var(--scout-purple)' },
        { label: 'Ejes Campaña', value: localCandidacy?.items.length || 0, color: 'var(--scout-blue)' },
        { label: 'Hitos Trayectoría', value: localTrajectory.length, color: 'var(--scout-coral)' },
    ];

    return (
        <div className="admin-container">
            
            {/* Mobile Header */}
            <header className="admin-mobile-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div className="admin-logo-small">S</div>
                    <span style={{ fontWeight: '800', fontSize: '1rem' }}>Admin</span>
                </div>
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </header>

            {/* Toast Notification */}
            <div style={{ 
                position: 'fixed', bottom: '30px', right: '30px', 
                background: '#333', color: 'white', padding: '1rem 2rem', 
                borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transform: showToast ? 'translateX(0)' : 'translateX(150%)',
                transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                zIndex: 10000, display: 'flex', alignItems: 'center', gap: '0.8rem'
            }}>
                <span style={{ background: 'var(--scout-green)', width: '8px', height: '8px', borderRadius: '50%' }}></span>
                {toastMsg}
            </div>

            {/* Sidebar Minimalista */}
            <aside className={`admin-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--scout-purple)', borderRadius: '12px', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>S</div>
                    <h1 style={{ margin: 0, fontSize: '1.3rem', fontWeight: '900', fontFamily: 'Outfit, sans-serif', color: '#111', letterSpacing: '-0.5px' }}>Centro Mando</h1>
                </div>
                
                <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id); setIsMobileMenuOpen(false); }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '0.9rem 1.2rem',
                                borderRadius: '12px', border: 'none', background: activeTab === tab.id ? 'var(--scout-purple)' : 'transparent',
                                color: activeTab === tab.id ? 'white' : '#64748b', fontWeight: activeTab === tab.id ? '700' : '500',
                                cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', textAlign: 'left',
                                boxShadow: activeTab === tab.id ? '0 10px 15px -3px rgba(78, 26, 138, 0.3)' : 'none'
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div style={{ marginTop: 'auto', padding: '1.5rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                    <button 
                        onClick={handleSaveAllGlobal}
                        style={{ width: '100%', marginBottom: '10px', background: 'var(--scout-green)', color: 'white', border: 'none', borderRadius: '10px', padding: '0.9rem', fontWeight: '800', cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                    >
                        💾 Guardar Todo
                    </button>
                    <button 
                        onClick={() => window.location.href = "/"}
                        style={{ width: '100%', background: 'white', color: '#111', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '0.8rem', fontWeight: '700', cursor: 'pointer' }}
                    >
                        Ver Sitio Real
                    </button>
                </div>
            </aside>
            
            {/* Overlay for mobile */}
            {isMobileMenuOpen && <div className="admin-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}

            {/* Content Area */}
            <main className="admin-main">
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    
                    {/* Header */}
                    <div style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <p style={{ margin: 0, color: 'var(--scout-purple)', fontWeight: '800', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Said Ortega</p>
                                <div style={{ 
                                    padding: '2px 8px', borderRadius: '20px', fontSize: '0.65rem', fontWeight: '900',
                                    background: isSavingGlobal ? '#dbeafe' : dbStatus === 'online' ? '#dcfce7' : dbStatus === 'error' ? '#fee2e2' : '#fef9c3',
                                    color: isSavingGlobal ? '#1e40af' : dbStatus === 'online' ? '#166534' : dbStatus === 'error' ? '#991b1b' : '#854d0e',
                                    border: '1px solid currentColor',
                                    transition: 'all 0.3s ease'
                                }}>
                                    {isSavingGlobal ? '⏳ GUARDANDO...' : `● ${dbStatus === 'online' ? 'SINCRONIZADO' : `CLOUD ${dbStatus.toUpperCase()}`}`}
                                </div>
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', fontWeight: '900', margin: '0', color: '#111', fontFamily: 'Outfit, sans-serif' }}>
                                {tabs.find(t => t.id === activeTab).label}
                            </h2>
                        </div>
                    </div>

                    {/* ===== DASHBOARD ===== */}
                    {activeTab === 'dashboard' && (
                        <div className="animate-fade-in-up">
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                                {stats.map((stat, i) => (
                                    <div key={i} className="admin-card">
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: 'bold' }}>{stat.label}</p>
                                        <h3 style={{ margin: '0.5rem 0 0', fontSize: '2.5rem', color: stat.color, fontWeight: '900' }}>{stat.value}</h3>
                                    </div>
                                ))}
                            </div>
                            <div style={{ background: 'linear-gradient(135deg, var(--scout-purple), #6b21a8)', color: 'white', padding: '3rem', borderRadius: '32px' }}>
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', margin: '0 0 1rem' }}>¡Bienvenido de nuevo, Said!</h3>
                                <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: '1.6' }}>Tu centro de mando ahora permite una edición completa de la sección de candidatura, biografía simplificada y gestión de trayectoria con guardado manual.</p>
                            </div>
                        </div>
                    )}

                    {/* ===== GENERAL ===== */}
                    {activeTab === 'general' && (
                        <div className="animate-fade-in-up">
                            <div className="admin-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ margin: 0, fontWeight: '800' }}>Modo Candidatura</h3>
                                    <p style={{ margin: '0.5rem 0 0', color: '#64748b' }}>Muestra u oculta la sección de propuestas en el sitio web.</p>
                                </div>
                                <div 
                                    onClick={handleToggleCandidacyMode}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        cursor: 'pointer',
                                        background: person.settings?.candidacyEnabled ? '#dcfce7' : '#f1f5f9',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '50px',
                                        border: '1px solid',
                                        borderColor: person.settings?.candidacyEnabled ? '#86efac' : '#cbd5e1',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <span style={{ 
                                        fontWeight: '800', 
                                        fontSize: '0.85rem',
                                        color: person.settings?.candidacyEnabled ? '#166534' : '#64748b',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {person.settings?.candidacyEnabled ? 'ACTIVO (PÚBLICO)' : 'INACTIVO (OCULTO)'}
                                    </span>
                                    <div style={{
                                        width: '54px',
                                        height: '30px',
                                        background: person.settings?.candidacyEnabled ? 'var(--scout-green)' : '#cbd5e1',
                                        borderRadius: '30px',
                                        position: 'relative',
                                        transition: 'background 0.3s ease',
                                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                                        flexShrink: 0
                                    }}>
                                        <div style={{
                                            width: '22px',
                                            height: '22px',
                                            background: 'white',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            top: '4px',
                                            left: person.settings?.candidacyEnabled ? '28px' : '4px',
                                            transition: 'left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ===== BIO ===== */}
                    {activeTab === 'bio' && (
                        <div className="animate-fade-in-up">
                            <div className="admin-card" style={{ background: '#fef2f2', border: '1px solid #fee2e2', color: '#991b1b', padding: '1rem', borderRadius: '12px', marginBottom: '2rem' }}>
                                <strong>Nota:</strong> La biografía ha sido configurada como permanente y no se puede modificar desde este panel.
                            </div>
                            <div className="admin-card">
                                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                    <div style={{ width: '180px' }}>
                                        <div style={{ width: '100%', aspectRatio: '1', borderRadius: '24px', overflow: 'hidden', border: '2px solid var(--scout-purple)', marginBottom: '1rem' }}>
                                            <img src="/fotoCandidatura/perfil.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Profile Permanente" />
                                        </div>
                                        <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748b', fontWeight: 'bold' }}>FOTO PERMANENTE</div>
                                    </div>
                                    <div style={{ flex: 1, minWidth: '300px' }}>
                                        <label style={{ display: 'block', fontWeight: '800', color: '#64748b', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>Biografía (Fija / Permanente)</label>
                                        <textarea 
                                            readOnly
                                            value={`Said Ortega es un líder juvenil de Panamá, estudiante de Derecho y actual Comisionado Nacional de Participación Juvenil de la Asociación Nacional de Scouts de Panamá. Su camino en el Movimiento Scout comenzó hace más de nueve años como joven participante del programa educativo, recorriendo cada etapa y alcanzando sus máximas condecoraciones: Scout Balboa, Caminante Istmeño y BP Rover.\n\nActualmente también se desempeña como Subdirector del Grupo Scout 15 Juan Demóstenes Arosemena, acompañando procesos de formación y liderazgo juvenil.\n\nFuera del Movimiento Scout, es voluntario activo de la Cruz Roja Panameña, donde se desempeña como Subdirector del organismo de juventud a nivel local y anteriormente fue Coordinador Nacional de Sector Escolar. Profesionalmente trabaja en gobiernos locales.\n\nEs un apasionado de las relaciones internacionales, la participación juvenil y la cooperación regional. Además, es coautor de dos libros publicados y actualmente se encuentra escribiendo un libro dirigido a jóvenes.\n\nCree firmemente que cuando los jóvenes cuentan con espacios reales para participar y liderar, el Movimiento Scout se vuelve más fuerte, innovador y relevante para la sociedad.`}
                                            style={{ width: '100%', padding: '1.5rem', borderRadius: '16px', border: '2px dashed #cbd5e1', background: '#f1f5f9', color: '#64748b', minHeight: '300px', fontSize: '1.05rem', fontFamily: 'inherit', outline: 'none', cursor: 'not-allowed', resize: 'vertical' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ===== TRAYECTORIA ===== */}
                    {activeTab === 'trayectoria' && (
                        <div className="animate-fade-in-up">
                            
                            {/* Formulario de Nuevo Hito */}
                            <div className="admin-card" style={{ marginBottom: '3rem', border: '2px solid var(--scout-purple)', background: '#f5f3ff' }}>
                                <h3 style={{ margin: '0 0 1.5rem', color: 'var(--scout-purple)', fontSize: '1.1rem', fontWeight: '800' }}>+ AÑADIR NUEVO HITO A LA TRAYECTORIA</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr auto', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', color: '#6b7280', marginBottom: '0.5rem' }}>AÑO</label>
                                        <input 
                                            placeholder="2024" 
                                            value={newItemForm.year}
                                            onChange={e => setNewItemForm({...newItemForm, year: e.target.value})}
                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd', fontWeight: 'bold', textAlign: 'center' }} 
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', color: '#6b7280', marginBottom: '0.5rem' }}>TÍTULO / CARGO</label>
                                        <input 
                                            placeholder="Ej: Comisionado Nacional" 
                                            value={newItemForm.title}
                                            onChange={e => setNewItemForm({...newItemForm, title: e.target.value})}
                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd' }} 
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: '800', color: '#6b7280', marginBottom: '0.5rem' }}>ORGANIZACIÓN / DETALLE</label>
                                        <input 
                                            placeholder="Asociación de Scouts..." 
                                            value={newItemForm.org}
                                            onChange={e => setNewItemForm({...newItemForm, org: e.target.value})}
                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '1px solid #ddd' }} 
                                        />
                                    </div>
                                    <button 
                                        onClick={handleAddTrajectoryItem}
                                        style={{ padding: '0.8rem 1.5rem', background: 'var(--scout-purple)', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', height: '46px' }}
                                    >
                                        Añadir
                                    </button>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <h3 style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', fontWeight: '800' }}>HISTORIAL REGISTRADO ({localTrajectory.length})</h3>
                                <button onClick={handleSaveTrajectory} style={{ padding: '0.6rem 1.2rem', background: 'var(--scout-green)', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.8rem' }}>💾 Guardar Todos los Cambios</button>
                            </div>

                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {localTrajectory.map((item, idx) => (
                                    <div key={idx} className="admin-card animate-fade-in-up" style={{ 
                                        display: 'flex', gap: '1.5rem', alignItems: 'center', 
                                        padding: '1.2rem 1.5rem', border: '1px solid #f1f5f9',
                                        transition: 'all 0.2s ease',
                                        animationDelay: `${idx * 50}ms`
                                    }}>
                                        <div style={{ 
                                            width: '80px', height: '45px', background: '#f8fafc', 
                                            borderRadius: '8px', display: 'grid', placeItems: 'center',
                                            border: '1px solid #e2e8f0'
                                        }}>
                                            <input 
                                                value={item.year} 
                                                onChange={e => { const nl = [...localTrajectory]; nl[idx].year = e.target.value; setLocalTrajectory(nl); }} 
                                                style={{ width: '100%', background: 'transparent', border: 'none', fontWeight: '900', textAlign: 'center', color: 'var(--scout-purple)', fontSize: '0.9rem', outline: 'none' }} 
                                            />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <input 
                                                value={item.title.es} 
                                                onChange={e => { const nl = [...localTrajectory]; nl[idx].title.es = e.target.value; setLocalTrajectory(nl); }} 
                                                style={{ width: '100%', padding: '0.4rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid transparent', marginBottom: '0.2rem', fontWeight: '700', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                                                onFocus={e => e.target.style.borderBottomColor = 'var(--scout-purple)'}
                                                onBlur={e => e.target.style.borderBottomColor = 'transparent'}
                                            />
                                            <input 
                                                value={item.org} 
                                                onChange={e => { const nl = [...localTrajectory]; nl[idx].org = e.target.value; setLocalTrajectory(nl); }} 
                                                style={{ width: '100%', background: 'transparent', border: 'none', color: '#64748b', fontSize: '0.85rem', outline: 'none' }} 
                                            />
                                        </div>
                                        <button 
                                            onClick={() => handleRemoveTrajectoryItem(idx)} 
                                            style={{ 
                                                background: '#fee2e2', color: '#ef4444', border: 'none', 
                                                borderRadius: '8px', width: '32px', height: '32px', 
                                                cursor: 'pointer', display: 'grid', placeItems: 'center',
                                                fontSize: '0.8rem', fontWeight: 'bold'
                                            }}
                                        >✕</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ===== CANDIDATURA ===== */}
                    {activeTab === 'candidatura' && localCandidacy && (
                        <div className="animate-fade-in-up">
                            <div className="admin-card" style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                                    <h3 style={{ margin: 0 }}>Ajustes de Sección</h3>
                                    <button onClick={handleSaveCandidacy} style={{ padding: '0.8rem 1.5rem', background: 'var(--scout-green)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>Guardar Todo</button>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                    
                                    {/* Video Upload Box */}
                                    <div style={{ background: '#f8fafc', border: '2px dashed #cbd5e1', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', transition: 'all 0.3s', position: 'relative' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--scout-purple)'} onMouseLeave={e => e.currentTarget.style.borderColor = '#cbd5e1'}>
                                        <input type="file" id="videoUpload" accept="video/*" onChange={handleVideoUpload} style={{ display: 'none' }} />
                                        <label htmlFor="videoUpload" style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ fontSize: '2.5rem' }}>🎬</span>
                                            <span style={{ fontWeight: '800', color: 'var(--scout-purple)', fontSize: '0.9rem' }}>Video de Campaña</span>
                                            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{isUploading.video ? 'Subiendo...' : 'Haz clic para subir (MP4)'}</span>
                                        </label>
                                        
                                        {localCandidacy.videoUrl && !isUploading.video && (
                                            <div style={{ marginTop: '1rem', background: '#dcfce7', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                                <span style={{ color: '#166534', fontWeight: 'bold', fontSize: '0.8rem' }}>✓ Video Listo</span>
                                                <a href={localCandidacy.videoUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'white', color: '#166534', padding: '0.2rem 0.5rem', borderRadius: '5px', fontSize: '0.7rem', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #166534' }}>👀 Ver</a>
                                            </div>
                                        )}
                                    </div>



                                </div>
                            </div>

                            <button onClick={handleAddCandidacyItem} style={{ marginBottom: '1.5rem', padding: '1rem 1.5rem', background: 'var(--scout-purple)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>+ Añadir Propuesta</button>
                            
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {localCandidacy.items.map((item, idx) => (
                                    <div key={idx} className="admin-proposal-item">
                                        <div style={{ width: '150px', flexShrink: 0, margin: '0 auto' }}>
                                            <div style={{ width: '100%', aspectRatio: '1', borderRadius: '15px', background: '#f8fafc', overflow: 'hidden', marginBottom: '1rem', border: '1px solid #eee' }}>
                                                <img src={item.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <label className="photo-upload-btn" style={{ fontSize: '0.7rem', width: '100%', display: 'block', textAlign: 'center' }}>
                                                {isUploading.candidacy[idx] ? 'Subiendo...' : 'Cambiar Imagen'}
                                                <input type="file" accept="image/*" onChange={(e) => handleUpdateCandidacyImage(idx, e)} hidden />
                                            </label>
                                        </div>
                                        <div className="admin-proposal-content">
                                            <input value={item.title.es} onChange={e => { const nl = [...localCandidacy.items]; nl[idx].title.es = e.target.value; setLocalCandidacy({...localCandidacy, items: nl}); }} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '2px solid #f1f5f9', fontWeight: 'bold', marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--scout-purple)' }} />
                                            <textarea value={item.desc.es} onChange={e => { const nl = [...localCandidacy.items]; nl[idx].desc.es = e.target.value; setLocalCandidacy({...localCandidacy, items: nl}); }} style={{ width: '100%', padding: '0.8rem', borderRadius: '10px', border: '2px solid #f1f5f9', minHeight: '80px', fontFamily: 'inherit' }} />
                                        </div>
                                        <button onClick={() => handleRemoveCandidacyItem(idx)} style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', background: '#fff1f2', color: '#e11d48', border: 'none', borderRadius: '10px', cursor: 'pointer', marginLeft: '0' }}>Eliminar</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ===== TESTIMONIOS ===== */}
                    {activeTab === 'testimonios' && (
                        <div className="animate-fade-in-up">
                            {person.sections.testimonials.list.map((t, idx) => (
                                <div key={idx} style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid #eaeaea', display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                                    <img src={t.photo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                    <div style={{ flex: 1 }}>
                                        <p style={{ margin: 0, fontStyle: 'italic' }}>"{t.text.es}"</p>
                                        <strong style={{ fontSize: '0.9rem' }}>{t.name}</strong>
                                    </div>
                                    <button onClick={() => { const newData = getAggregatedData(); newData.sections.testimonials.list.splice(idx, 1); executeSave(newData, "Eliminado y guardado"); }} style={{ padding: '0.5rem 1rem', background: '#fff1f2', color: '#e11d48', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Borrar</button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ===== GALERÍA ===== */}
                    {activeTab === 'galeria' && (
                        <div className="animate-fade-in-up">
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                                <input type="file" accept="image/*" onChange={handleGalleryUpload} style={{ display: 'none' }} id="gallery-file" />
                                <label htmlFor="gallery-file" style={{ padding: '1rem 2rem', background: 'var(--scout-purple)', color: 'white', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>
                                    {isUploading.gallery ? 'Subiendo...' : '+ Preparar Foto'}
                                </label>
                                <button onClick={handleSaveGallery} style={{ padding: '1rem 1.5rem', background: 'var(--scout-green)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>💾 Guardar Galería</button>
                            </div>
                            <div style={{ background: 'white', padding: '2rem', borderRadius: '24px', border: '1px solid #eaeaea', marginBottom: '2rem' }}>
                                <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Las fotos añadidas arriba se mostrarán aquí abajo como vista previa. Pulsa "Guardar Galería" para aplicar los cambios finales.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                {localGallery.map((img, idx) => (
                                    <div key={idx} style={{ aspectRatio: '1', borderRadius: '20px', overflow: 'hidden', position: 'relative', border: '1px solid #eee' }}>
                                        <img src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <button onClick={() => { 
                                            const nl = [...localGallery]; 
                                            nl.splice(idx, 1); 
                                            setLocalGallery(nl); 
                                            executeSave(getAggregatedData({ gallery: nl }), "Eliminado y guardado automáticamente");
                                        }} style={{ position: 'absolute', top: '10px', right: '10px', background: 'white', border: 'none', width: '30px', height: '30px', borderRadius: '50%', color: '#e11d48', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>✕</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
};

export default AdminPage;
