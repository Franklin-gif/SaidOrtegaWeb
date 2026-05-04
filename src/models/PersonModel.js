const PersonModel = {
    getInitialData: () => ({
        name: "Said Ortega",
        tagline: {
            es: "SCOUT • LÍDER JUVENIL • CHANGEMAKER"
        },
        sections: {
            hero: {
                title: "Said Ortega",
                subtitle: {
                    es: "Probablemente organizando algo, liderando algo… o pensando en cómo mejorar algo."
                }
            },
            vision: {
                title: { es: "Mi Visión" },
                cards: [
                    {
                        title: { es: "Gobernanza" },
                        desc: {
                            es: "Promuevo una gobernanza transparente y participativa, donde las juventudes sean parte activa en la toma de decisiones. Fortalecer espacios democráticos orientados al bien común es mi misión."
                        }
                    },
                    {
                        title: { es: "Incidencia" },
                        desc: {
                            es: "La participación debe convertirse en influencia real. Trabajo para que las voces jóvenes se traduzcan en políticas y acciones concretas, generando cambios sostenibles en nuestras comunidades."
                        }
                    },
                    {
                        title: { es: "Acción" },
                        desc: {
                            es: "Toda idea cobra sentido solo si logra transformar realidades. Por ello, impulso proyectos que responden a necesidades sociales, priorizando siempre el servicio, la innovación y el liderazgo."
                        }
                    }
                ]
            },
            bio: {
                title: { es: "¿Quién es Said?" },
                paragraph: {
                    es: "Soy Said Ortega, líder Scout de Panamá y actual Comisionado Nacional de Participación Juvenil de la Asociación Nacional de Scouts de Panamá. Mi historia en el Movimiento Escoteiro comenzó hace más de nueve años, cuando entré como un joven con ganas de aprender, vivir aventuras y descubrir de qué era capaz. Hoy sirvo con propósito comprometido con el cambio social."
                }
            },
            contact: {
                title: { es: "Conéctate" },
                subtitle: { es: "Sigue mi trayectoria en redes sociales" }
            },
            nav: {
                home: { es: "Inicio" },
                about: { es: "Visión" },
                bio: { es: "Perfil" },
                experience: { es: "Trayectoria" },
                candidacy: { es: "Candidatura" },
                testimonials: { es: "Testimonios" },
                gallery: { es: "Galería" },
                contact: { es: "Contacto" },
                language: { es: "Idioma" }
            },
            experience: {
                title: { es: "Trayectoria" },
                items: [
                    {
                        year: "2026",
                        title: { es: "Director del Curso de Liderazgo Panameño 2026" },
                        org: "Asociación Nacional de Scouts de Panamá."
                    },
                    {
                        year: "2025",
                        title: { es: "Comisionado Nacional de Participación Juvenil" },
                        org: "Dirección Nacional de la Asociación Nacional de Scouts de Panamá."
                    },
                    {
                        year: "2025",
                        title: { es: "Interamerican Leadership Training" },
                        org: "Boy Scouts of America (Sede Medellín, Colombia)."
                    },
                    {
                        year: "2024",
                        title: { es: "Delegado Nacional JAV" },
                        org: "Conferencia Scout Mundial, El Cairo, Egipto."
                    },
                    {
                        year: "2024",
                        title: { es: "Condecoración BP Rover" },
                        org: "Máxima progresión de la sección mayor."
                    }
                ]
            },
            candidacy: {
                title: { es: "Candidatura" },
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                proposalPdfUrl: "/propuesta_said.pdf",
                items: [
                    {
                        title: { es: "Innovación Educativa" },
                        desc: { 
                            es: "Actualizar los métodos de participación para la era digital fomentando un aprendizaje dinámico."
                        },
                        image: "/idea.png"
                    },
                    {
                        title: { es: "Liderazgo de Impacto" },
                        desc: { 
                            es: "Empoderar a los jóvenes en la toma de decisiones para que sean motores de cambio positivo."
                        },
                        image: "/gallery_media__1772898432218.jpg"
                    }
                ]
            },
            testimonials: {
                title: { es: "Lo que dicen sobre Said" },
                list: [
                    {
                        name: "Franklin Bernal",
                        text: {
                            es: "Said es un líder excepcional. Su compromiso con el empoderamiento juvenil y el escultismo ha transformado nuestra comunidad."
                        },
                        photo: "/hero_profile_media__1772899441601.jpg"
                    }
                ]
            },
            gallery: {
                title: { es: "Galería" },
                images: [
                    "/gallery_media__1772898300083.jpg",
                    "/gallery_media__1772898367726.jpg",
                    "/gallery_media__1772898432218.jpg",
                    "/gallery_media__1772898486269.jpg"
                ]
            }
        },
        socialLinks: [
            { platform: "Instagram", url: "https://instagram.com/saidisaac._", icon: "📸" },
            { platform: "Email", url: "mailto:saidortega102004@gmail.com", icon: "✉️" }
        ],
        imagePath: "/hero_profile_media__1772899441601.jpg",
        version: "1.4.0"
    })
};

export default PersonModel;
