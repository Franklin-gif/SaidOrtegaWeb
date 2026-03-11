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
                bio: { pt: "Perfil", en: "Profile", es: "Perfil", ar: "الملف الشخصي" },
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
                        year: "2026",
                        title: { es: "Director del Curso de Liderazgo Panameño 2026", en: "Director of the Panamanian Leadership Course 2026", pt: "Diretor do Curso de Liderança Panamenho 2026", ar: "مدير دورة القيادة البنمية 2026" },
                        org: "Liderazgo y servicio."
                    },
                    {
                        year: "2026",
                        title: { es: "Coordinación y organización del Foro Nacional de Jóvenes", en: "Coordination and organization of the National Youth Forum", pt: "Coordenação e organização do Fórum Nacional de Jovens", ar: "تنسيق وتنظيم المنتدى الوطني للشباب" },
                        org: "Liderazgo y servicio."
                    },
                    {
                        year: "2025",
                        title: { es: "Interamerican Leadership Training", en: "Interamerican Leadership Training", pt: "Interamerican Leadership Training", ar: "تدريب القيادة الأمريكي" },
                        org: "Boy Scouts of America (Sede Medellín, Colombia)."
                    },
                    {
                        year: "2025",
                        title: { es: "Messenger of Peace: Driving Youth-Led Change Workshop", en: "Messenger of Peace: Driving Youth-Led Change Workshop", pt: "Messenger of Peace: Driving Youth-Led Change Workshop", ar: "ورشة عمل رسل السلام: قيادة التغيير يقوده الشباب" },
                        org: "Riyadh, Arabia Saudita."
                    },
                    {
                        year: "2025",
                        title: { es: "Coordinación y organización del Foro Nacional de Jóvenes", en: "Coordination and organization of the National Youth Forum", pt: "Coordenação e organização do Fórum Nacional de Jovens", ar: "تنسيق وتنظيم المنتدى الوطني للشباب" },
                        org: "Liderazgo y servicio."
                    },
                    {
                        year: "2025 – 2",
                        title: { es: "Comisionado Nacional de Participación Juvenil", en: "National Youth Participation Commissioner", pt: "Comissário Nacional de Participação Juvenil", ar: "المفوض الوطني لمشاركة الشباب" },
                        org: "Dirección Nacional de la Asociación Nacional de Scouts de Panamá."
                    },
                    {
                        year: "2024 – 4",
                        title: { es: "Delegado Nacional JAV", en: "National JAV Delegate", pt: "Delegado Nacional JAV", ar: "مندوب وطني JAV" },
                        org: "Conferencia Scout Mundial, El Cairo, Egipto."
                    },
                    {
                        year: "2024 – 3",
                        title: { es: "Delegado Nacional JAV", en: "National JAV Delegate", pt: "Delegado Nacional JAV", ar: "مندوب وطني JAV" },
                        org: "Conferencia Scout Interamericana, Foz de Iguaçu, Brasil."
                    },
                    {
                        year: "2024 – 2",
                        title: { es: "Comisionado Nacional de Participación Juvenil", en: "National Youth Participation Commissioner", pt: "Comissário Nacional de Participação Juvenil", ar: "المفوض الوطني لمشاركة الشباب" },
                        org: "Dirección Nacional de la Asociación Nacional de Scouts de Panamá."
                    },
                    {
                        year: "2024",
                        title: { es: "Condecoración BP Rover", en: "BP Rover Decoration", pt: "Condecoração BP Rover", ar: "وسام BP Rover" },
                        org: "Máxima progresión de la sección mayor, culminando el proceso completo de progresión."
                    },
                    {
                        year: "2024",
                        title: { es: "Subdirector del Grupo Scout 15", en: "Assistant Director of Scout Group 15", pt: "Subdiretor do Grupo Escoteiro 15", ar: "نائب مدير المجموعة الكشفية 15" },
                        org: "Juan Demóstenes Arosemena (Miembro más joven en asumir)."
                    },
                    {
                        year: "2024",
                        title: { es: "Subdirector del Curso de Liderazgo Panameño 2024", en: "Assistant Director of the Panamanian Leadership Course 2024", pt: "Subdiretor do Curso de Liderança Panamenho 2024", ar: "نائب مدير دورة القيادة البنمية 2024" },
                        org: "Formación Nacional."
                    },
                    {
                        year: "2024",
                        title: { es: "Reconocimiento Mensajero de la Paz", en: "Messenger of Peace Recognition", pt: "Reconhecimento Mensageiro da Paz", ar: "تقدير رسل السلام" },
                        org: "Distinción otorgada por la Oficina Scout Mundial."
                    },
                    {
                        year: "2024",
                        title: { es: "Reconocimiento Mensajero de la Paz", en: "Messenger of Peace Recognition", pt: "Reconhecimento Mensageiro da Paz", ar: "تقدير رسل السلام" },
                        org: "Proyecto 'Del Timbo al Tambo' (Educación ambiental)."
                    },
                    {
                        year: "2024",
                        title: { es: "Reconocimiento Champions for Nature", en: "Champions for Nature Recognition", pt: "Reconhecimento Champions for Nature", ar: "تقدير أبطال الطبيعة" },
                        org: "Proyecto 'Woofing Hearts: Corazones que Ladran'."
                    },
                    {
                        year: "2024",
                        title: { es: "Coordinación y organización del Foro Nacional de Jóvenes", en: "Coordination and organization of the National Youth Forum", pt: "Coordenação e organização do Fórum Nacional de Jovens", ar: "تنسيق وتنظيم المنتدى الوطني للشباب" },
                        org: "Liderazgo y servicio."
                    },
                    {
                        year: "2023 – 2",
                        title: { es: "Asesor Nacional de Participación Juvenil", en: "National Youth Participation Advisor", pt: "Assessor Nacional de Participação Juvenil", ar: "المستشار الوطني لمشاركة الشباب" },
                        org: "Foro Nacional de Jóvenes de la Asociación Nacional de Scouts de Panamá."
                    },
                    {
                        year: "2022",
                        title: { es: "Condecoración Istmeña", en: "Isthmian Decoration", pt: "Condecoração Istmiana", ar: "الوسام البرزخي" },
                        org: "Máxima progresión de la sección intermedia."
                    },
                    {
                        year: "2019",
                        title: { es: "Scout Balboa", en: "Scout Balboa", pt: "Escoteiro Balboa", ar: "كشاف بالبوا" },
                        org: "Máxima progresión de la sección media."
                    },
                    {
                        year: "2015",
                        title: { es: "Ingreso al Movimiento Scout", en: "Joined the Scout Movement", pt: "Ingresso no Movimento Escoteiro", ar: "الانضمام إلى الحركة الكشفية" },
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
                        title: { es: "Innovación Educativa", en: "Educational Innovation", pt: "Inovação Educativa", ar: "الابتكار التعليمي" },
                        desc: { 
                            es: "Actualizar los métodos de participación para la era digital fomentando un aprendizaje dinámico. Queremos implementar nuevas plataformas interactivas que faciliten el acceso a nuestro programa educativo.",
                            en: "Updating participation methods for the digital era fostering dynamic learning. We want to implement new interactive platforms that facilitate access to our educational program.",
                            pt: "Atualizar os métodos de participação para a era digital fomentando um aprendizado dinâmico.",
                            ar: "تحديث أساليب المشاركة للعصر الرقمي من خلال تعزيز التعلم الديناميكي."
                        },
                        image: "/idea.png"
                    },
                    {
                        title: { es: "Fortalecimiento Regional", en: "Regional Strengthening", pt: "Fortalecimento Regional", ar: "تعزيز الأقاليم" },
                        desc: { 
                            es: "Crear redes de colaboración sólidas entre grupos scouts de todo el país. El objetivo es descentralizar los recursos, mejorar la comunicación y la formación.",
                            en: "Creating solid collaboration networks between scout groups throughout the country. The goal is to decentralize resources, improve communication and training.",
                            pt: "Criar redes de colaboração sólidas entre grupos escoteiros de todo o país.",
                            ar: "إنشاء شبكات تعاون قوية بين المجموعات الكشفية في جميع أنحاء البلاد."
                        },
                        image: "/gallery_media__1772898912272.jpg"
                    },
                    {
                        title: { es: "Liderazgo de Impacto", en: "Impact Leadership", pt: "Liderança de Impacto", ar: "قيادة التأثير" },
                        desc: { 
                            es: "Empoderar a los jóvenes en la toma de decisiones para que sean motores de cambio positivo. A través de talleres intensivos y mentorías.",
                            en: "Empowering young people in decision-making so they are engines of positive change. Through intensive workshops and mentorships.",
                            pt: "Empoderar os jovens na tomada de decisão para que sejam motores de mudança positiva.",
                            ar: "تمكين الشباب في صنع القرار ليكونوا محركات للتغيير الإيجابي."
                        },
                        image: "/gallery_media__1772898432218.jpg"
                    }
                ]
            },
            testimonials: {
                title: { pt: "Lo que dicen sobre Said", en: "What they say", es: "Lo que dicen sobre Said", ar: "شهادات" },
                list: [
                    {
                        name: "Franklin Bernal",
                        text: {
                            es: "Said es un líder excepcional. Su compromiso con el empoderamiento juvenil y el escultismo ha transformado nuestra comunidad, inspirando a cientos de jóvenes a liderar con propósito y valores.",
                            en: "Said is an exceptional leader. His commitment to youth empowerment and scouting has transformed our community, inspiring hundreds of young people to lead with purpose and values.",
                            pt: "Said é um líder excepcional. Seu compromisso transformou nossa comunidade, inspirando centenas de jovens.",
                            ar: "سعيد قائد استثنائي. لقد حول التزامه بتمكين الشباب والكشافة مجتمعنا."
                        },
                        photo: "/hero_profile_media__1772899441601.jpg"
                    },
                    {
                        name: "Companheiro Messengers of Peace",
                        text: {
                            es: "Su visión de paz y servicio es inspiradora para toda la red internacional.",
                            en: "His vision of peace and service is inspiring for the entire international network.",
                            pt: "Sua visão de paz e serviço é inspiradora para toda a rede internacional.",
                            ar: "رؤيته للسلام والخدمة ملهمة للشبكة الدولية بأكملها."
                        },
                        photo: "/hero_profile_2_media__1772899851929.jpg"
                    }
                ]
            },
            gallery: {
                title: { pt: "Galeria", en: "Gallery", es: "Galería", ar: "الصور" },
                images: [
                    "/gallery_media__1772898300083.jpg",
                    "/gallery_media__1772898367726.jpg",
                    "/gallery_media__1772898432218.jpg",
                    "/gallery_media__1772898486269.jpg",
                    "/gallery_media__1772898544429.jpg",
                    "/gallery_media__1772898628717.jpg",
                    "/gallery_media__1772898660545.jpg",
                    "/gallery_media__1772898693234.jpg",
                    "/gallery_media__1772898710419.jpg",
                    "/gallery_media__1772898731443.jpg",
                    "/gallery_media__1772898912272.jpg",
                    "/gallery_media__1772898993013.jpg",
                    "/gallery_media__1772899008228.jpg"
                ]
            }
        },
        socialLinks: [
            { platform: "Instagram", url: "https://instagram.com/saidisaac._", icon: "📸" },
            { platform: "Email", url: "mailto:saidortega102004@gmail.com", icon: "✉️" }
        ],
        imagePath: "/hero_profile_media__1772899441601.jpg",
        version: "1.2.1" // Increment this whenever you want to force all devices to update
    })
};

export default PersonModel;
