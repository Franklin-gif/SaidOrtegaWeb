const PersonModel = {
    getInitialData: () => ({
        name: "Said Ortega",
        tagline: {
            pt: "ESCOTEIRO • LÍDER JUVENIL • CHANGEMAKER",
            en: "SCOUT • YOUTH LEADER • CHANGEMAKER",
            es: "SCOUT • LÍDER JUVENIL • CHANGEMAKER"
        },
        sections: {
            hero: {
                title: "Said Ortega",
                subtitle: {
                    pt: "Provavelmente organizando algo, liderando algo… ou pensando em como melhorar algo.",
                    en: "Probably organizing something, leading something… or thinking about how to improve something.",
                    es: "Probablemente organizando algo, liderando algo… o pensando en cómo mejorar algo."
                }
            },
            vision: {
                title: { pt: "Minha Visão", en: "My Vision", es: "Mi Visión" },
                cards: [
                    {
                        title: { pt: "Governança", en: "Governance", es: "Gobernanza" },
                        desc: {
                            pt: "Promovo uma governança transparente e ativa, onde as juventudes sejam parte da tomada de decisão. Fortalecer espaços democráticos orientados ao bem comum em nossa sociedade é a minha missão.",
                            en: "I promote a transparent and participatory governance, where youth are an active part of decision-making. Strengthening democratic spaces oriented to the common good is my ultimate core mission.",
                            es: "Promuevo una gobernanza transparente y participativa, donde las juventudes sean parte activa en la toma de decisiones. Fortalecer espacios democráticos orientados al bien común es mi misión."
                        }
                    },
                    {
                        title: { pt: "Incidência", en: "Advocacy", es: "Incidencia" },
                        desc: {
                            pt: "A participação deve se converter em influência real. Trabalho para que as jovens vozes se traduzam em políticas e ações concretas, gerando mudanças sustentáveis consistentes nas comunidades.",
                            en: "Participation must turn into real influence. I work to ensure that young voices translate into concrete policies and real actions, generating sustainable changes throughout all our communities.",
                            es: "La participación debe convertirse en influencia real. Trabajo para que las voces jóvenes se traduzcan en políticas y acciones concretas, generando cambios sostenibles en nuestras comunidades."
                        }
                    },
                    {
                        title: { pt: "Ação", en: "Action", es: "Acción" },
                        desc: {
                            pt: "Toda ideia só faz sentido se transformar realidades. Por isso, impulso projetos muito proativos que respondem às necessidades sociais, priorizando o serviço, a inovação e liderança de base.",
                            en: "Every idea makes sense only if it transforms realities. Thus, I highly encourage active projects that respond to social needs, constantly prioritizing service, innovation and base leadership.",
                            es: "Toda idea cobra sentido solo si logra transformar realidades. Por ello, impulso proyectos que responden a necesidades sociales, priorizando siempre el servicio, the innovación y el liderazgo."
                        }
                    }
                ]
            },
            bio: {
                title: { pt: "Quem é Said?", en: "Who is Said?", es: "¿Quién es Said?" },
                paragraph: {
                    pt: "Sou Said Ortega, líder Escoteiro do Panamá e atual Comissário Nacional de Participação Juvenil da Associação Nacional de Escoteiros do Panamá. Minha história no Movimento Escoteiro começou há mais de nove anos, quando entrei como um joven com vontade de aprender, vivir aventuras e descobrir do que era capaz.",
                    en: "I am Said Ortega, a Scout leader from Panama and currently the National Commissioner for Youth Participation of the National Scout Association of Panama. My story in the Scout Movement began more than nine years ago, when I joined as a young person eager to learn, live adventures, and discover what I was capable of.",
                    es: "Soy Said Ortega, líder Scout de Panamá y actual Comisionado Nacional de Participación Juvenil de la Asociación Nacional de Scouts de Panamá. Mi historia en el Movimiento Escoteiro comenzó hace más de nueve años, cuando entré como un joven con ganas de aprender, vivir aventuras y descubrir de qué era capaz. Hoy sirvo con propósito comprometido con el cambio social."
                }
            },
            contact: {
                title: { pt: "Conecte-se", en: "Connect", es: "Conéctate" },
                subtitle: { pt: "Siga minha jornada nas redes sociais", en: "Follow my journey on social media", es: "Sigue mi trayectoria en redes sociales" }
            },
            nav: {
                home: { pt: "Início", en: "Home", es: "Inicio" },
                about: { pt: "Visão", en: "Vision", es: "Visión" },
                bio: { pt: "Perfil", en: "Profile", es: "Perfil" },
                experience: { pt: "Trajetória", en: "Trajectory", es: "Trayectoria" },
                candidacy: { pt: "Candidatura", en: "Candidacy", es: "Candidatura" },
                testimonials: { pt: "Testemunhos", en: "Testimonials", es: "Testimonios" },
                gallery: { pt: "Galeria", en: "Gallery", es: "Galería" },
                contact: { pt: "Contato", en: "Contact", es: "Contacto" },
                language: { pt: "Idioma", en: "Language", es: "Idioma" }
            },
            experience: {
                title: { pt: "Trajetória", en: "Trajectory", es: "Trayectoria" },
                items: [
                    {
                        year: "2026",
                        title: { es: "Director del Curso de Liderazgo Panameño 2026", en: "Director of the Panamanian Leadership Course 2026", pt: "Diretor do Curso de Liderança Panamenho 2026" },
                        org: "Asociación Nacional de Scouts de Panamá."
                    },
                    {
                        year: "2025",
                        title: { es: "Comisionado Nacional de Participación Juvenil", en: "National Youth Participation Commissioner", pt: "Comissário Nacional de Participação Juvenil" },
                        org: "Dirección Nacional de la Asociación Nacional de Scouts de Panamá."
                    },
                    {
                        year: "2025",
                        title: { es: "Interamerican Leadership Training", en: "Interamerican Leadership Training", pt: "Interamerican Leadership Training" },
                        org: "Boy Scouts of America (Sede Medellín, Colombia)."
                    },
                    {
                        year: "2024",
                        title: { es: "Delegado Nacional JAV", en: "National JAV Delegate", pt: "Delegado Nacional JAV" },
                        org: "Conferencia Scout Mundial, El Cairo, Egipto."
                    },
                    {
                        year: "2024",
                        title: { es: "Condecoración BP Rover", en: "BP Rover Decoration", pt: "Condecoração BP Rover" },
                        org: "Máxima progresión de la sección mayor."
                    }
                ]
            },
            candidacy: {
                title: { pt: "Candidatura", en: "Candidacy", es: "Candidatura" },
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                proposalPdfUrl: "/propuesta_said.pdf",
                items: [
                    {
                        title: { es: "Innovación Educativa", en: "Educational Innovation", pt: "Inovação Educativa" },
                        desc: { 
                            es: "Actualizar los métodos de participación para la era digital fomentando un aprendizaje dinámico.",
                            en: "Updating participation methods for the digital era fostering dynamic learning.",
                            pt: "Atualizar os métodos de participação para la era digital fomentando um aprendizado dinâmico."
                        },
                        image: "/idea.png"
                    },
                    {
                        title: { es: "Liderazgo de Impacto", en: "Impact Leadership", pt: "Liderança de Impacto" },
                        desc: { 
                            es: "Empoderar a los jóvenes en la toma de decisiones para que sean motores de cambio positivo.",
                            en: "Empowering young people in decision-making so they are engines of positive change.",
                            pt: "Empoderar os jovens na tomada de decisão para que sejam motores de mudança positiva."
                        },
                        image: "/gallery_media__1772898432218.jpg"
                    }
                ]
            },
            testimonials: {
                title: { pt: "Lo que dicen sobre Said", en: "What they say", es: "Lo que dicen sobre Said" },
                list: [
                    {
                        name: "Franklin Bernal",
                        text: {
                            es: "Said es un líder excepcional. Su compromiso con el empoderamiento juvenil y el escultismo ha transformado nuestra comunidad.",
                            en: "Said is an exceptional leader. His commitment to youth empowerment and scouting has transformed our community.",
                            pt: "Said é um líder excepcional. Seu compromisso transformou nossa comunidad."
                        },
                        photo: "/hero_profile_media__1772899441601.jpg"
                    }
                ]
            },
            gallery: {
                title: { pt: "Galeria", en: "Gallery", es: "Galería" },
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
        version: "1.3.1"
    })
};


export default PersonModel;
