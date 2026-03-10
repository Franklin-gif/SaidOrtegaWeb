const PersonModel = {
    getInitialData: () => ({
        name: "Said Ortega",
        tagline: {
            pt: "ESCOTEIRO • LÍDER JUVENIL • CHANGEMAKER",
            en: "SCOUT • YOUTH LEADER • CHANGEMAKER",
            es: "SCOUT • LÍDER JUVENIL • CHANGEMAKER",
            ar: "كشاف • قائد شبابي • صانع تغيير"
        },
        sections: {
            hero: {
                title: "Said Ortega",
                subtitle: {
                    pt: "Provavelmente organizando algo, liderando algo… ou pensando em como melhorar algo.",
                    en: "Probably organizing something, leading something… or thinking about how to improve something.",
                    es: "Probablemente organizando algo, liderando algo… o pensando en cómo mejorar algo.",
                    ar: "ربما أنظم شيئًا، أقود شيئًا... أو أفكر في كيفية تحسين شيء ma."
                }
            },
            vision: {
                title: { pt: "Minha Visão", en: "My Vision", es: "Mi Visión", ar: "رؤيتي" },
                cards: [
                    {
                        title: { pt: "Governança", en: "Governance", es: "Gobernanza", ar: "الحوكمة" },
                        desc: {
                            pt: "Promovo uma governança transparente e ativa, onde as juventudes sejam parte da tomada de decisão. Fortalecer espaços democráticos orientados ao bem comum em nossa sociedade é a minha missão.",
                            en: "I promote a transparent and participatory governance, where youth are an active part of decision-making. Strengthening democratic spaces oriented to the common good is my ultimate core mission.",
                            es: "Promuevo una gobernanza transparente y participativa, donde las juventudes sean parte activa en la toma de decisiones. Fortalecer espacios democráticos orientados al bien común es mi misión.",
                            ar: "أشجع حوكمة شفافة وتشاركية، حيث يكون الشباب جزءًا نشطًا في صنع القرار. تعزيز المساحات الديمقراطية الموجهة للصالح العام هو مهمتي."
                        }
                    },
                    {
                        title: { pt: "Incidência", en: "Advocacy", es: "Incidencia", ar: "المناصرة" },
                        desc: {
                            pt: "A participação deve se converter em influência real. Trabalho para que as jovens vozes se traduzam em políticas e ações concretas, gerando mudanças sustentáveis consistentes nas comunidades.",
                            en: "Participation must turn into real influence. I work to ensure that young voices translate into concrete policies and real actions, generating sustainable changes throughout all our communities.",
                            es: "La participación debe convertirse en influencia real. Trabajo para que las voces jóvenes se traduzcan en políticas y acciones concretas, generando cambios sostenibles en nuestras comunidades.",
                            ar: "يجب أن تتحول المشاركة إلى تأثير حقيقي. أعمل لضمان ترجمة أصوات الشباب إلى سياسات وإجراءات ملموسة، مما يولد تغييرات مستدامة في مجتمعاتنا."
                        }
                    },
                    {
                        title: { pt: "Ação", en: "Action", es: "Acción", ar: "تأثير وعمل" },
                        desc: {
                            pt: "Toda ideia só faz sentido se transformar realidades. Por isso, impulso projetos muito proativos que respondem às necessidades sociais, priorizando o serviço, a inovação e liderança de base.",
                            en: "Every idea makes sense only if it transforms realities. Thus, I highly encourage active projects that respond to social needs, constantly prioritizing service, innovation and base leadership.",
                            es: "Toda idea cobra sentido solo si logra transformar realidades. Por ello, impulso proyectos que responden a necesidades sociales, priorizando siempre el servicio, la innovación y el liderazgo.",
                            ar: "كل فكرة لا تكون منطقية إلا إذا غيرت الواقع. لذلك، أشجع المشاريع التي تستجيب للاحتياجات الاجتماعية، مع إعطاء الأولوية للخدمة والابتكار والقيادة."
                        }
                    }
                ]
            },
            bio: {
                title: { pt: "Quem é Said?", en: "Who is Said?", es: "¿Quién es Said?", ar: "من هو سعيد؟" },
                paragraph: {
                    pt: "Sou Said Ortega, líder Escoteiro do Panamá e atual Comissário Nacional de Participação Juvenil da Associação Nacional de Escoteiros do Panamá. Minha história no Movimento Escoteiro começou há mais de nove anos, quando entrei como um joven com vontade de aprender, vivir aventuras e descobrir do que era capaz.",
                    en: "I am Said Ortega, a Scout leader from Panama and currently the National Commissioner for Youth Participation of the National Scout Association of Panama. My story in the Scout Movement began more than nine years ago, when I joined as a young person eager to learn, live adventures, and discover what I was capable of.",
                    es: "Soy Said Ortega, líder Scout de Panamá y actual Comisionado Nacional de Participación Juvenil de la Asociación Nacional de Scouts de Panamá. Mi historia en el Movimiento Escoteiro comenzó hace más de nueve años, cuando entré como un joven con ganas de aprender, vivir aventuras y descubrir de qué era capaz. Hoy sirvo con propósito comprometido con el cambio social.",
                    ar: "أنا سعيد أورتيغا، قائد كشفي من بنما والمفوض الوطني الحالي لمشاركة الشباب في الجمعية الوطنية للكشافة في بنما."
                }
            },
            contact: {
                title: { pt: "Conecte-se", en: "Connect", es: "Conéctate", ar: "تواصل معي" },
                subtitle: { pt: "Siga minha jornada nas redes sociais", en: "Follow my journey on social media", es: "Sigue mi trayectoria en redes sociales", ar: "تابع رحلتي عبر وسائل التواصل الاجتماعي" }
            },
            nav: {
                home: { pt: "Início", en: "Home", es: "Inicio", ar: "الرئيسية" },
                about: { pt: "Visão", en: "Vision", es: "Visión", ar: "رؤية" },
                bio: { pt: "Perfil", en: "Profile", es: "Perfil", ar: "الملf الشخصي" },
                experience: { pt: "Trajetória", en: "Trajectory", es: "Trayectoria", ar: "مسار" },
                candidacy: { pt: "Candidatura", en: "Candidacy", es: "Candidatura", ar: "الترشيح" },
                testimonials: { pt: "Testemunhos", en: "Testimonials", es: "Testimonios", ar: "شهادات" },
                gallery: { pt: "Galeria", en: "Gallery", es: "Galería", ar: "الصور" },
                contact: { pt: "Contato", en: "Contact", es: "Contacto", ar: "اتصال" },
                language: { pt: "Idioma", en: "Language", es: "Idioma", ar: "لغة" }
            },
            experience: {
                title: { pt: "Trajetória", en: "Trajectory", es: "Trayectoria", ar: "مسار" },
                items: [
                    {
                        year: "2015",
                        title: { pt: "Ingresso ao Movimento Scout", en: "Joined the Scout Movement", es: "Ingreso al Movimiento Scout", ar: "الانضمام إلى الحركة الكشفية" },
                        org: "Iniciando mi proceso de formación dentro del programa educativo scout."
                    }
                ]
            },
            candidacy: {
                title: { pt: "Candidatura", en: "Candidacy", es: "Candidatura", ar: "الترشيح" },
                videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                proposalPdfUrl: "/propuesta_said.pdf",
                items: [
                    {
                        title: { pt: "Inovação Educativa", en: "Educational Innovation", es: "Innovación Educativa", ar: "الابتكار التعليمي" },
                        desc: { 
                            es: "Actualizar los métodos de participación para la era digital fomentando un aprendizaje dinámico.",
                            en: "Updating participation methods for the digital era fostering dynamic learning.",
                            pt: "Atualizar os métodos de participação para a era digital.",
                            ar: "تحديث أساليب المشاركة للعصر الرقمي."
                        },
                        image: "/gallery_media__1772898300083.jpg"
                    }
                ]
            },
            testimonials: {
                title: { pt: "Lo que dicen sobre Said", en: "What they say", es: "Lo que dicen sobre Said", ar: "شهادات" },
                list: []
            },
            gallery: {
                title: { pt: "Galeria", en: "Gallery", es: "Galería", ar: "الصور" },
                images: [
                    "/gallery_media__1772898300083.jpg"
                ]
            }
        },
        socialLinks: [
            { platform: "Instagram", url: "https://instagram.com/saidisaac._", icon: "📸" },
            { platform: "Email", url: "mailto:saidortega102004@gmail.com", icon: "✉️" }
        ],
        imagePath: "/hero_profile_2_media__1772899851929.jpg"
    })
};

export default PersonModel;
