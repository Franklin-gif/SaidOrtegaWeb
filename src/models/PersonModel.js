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
                items: [
                    { year: "2015", title: { es: "Ingreso al Movimiento Scout" }, org: "Iniciando mi proceso de formación dentro del programa educativo scout." },
                    { year: "2019", title: { es: "Scout Balboa" }, org: "Obtengo la máxima progresión de la sección media." },
                    { year: "2022", title: { es: "Condecoración Istmeña" }, org: "Obtengo la máxima progresión de la sección intermedia." },
                    { year: "2024", title: { es: "Condecoración BP Rover" }, org: "Obtengo la máxima progresión de la sección mayor, culminando el proceso completo de progresión dentro del programa juvenil." },
                    { year: "2023-2027", title: { es: "Subdirector del organismo de juventud" }, org: "Comité de Arraiján de la Cruz Roja Panameña." },
                    { year: "2023-2025", title: { es: "Asesor Nacional de Participación Juvenil" }, org: "Foro Nacional de Jóvenes de la Asociación Nacional de Scouts de Panamá." },
                    { year: "2024", title: { es: "Coordinador Nacional de Sector Escolar" }, org: "Organismo de Juventud de la Cruz Roja Panameña." },
                    { year: "2024", title: { es: "Subdirector del Grupo Scout 15" }, org: "Juan Demóstenes Arosemena, siendo el miembro más joven en asumir este rol dentro del grupo." },
                    { year: "2024", title: { es: "Subdirector del Curso de Liderazgo Panameño 2024" }, org: "Asociación Nacional de Scouts de Panamá." },
                    { year: "2025-2027", title: { es: "Comisionado Nacional de Participación Juvenil" }, org: "Asociación Nacional de Scouts de Panamá." },
                    { year: "2025", title: { es: "Diplomado en Liderazgo Organizacional" }, org: "Y Habilidades Gerenciales con IA." },
                    { year: "2026", title: { es: "Director del Curso de Liderazgo Panameño 2026" }, org: "Asociación Nacional de Scouts de Panamá." },
                    { year: "2024", title: { es: "Reconocimiento Mensajero de la Paz" }, org: "Proyecto “Del Timbo al Tambo”, educación ambiental." },
                    { year: "2024", title: { es: "Reconocimiento Champions for Nature" }, org: "Proyecto “Woofing Hearts: Corazones que Ladran”, bienestar animal." },
                    { year: "2025", title: { es: "Interamerican Leadership Training" }, org: "Participante en Santo Domingo, República Dominicana." },
                    { year: "2025", title: { es: "Messenger of Peace: Driving Youth-Led Change Workshop" }, org: "Participante en Riyadh, Arabia Saudita." }
                ]
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
