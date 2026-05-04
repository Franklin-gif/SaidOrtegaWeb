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
                    es: ""
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
                items: []
            },
            candidacy: {
                title: { es: "Candidatura" },
                videoUrl: "",
                proposalPdfUrlEs: "/propuesta_said_es.pdf",
                proposalPdfUrlEn: "/propuesta_said_en.pdf",
                items: []
            },
            testimonials: {
                title: { es: "Lo que dicen sobre Said" },
                list: []
            },
            gallery: {
                title: { es: "Galería" },
                images: []
            }
        },
        socialLinks: [
            { platform: "Instagram", url: "https://instagram.com/saidisaac._", icon: "📸" },
            { platform: "Email", url: "mailto:saidortega102004@gmail.com", icon: "✉️" }
        ],
        imagePath: "",
        version: "1.5.0"
    })
};

export default PersonModel;
