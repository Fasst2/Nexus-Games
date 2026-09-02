// LISTA GENERAL DE PRODUCTOS CON INFORMACIÓN DETALLADA
const products = [
    // COMBOS Y OFERTAS
    { 
        id: 101, 
        name: "Mortal Kombat 11 + Injustice 2", 
        platform: "Combos", 
        price: 24500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/header.jpg",
        description: {
            intro: "Obtené dos de los mejores títulos de lucha de NetherRealm Studios en un solo paquete definitivo.",
            features: [
                "Lucha con plantillas completas de superhéroes y luchadores icónicos.",
                "Modos historia cinematográficos y combate online altamente competitivo.",
                "Sistemas de personalización de personajes y equipamiento."
            ],
            synopsis: "Disfruta de batallas épicas cruzando el universo de Mortal Kombat con el de DC Comics, dominando variaciones de combate únicas y cinemáticas de alta calidad.",
            specs: {
                developer: "NetherRealm Studios",
                publisher: "Warner Bros. Interactive",
                platforms: "PS4, PS5",
                release: "2019",
                rating: "Mature 17+",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 102, 
        name: "Sniper Ghost Warrior Contracts 2", 
        platform: "Ofertas", 
        price: 18500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1338770/header.jpg",
        description: {
            intro: "Conviértete en un francotirador de elite en el shooter táctico más exigente ambientado en Oriente Medio.",
            features: [
                "Eliminación de objetivos a distancias extremas superiores a 1000 metros.",
                "Campaña táctica con sigilo realista y balística mejorada.",
                "Misiones highly rejugables con múltiples formas de abordaje."
            ],
            synopsis: "En el papel de Raven, un francotirador a sueldo, deberás completar contratos tácticos en zonas de conflicto sin ley para derrocar un régimen criminal.",
            specs: {
                developer: "CI Games",
                publisher: "CI Games",
                platforms: "PS4, PS5",
                release: "4 de junio de 2021",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },

    // JUEGOS PS4
    { 
        id: 10, 
        name: "Alan Wake Remastered", 
        platform: "PS4", 
        price: 20000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108710/header.jpg",
        description: {
            intro: "Sumérgete en el thriller psicológico Alan Wake Remastered, disponible para PlayStation 4 y PlayStation 5.",
            features: [
                "Experiencia completa: Disfruta del juego base junto con las expansiones 'The Signal' y 'The Writer'.",
                "Gráficos mejorados: Visuales remasterizados en 4K que realzan los detalles y la ambientación del juego.",
                "Historia envolvente: Narrativa episódica llena de giros inesperados combinando acción y suspense."
            ],
            synopsis: "Alan Wake, un escritor de novelas de suspense, se embarca en una búsqueda desesperada para encontrar a su esposa Alice en Bright Falls.",
            specs: {
                developer: "Remedy Entertainment",
                publisher: "Epic Games Publishing",
                platforms: "PlayStation 4, PlayStation 5",
                release: "5 de octubre de 2021",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 1, 
        name: "112 Operator", 
        platform: "PS4", 
        price: 38000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1083830/header.jpg",
        description: {
            intro: "Gestiona los servicios de emergencia de cualquier ciudad del mundo respondiendo a llamadas y enviando recursos.",
            features: [
                "Mapas reales basados en datos de OpenStreetMap.",
                "Efectos meteorológicos dinámicos y situaciones de desastre a gran escala.",
                "Gestión detallada de unidades de rescate y equipamiento especial."
            ],
            synopsis: "Asume el rol de despachador de emergencias a nivel global. Atiende incidentes en tiempo real y asigna recursos estratégicamente.",
            specs: {
                developer: "Jutsu Games",
                publisher: "Games Operators",
                platforms: "PlayStation 4",
                release: "23 de abril de 2020",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 2, 
        name: "911 Operator", 
        platform: "PS4", 
        price: 27000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/503560/header.jpg",
        description: {
            intro: "Ponte los auriculares de un telefonista del 911 y toma decisiones de vida o muerte en segundos.",
            features: [
                "Más de 50 ciudades reales para jugar alrededor del mundo.",
                "Cientos de llamadas y reportes médicos o policiales únicos.",
                "Modo Carrera y Modo Libre."
            ],
            synopsis: "Administra llamadas de auxilio reales respondiendo de manera precisa para enviar asistencia según la urgencia.",
            specs: {
                developer: "Jutsu Games",
                publisher: "PlayWay S.A.",
                platforms: "PlayStation 4",
                release: "24 de febrero de 2017",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 3, 
        name: "A Plague Tale: Innocence", 
        platform: "PS4", 
        price: 8500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/752590/header.jpg",
        description: {
            intro: "Acompaña a Amicia y su hermano Hugo en un viaje desgarrador a través de la Francia del siglo XIV asolada por la peste.",
            features: [
                "Mecánicas de sigilo, resolución de puzles con fuego y supervivencia.",
                "Hordas impresionantes de ratas en pantalla.",
                "Narrativa conmovedora ganadora de múltiples premios."
            ],
            synopsis: "Perseguidos por la Inquisición y rodeados de enjambres de ratas, los hermanos deberán sobrevivir apoyándose mutuamente.",
            specs: {
                developer: "Asobo Studio",
                publisher: "Focus Home Interactive",
                platforms: "PlayStation 4, PlayStation 5",
                release: "14 de mayo de 2019",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 4, 
        name: "A Way Out", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg",
        description: {
            intro: "Una aventura exclusivamente cooperativa diseñada para jugarse de a dos personas en pantalla dividida o en línea.",
            features: [
                "Experiencia de juego 100% cooperativa.",
                "Nivel de acción variado con persecuciones, tiroteos y puzles.",
                "Pase de amigos para invitar a un compañero gratis."
            ],
            synopsis: "Leo y Vincent, dos prisioneros desconocidos, deben forjar una alianza arriesgada para escapar de la cárcel.",
            specs: {
                developer: "Hazelight Studios",
                publisher: "Electronic Arts",
                platforms: "PlayStation 4",
                release: "23 de marzo de 2018",
                rating: "Mature 17+",
                modes: "Cooperativo (2 jugadores)"
            }
        }
    },
    { 
        id: 5, 
        name: "Ace Combat 7: Skies Unknown", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/502500/header.jpg",
        description: {
            intro: "Ponte a los mandos de los cazas de combate más avanzados del mundo y domina los cielos.",
            features: [
                "Gráficos fotorrealistas impulsados por Unreal Engine 4.",
                "Clima dinámico que afecta el comportamiento de los aviones.",
                "Amplia selección de cazas modernos y armas personalizables."
            ],
            synopsis: "Forma parte del escuadrón de élite y completa misiones en el aire esquivando misiles y nubes de tormenta.",
            specs: {
                developer: "Bandai Namco Studios",
                publisher: "Bandai Namco Entertainment",
                platforms: "PlayStation 4",
                release: "18 de enero de 2019",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 6, 
        name: "Agony", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/487720/header.jpg",
        description: {
            intro: "Un survival horror en primera persona ambientado en las profundidades más perturbadoras del Infierno.",
            features: [
                "Exploración de un inframundo grotesco y peligroso.",
                "Habilidad especial para poseer almas y demonios de menor rango.",
                "Fuerte enfoque en la atmósfera, el sigilo y la supervivencia."
            ],
            synopsis: "Eres un alma atormentada sin recuerdos de su pasado que intenta escapar del infierno.",
            specs: {
                developer: "Madmind Studio",
                publisher: "PlayWay S.A.",
                platforms: "PlayStation 4",
                release: "29 de mayo de 2018",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 7, 
        name: "Air Conflicts Pacific Carriers", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214910/header.jpg",
        description: {
            intro: "Simulador de combate aéreo basado en las batallas navales del Océano Pacífico.",
            features: [
                "Campañas para la Armada de EE.UU. o la Armada Imperial Japonesa.",
                "Gestión y mando sobre portaaviones enteros.",
                "Aviones históricos detallados con armamento realista."
            ],
            synopsis: "Revive batallas históricas como Midway y Pearl Harbor comandando escuadrones aéreos de combate.",
            specs: {
                developer: "Games Farm",
                publisher: "Kalypso Media",
                platforms: "PlayStation 4",
                release: "25 de septiembre de 2015",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 8, 
        name: "Air Conflicts Secret Wars", 
        platform: "PS4", 
        price: 9000, 
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/85400/header.jpg",
        description: {
            intro: "Vuela en misiones encubiertas y operaciones secretas a través de las dos Guerras Mundiales.",
            features: [
                "Más de 49 misiones con objetivos variados.",
                "Modos de control Arcade y Simulación.",
                "Más de 16 aeronaves de época detalladas."
            ],
            synopsis: "Ponte en la piel de Dorothy 'Dee' Derbec, una piloto contratada para misiones clandestinas.",
            specs: {
                developer: "Games Farm",
                publisher: "bitComposer Games",
                platforms: "PlayStation 4",
                release: "18 de julio de 2011",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 9, 
        name: "Air Conflicts Vietnam", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/236870/header.jpg",
        description: {
            intro: "Pilota helicópteros de combate y aviones a reacción durante la Guerra de Vietnam.",
            features: [
                "Inclusión de helicópteros armados con ametralladoras y misiles.",
                "Banda sonora inspirada en el rock de los años 60.",
                "Escuadrones intercambiables durante la acción."
            ],
            synopsis: "Controla a Joe Thompson, un piloto de las Fuerzas Aéreas de los EE.UU., piloteando misiones de escolta y ataque.",
            specs: {
                developer: "Games Farm",
                publisher: "bitComposer Games",
                platforms: "PlayStation 4",
                release: "2 de octubre de 2013",
                rating: "Teen (Adolescentes)",
                modes: "Un jugador / Multijugador"
            }
        }
    },
    { 
        id: 11, 
        name: "Alien Isolation: The Collection", 
        platform: "PS4", 
        price: 46000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/header.jpg",
        description: {
            intro: "La edición definitiva del aclamado survival horror, que incluye todos los DLCs.",
            features: [
                "Incluye las misiones extra con la tripulación original de Nostromo.",
                "IA enemiga adaptativa que aprende de tus hábitos.",
                "Atmósfera claustrofóbica fidedigna a la película de 1979."
            ],
            synopsis: "15 años después de la desaparición de la nave Nostromo, Amanda Ripley viaja a la estación Sevastopol.",
            specs: {
                developer: "Creative Assembly",
                publisher: "SEGA",
                platforms: "PlayStation 4",
                release: "7 de octubre de 2014",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 12, 
        name: "Alien: Isolation", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/214490/header.jpg",
        description: {
            intro: "Descubre el verdadero significado del miedo en un juego de supervivencia en primera persona.",
            features: [
                "Supervivencia pura: busca recursos y fabrica herramientas.",
                "Enfréntate a un Xenomorfo impredecible.",
                "Diseño visual y sonoro idéntico a la obra cinematográfica original."
            ],
            synopsis: "Amanda Ripley deberá usar su ingenio para sobrevivir a una estación espacial en ruinas.",
            specs: {
                developer: "Creative Assembly",
                publisher: "SEGA",
                platforms: "PlayStation 4",
                release: "7 de octubre de 2014",
                rating: "Mature 17+",
                modes: "Un jugador"
            }
        }
    },
    { 
        id: 13, 
        name: "Among Us", 
        platform: "PS4", 
        price: 5000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg",
        description: {
            intro: "Juego de trabajo en equipo y traición en el espacio para jugar en línea.",
            features: [
                "Juega con 4 a 15 jugadores en línea.",
                "Prepara tu nave para el despegue pero cuidado con el impostor.",
                "Votaciones y debates en tiempo real para descubrir al culpable."
            ],
            synopsis: "Un juego de deducción social donde la tripulación debe completar tareas mientras intenta descubrir a los impostores que intentan sabotear la nave.",
            specs: { developer: "Innersloth", publisher: "Innersloth", platforms: "PS4, PS5", release: "2018", rating: "Everyone 10+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 14, 
        name: "Ancestors: The Humankind Odyssey", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/536270/header.jpg",
        description: {
            intro: "Aventura de supervivencia en tercera persona en el Neógeno africano.",
            features: [
                "Evoluciona a lo largo de millones de años de historia humana.",
                "Explora un África del Neógeno llena de peligros y depredadores.",
                "Expande tu clan y transmite tus rasgos a las siguientes generaciones."
            ],
            synopsis: "Embarcate en la evolución humana comenzando hace 10 millones de años para asegurar la supervivencia de tu linaje.",
            specs: { developer: "Panache Digital Games", publisher: "Private Division", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 15, 
        name: "Anthem", 
        platform: "PS4", 
        price: 9000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg",
        description: {
            intro: "Action-RPG de mundo abierto donde pilotas trajes de combate de alta tecnología (Requiere PS Plus).",
            features: [
                "Equipa y personaliza exotrajes javelin potentes y únicos.",
                "Mundo dinámico con eventos climáticos y enemigos masivos.",
                "Juego cooperativo en equipo para hasta 4 jugadores."
            ],
            synopsis: "Forma un equipo de alabarderos y adéntrate en las ruinas de un mundo inacabado amenazado por el Dominio.",
            specs: { developer: "BioWare", publisher: "Electronic Arts", platforms: "PS4", release: "2019", rating: "Teen", modes: "Multijugador Co-op Online" }
        }
    },
    { 
        id: 16, 
        name: "AO Tennis 2", 
        platform: "Ofertas", 
        price: 9000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1072500/header.jpg",
        description: {
            intro: "El simulador oficial de tenis diseñado para y por la comunidad.",
            features: [
                "Modo carrera completo con gestión de reputación y patrocinadores.",
                "Editor avanzado de pistas, logos y jugadores.",
                "Animaciones y físicas de bola realistas."
            ],
            synopsis: "Compite contra las grandes figuras del circuito internacional y llega a la cima en el Abierto de Australia.",
            specs: { developer: "Big Ant Studios", publisher: "Nacon", platforms: "PS4", release: "2020", rating: "Everyone", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 17, 
        name: "ARK: Survival Evolved", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg",
        description: {
            intro: "Varado en una isla misteriosa, debes aprender a sobrevivir, domesticar dinosaurios y construir un refugio.",
            features: [
                "Más de 100 criaturas y dinosaurios para domesticar y entrenar.",
                "Sistema profundo de recolección, artesanía y construcción de bases.",
                "Mundo multijugador masivo con tribus y alianzas."
            ],
            synopsis: "Utiliza tu astucia y recursos para matar o domesticar a las criaturas primigenias que vagan por la isla de ARK.",
            specs: { developer: "Studio Wildcard", publisher: "Studio Wildcard", platforms: "PS4", release: "2017", rating: "Teen", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 18, 
        name: "Assassin's Creed Antiquity Pack", 
        platform: "Combos", 
        price: 20000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582160/header.jpg",
        description: {
            intro: "Paquete especial que incluye Assassin's Creed Origins y Assassin's Creed Odyssey.",
            features: [
                "Explora el Antiguo Egipto y la Antigua Grecia en dos mapas gigantescos.",
                "Combate RPG profundo con árboles de habilidades y equipamiento legendario.",
                "Decenas de horas de contenido e historias mitológicas."
            ],
            synopsis: "Descubre los orígenes de la Hermandad de Asesinos en Egipto y forja tu propio destino como mercenario en Grecia.",
            specs: { developer: "Ubisoft Montreal / Quebec", publisher: "Ubisoft", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 19, 
        name: "Assassin's Creed Chronicles Trilogy", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/354380/header.jpg",
        description: {
            intro: "Trilogía de sigilo y acción en 2.5D ambientada en China, India y Rusia.",
            features: [
                "Tres episodios completos con tres Asesinos distintos.",
                "Estilo visual único inspirado en pinturas de época.",
                "Mecánicas clásicas de sigilo adaptadas al desplazamiento lateral."
            ],
            synopsis: "Sigue las aventuras de Shao Jun, Arbaaz Mir y Nikolai Orelov en momentos históricos clave de sus respectivas naciones.",
            specs: { developer: "Climax Studios", publisher: "Ubisoft", platforms: "PS4", release: "2016", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 20, 
        name: "Assassin's Creed Freedom Cry", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/277590/header.jpg",
        description: {
            intro: "Aventura independiente que narra la historia de Adewalé en el Caribe del siglo XVIII.",
            features: [
                "Combate naval y terrestre con armas brutales como el trabuco y el machete.",
                "Libera esclavos y organiza la resistencia en Haití.",
                "Historia cargada de emoción y lucha por la libertad."
            ],
            synopsis: "Nacido esclavo, Adewalé encontró la libertad a bordo del Jackdaw. Ahora, naufragado en Saint-Domingue, luchará por liberar a su pueblo.",
            specs: { developer: "Ubisoft Quebec", publisher: "Ubisoft", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 21, 
        name: "Assassin's Creed III Remastered", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/911400/header.jpg",
        description: {
            intro: "Revive la Revolución Estadounidense con gráficos remasterizados y mecánicas mejoradas.",
            features: [
                "Incluye todo el contenido descargable original y Assassin's Creed Liberation Remastered.",
                "Gráficos 4K, nuevos modelos de personajes y renderizado de iluminación mejorado.",
                "Mecánicas de sigilo y combate pulidas."
            ],
            synopsis: "En la piel de Connor, un Asesino nativo americano, lucha por la libertad de tu gente y de tu nación en formación.",
            specs: { developer: "Ubisoft Barcelona", publisher: "Ubisoft", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 22, 
        name: "Assassin's Creed IV Black Flag", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/header.jpg",
        description: {
            intro: "La aventura pirata definitiva en la Era Dorada de la Piratería.",
            features: [
                "Exploración naval fluida e incursiones a barcos enemigos.",
                "Enorme mapa del Caribe con ciudades, islas y naufragios.",
                "Comanda y mejora tu propio barco pirata, el Jackdaw."
            ],
            synopsis: "Edward Kenway, un joven y carismático capitán pirata, se ve arrastrado a la antigua guerra entre Asesinos y Templarios.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2013", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 23, 
        name: "Assassin's Creed Mirage", 
        platform: "PS4", 
        price: 24000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/header.jpg",
        description: {
            intro: "Un retorno a las raíces de la saga enfocado en el sigilo, el parkour y los asesinatos precisos.",
            features: [
                "Ambientado en la vibrante y densa Bagdad del siglo IX.",
                "Parkour fluido y una amplia gama de herramientas de sigilo.",
                "Evolución narrativa de Basim de astuto ladrón a Maestro Asesino."
            ],
            synopsis: "Sigue la transformación de Basim Ibn Ishaq en la próspera Edad de Oro de Bagdad mientras busca respuestas y justicia.",
            specs: { developer: "Ubisoft Bordeaux", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 24, 
        name: "Assassin’s Creed Mirage Deluxe Edition", 
        platform: "PS4", 
        price: 73000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/header.jpg",
        description: {
            intro: "Edición Deluxe de Assassin’s Creed Mirage con contenido adicional exclusivo.",
            features: [
                "Incluye el atuendo inspirado en Prince of Persia, pieles para águila y montura, armas y más.",
                "Exploración centrada en el sigilo y el parkour clásico.",
                "Historia ambientada en la Bagdad del siglo IX."
            ],
            synopsis: "Sigue la historia de Basim en su camino a convertirse en Maestro Asesino con equipamiento exclusivo.",
            specs: { developer: "Ubisoft Bordeaux", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 25, 
        name: "Assassin’s Creed Odyssey (Solo Inglés)", 
        platform: "PS4", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg",
        description: {
            intro: "Escribe tu propia odisea épica en la Antigua Grecia (Audio y textos en inglés).",
            features: [
                "Mapa masivo del mundo griego con combates navales.",
                "Toma de decisiones que alteran el curso de la historia.",
                "Árbol de habilidades y personalización de equipamiento."
            ],
            synopsis: "Ponte en la piel de Alexios o Kassandra y decide el destino de Grecia.",
            specs: { developer: "Ubisoft Quebec", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 26, 
        name: "Assassin’s Creed Odyssey (Español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg",
        description: {
            intro: "Escribe tu propia odisea épica en la Antigua Grecia con textos completamente en español.",
            features: [
                "Mapa masivo del mundo griego con combates navales.",
                "Toma de decisiones que alteran el curso de la historia.",
                "Árbol de habilidades y personalización de equipamiento."
            ],
            synopsis: "Ponte en la piel de Alexios o Kassandra y decide el destino de Grecia.",
            specs: { developer: "Ubisoft Quebec", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 27, 
        name: "Assassin’s Creed Origins", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582160/header.jpg",
        description: {
            intro: "Descubre el origen de la Hermandad de Asesinos en el Antiguo Egipto.",
            features: [
                "Nuevo sistema de combate basado en gemas y armas de combate cuerpo a cuerpo.",
                "Exploración de pirámides, tumbas e íconos egipcios.",
                "Misiones con elementos RPG y niveles de personaje."
            ],
            synopsis: "Acompaña a Bayek de Siwa en una travesía de venganza que terminará dando origen a la Hermandad.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 28, 
        name: "Assassin’s Creed Origins Gold Edition", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582160/header.jpg",
        description: {
            intro: "La experiencia completa de Assassin’s Creed Origins con el Season Pass incluido.",
            features: [
                "Incluye las expansiones 'Los Ocultos' y 'El Miedo de los Faraones'.",
                "Paquetes de armas y monturas exclusivas.",
                "Mundo abierto masivo ambientado en el Antiguo Egipto."
            ],
            synopsis: "Explora la historia completa de Bayek con todas sus expansiones narrativas.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 29, 
        name: "Assassin’s Creed Rogue Remastered (Latino)", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311310/header.jpg",
        description: {
            intro: "Siente la transformación de un Asesino a un Cazador de Asesinos con audio en español latino.",
            features: [
                "Gráficos remasterizados en alta resolución.",
                "Combate naval helado en el Atlántico Norte.",
                "Perspectiva única jugando del lado de los Templarios."
            ],
            synopsis: "Shay Patrick Cormac traiciona a la Hermandad tras una misión trágica y se convierte en su mayor cazador.",
            specs: { developer: "Ubisoft Sofia", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 30, 
        name: "Assassin’s Creed Syndicate (Latino)", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/368500/header.jpg",
        description: {
            intro: "Lidera tu propia banda callejera en el Londres de la Revolución Industrial.",
            features: [
                "Dos personajes jugables: los hermanos Jacob y Evie Frye.",
                "Nuevas armas como el puño de acero, cuchillo kukri y la gancho de cuerda.",
                "Conducción de carruajes y control de territorios."
            ],
            synopsis: "Devuelve la libertad a la clase trabajadora victoriana liberando a la ciudad del yugo templario.",
            specs: { developer: "Ubisoft Quebec", publisher: "Ubisoft", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 31, 
        name: "Assassin’s Creed The Ezio Collection", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/header.jpg",
        description: {
            intro: "Revive la historia completa del legendario Ezio Auditore da Firenze.",
            features: [
                "Incluye las campañas de Assassin's Creed II, Brotherhood y Revelations.",
                "Gráficos remasterizados para PS4.",
                "Incluye todos los contenidos descargables de la historia."
            ],
            synopsis: "Sigue la vida de Ezio desde su juventud en la Italia renacentista hasta convertirse en el Mentor de la Hermandad.",
            specs: { developer: "Virtuos / Ubisoft", publisher: "Ubisoft", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 32, 
        name: "Assassin’s Creed Triple Pack", 
        platform: "Combos", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/242050/header.jpg",
        description: {
            intro: "Trilogía especial que reúne Black Flag, Unity y Syndicate en una sola compra.",
            features: [
                "Tres juegos completos de la franquicia.",
                "Aventuras en el Caribe, la Revolución Francesa y el Londres victoriano.",
                "Cientos de horas de combate y exploración."
            ],
            synopsis: "Disfruta de tres épocas históricas clave junto a Edward Kenway, Arno Dorian y los hermanos Frye.",
            specs: { developer: "Ubisoft", publisher: "Ubisoft", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 33, 
        name: "Assassin’s Creed Unity (Latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289650/header.jpg",
        description: {
            intro: "Vive la Revolución Francesa en el París de 1789 con doblaje al español latino.",
            features: [
                "Parkour rediseñado con movimiento fluido descendente.",
                "Sistemas de personalización visual y de habilidades profunda.",
                "Multitudes masivas en pantalla y recreación a escala 1:1 de Notre Dame."
            ],
            synopsis: "Arno Dorian busca redención en medio del caos revolucionario que azota a la capital francesa.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Co-op" }
        }
    },
    { 
        id: 34, 
        name: "Assassin’s Creed Valhalla", 
        platform: "PS4", 
        price: 26000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
        description: {
            intro: "Conviértete en un vikingo legendario en busca de gloria en las tierras de Inglaterra.",
            features: [
                "Saqueos a monasterios y batallas multitudinarias.",
                "Sistema de combate con empuñadura doble de armas pesadas.",
                "Construcción y desarrollo de tu propio asentamiento clan."
            ],
            synopsis: "Encarna a Eivor y lidera a tu clan desde las heladas costas de Noruega hacia la próspera Inglaterra del siglo IX.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 35, 
        name: "Assassin’s Creed Valhalla (Solo Inglés)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
        description: {
            intro: "Conviértete en un vikingo legendario en la Inglaterra del siglo IX (Audio y textos en inglés).",
            features: [
                "Saqueos a monasterios y batallas multitudinarias.",
                "Sistema de combate con empuñadura doble de armas pesadas.",
                "Construcción y desarrollo de tu propio asentamiento clan."
            ],
            synopsis: "Encarna a Eivor y lidera a tu clan en busca de un nuevo hogar en tierras inglesas.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 36, 
        name: "Assassin’s Creed Valhalla + Watch Dogs Legion", 
        platform: "Combos", 
        price: 125000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
        description: {
            intro: "Combo masivo de Ubisoft que incluye las aventuras de mundo abierto en la Inglaterra vikinga y el Londres distópico.",
            features: [
                "Dos títulos completos de última generación en un solo paquete.",
                "Recluta a cualquier personaje de la ciudad en Watch Dogs Legion.",
                "Conquista e invade territorios sajones en AC Valhalla."
            ],
            synopsis: "Explora la Inglaterra medieval con Eivor y libera a Londres de la opresión corporativa con el grupo DedSec.",
            specs: { developer: "Ubisoft", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 37, 
        name: "Assassin’s Creed Valhalla Deluxe Edition", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
        description: {
            intro: "Edición Deluxe que incluye el juego base más el pack Ultimate con contenidos digitales exclusivos.",
            features: [
                "Pack de equipamiento Berserker con armas y armadura.",
                "Pack de asentamiento y navío Berserker.",
                "Conjunto de runas para mejorar tus armas."
            ],
            synopsis: "Escribe tu saga vikinga con personalizaciones y potenciadores exclusivos desde el inicio.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 38, 
        name: "Assetto Corsa", 
        platform: "PS4", 
        price: 13000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg",
        description: {
            intro: "Simulador de carreras de nueva generación centrado en el realismo conducción extremo.",
            features: [
                "Circuito recreados minuciosamente mediante tecnología escáner láser.",
                "Físicas de neumáticos y comportamiento aerodinámico ultra realistas.",
                "Vehículos oficiales de marcas como Ferrari, Porsche y Lamborghini."
            ],
            synopsis: "Siente la precisión de la conducción profesional en circuitos icónicos de todo el mundo.",
            specs: { developer: "Kunos Simulazioni", publisher: "505 Games", platforms: "PS4", release: "2016", rating: "Everyone", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 39, 
        name: "Assetto Corsa Competizione", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/805550/header.jpg",
        description: {
            intro: "El juego oficial de la GT World Challenge con el máximo estándar de simulación deportiva.",
            features: [
                "Motor gráfico Unreal Engine 4 con renderizado fotorrealista.",
                "Condiciones meteorológicas dinámicas y carreras nocturnas.",
                "Modelado de físicas de vehículos de competición oficial GT3 y GT4."
            ],
            synopsis: "Compite contra pilotos, equipos y coches oficiales recreados con un nivel de detalle sin precedentes.",
            specs: { developer: "Kunos Simulazioni", publisher: "505 Games", platforms: "PS4, PS5", release: "2020", rating: "Everyone", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 40, 
        name: "Assetto Corsa Ultimate Edition (Latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg",
        description: {
            intro: "La versión más completa de Assetto Corsa con todo el contenido descargable lanzado hasta la fecha.",
            features: [
                "Incluye los paquetes Prestige, Porsche Packs, Red Pack y Ready To Race.",
                "Más de 178 vehículos detallados a la perfección.",
                "16 circuitos legendarios con 33 configuraciones distintas."
            ],
            synopsis: "La experiencia de simulación definitiva para los apasionados del automovilismo deportivo.",
            specs: { developer: "Kunos Simulazioni", publisher: "505 Games", platforms: "PS4", release: "2018", rating: "Everyone", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 41, 
        name: "Astro Bot Rescue Mission (Latino)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1184130/header.jpg",
        description: {
            intro: "Aclamada aventura de plataformas desarrollada exclusivamente para jugar con cascos VR.",
            features: [
                "Más de 20 niveles únicos llenos de trampas y enemigos.",
                "Uso innovador del mando DualShock 4 como herramientas en el juego.",
                "Jefes finales gigantescos y rescate de tripulación de robots."
            ],
            synopsis: "Toma el control de ASTRO y embárcate en una misión de rescate masiva a través de múltiples mundos.",
            specs: { developer: "Team ASOBI", publisher: "Sony Interactive Entertainment", platforms: "PS4 (Requiere PS VR)", release: "2018", rating: "Everyone 10+", modes: "Un jugador" }
        }
    },
    { 
        id: 42, 
        name: "Attack On Titan 2 Final Battle", 
        platform: "PS4", 
        price: 41000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/630020/header.jpg",
        description: {
            intro: "La experiencia de acción definitiva basada en el exitoso anime Shingeki no Kyojin.",
            features: [
                "Cubre las temporadas 1 a 3 de la serie de animación.",
                "Nuevas armas como el equipo de maniobras tridimensional antipersonal y lanzas relámpago.",
                "Más de 40 personajes jugables y modo de recuperación de territorio."
            ],
            synopsis: "Enfréntate a los titanes devoradores de hombres usando tu equipo de maniobra tridimensional.",
            specs: { developer: "Omega Force", publisher: "Koei Tecmo", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 43, 
        name: "ATV Drift & Tricks", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/644960/header.jpg",
        description: {
            intro: "Juego de carreras de cuatriciclos enfocado en la velocidad pura, trucos espectaculares y derrapes.",
            features: [
                "8 modos de juego variados (League, Time Trial, Quick Race, entre otros).",
                "Pistas intensas en entornos de nieve, desierto y bosques.",
                "Multijugador local en pantalla dividida y modo online."
            ],
            synopsis: "Sube a tu cuatriciclo, encadena trucos aéreos y cruza la línea de meta en primer lugar.",
            specs: { developer: "Artefacts Studio", publisher: "Microids", platforms: "PS4", release: "2017", rating: "Everyone", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 44, 
        name: "Back 4 Blood – Ultimate Edition (Latino)", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/924970/header.jpg",
        description: {
            intro: "Edición definitiva del shooter cooperativo de zombis creado por los desarrolladores de Left 4 Dead.",
            features: [
                "Pase anual con 3 entregas de contenido descargable.",
                "Pieles de personajes de 'Peligro Inminente' y títulos exclusivos.",
                "Sistema de cartas dinámico para modificar cada partida."
            ],
            synopsis: "Forma equipo con hasta 4 jugadores y extermina las hordas de Infectados para recuperar el planeta.",
            specs: { developer: "Turtle Rock Studios", publisher: "Warner Bros. Games", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Cooperativo Online" }
        }
    },
    { 
        id: 45, 
        name: "Back 4 Blood (Latino)", 
        platform: "Ofertas", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/924970/header.jpg",
        description: {
            intro: "Shooter en primera persona cooperativo lleno de acción y hordas de enemigos mutantes.",
            features: [
                "Campaña cooperativa de 4 jugadores.",
                "Modo PvP competitivo en el que puedes jugar como Infectado.",
                "Alta rejugabilidad gracias al mazo de cartas de corrupción."
            ],
            synopsis: "Ponte en la piel de un Limpiador y combate la epidemia de parásitos mutantes con un variado arsenal.",
            specs: { developer: "Turtle Rock Studios", publisher: "Warner Bros. Games", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Cooperativo Online" }
        }
    },
    { 
        id: 46, 
        name: "Baja Edge of Control HD", 
        platform: "PS4", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/662610/header.jpg",
        description: {
            intro: "Versión remasterizada del clásico de carreras todoterreno en pistas extremas.",
            features: [
                "Más de 160 vehículos entre Trophy Trucks, buggies y 4x4.",
                "Soporte 4K con físicas de suspensión y daños de vehículos realistas.",
                "Más de 1.000 millas de terrenos exigentes y eventos de resistencia."
            ],
            synopsis: "Domina pendientes empinadas, terrenos rocosos y pistas de barro en la competición off-road más salvaje.",
            specs: { developer: "2XL Games / BlitWorks", publisher: "THQ Nordic", platforms: "PS4", release: "2017", rating: "Everyone", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 47, 
        name: "Bassmaster Fishing (Textos en Español)", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1430610/header.jpg",
        description: {
            intro: "El videojuego oficial de la asociación de pesca deportiva de lubina Bassmaster.",
            features: [
                "Compite como o contra 10 pescadores profesionales del circuito.",
                "Licencias oficiales de barcos, cañas, señuelos y equipamiento.",
                "Multijugador masivo con torneos en tiempo real."
            ],
            synopsis: "Siente la emoción de rastrear, enganchar y capturar grandes peces en lagos reales de Estados Unidos.",
            specs: { developer: "Dovetail Games", publisher: "Dovetail Games", platforms: "PS4, PS5", release: "2021", rating: "Everyone", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 48, 
        name: "Bassmaster Fishing 2022", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1430610/header.jpg",
        description: {
            intro: "La experiencia oficial de simulación de pesca deportiva de la Bassmasters.",
            features: [
                "Compite en 8 recintos reales licenciados.",
                "Sistema de seguimiento de peces y físicas de agua realistas.",
                "Modos de juego competitivos e historia profesional."
            ],
            synopsis: "Demuestra tus habilidades de pesca y busca escalar en la clasificación para ser el campeón de la Bassmaster Classic.",
            specs: { developer: "Dovetail Games", publisher: "Dovetail Games", platforms: "PS4, PS5", release: "2021", rating: "Everyone", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 49, 
        name: "Batman Arkham Collection (Latino)", 
        platform: "Combos", 
        price: 9000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg",
        description: {
            intro: "Trilogía definitiva de los juegos de Batman desarrollados por Rocksteady Studios.",
            features: [
                "Incluye Batman: Arkham Asylum, Batman: Arkham City y Batman: Arkham Knight.",
                "Versiones remasterizadas de los dos primeros títulos y el pase de temporada completo para Arkham Knight.",
                "Voces y textos completamente adaptados."
            ],
            synopsis: "Enfréntate a los villanos más icónicos de Gotham en una narrativa oscura y aclamada por la crítica.",
            specs: { developer: "Rocksteady Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 50, 
        name: "Batman Arkham Knight (Latino)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg",
        description: {
            intro: "El épico final de la serie Arkham donde conduces el Batmóvil por toda la ciudad de Gotham.",
            features: [
                "Gotham City totalmente explorable de principio a fin.",
                "Manejo dinámico del Batmóvil en modo persecución y combate.",
                "Sistema de combate FreeFlow mejorado y dispositivos de alta tecnología."
            ],
            synopsis: "Batman se enfrenta a la amenaza definitiva contra la ciudad que juró proteger cuando Espantapájaros regresa para unir a los supervillanos.",
            specs: { developer: "Rocksteady Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 51, 
        name: "Batman Arkham Knight Premium Edition (Latino)", 
        platform: "Ofertas", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg",
        description: {
            intro: "La versión completa de Batman: Arkham Knight que incluye el juego base y el Season Pass.",
            features: [
                "Incluye misiones de la historia con Batgirl, Nightwing, Robin y Red Hood.",
                "Pistas de carreras temáticas y skins clásicos del Batmóvil.",
                "Skins de trajes legendarios para Batman a lo largo de las décadas."
            ],
            synopsis: "Vive el capítulo final de la trilogía Arkham con todo el contenido adicional de la historia y cosméticos lanzados.",
            specs: { developer: "Rocksteady Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 52, 
        name: "Batman Arkham VR (Textos en Español)", 
        platform: "Ofertas", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/501350/header.jpg",
        description: {
            intro: "Siente lo que es ser el Caballero de la Noche en una inmersión completa en realidad virtual.",
            features: [
                "Requiere casco PlayStation VR para jugar.",
                "Usa los artilugios legendarios del héroe con control de movimiento en primera persona.",
                "Investigación detectivesca en la Batcueva y callejones de Gotham."
            ],
            synopsis: "Ponte la máscara de Batman y adéntrate en un misterio psicológico para proteger a tus aliados más cercanos.",
            specs: { developer: "Rocksteady Studios", publisher: "Warner Bros. Games", platforms: "PS4 (Requiere PS VR)", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 53, 
        name: "Batman Return to Arkham", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/header.jpg",
        description: {
            intro: "Las versiones totalmente remasterizadas de Batman: Arkham Asylum y Batman: Arkham City.",
            features: [
                "Gráficos, modelos y entornos mejorados con el motor Unreal Engine 4.",
                "Incluye todos los contenidos descargables y expansiones de ambos títulos.",
                "Combate fluído y mecánicas de sigilo galardonadas."
            ],
            synopsis: "Revive los dos primeros capítulos que revolucionaron los juegos de superhéroes.",
            specs: { developer: "Virtuos / Rocksteady", publisher: "Warner Bros. Games", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 54, 
        name: "Batman The Enemy Within Season Pass (Latino)", 
        platform: "Ofertas", 
        price: 9000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/675260/header.jpg",
        description: {
            intro: "La segunda temporada del galardonado estudio Telltale Games sobre el Caballero Oscuro.",
            features: [
                "Acceso a los 5 episodios de la temporada.",
                "Toma de decisiones impactantes que cambian el origen del Joker.",
                "Narrativa profunda sobre la doble vida de Bruce Wayne."
            ],
            synopsis: "Tanto Batman como Bruce Wayne se ven obligados a asumir papeles precarios en una red de engaños mortales.",
            specs: { developer: "Telltale Games", publisher: "Telltale Games", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 55, 
        name: "Batman The Telltale Series Season Pass (Latino)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/498240/header.jpg",
        description: {
            intro: "Aventura gráfica episódica centrada en la mente fracturada de Bruce Wayne.",
            features: [
                "Pase de temporada completo con los 5 episodios.",
                "Decisiones morales complejas que afectan el destino de Gotham.",
                "Estilo visual de cómic interactivo."
            ],
            synopsis: "Adéntrate en la psique destruida de Bruce Wayne y descubre las drásticas consecuencias de tus decisiones como el Caballero de la Noche.",
            specs: { developer: "Telltale Games", publisher: "Telltale Games", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 56, 
        name: "Battlefield 1", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238840/header.jpg",
        description: {
            intro: "Experimenta los inicios de la guerra total en una ambientación épica de la Primera Guerra Mundial.",
            features: [
                "Combates multijugador masivos de hasta 64 jugadores.",
                "Vehículos de época: tanques, biplanos, dirigibles y acorazados.",
                "Entornos con destrucción dinámica a gran escala."
            ],
            synopsis: "Lucha en batallas épicas que van desde combates urbanos en una ciudad francesa sitiada hasta los desiertos del Arábico.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 57, 
        name: "Battlefield 1 Revolution", 
        platform: "PS4", 
        price: 43000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238840/header.jpg",
        description: {
            intro: "La experiencia completa de Battlefield 1 que incluye el juego base y el Premium Pass.",
            features: [
                "Incluye las 4 expansiones: They Shall Not Pass, In the Name of the Tsar, Turning Tides y Apocalypse.",
                "31 mapas multijugador adicionales, armas y clases elite.",
                "Paquetes de armas y cosméticos temáticos."
            ],
            synopsis: "Únete a una comunidad global y participa en las batallas más grandes de la Gran Guerra con todo el contenido disponible.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 58, 
        name: "Battlefield 2042 (Requiere PS Plus)", 
        platform: "PS4", 
        price: 13000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg",
        description: {
            intro: "Shooter en primera persona centrado totalmente en combates multijugador en un futuro cercano.",
            features: [
                "Mapas enormes con eventos climáticos extremos como tornados de arena.",
                "Sistema de Especialistas con habilidades y artefactos únicos.",
                "Modo Battlefield Portal para crear reglas de batalla personalizadas."
            ],
            synopsis: "Enfréntate en un mundo transformado por el desorden climático y la escasez de recursos.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 59, 
        name: "Battlefield 2042 Latino (Requiere PS Plus)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg",
        description: {
            intro: "Edición con doblaje completo al español latino para una inmersión total en la batalla.",
            features: [
                "Totalmente localizado al español latino.",
                "Arsenal futurista, vehículos aéreos y terrestres avanzados.",
                "Soporte para partidas masivas en mapas de gran escala."
            ],
            synopsis: "Lidera la batalla con comandos de voz e interfaces completamente en español.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 60, 
        name: "Battlefield 4 (Latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/24960/header.jpg",
        description: {
            intro: "Clásico del género shooter militar con destrucción dinámica en tiempo real (Levolution).",
            features: [
                "Totalmente doblado al español latino.",
                "Multijugador masivo de 64 jugadores en mapas gigantescos.",
                "Combate de vehículos aéreos, terrestres y marítimos."
            ],
            synopsis: "Compite en intensos combates de armas combinadas en entornos destructibles de alta escala.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2013", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 61, 
        name: "Battlefield 4 Premium Edition (Latino)", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/24960/header.jpg",
        description: {
            intro: "La experiencia completa de Battlefield 4 con todo su contenido descargable incluido.",
            features: [
                "Incluye los 5 paquetes de mapas de expansión (China Rising, Second Assault, Naval Strike, Dragon's Teeth y Final Stand).",
                "Opciones de personalización exclusivas y Battlepacks semanales.",
                "Prioridad en las colas de los servidores."
            ],
            synopsis: "Domina el campo de batalla definitivo con todas las armas, mapas y vehículos lanzados para Battlefield 4.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 62, 
        name: "Battlefield Hardline", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238880/header.jpg",
        description: {
            intro: "Giro dramático en la franquicia enfocado en la lucha entre policías y criminales.",
            features: [
                "Nuevos modos de juego temáticos como Atraco, Rescate y Puente.",
                "Campaña con estilo de serie policial dramática.",
                "Vehículos rápidos como patrullas, motos de pista y helicópteros de policía."
            ],
            synopsis: "Ponte la placa o únete a los criminales en intensos enfrentamientos urbanos de alta velocidad.",
            specs: { developer: "Visceral Games", publisher: "Electronic Arts", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 63, 
        name: "Battlefield Hardline Deluxe Edition", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238880/header.jpg",
        description: {
            intro: "Edición especial de Battlefield Hardline con contenido táctico y cosmético adicional.",
            features: [
                "Battlepacks Versátil, de Precisión y de Supresión.",
                "Diseños de camuflaje y parches exclusivos.",
                "Mejores armas desbloqueadas desde el inicio."
            ],
            synopsis: "Obtén una ventaja táctica en las calles con equipo y mejoras exclusivas para polis y ladrones.",
            specs: { developer: "Visceral Games", publisher: "Electronic Arts", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 64, 
        name: "Battlefield Hardline Ultimate Edition", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238880/header.jpg",
        description: {
            intro: "La versión definitiva de Battlefield Hardline con todo el pase de temporada y extras.",
            features: [
                "Incluye las 4 expansiones del pase de temporada (Criminal Activity, Robbery, Getaway y Betrayal).",
                "12 Battlepacks Gold adicionales.",
                "Acceso al estatus VIP en partidas."
            ],
            synopsis: "La colección más completa para vivir al máximo los tiroteos y robos de alto riesgo.",
            specs: { developer: "Visceral Games", publisher: "Electronic Arts", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 65, 
        name: "Battlefield V", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238810/header.jpg",
        description: {
            intro: "Un regreso insólito a los orígenes de la saga en la Segunda Guerra Mundial.",
            features: [
                "Modo Historias de Guerra centradas en relatos humanos no contados.",
                "Mecánicas de movimiento avanzadas y construcción de fortificaciones.",
                "Combate multijugador masivo en las Grandes Operaciones."
            ],
            synopsis: "Lleva a tu escuadrón a la victoria en una representación inmersiva y visceral del mayor conflicto de la historia.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 66, 
        name: "Battlefield V Definitive Edition", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238810/header.jpg",
        description: {
            intro: "La edición definitiva de Battlefield V que reúne todo el contenido del servicio en vivo.",
            features: [
                "Todos los contenidos desbloqueables de los años 1 y 2.",
                "Todas las armas, vehículos y el elenco completo de Élites.",
                "Atuendos y camuflajes legendarios para soldados y vehículos."
            ],
            synopsis: "Entra a la Segunda Guerra Mundial con todo el arsenal y cosméticos de todas las temporadas desbloqueados.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 67, 
        name: "Bayonetta (Textos en Español)", 
        platform: "PS4", 
        price: 28000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/460790/header.jpg",
        description: {
            intro: "El aclamado juego de acción frenética y Hack and Slash de PlatinumGames.",
            features: [
                "Combate fluido a 60 FPS remasterizado en 1080p.",
                "Uso de transformaciones, invocaciones infernales y artes de brujería.",
                "Sistema de combos profuso con un ritmo de juego frenético."
            ],
            synopsis: "Encarna a la última superviviente del antiguo clan de las Brujas de Umbra y destruye a las fuerzas celestiales.",
            specs: { developer: "PlatinumGames", publisher: "SEGA", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 68, 
        name: "Bayonetta & Vanquish 10th Anniversary Bundle", 
        platform: "Ofertas", 
        price: 9720, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/460790/header.jpg",
        description: {
            intro: "Paquete aniversario que reúne dos de los mejores títulos de acción de PlatinumGames.",
            features: [
                "Incluye los juegos Bayonetta y Vanquish remasterizados en 4K/60fps.",
                "Mezcla perfecta entre Hack and Slash y Third Person Shooter hipercinético.",
                "Edición conmemorativa del 10° aniversario."
            ],
            synopsis: "Controla el tiempo como la Bruja Bayonetta y desata la máxima velocidad táctica como Sam Gideon en Vanquish.",
            specs: { developer: "PlatinumGames", publisher: "SEGA", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 69, 
        name: "Bee Simulator (Agotado)", 
        platform: "PS4", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/914750/header.jpg",
        description: {
            intro: "Aventura familiar donde exploras el mundo desde la perspectiva de una abeja melífera.",
            features: [
                "Explora un entorno inspirado en Central Park.",
                "Modo historia, exploración libre y minijuegos educativos.",
                "Modos multijugador cooperativo y competitivo en pantalla dividida."
            ],
            synopsis: "Compite en carreras, recolecta polen y defiende a tu colmena contra peligrosos avispones y amenazas humanas.",
            specs: { developer: "Varsav Game Studios", publisher: "Nacon", platforms: "PS4", release: "2019", rating: "Everyone", modes: "Un jugador / Multijugador local" }
        }
    },
    { 
        id: 70, 
        name: "Bendy and the Ink Machine (Latino)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/673270/header.jpg",
        description: {
            intro: "Juego de acción y terror en primera persona ambientado en un estudio de animación abandonado.",
            features: [
                "Atmósfera perturbadora basada en dibujos animados clásicos de los años 30.",
                "Mezcla de resolución de rompecabezas, combate y sigilo.",
                "Los 5 capítulos completos incluidos."
            ],
            synopsis: "Explora las profundidades oscuras de Joey Drew Studios y escapa de las pesadillas de tinta que cobraron vida.",
            specs: { developer: "Kindly Beast", publisher: "Rooster Teeth Games", platforms: "PS4", release: "2018", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 71, 
        name: "Big Rumble Boxing Creed Champions (Textos en Español)", 
        platform: "PS4", 
        price: 13000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1271220/header.jpg",
        description: {
            intro: "Juego de boxeo estilo arcade ambientado en el universo de las películas de Rocky y Creed.",
            features: [
                "20 personajes icónicos como Rocky Balboa, Adonis Creed y Ivan Drago.",
                "Controles accesibles con combos y remates espectaculares.",
                "Minijuegos de entrenamiento estilo montaje cinematográfico."
            ],
            synopsis: "Sube al cuadrilátero, entrena duro y combate contra las mayores leyendas del boxeo cinematográfico.",
            specs: { developer: "Survios", publisher: "Survios / Koch Media", platforms: "PS4", release: "2021", rating: "Teen", modes: "Un jugador / Multijugador local" }
        }
    },
    { 
        id: 72, 
        name: "Biomutant", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/598700/header.jpg",
        description: {
            intro: "Un RPG de fábula wuxia posapocalíptico de mundo abierto con un sistema de combate de artes marciales único.",
            features: [
                "Mezcla combate cuerpo a cuerpo, disparos y habilidades mutantes.",
                "Recodifica tu estructura genética para cambiar tu apariencia y habilidades.",
                "Sistema de elaboración de armas extremadamente completo y variado."
            ],
            synopsis: "Explora un mundo azotado por una plaga y decide el destino de las tribus divididas y del Árbol de la Vida.",
            specs: { developer: "Experiment 101", publisher: "THQ Nordic", platforms: "PS4, PS5", release: "2021", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 73, 
        name: "Black Clover Quartet Knights (Textos en Español)", 
        platform: "PS4", 
        price: 69000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/714080/header.jpg",
        description: {
            intro: "Juego de combate táctico de 4 contra 4 basado en la popular serie de manga y anime.",
            features: [
                "Combates mágicos en tercera persona de ritmo rápido.",
                "Crea escuadrones equilibrados con roles de Ataque, Defensa, Apoyo y Curación.",
                "Historia original centrada en los miembros del buey negro."
            ],
            synopsis: "Únete a Asta y sus compañeros caballeros mágicos en una batalla para proteger el Reino del Trébol.",
            specs: { developer: "ILCA / Bandai Namco", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2018", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 74, 
        name: "Blair Witch (Textos en Español)", 
        platform: "PS4", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1092660/header.jpg",
        description: {
            intro: "Juego de terror psicológico en primera persona basado en la saga cinematográfica de la Bruja de Blair.",
            features: [
                "Acompañado por tu fiel perro cazador, Bullet, que te ayuda a rastrear e investigar.",
                "Uso de videocámara para manipular el tiempo y resolver acertijos.",
                "Atmósfera claustrofóbica en el misterioso bosque de Black Hills."
            ],
            synopsis: "Un antiguo policía se une a la búsqueda de un niño desaparecido en un bosque embrujado donde sus propios demonios del pasado cobran vida.",
            specs: { developer: "Bloober Team", publisher: "Bloober Team", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 75, 
        name: "Blasphemous", 
        platform: "PS4", 
        price: 7500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/774360/header.jpg",
        description: {
            intro: "Aclamado juego de acción y plataformas estilo Metroidvania ambientado en un mundo de pesadilla inspirado en la imaginería religiosa española.",
            features: [
                "Combates brutales y exigentes con ejecuciones espectaculares.",
                "Exploración no lineal llena de secretos y folclore oscuro.",
                "Gráficos Pixel Art detallados y dirección artística deslumbrante."
            ],
            synopsis: "Encarna al Penitente y sobrevive al ciclo interminable de muerte y resurrección para liberar al mundo de 'El Milagro'.",
            specs: { developer: "The Game Kitchen", publisher: "Team17", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 76, 
        name: "Blasphemous + Blasphemous 2 (Textos en Español)", 
        platform: "Ofertas", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1956740/header.jpg",
        description: {
            intro: "Combo imperdible que reúne las dos entregas de la brutal saga metroidvania Blasphemous.",
            features: [
                "Ambos juegos completos con todas sus actualizaciones.",
                "Nuevas armas, combos y habilidades de movilidad ampliadas en la secuela.",
                "Narrativa profunda inspirada en la iconografía del barroco y el folclore."
            ],
            synopsis: "Continúa el viaje del Penitente a través de tierras siniestras combatiendo monstruosidades y desentrañando profecías.",
            specs: { developer: "The Game Kitchen", publisher: "Team17", platforms: "PS4", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 77, 
        name: "Blasphemous 2 (Textos en Español)", 
        platform: "Ofertas", 
        price: 32000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1956740/header.jpg",
        description: {
            intro: "La esperada secuela del castigador metroidvania que expande todas sus mecánicas y diseño de niveles.",
            features: [
                "3 armas únicas seleccionables con árboles de habilidades propios.",
                "Mayor versatilidad en las plataformas y movilidad del personaje.",
                "Enfrentamientos memorables contra jefes brutales e imponentes."
            ],
            synopsis: "El Penitente despierta en una tierra extraña e inexplorada para detener el nacimiento de un nuevo Niño del Milagro.",
            specs: { developer: "The Game Kitchen", publisher: "Team17", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 78, 
        name: "BLEACH Rebirth of Souls (Textos en Español)", 
        platform: "Ofertas", 
        price: 45000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1689620/header.jpg",
        description: {
            intro: "Juego de lucha en 3D basado en la legendaria franquicia de manga y anime Bleach.",
            features: [
                "Desata transformaciones icónicas como el Shikai y el Bankai.",
                "Mecánicas de combate estratégicas basadas en el control de espadas y reishi.",
                "Elenco masivo de personajes con sus voces originales."
            ],
            synopsis: "Despierta la espada que llevas dentro y cambia tu destino en apasionantes duelos de Shinigamis.",
            specs: { developer: "Tamsoft", publisher: "Bandai Namco Entertainment", platforms: "PS4, PS5", release: "2025", rating: "Teen", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 79, 
        name: "Bloodborne", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg",
        description: {
            intro: "El aclamado RPG de acción gótico y cósmico creado por Hidetaka Miyazaki y FromSoftware.",
            features: [
                "Combate agresivo y veloz basado en esquives y parrys con armas de fuego.",
                "Armas con transformaciones dinámicas (Truco).",
                "Atmósfera opresiva inspirada en la arquitectura victoriana y el terror lovecraftiano."
            ],
            synopsis: "Viaja a la maldita ciudad de Yharnam y descubre sus horribles secretos mientras buscas la Sangre Pale."
        },
        specs: { developer: "FromSoftware", publisher: "Sony Computer Entertainment", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
    },
    { 
        id: 80, 
        name: "Bloodborne Game of the Year Edition", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg",
        description: {
            intro: "La experiencia completa de Bloodborne que incluye la aclamada expansión 'The Old Hunters'.",
            features: [
                "Incluye el DLC The Old Hunters con nuevos jefes, zonas y armas.",
                "Adéntrate en la pesadilla de los cazadores de antaño.",
                "Desbloquea atuendos legendarios y hechizos de los antiguos sabios."
            ],
            synopsis: "Explora la pesadilla pasada de Yharnam y enfréntate a las aberraciones más letales jamás creadas por FromSoftware.",
            specs: { developer: "FromSoftware", publisher: "Sony Computer Entertainment", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 81, 
        name: "Borderlands 2 VR", 
        platform: "Ofertas", 
        price: 57000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/991260/header.jpg",
        description: {
            intro: "El icónico shooter looter adaptado por completo para la Realidad Virtual de PlayStation.",
            features: [
                "Requiere casco PlayStation VR.",
                "Manejo de armas virtual y movimiento inmersivo en primera persona.",
                "Nuevas mecánicas BAMF (Bad Ass Mega Fun) como desacelerar el tiempo."
            ],
            synopsis: "Conviértete en un Buscador de la Cámara cara a cara en las tierras salvajes de Pandora.",
            specs: { developer: "Gearbox Software", publisher: "2K Games", platforms: "PS4 (Requiere PS VR)", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 82, 
        name: "Borderlands 3", 
        platform: "PS4", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
        description: {
            intro: "El rey del genero Looter Shooter vuelve con trillones de armas y una aventura interplanetaria.",
            features: [
                "4 nuevos Buscadores de la Cámara con habilidades de acción personalizables.",
                "Explora nuevos mundos más allá de Pandora.",
                "Gunplay perfeccionado con mecánicas de deslice y escalada."
            ],
            synopsis: "Detén a los siameses Calypso antes de que se apoderen del poder supremo de las Cámaras galácticas.",
            specs: { developer: "Gearbox Software", publisher: "2K Games", platforms: "PS4, PS5", release: "2019", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online y Local" }
        }
    },
    { 
        id: 83, 
        name: "Borderlands 3 Next Level Edition", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
        description: {
            intro: "Edición especial que incluye el juego base y contenido cosmético multicultural exclusivo.",
            features: [
                "Incluye los packs cosméticos 'Multiverse Final Form' para los 4 héroes.",
                "Optimizado con mejoras visuales para consolas.",
                "Caos de disparos y saqueo sin límites."
            ],
            synopsis: "Luce el aspecto definitivo de los Buscadores de la Cámara mientras salvas a la galaxia del culto de los Calypso.",
            specs: { developer: "Gearbox Software", publisher: "2K Games", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 84, 
        name: "Borderlands 3 Super Deluxe Edition", 
        platform: "Ofertas", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/397540/header.jpg",
        description: {
            intro: "La versión definitiva de la aventura intergaláctica que incluye el Season Pass con 4 expansiones de campaña.",
            features: [
                "Incluye los DLCs de campaña de Moxxi, Guns, Love, and Tentacles, Bounty of Blood y Psycho Krieg.",
                "Packs de skins, cabezas y modificadores de botín de la Deluxe Edition.",
                "Trillones de armas y acción desenfrenada en cooperativo."
            ],
            synopsis: "Disfruta de la experiencia completa de Borderlands 3 con todas las aventuras y contenidos adicionales lanzados.",
            specs: { developer: "Gearbox Software", publisher: "2K Games", platforms: "PS4, PS5", release: "2019", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online y Local" }
        }
    },
    { 
        id: 85, 
        name: "Borderlands: Game of the Year Edition", 
        platform: "Ofertas", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/729040/header.jpg",
        description: {
            intro: "El clásico shooter looter original totalmente remasterizado en 4K y con mejoras en la calidad de vida.",
            features: [
                "Visuales mejorados, modelados actualizados y minimapa en pantalla.",
                "Incluye las 4 expansiones de contenido descargable originales.",
                "Soporte para multijugador cooperativo de hasta 4 jugadores."
            ],
            synopsis: "Vuelve al desolado planeta de Pandora para buscar la legendaria Cámara en la entrega que dio origen al género.",
            specs: { developer: "Gearbox Software", publisher: "2K Games", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online y Local" }
        }
    },
    { 
        id: 86, 
        name: "Bramble the Mountain King (Textos en Español)", 
        platform: "PS4", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623940/header.jpg",
        description: {
            intro: "Una sombría aventura cinematográfica de plataformas inspirada en los cuentos de hadas nórdicos.",
            features: [
                "Explora entornos hermosos pero mortales llenos de criaturas del folclore escandinavo.",
                "Enfréntate a temibles jefes gigantescos en combates de puzle y precisión.",
                "Narrativa conmovedora sobre la valentía de un niño para rescatar a su hermana."
            ],
            synopsis: "Encarna a Olle y embárcate en una peligrosa travesía para rescatar a tu hermana secuestrada por un horripilante troll.",
            specs: { developer: "Dimfrost Studio", publisher: "Merge Games", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 87, 
        name: "Brawlout", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/263720/header.jpg",
        description: {
            intro: "Juego de lucha y plataformas veloz centrado en el combate competitivo local y online.",
            features: [
                "Personajes invitados icónicos como el luchador de Hyper Light Drifter y Guacamelee!.",
                "Sin agarres ni escudos: enfocado en ataques rápidos y combos aéreos.",
                "Modos competitivos con partidas clasificatorias y torneos."
            ],
            synopsis: "Domina el medidor de furia, desata ataques especiales y saca a tus oponentes fuera del escenario.",
            specs: { developer: "Angry Mob Games", publisher: "Angry Mob Games", platforms: "PS4", release: "2018", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 88, 
        name: "Bully (Solo Inglés)", 
        platform: "Ofertas", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12200/header.jpg",
        description: {
            intro: "El aclamado título de Rockstar Games remasterizado para PS4 sobre la vida en un internado de secundaria.",
            features: [
                "Controla a Jimmy Hopkins mientras navega la jerarquía escolar de Bullworth Academy.",
                "Asiste a clases, realiza bromas y defiéndete de matones.",
                "Mundo abierto lleno de minijuegos, misiones secundarias y vehículos como bicicletas y patinetas."
            ],
            synopsis: "Sobrevive al año escolar más caótico defendiendo a los débiles y subiendo en el escalafón del colegio.",
            specs: { developer: "Rockstar Vancouver", publisher: "Rockstar Games", platforms: "PS4", release: "2016", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 89, 
        name: "Burnout Paradise Remastered", 
        platform: "PS4", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238080/header.jpg",
        description: {
            intro: "El clásico juego de carreras en mundo abierto con choque y destrucción totalmente remasterizado.",
            features: [
                "Incluye todos los packs de contenido descargable originales, incluyendo Big Surf Island.",
                "Resolución optimizada a 60 FPS fluidos.",
                "Mundo abierto en Paradise City con acrobacias y eventos de velocidad instantáneos."
            ],
            synopsis: "Haz saltos espectaculares, causa los choques más destructivos y domina las calles de Paradise City.",
            specs: { developer: "Criterion Games", publisher: "Electronic Arts", platforms: "PS4", release: "2018", rating: "Everyone 10+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 90, 
        name: "Bus Driver Simulator", 
        platform: "Ofertas", 
        price: 22000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/679140/header.jpg",
        description: {
            intro: "Simulador de transporte de pasajeros en autobús a través de rutas urbanas reales.",
            features: [
                "Conduce siguiendo itinerarios y horarios estrictos en la ciudad.",
                "Físicas de conducción realistas y condiciones climáticas cambiantes.",
                "Variedad de autobuses para comprar, personalizar y mantener."
            ],
            synopsis: "Demuestra tu puntualidad y paciencia al volante transportando a los pasajeros sanos y salvos a sus destinos.",
            specs: { developer: "KishMish Games", publisher: "Ultimate Games", platforms: "PS4", release: "2020", rating: "Everyone", modes: "Un jugador" }
        }
    },
    { 
        id: 91, 
        name: "Bus Simulator 21 Next Stop (Latino)", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976590/header.jpg",
        description: {
            intro: "La versión expandida y definitiva del popular juego de gestión y conducción de autobuses.",
            features: [
                "Incluye la gran actualización Next Stop con nuevos mapas, misiones y mejoras de IA.",
                "30 autobuses con licencia oficial de marcas como Volvo, Alexander Dennis y Mercedes-Benz.",
                "Modo carrera completo y gestión avanzada de flotas de transporte."
            ],
            synopsis: "Crea tu propia empresa de autobuses y conduce por las calles de dos ciudades masivas en EE. UU. y Europa.",
            specs: { developer: "stillalive studios", publisher: "astragon Entertainment", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 92, 
        name: "Bus Simulator Driver 2024 City Zone (Solo Inglés)", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976590/header.jpg",
        description: {
            intro: "Simulador enfocado en la navegación y control de tráfico urbano en zonas concurridas.",
            features: [
                "Rutas desafiantes a través de distritos urbanos con tráfico denso.",
                "Controles accesibles enfocados en la maniobrabilidad de vehículos pesados.",
                "Diferentes tipos de autobuses modernos."
            ],
            synopsis: "Toma el volante de autobuses urbanos y supera los desafíos de tráfico diario en la zona metropolitana.",
            specs: { developer: "Voxel Games", publisher: "Voxel Games", platforms: "PS4", release: "2024", rating: "Everyone", modes: "Un jugador" }
        }
    },
    { 
        id: 93, 
        name: "Bus Simulator PS4", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481570/header.jpg",
        description: {
            intro: "Experimenta la vida cotidiana de un conductor de autobuses en una zona urbana espaciosa y libremente explorable.",
            features: [
                "8 autobuses licenciados de marcas reconocidas como MAN y Mercedes-Benz.",
                "Planifica rutas, compra nuevos vehículos y gestiona los horarios de tu personal.",
                "Modo multijugador para coordinar rutas con amigos."
            ],
            synopsis: "Transporta a tus pasajeros de forma segura y puntual en una ciudad llena de eventos de tráfico reales.",
            specs: { developer: "stillalive studios", publisher: "astragon Entertainment", platforms: "PS4", release: "2019", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 94, 
        name: "Cake Bash", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/971690/header.jpg",
        description: {
            intro: "Un caótico y divertido party game donde pequeños pasteles luchan entre sí para ser el más delicioso.",
            features: [
                "Minijuegos coloridos y variados: desde cubrirte de golosinas hasta lanzar frutas.",
                "Combates divertidos de hasta 4 jugadores.",
                "Variedad de postres personalizables con toppings y cosméticos."
            ],
            synopsis: "Pelea en escenarios de repostería y sal victorioso como el pastel dulce más apetecible de la vitrina.",
            specs: { developer: "High Motion Games", publisher: "Coatsink", platforms: "PS4", release: "2020", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 95, 
        name: "Call of Duty Advanced Warfare Digital Gold Edition", 
        platform: "PS4", 
        price: 27000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209650/header.jpg",
        description: {
            intro: "El shooter militar futurista que introdujo los exoesqueletos y el movimiento vertical a la saga Call of Duty.",
            features: [
                "Incluye el paquete de contenido DLC Havoc y el mapa multijugador Atlas Gorge.",
                "Campaña cinematográfica protagonizada por Kevin Spacey.",
                "Modo Exo Zombis cooperativo."
            ],
            synopsis: "Utiliza exoesqueletos de última tecnología en los campos de batalla del futuro para combatir a una corporación militar privada.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 96, 
        name: "Call of Duty Advanced Warfare Digital Pro Edition (Day Zero)", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209650/header.jpg",
        description: {
            intro: "La versión más completa de Advanced Warfare que incluye el Season Pass y recompensas de la edición Day Zero.",
            features: [
                "Incluye el Pase de Temporada con los 4 paquetes de mapas y contenido Exo Zombis.",
                "Armas y exoesqueleto de personalización exclusiva Day Zero.",
                "Gargantas de suministros avanzadas para el modo multijugador."
            ],
            synopsis: "Vive la guerra del futuro con acceso a todo el ecosistema de mapas, exoesqueletos y arsenales avanzados.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 97, 
        name: "Call of Duty Black Ops", 
        platform: "PS4", 
        price: 35000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/42700/header.jpg",
        description: {
            intro: "El legendario shooter ambientado en la Guerra Fría que dio inicio a una de las sagas más exitosas.",
            features: [
                "Campaña de infiltración centrada en operaciones encubiertas y los misteriosos números de Alex Mason.",
                "El mítico modo Zombis en los mapas clásicos Kino Der Toten y Five.",
                "Multijugador emblemático con contratos y partidas de apuestas."
            ],
            synopsis: "Infíltrate tras las líneas enemigas durante la Guerra Fría y descubre la conspiración oculta tras los números.",
            specs: { developer: "Treyarch", publisher: "Activision", platforms: "PS4", release: "2010", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 98, 
        name: "Call of Duty Black Ops 2 (Latino)", 
        platform: "PS4", 
        price: 35000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/202970/header.jpg",
        description: {
            intro: "Una de las entregas más aclamadas de la saga que abarca dos épocas de tiempo conectadas.",
            features: [
                "Doblaje completo en español latino.",
                "Campaña con decisiones y múltiples finales en una Segunda Guerra Fría en el año 2025.",
                "Modo Zombis expandido con el modo Tranzit y mapas interconectados."
            ],
            synopsis: "Enfréntate al terrorista Raúl Menéndez en una historia narrativa branched que abarca desde los años 80 hasta el futuro cercano.",
            specs: { developer: "Treyarch", publisher: "Activision", platforms: "PS4", release: "2012", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 99, 
        name: "Call of Duty Black Ops 3 Zombies Chronicles Edition (Solo Inglés)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg",
        description: {
            intro: "Edición definitiva del shooter futurista que incluye la colección completa de mapas de Zombis remasterizados.",
            features: [
                "Incluye el paquete Zombies Chronicles con 8 mapas clásicos remasterizados en alta definición.",
                "Combate multijugador futurista con impulsos de salto e interacción con muros.",
                "Campaña cooperativa de hasta 4 jugadores."
            ],
            synopsis: "Sobrevive a las hordas de no muertos en los escenarios más memorables de la historia de Call of Duty Zombies.",
            specs: { developer: "Treyarch", publisher: "Activision", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 100, 
        name: "Call of Duty Black Ops 4 (Solo Inglés, Requiere PS Plus)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg",
        description: {
            intro: "Entrega 100% enfocada en experiencias multijugador, introduciendo el célebre battle royale Blackout.",
            features: [
                "El battle royale 'Blackout' en el mapa más grande creado por Treyarch.",
                "3 experiencias completas de Zombis desde el primer día (IX, Voyage of Despair y Blood of the Dead).",
                "Combate táctico multijugador sin regeneración automática de salud."
            ],
            synopsis: "Compite online en modos multijugador fluidos, combates de supervivencia zombi o la experiencia battle royale definitiva.",
            specs: { developer: "Treyarch", publisher: "Activision", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 101, 
        name: "Call of Duty Black Ops 6 (Latino, Requiere PS Plus)", 
        platform: "PS4", 
        price: 35000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        description: {
            intro: "Un thriller de acción e intriga ambientado a principios de los noventa tras el fin de la Guerra Fría.",
            features: [
                "Sistema de movimiento Omnidireccional que permite correr, deslizarse y tirarse en cualquier dirección.",
                "Regreso del sistema clásico de Zombis por rondas.",
                "Voces y textos completamente doblados al español latino."
            ],
            synopsis: "Infíltrate en operaciones encubiertas en una época de transición geopolítica global y traiciones en el gobierno.",
            specs: { developer: "Treyarch / Raven Software", publisher: "Activision", platforms: "PS4, PS5", release: "2024", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 102, 
        name: "Call of Duty Black Ops 7 (Latino, Requiere PS Plus)", 
        platform: "PS4", 
        price: 40000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        description: {
            intro: "La siguiente evolución de la franquicia Black Ops con intensas operaciones globales y tecnología militar de punta.",
            features: [
                "Localización completa en español latino.",
                "Multijugador de última generación con mapas dinámicos.",
                "Nuevas campañas cooperativas de Zombis y modos competitivos."
            ],
            synopsis: "Despliega a tu escuadrón en escenarios de combate militar de alto riesgo y domina el campo de batalla táctico.",
            specs: { developer: "Treyarch", publisher: "Activision", platforms: "PS4, PS5", release: "2025", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 103, 
        name: "Call of Duty Black Ops Cold War (Latino)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        description: {
            intro: "Secuela directa del Call of Duty: Black Ops original ambientada a principios de la década de 1980.",
            features: [
                "Campaña donde te encuentras con figuras históricas como Ronald Reagan.",
                "Modo Zombis 'Dark Aether' con progreso compartido.",
                "Totalmente doblado al español latino."
            ],
            synopsis: "Persigue a la misteriosa figura Perseus en una conspiración mundial para desestabilizar el equilibrio de poder global.",
            specs: { developer: "Treyarch / Raven Software", publisher: "Activision", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 104, 
        name: "Call of Duty Black Ops PS5", 
        platform: "PS4", 
        price: 35000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        description: {
            intro: "Edición optimizada para consolas de última generación con tiempos de carga ultrarrápidos y gatillos adaptativos.",
            features: [
                "Gráficos mejorados con soporte para altas tasas de refresco de fotogramas.",
                "Retroalimentación háptica en disparos y explosiones.",
                "Acceso a modos multijugador de generación mixta."
            ],
            synopsis: "Disfruta de la acción frenética de la saga Black Ops con el rendimiento técnico y la fidelidad de nueva generación.",
            specs: { developer: "Treyarch", publisher: "Activision", platforms: "PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 105, 
        name: "Call of Duty Ghosts (Latino)", 
        platform: "PS4", 
        price: 20000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209160/header.jpg",
        description: {
            intro: "Un giro innovador en la saga donde encarnas a una fuerza de operaciones especiales descompuesta llamada 'Ghosts'.",
            features: [
                "Campaña en un Estados Unidos devastado y al borde del colapso.",
                "Modo cooperativo Extinción contra hordas alienígenas.",
                "Doblaje completo en español latino."
            ],
            synopsis: "Combate contra una superpotencia emergente conocida como la Federación para defender lo que queda del país.",
            specs: { developer: "Infinity Ward", publisher: "Activision", platforms: "PS4", release: "2013", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 106, 
        name: "Call of Duty Ghosts Gold Edition (Latino)", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209160/header.jpg",
        description: {
            intro: "Edición especial de Call of Duty Ghosts que incluye el primer paquete de mapas descargable.",
            features: [
                "Incluye el DLC Onslaught con 4 mapas multijugador y el primer episodio de Extinción.",
                "Arma adicional para multijugador: fusil de asalto/francotirador Maverick.",
                "Doblaje al español latino."
            ],
            synopsis: "Obtén el juego base junto con mapas y contenidos adicionales para la experiencia de supervivencia Extinción.",
            specs: { developer: "Infinity Ward", publisher: "Activision", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 107, 
        name: "Call of Duty Infinite Warfare (Solo Inglés)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292730/header.jpg",
        description: {
            intro: "Shooter militar de ciencia ficción con espectaculares combates en el espacio y en gravedad cero.",
            features: [
                "Campaña con combates a bordo del caza espacial Jackal y batallas interplanetarias.",
                "Modo Zombis en Spaceland con estética retro de los años 80.",
                "Multijugador con trajes de combate personalizables."
            ],
            synopsis: "Lidera a las fuerzas de la Alianza Espacial de las Naciones contra el Frente de Defensa del Asentamiento.",
            specs: { developer: "Infinity Ward", publisher: "Activision", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 108, 
        name: "Call of Duty Modern Warfare 2 (Latino)", 
        platform: "PS4", 
        price: 28000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        description: {
            intro: "La secuela del reinicio de 2019 que trae de regreso al icónico equipo de la Fuerza de Tareas 141.",
            features: [
                "Doblaje completo al español latino.",
                "Campaña global con mecánicas de sigilo, vehículos y combate avanzado.",
                "Multijugador renovado y modo cooperativo Operations."
            ],
            synopsis: "Únete al capitán Price, Ghost y al resto del equipo para desactivar una amenaza de misiles a nivel mundial.",
            specs: { developer: "Infinity Ward", publisher: "Activision", platforms: "PS4, PS5", release: "2022", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 109, 
        name: "Call of Duty Modern Warfare 2 Campaign Remastered", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/10180/header.jpg",
        description: {
            intro: "La legendaria campaña de combate de 2009 completamente remasterizada en alta definición.",
            features: [
                "Texturas mejoradas, renderizado basado en física e iluminación de alta resolución.",
                "Incluye misiones históricas como 'No Russian' y el asalto al Gulag.",
                "Incluye lote cosmético de Ghost para Warzone y MW."
            ],
            synopsis: "Revive la intensa y aclamada historia para un jugador que cambió la industria de los videojuegos.",
            specs: { developer: "Beenox / Infinity Ward", publisher: "Activision", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 110, 
        name: "Call of Duty Modern Warfare 3 (Latino)", 
        platform: "PS4", 
        price: 30000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        description: {
            intro: "Secuela directa de Modern Warfare II con una campaña táctica y el regreso de mapas clásicos.",
            features: [
                "Localización completa en español latino.",
                "Todos los 16 mapas multijugador del Modern Warfare 2 (2009) original modernizados.",
                "Experiencia Zombis de mundo abierto por primera vez en el universo Modern Warfare."
            ],
            synopsis: "El capitán Price y la Fuerza de Tareas 141 se enfrentan a la amenaza definitiva: el ultranacionalista Vladimir Makarov.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 111, 
        name: "Call of Duty Modern Warfare Remastered", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/393100/header.jpg",
        description: {
            intro: "Uno de los juegos más aclamados de la historia, rehecho para una nueva generación.",
            features: [
                "Gráficos HD mejorados, iluminación mejorada y animaciones actualizadas.",
                "Campaña completa con misiones icónicas como 'All Ghillied Up'.",
                "Multijugador clásico con el sistema de rachas original."
            ],
            synopsis: "Viaja por todo el mundo como el sargento 'Soap' MacTavish para combatir a un grupo separatista villano.",
            specs: { developer: "Raven Software", publisher: "Activision", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 112, 
        name: "Call of Duty Vanguard", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1985810/header.jpg",
        description: {
            intro: "Sumérgete en el nacimiento de las fuerzas especiales en la Segunda Guerra Mundial.",
            features: [
                "Campaña cinematográfica a través de 4 frentes de guerra principales.",
                "Modo multijugador con combate de armas realista y entornos destructibles.",
                "Integración del modo Zombis desarrollado por Treyarch."
            ],
            synopsis: "Cambia el curso de la historia liderando al primer grupo de operaciones especiales de la historia.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 113, 
        name: "Call of Duty Vanguard (Latino)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1985810/header.jpg",
        description: {
            intro: "Edición localizada al español latino de las batallas globales de la Segunda Guerra Mundial.",
            features: [
                "Totalmente doblado al español latino.",
                "Combates aéreos en el Pacífico, tiroteos en Stalingrado y defensa en el norte de África.",
                "Motor gráfico de última generación impulsado por el motor Modern Warfare."
            ],
            synopsis: "Lucha en los frentes de Europa, el Pacífico y África mientras descubres una conspiración nazi secreta.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 114, 
        name: "Call of Duty WWII (Solo Inglés)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/476600/header.jpg",
        description: {
            intro: "Regreso a las raíces del combate militar tradicional en la Segunda Guerra Mundial.",
            features: [
                "Campaña centrada en la hermandad de la 1.ª División de Infantería.",
                "Multijugador de combate a tierra firme sin saltos dobles ni trajes tácticos.",
                "Modo Zombis Nazis con una atmósfera de terror escalofriante."
            ],
            synopsis: "Desembarca en las playas de Normandía y avanza a través de Europa en las batallas más icónicas de la historia.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 115, 
        name: "Call of Duty WWII Gold Edition (Solo Inglés)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/476600/header.jpg",
        description: {
            intro: "Edición especial que incluye el juego base Call of Duty WWII más su primer paquete DLC.",
            features: [
                "Incluye el DLC Pack 1: The Resistance con mapas multijugador y capítulo de Zombis Nazis.",
                " Contenido de la edición digital de coleccionista y 1100 puntos COD.",
                "Acceso completo a todos los modos multijugador y campaña."
            ],
            synopsis: "Vive la crudeza de la guerra europea con mapas adicionales centrados en los movimientos de resistencia.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador / Multijugador / Cooperativo" }
        }
    },
    { 
        id: 116, 
        name: "Call of the Wild the Angler (Textos en Español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1408610/header.jpg",
        description: {
            intro: "Simulador de pesca en mundo abierto de los creadores de theHunter: Call of the Wild.",
            features: [
                "Explora un vasto mundo natural a pie, en barco o en todoterreno.",
                "Simulación realista de comportamiento de peces con físicas de agua dinámicas.",
                "Modo multijugador cooperativo para pescar con amigos."
            ],
            synopsis: "Encuentra la tranquilidad del entorno natural y conviértete en un maestro de la pesca a tu propio ritmo.",
            specs: { developer: "Expansive Worlds", publisher: "Expansive Worlds", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 117, 
        name: "Captain Tsubasa Rise of New Champions (Textos en Español)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1169040/header.jpg",
        description: {
            intro: "Juego de fútbol arcade lleno de acción basado en la famosa serie de anime Supercampeones.",
            features: [
                "Ejecuta tiro del tigre, tiro con efecto y supertécnicas icónicas.",
                "Modo historia con dos campañas: el torneo de secundaria y la selección juvenil.",
                "Crea tu propio futbolista y personaliza tu estilo de juego."
            ],
            synopsis: "Revive la emoción del anime y lleva a Oliver Atom y a la Selección Japonesa a la victoria mundial.",
            specs: { developer: "Tamsoft", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 118, 
        name: "Captain Tsubasa Rise of New Champions Deluxe Edition (Textos en Español)", 
        platform: "PS4", 
        price: 22000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1169040/header.jpg",
        description: {
            intro: "Edición especial que incluye el juego base junto con el Pase de Caracteres adicional.",
            features: [
                "Incluye el Character Pass con 9 personajes jugables adicionales.",
                "Uniformes exclusivos de edición Deluxe (V-Jump y Campeones).",
                "Textos e interfaz totalmente en español."
            ],
            synopsis: "Amplía tu plantilla de futbolistas legendarios y domina la cancha con nuevas habilidades deslumbrantes.",
            specs: { developer: "Tamsoft", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 119, 
        name: "Captain Tsubasa Rise of New Champions Ultimate Edition (Textos en Español)", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1169040/header.jpg",
        description: {
            intro: "La experiencia definitiva con todo el contenido DLC y pases de temporada lanzados.",
            features: [
                "Incluye Character Pass 1, Character Pass 2 y misiones de historia adicionales.",
                "Conjuntos de equipación legendarios y accesorios únicos.",
                "Elenco completo de selecciones internacionales y rivales."
            ],
            synopsis: "Desata todo el poder del fútbol anime en la versión más completa jamás lanzada.",
            specs: { developer: "Tamsoft", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2021", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 120, 
        name: "Car Mechanic Simulator", 
        platform: "Ofertas", 
        price: 4000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/645630/header.jpg",
        description: {
            intro: "Simulador detallado de reparación, pintura y ajuste de automóviles.",
            features: [
                "Más de 48 autos para desarmar y reparar pieza por pieza.",
                "Encuentra autos clásicos abandonados en graneros y subastas.",
                "Pista de pruebas para evaluar el rendimiento del vehículo."
            ],
            synopsis: "Construye y expande tu propio imperio de talleres mecánicos reparando todo tipo de vehículos.",
            specs: { developer: "Red Dot Games", publisher: "PlayWay", platforms: "PS4", release: "2019", rating: "Everyone", modes: "Un jugador" }
        }
    },
    { 
        id: 121, 
        name: "Car Mechanic Simulator 2021 (Textos en Español)", 
        platform: "Ofertas", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190000/header.jpg",
        description: {
            intro: "La versión mejorada del popular simulador mecánico con gráficos y sistemas técnicos renovados.",
            features: [
                "Más de 72 autos y más de 4000 partes detalladas para trabajar.",
                "Nuevo sistema de fluidos, lavadero de autos y herramientas avanzadas.",
                "Generación infinita de misiones y subastas de vehículos."
            ],
            synopsis: "Ponte al frente de un taller mecánico de alta gama y trabaja minuciosamente en cada componente.",
            specs: { developer: "Red Dot Games", publisher: "PlayWay", platforms: "PS4, PS5", release: "2021", rating: "Everyone", modes: "Un jugador" }
        }
    },
    { 
        id: 122, 
        name: "CARS 3 Driven to Win", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/438900/header.jpg",
        description: {
            intro: "Juego de carreras arcade inspirado en la película Cars 3 de Disney Pixar.",
            features: [
                "Más de 20 personajes personalizables, incluyendo el Rayo McQueen y Jackson Storm.",
                "6 modos de juego como Acrobacias, Takedown y Carreras de Combate.",
                "Pantalla dividida local para jugar con amigos y familia."
            ],
            synopsis: "Enciende tus motores y prepárate para la experiencia de carreras definitiva junto a tus personajes favoritos.",
            specs: { developer: "Avalanche Software", publisher: "WB Games", platforms: "PS4", release: "2017", rating: "Everyone", modes: "Un jugador / Multijugador Local" }
        }
    },
    { 
        id: 123, 
        name: "Cartoon Network Battle Crashers", 
        platform: "Ofertas", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/509500/header.jpg",
        description: {
            intro: "Brawler de desplazamiento lateral que reúne a las estrellas más populares de Cartoon Network.",
            features: [
                "Personajes jugables como Uncle Grandpa, Finn y Jake, Steven Universe y Gumball.",
                "Ataques especiales únicos y habilidades combinables.",
                "Modo cooperativo local para hasta 4 jugadores."
            ],
            synopsis: "Viaja por dimensiones disparatadas para derrotar a las hordas de criaturas malvadas que amenazan el universo.",
            specs: { developer: "Magic Pockets", publisher: "GameMill Entertainment", platforms: "PS4", release: "2016", rating: "Everyone 10+", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 124, 
        name: "CarX Drift Racing Online", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/635260/header.jpg",
        description: {
            intro: "Simulador de drifting enfocado en la física de conducción realista y la personalización extrema.",
            features: [
                "Físicas de derrape detalladas con ajuste fino de presión de neumáticos, suspensión y motor.",
                "Salas multijugador online para hacer driffs en tándem en tiempo real.",
                "Amplia personalización visual y kits de carrocería."
            ],
            synopsis: "Quema neumático y domina el arte del derrape junto a una apasionada comunidad online.",
            specs: { developer: "CarX Technologies", publisher: "CarX Technologies", platforms: "PS4", release: "2019", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 125, 
        name: "Castle Crashers Remastered", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/204360/header.jpg",
        description: {
            intro: "El aclamado hack and slash en 2D remasterizado a 60 FPS con gráficos en alta resolución.",
            features: [
                "Incluye el minijuego multijugador '¡Acomódate en el rebaño!'.",
                "Desbloquea más de 25 personajes y más de 40 armas distintas.",
                "Sistema de subida de nivel y magia para personalizar a tu caballero."
            ],
            synopsis: "Ábrete paso a golpes junto a tus amigos para rescatar a las princesas y defender el reino.",
            specs: { developer: "The Behemoth", publisher: "The Behemoth", platforms: "PS4", release: "2019", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 126, 
        name: "Chivalry 2 (Textos en Español, Requiere PS Plus)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1824220/header.jpg",
        description: {
            intro: "Slash multijugador en primera persona inspirado en las épicas batallas de películas medievales.",
            features: [
                "Batallas masivas de hasta 64 jugadores en mapas con asedios a castillos.",
                "Combate pesado con espadas, hachas, arcos y catapulta.",
                "Gran variedad de clases de guerreros y opciones de personalización."
            ],
            synopsis: "Entra al campo de batalla, choca espadas con tus enemigos y busca la gloria de tu facción.",
            specs: { developer: "Torn Banner Studios", publisher: "Tripwire Interactive", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 127, 
        name: "Choo Choo Charles (Textos en Español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1766780/header.jpg",
        description: {
            intro: "Juego de terror y supervivencia en mundo abierto donde te persigue un tren araña malévolo.",
            features: [
                "Conduce y mejora tu propio tren con blindaje y torretas de disparo.",
                "Explora una isla siniestra completando misiones para los pueblerinos.",
                "Enfréntate cara a cara al monstruoso Charles en un duelo final."
            ],
            synopsis: "Navega por la isla en tu vieja locomotora, junta chatarra para armarte y elimina al demoníaco Choo-Choo Charles.",
            specs: { developer: "Two Star Games", publisher: "Two Star Games", platforms: "PS4, PS5", release: "2023", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 128, 
        name: "Cities Skylines Remastered", 
        platform: "PS4", 
        price: 41000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg",
        description: {
            intro: "La versión optimizada del famoso simulador de construcción y gestión de ciudades.",
            features: [
                "Capacidad para construir en mapas más extensos con hasta 25 casilla habilitadas.",
                "Herramientas de construcción de carreteras y gestión de tráfico mejoradas.",
                "Control de políticas públicas, impuestos y servicios básicos de la ciudad."
            ],
            synopsis: "Pasa de ser un alcalde novato a gestionar una gigantesca metrópolis llena de vida y rascacielos.",
            specs: { developer: "Colossal Order", publisher: "Paradox Interactive", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador" }
        }
    },
    { 
        id: 129, 
        name: "Cobra Kai 2 Dojos Rising (Textos en Español)", 
        platform: "Ofertas", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1741640/header.jpg",
        description: {
            intro: "Juego de lucha beat 'em up basado en la exitosa serie de Netflix.",
            features: [
                "Recluta un equipo de 28 personajes jugables entre Cobra Kai, Eagle Fang y Miyagi-Do.",
                "Compite en el torneo All Valley para asegurar el dominio de tu dojo.",
                "Modo historia inmersivo con voces originales."
            ],
            synopsis: "Elige tu dojo, domina las artes marciales y lleva a tus estudiantes a lo más alto del torneo.",
            specs: { developer: "Flux Games", publisher: "GameMill Entertainment", platforms: "PS4, PS5", release: "2022", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 130, 
        name: "Cobra Kai Collection (Textos en Español)", 
        platform: "PS4", 
        price: 72000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1741640/header.jpg",
        description: {
            intro: "Colección que reúne los dos juegos de acción beat 'em up de Cobra Kai.",
            features: [
                "Incluye Cobra Kai: The Karate Kid Saga Continues y Cobra Kai 2: Dojos Rising.",
                "Explora ambos lados de la historia seleccionando entre los dojos rivales.",
                "Árboles de habilidades extensos y combos de artes marciales deslumbrantes."
            ],
            synopsis: "Experimenta la rivalidad legendaria del karate con este paquete completo de acción callejera y torneos.",
            specs: { developer: "Flux Games", publisher: "GameMill Entertainment", platforms: "PS4", release: "2022", rating: "Teen", modes: "Un jugador / Multijugador" }
        }
    },
    { 
        id: 131, 
        name: "Construction Simulator 3 Console Edition (Textos en Español)", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1654130/header.jpg",
        description: {
            intro: "Simulador de maquinaria pesada ambientado en una idílica ciudad europea.",
            features: [
                "Más de 50 vehículos y máquinas oficiales de marcas como Caterpillar, Liebherr y CASE.",
                "Más de 70 contratos de construcción desafiantes.",
                "Explora un mapa alpino de 10 km² con diferentes zonas y pueblos."
            ],
            synopsis: "Funda tu propia empresa de construcción y toma el control de imponentes grúas, excavadoras y hormigoneras.",
            specs: { developer: "weltenbauer.", publisher: "astragon Entertainment", platforms: "PS4", release: "2020", rating: "Everyone", modes: "Un jugador" }
        }
    },
    { 
        id: 132, 
        name: "Contra Operation Galuga (Textos en Español)", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2235020/header.jpg",
        description: {
            intro: "Reinvención moderna de la clásica saga run-and-gun de los años 80 con gráficos y sonido actualizados.",
            features: [
                "Nuevas mecánicas de juego, personajes jugables y sobrecarga de armas.",
                "Modo historia cooperativo para 2 jugadores y modo arcade para hasta 4 jugadores.",
                "Intensos combates contra jefes gigantescos en niveles de ritmo desenfrenado."
            ],
            synopsis: "Únete a los comandos Bill Rizer y Lance Bean para combatir la amenaza terrorista del grupo Red Falcon en el archipiélago de Galuga.",
            specs: { developer: "WayForward", publisher: "Konami", platforms: "PS4, PS5", release: "2024", rating: "Everyone 10+", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 133, 
        name: "Control", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg",
        description: {
            intro: "Aventura de acción en tercera persona visualmente deslumbrante que combina telequinesis y entornos destructibles.",
            features: [
                "Usa habilidades sobrenaturales como telequinesis, levitación y manipulación de objetos.",
                "Arma de servicio transformable con diferentes modos de disparo.",
                "Mundo cambiante dentro del misterioso edificio de la Casa Inmemorial."
            ],
            synopsis: "Como la nueva Directora de la Agencia Federal de Control, deberás recuperar el mando frente a una corruptora amenaza sobrenatural conocida como el Hiss.",
            specs: { developer: "Remedy Entertainment", publisher: "505 Games", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 134, 
        name: "Control Ultimate Edition", 
        platform: "Ofertas", 
        price: 6000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg",
        description: {
            intro: "La experiencia completa de Control que incluye el juego base junto con todas sus expansiones narrativas.",
            features: [
                "Incluye las dos expansiones oficiales: 'La Fundación' y 'AWE'.",
                "Conexión narrativa directa con el universo de Alan Wake en la expansión AWE.",
                "Incluye modos de juego adicionales como Expediciones y el modo foto."
            ],
            synopsis: "Descubre todos los secretos oscuros de la Agencia Federal de Control y resuelve el misterio tras las anomalías del universo de Remedy.",
            specs: { developer: "Remedy Entertainment", publisher: "505 Games", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 135, 
        name: "Crash Bandicoot 4 It’s About Time", 
        platform: "PS4", 
        price: 31000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1378990/header.jpg",
        description: {
            intro: "La verdadera secuela directa de la trilogía original con mecánicas interdimensionales y diseño clásico de plataformas.",
            features: [
                "Usa las Máscaras Cuánticas para alterar la gravedad, ralentizar el tiempo y cambiar la materia.",
                "Nuevos personajes jugables como Coco, Tawna, Dingodile y el Neo Cortex.",
                "Decenas de niveles, desafíos N. Vertidos y modos competitivos pasándose el control."
            ],
            synopsis: "Crash y Coco deben salvar el multiverso reuniendo las cuatro Máscaras Cuánticas para reparar las grietas espacio-temporales.",
            specs: { developer: "Toys for Bob", publisher: "Activision", platforms: "PS4, PS5", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local" }
        }
    },
    { 
        id: 136, 
        name: "Crash Bandicoot Bundle N Sane Trilogy + Crash Team Racing Nitro-Fueled", 
        platform: "Combos", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/731490/header.jpg",
        description: {
            intro: "Paquete imperdible que incluye los 3 juegos clásicos remasterizados más el aclamado juego de carreras de karts.",
            features: [
                "Incluye Crash Bandicoot, Crash Bandicoot 2: Cortex Strikes Back y Crash Bandicoot 3: Warped.",
                "Incluye Crash Team Racing Nitro-Fueled con modos, personajes y pistas adicionales.",
                "Gráficos HD rehechos desde cero a 60 FPS."
            ],
            synopsis: "La colección perfecta para revivir la época dorada de Crash, combinando plataformas exigentes y carreras frenéticas en grupo.",
            specs: { developer: "Vicarious Visions / Beenox", publisher: "Activision", platforms: "PS4", release: "2019", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 137, 
        name: "Crash Bandicoot Crashiversary Bundle", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1378990/header.jpg",
        description: {
            intro: "El lote definitivo de aniversario con 5 juegos completos de la franquicia del marsupial favorito.",
            features: [
                "Contiene N. Sane Trilogy (3 juegos), CTR Nitro-Fueled y Crash Bandicoot 4: It’s About Time.",
                "Cientos de niveles, aspectos desbloqueables, desafíos de tiempo y modos party.",
                "Incontables horas de diversión para amantes de las plataformas."
            ],
            synopsis: "Celebra la historia completa de Crash Bandicoot con todos los lanzamientos principales remasterizados y modernos.",
            specs: { developer: "Toys for Bob / Beenox / Vicarious Visions", publisher: "Activision", platforms: "PS4", release: "2021", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 138, 
        name: "Crash Bandicoot Quadrilogy Bundle", 
        platform: "PS4", 
        price: 40000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1378990/header.jpg",
        description: {
            intro: "Paquete que reúne la historia principal de cuatro entregas de plataformas en una sola colección.",
            features: [
                "Incluye los 3 remakes de N. Sane Trilogy y la cuarta entrega oficial 'It’s About Time'.",
                "Gráficos modernos en alta resolución y controles optimizados.",
                "Más de 100 niveles llenos de frutas Wumpa, cajas y secretos."
            ],
            synopsis: "Recorre la saga principal de Crash desde su enfrentamiento original con Cortex hasta el choque multiversal.",
            specs: { developer: "Toys for Bob / Vicarious Visions", publisher: "Activision", platforms: "PS4", release: "2021", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local" }
        }
    },
    { 
        id: 139, 
        name: "Crash Team Racing Nitro-Fueled + Spyro Game Bundle", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/999220/header.jpg",
        description: {
            intro: "Combo que reúne las carreras de Crash y las plataformas clásicas del dragón Spyro.",
            features: [
                "Incluye CTR Nitro-Fueled y Spyro Reignited Trilogy (Spyro 1, 2 y 3).",
                "Un total de 4 juegos completos completamente remasterizados.",
                "Soporte para multijugador en carreras y plataformas para un jugador."
            ],
            synopsis: "Disfruta de dos de los iconos más queridos de PlayStation con gráficos renovados y jugabilidad clásica.",
            specs: { developer: "Beenox / Toys for Bob", publisher: "Activision", platforms: "PS4", release: "2019", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 140, 
        name: "Crash Team Rumble (Latino, Requiere PS Plus)", 
        platform: "PS4", 
        price: 20000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1378990/header.jpg",
        description: {
            intro: "Juego competitivo multijugador por equipos de 4v4 ambientado en el universo de Crash Bandicoot.",
            features: [
                "Elige héroes y villanos divididos en roles de Anotador, Cazador o Booster.",
                "Recolecta más frutas Wumpa que el equipo rival mientras capturas reliquias y puntos de control.",
                "Doblaje e interfaz completos en español latino."
            ],
            synopsis: "Une fuerzas en arenas caóticas para recolectar fruta Wumpa y dominar la base enemiga.",
            specs: { developer: "Toys for Bob", publisher: "Activision", platforms: "PS4, PS5", release: "2023", rating: "Everyone 10+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 141, 
        name: "Creed Rise to Glory (Requiere Lentes VR)", 
        platform: "PS4", 
        price: 29000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/801550/header.jpg",
        description: {
            intro: "Simulador de boxeo inmersivo en Realidad Virtual basado en las películas de Creed y Rocky.",
            features: [
                "Requiere PlayStation VR y mandos PS Move.",
                "Tecnología Phantom Melee para simular la fatiga física y el impacto de los golpes.",
                "Modo carrera, entrenamiento con Rocky Balboa y multijugador en línea."
            ],
            synopsis: "Sube al cuadrilátero como Adonis Creed y entrena duro para abrirte paso hasta el título de campeón mundial.",
            specs: { developer: "Survios", publisher: "Survios", platforms: "PS4 (Requiere PS VR)", release: "2018", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 142, 
        name: "Crysis 2 Remastered", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1153640/header.jpg",
        description: {
            intro: "La secuela del revolucionario shooter de ciencia ficción optimizada con gráficos en alta definición.",
            features: [
                "Dominio del Nanosuit 2 con mejoras de blindaje, fuerza y camuflaje óptico.",
                "Ambientado en una ciudad de Nueva York devastada por invasores alienígenas.",
                "Iluminación global mejorada, texturas remasterizadas y rendimiento fluido."
            ],
            synopsis: "Ponte el traje Nanosuit 2 y salva a la humanidad de la aniquilación en una Nueva York convertida en selva urbana.",
            specs: { developer: "Crytek", publisher: "Crytek", platforms: "PS4", release: "2021", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 143, 
        name: "Crysis 3 Remastered", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1153650/header.jpg",
        description: {
            intro: "El capítulo final de la trilogía Crysis remasterizado para las consolas modernas.",
            features: [
                "Usa el arco Depredador táctico para eliminaciones sigilosas a distancia.",
                "Explora la Cúpula de la Libertad de Nueva York con 7 entornos naturales distintos.",
                "Visuales impresionantes optimizados en resolución y tasa de fotogramas."
            ],
            synopsis: "Como Prophet, regresa a la batalla para dar caza al Alpha Ceph y destapar la corrupción de la corporación CELL.",
            specs: { developer: "Crytek", publisher: "Crytek", platforms: "PS4", release: "2021", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 144, 
        name: "Crysis Remastered Trilogy", 
        platform: "PS4", 
        price: 48000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1153620/header.jpg",
        description: {
            intro: "La colección definitiva de acción en primera persona que incluye los remakes de Crysis, Crysis 2 y Crysis 3.",
            features: [
                "Trilogía completa optimizada con gráficos remasterizados y mejor rendimiento.",
                "Uso táctico del icónico Nanosuit para invisibilidad, fuerza y súper velocidad.",
                "Campañas completas para un jugador ambientadas desde islas tropicales hasta la jungla urbana de Nueva York."
            ],
            synopsis: "Domina el combate con tu traje de alta tecnología y salvas a la humanidad a lo largo de tres épicas campañas.",
            specs: { developer: "Crytek", publisher: "Crytek", platforms: "PS4", release: "2021", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 145, 
        name: "Cuphead (Latino)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
        description: {
            intro: "Juego de acción clásico centrado en batallas contra jefes con estética visual inspirada en las caricaturas de 1930.",
            features: [
                "Animación tradicional hecha a mano sobre papel y música de jazz original.",
                "Desafiantes combates contra jefes y niveles tipo run-and-gun.",
                "Modo cooperativo local para 2 jugadores como Cuphead y Mugman."
            ],
            synopsis: "Paga tu deuda con el Diablo derrotando a imponentes jefes a lo largo de coloridos y exigentes mundos.",
            specs: { developer: "Studio MDHR", publisher: "Studio MDHR", platforms: "PS4", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 146, 
        name: "Cuphead & The Delicious Last Course (Latino)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
        description: {
            intro: "El juego base Cuphead junto con la ansiada expansión The Delicious Last Course.",
            features: [
                "Incluye al nuevo personaje jugable: Ms. Chalice con habilidades únicas y salto doble.",
                "Nueva Isla Tintero con una batería de jefes extravagantes y desafiantes.",
                "Nuevas armas, amuleto e historias inéditas en español latino."
            ],
            synopsis: "Acompaña a Cuphead, Mugman y Ms. Chalice en una última aventura culinaria cargada de acción frenética.",
            specs: { developer: "Studio MDHR", publisher: "Studio MDHR", platforms: "PS4", release: "2022", rating: "Everyone 10+", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 147, 
        name: "Cyberpunk 2077 (Textos en Español)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
        description: {
            intro: "RPG de acción y aventura en mundo abierto ambientado en la megalópolis de Night City.",
            features: [
                "Personaliza las cibermodificaciones, el conjunto de habilidades y el estilo de juego de V.",
                "Explora una gigantesca ciudad obsesionada con el poder, la tecnología y las modificaciones corporales.",
                "Toma decisiones duras que moldean el desarrollo de la historia y el mundo a tu alrededor."
            ],
            synopsis: "Encarna a V, un mercenario urbano en busca de un prototipo único de implante que ostenta la clave de la inmortalidad.",
            specs: { developer: "CD PROJEKT RED", publisher: "CD PROJEKT RED", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 148, 
        name: "Dakar 18 (Textos en Español)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/768200/header.jpg",
        description: {
            intro: "Simulación realista del famoso rally raid todoterreno organizado por Amaury Sport Organisation.",
            features: [
                "Enorme mundo abierto realista para navegar utilizando roadbooks oficiales.",
                "Categorías de vehículos oficiales: coches, motos, camiones, quads y UTVs.",
                "Sistema de clima dinámico, ciclo día/noche y simulación de rescates y reparaciones."
            ],
            synopsis: "Ponte a prueba en la carrera de resistencia todoterreno más famosa y dura del planeta.",
            specs: { developer: "Bigmoon Entertainment", publisher: "Deep Silver", platforms: "PS4", release: "2018", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 149, 
        name: "Dakar Desert Rally", 
        platform: "Ofertas", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1839940/header.jpg",
        description: {
            intro: "La experiencia de carreras de rally todoterreno más grande y épica jamás desarrollada.",
            features: [
                "Más de 30 etapas de las carreras del Rally Dakar oficial de 2020, 2021 y 2022.",
                "Soporta tanto simulación hardcore con roadbook como conducción estilo arcade accesible.",
                "Estaciones dinámicas, tormentas de arena, barro y nieve en tiempo real."
            ],
            synopsis: "Siente la velocidad y la competencia extrema a través del desierto en múltiples vehículos con licencia.",
            specs: { developer: "Saber Porto", publisher: "Saber Interactive", platforms: "PS4, PS5", release: "2022", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 150, 
        name: "Dakar Desert Rally Deluxe Edition", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1839940/header.jpg",
        description: {
            intro: "Edición especial que incluye el juego base Dakar Desert Rally y el Season Pass de contenidos.",
            features: [
                "Incluye el Season Pass con nuevos mapas, vehículos icónicos y desafíos.",
                "Acceso instantáneo a prototipos de vehículos clásicos como el DAF Truck Turbo-Twin.",
                "Soporte ampliado para volante y periféricos de simulación."
            ],
            synopsis: "Conduce la versión más completa de Dakar con mapas extendidos y garaje ampliado.",
            specs: { developer: "Saber Porto", publisher: "Saber Interactive", platforms: "PS4, PS5", release: "2022", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 151, 
        name: "Dark Cloud (Solo Inglés)", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1125210/header.jpg",
        description: {
            intro: "El clásico Action-RPG de PS2 adaptado a PS4 con trofeos y gráficos mejorados a 1080p.",
            features: [
                "Combina exploración de mazmorras procedurales con construcción de aldeas (sistema Georama).",
                "Gestión de desgaste de armas y transformación de equipamiento.",
                "Múltiples personajes jugables con diferentes tipos de ataques a distancia y cuerpo a cuerpo."
            ],
            synopsis: "Embárcate en un viaje con Toan para reconstruir el mundo destruido por el temible Genio Oscuro.",
            specs: { developer: "Level-5", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2015", rating: "Everyone 10+", modes: "Un jugador" }
        }
    },
    { 
        id: 152, 
        name: "Dark Cloud 2 (Solo Inglés)", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1125210/header.jpg",
        description: {
            intro: "Conocido también como Dark Chronicle, la aclamada secuela con estética cel-shading del clásico RPG.",
            features: [
                "Sistema Georama ampliado para construir ciudades e influir en el futuro.",
                "Crea inventos fotográficos, pilotea el robot Steve (Ridepod) y disfruta de la pesca.",
                "Dos protagonistas jugables: Max con llave inglesa/pistola y Monica con espada/magia."
            ],
            synopsis: "Viaja a través del tiempo con Max y Monica para impedir que el malvado Emperor Griffon altere el pasado.",
            specs: { developer: "Level-5", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2016", rating: "Everyone 10+", modes: "Un jugador" }
        }
    },
    { 
        id: 153, 
        name: "Dark Souls II Scholar of the First Sin (Textos en Español)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/335300/header.jpg",
        description: {
            intro: "La edición definitiva de Dark Souls II con mecánicas refinadas y todo el contenido adicional.",
            features: [
                "Incluye los 3 capítulos de la trilogía DLC: Crown of the Sunken King, Old Iron King e Ivory King.",
                "Reubicación de enemigos y jefes para una experiencia revitalizada y desafiante.",
                "Mejoras gráficas a 60 FPS estables y emparejamiento multijugador mejorado."
            ],
            synopsis: "Viaja al reino caído de Drangleic en busca de una cura para liberarte de la maldición del no muerto.",
            specs: { developer: "FromSoftware", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 154, 
        name: "DARK SOULS III (Textos en Español)", 
        platform: "PS4", 
        price: 40000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
        description: {
            intro: "La culminación de la aclamada saga de rol y acción desarrollada por FromSoftware.",
            features: [
                "Combates más ágiles y dinámicos con el nuevo sistema de 'Artes de Arma'.",
                "Diseño de mundo interconectado con impresionantes paisajes góticos.",
                "Extenso sistema RPG con magia, piromancias y build de personajes variadas."
            ],
            synopsis: "Como el Latente, adéntrate en Lothric para derrotar a los Señores de la Ceniza y decidir el destino de la Primera Llama.",
            specs: { developer: "FromSoftware", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 155, 
        name: "Dark Souls Remastered", 
        platform: "PS4", 
        price: 43000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/header.jpg",
        description: {
            intro: "El legendario juego que definió un género, completamente remasterizado en alta definición a 60 FPS.",
            features: [
                "Incluye el DLC 'Artorias of the Abyss'.",
                "Rendimiento fluido en 1080p a 60 cuadros por segundo.",
                "Multijugador online ampliado para hasta 6 jugadores con servidores dedicados."
            ],
            synopsis: "Explora el icónico reino de Lordran, supera desafiantes combates y descubre el origen del mito.",
            specs: { developer: "FromSoftware / QLOC", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 156, 
        name: "Darkest Dungeon", 
        platform: "PS4", 
        price: 28000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/262060/header.jpg",
        description: {
            intro: "Exigente RPG roguelike por turnos centrado en el estrés psicológico de la aventura.",
            features: [
                "Sistema de aflicción mental: gestiona la salud y cordura de tus héroes.",
                "Estilo de arte gótico dibujado a mano y combate por turnos estratégico.",
                "Muerte permanente de personajes y generación procedimental de mazmorras."
            ],
            synopsis: "Recluta, entrena y lidera a un grupo de héroes imperfectos a través de bosques retorcidos y ruinas infestadas de horrores.",
            specs: { developer: "Red Hook Studios", publisher: "Red Hook Studios", platforms: "PS4", release: "2016", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 157, 
        name: "Darkest Dungeon Ancestral Edition (Textos en Español)", 
        platform: "PS4", 
        price: 43000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/262060/header.jpg",
        description: {
            intro: "La experiencia completa de Darkest Dungeon con todo el contenido descargable incluido.",
            features: [
                "Incluye los DLCs 'The Crimson Court' y 'The Shieldbreaker'.",
                "Añade nuevas clases de héroes, enemigos, jefes y la zona Patio.",
                "Banda sonora original completa y textos en español."
            ],
            synopsis: "Enfréntate al verdadero horror gótico con el paquete definitivo que expande los peligros de la mansión familiar.",
            specs: { developer: "Red Hook Studios", publisher: "Red Hook Studios", platforms: "PS4", release: "2017", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 158, 
        name: "Darksiders Fury’s Collection – War and Death", 
        platform: "Combos", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/462780/header.jpg",
        description: {
            intro: "Paquete que reúne las versiones remasterizadas de las dos primeras entregas de Darksiders.",
            features: [
                "Incluye Darksiders Warmastered Edition y Darksiders II Deathinitive Edition.",
                "Rendimiento optimizado a 60 FPS y resolución 1080p.",
                "Controla a dos Jinetes del Apocalipsis: Guerra y Muerte."
            ],
            synopsis: "Vive la épica batalla entre el Cielo y el Infierno mientras luchas por restaurar el equilibrio en la Tierra.",
            specs: { developer: "Vigil Games / Gunfire Games", publisher: "THQ Nordic", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 159, 
        name: "Darksiders Genesis", 
        platform: "PS4", 
        price: 45000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/710920/header.jpg",
        description: {
            intro: "Spin-off de acción y aventura con perspectiva cenital que introduce al cuarto jinete, Lucha.",
            features: [
                "Cambia instantáneamente entre el espadachín Guerra y el tirador Lucha.",
                "Modo cooperativo completo para 2 jugadores en pantalla dividida o en línea.",
                "Exploración, resolución de acertijos y combates frenéticos estilo hack and slash."
            ],
            synopsis: "Viaja al pasado para descubrir los eventos previos al Darksiders original y detener la conspiración del rey demonio Lucifer.",
            specs: { developer: "Airship Syndicate", publisher: "THQ Nordic", platforms: "PS4", release: "2020", rating: "Teen", modes: "Un jugador / Cooperativo Local y Online" }
        }
    },
    { 
        id: 160, 
        name: "Darksiders II Deathinitive Edition", 
        platform: "PS4", 
        price: 32000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/388410/header.jpg",
        description: {
            intro: "La versión remasterizada del aclamado RPG de acción protagonizado por la Muerte.",
            features: [
                "Incluye todos los DLCs integrados en la campaña principal.",
                "Motor gráfico mejorado, sombras de mayor calidad e iluminación reelaborada.",
                "Sistema de botín profundo, armaduras personalizables y árboles de habilidades."
            ],
            synopsis: "La Muerte busca limpiar el nombre de su hermano Guerra, adentrándose en los reinos entre el Cielo y el Infierno.",
            specs: { developer: "Vigil Games / Gunfire Games", publisher: "THQ Nordic", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 161, 
        name: "Darksiders III Blades & Whip Edition", 
        platform: "PS4", 
        price: 83000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/606830/header.jpg",
        description: {
            intro: "Edición premium que reúne toda la trilogía principal de Darksiders y sus expansiones.",
            features: [
                "Incluye Darksiders III más sus expansiones 'Keepers of the Void' y 'The Crucible'.",
                "Incluye Darksiders Warmastered Edition y Darksiders II Deathinitive Edition.",
                "Nuevas formas elementales para Furia que otorgan armas y habilidades únicas."
            ],
            synopsis: "Ponte en la piel de Furia para dar caza y derrotar a las encarnaciones de los Siete Pecados Capitales.",
            specs: { developer: "Gunfire Games", publisher: "THQ Nordic", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 162, 
        name: "Darksiders Warmastered Edition", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/462780/header.jpg",
        description: {
            intro: "Remasterización del título original de acción y aventura que dio inicio a la franquicia.",
            features: [
                "Soporte para 1080p nativo a 60 FPS estables.",
                "Texturas y renderizado de sombras mejorados.",
                "Combate visceral que combina combos de espada, armas de fuego y transformaciones."
            ],
            synopsis: "Engañado por las fuerzas del mal para traer prematuramente el fin del mundo, Guerra debe regresar a la Tierra para buscar venganza.",
            specs: { developer: "Vigil Games / KAEIKO", publisher: "THQ Nordic", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 163, 
        name: "Darkwood PS4", 
        platform: "Ofertas", 
        price: 5000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/274520/header.jpg",
        description: {
            intro: "Juego de terror y supervivencia en perspectiva top-down sin sustos fáciles.",
            features: [
                "Mundo abierto generado procedimentalmente que cambia en cada partida.",
                "Ciclo de día/noche: explora de día y atrinchérate en tu refugio de noche.",
                "Creación de objetos, trampas, fortificaciones y decisiones narrativas complejas."
            ],
            synopsis: "Sobrevive a la noche en un bosque misterioso e infestado mientras buscas una salida antes de perder la cordura.",
            specs: { developer: "Acid Wizard Studio", publisher: "Crunching Koalas", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 164, 
        name: "Days Gone (Latino)", 
        platform: "PS4", 
        price: 29000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg",
        description: {
            intro: "Aventura de acción y supervivencia en mundo abierto ambientada en un noroeste del Pacífico devastado.",
            features: [
                "Enfréntate a hordas masivas de hasta 500 'Freakers' simultáneos.",
                "Conduce y mejora tu moto de drifter para desplazarte y sobrevivir.",
                "Excelente doblaje al español latino y ciclo climático dinámico."
            ],
            synopsis: "Encarna al motero Deacon St. John mientras busca respuestas sobre su esposa desaparecida en un mundo desolado.",
            specs: { developer: "Bend Studio", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 165, 
        name: "DayZ", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221100/header.jpg",
        description: {
            intro: "El shooter multijugador de supervivencia extrema ambientado en un postapocalipsis zombi.",
            features: [
                "Sin puntos de guardado ni vidas extras: si mueres, lo pierdes todo.",
                "Servidores de hasta 60 jugadores en un mapa de 230 km².",
                "Mecánicas profundas de salud, gestión de comida, agua, clima y enfermedades."
            ],
            synopsis: "Sobrevive contra infectados y otros jugadores en un entorno hostil donde la confianza es un lujo mortal.",
            specs: { developer: "Bohemia Interactive", publisher: "Bohemia Interactive", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 166, 
        name: "Dead by Daylight (Textos en Español)", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
        description: {
            intro: "Juego multijugador asimétrico de terror (4v1) donde un jugador toma el rol de asesino.",
            features: [
                "Juega como Asesino en 1ª persona o como Superviviente en 3ª persona.",
                "Mapa procedimental con generadores, ganchos y salidas aleatorias.",
                "Gran repertorio de habilidades, objetos y personajes originales."
            ],
            synopsis: "Trata de escapar de un escenario de pesadilla cooperando con otros tres jugadores o caza a tus víctimas sin piedad.",
            specs: { developer: "Behaviour Interactive", publisher: "Behaviour Interactive", platforms: "PS4, PS5", release: "2017", rating: "Mature 17+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 167, 
        name: "Dead by Daylight Tokyo Ghoul Edition", 
        platform: "PS4", 
        price: 43000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg",
        description: {
            intro: "Edición temática que incluye el juego base de Dead by Daylight junto con paquetes cosméticos exclusivos.",
            features: [
                "Incluye elementos cosméticos y atuendos inspirados en la estética de Tokyo Ghoul.",
                "Acceso al juego base con todos sus modos multijugador asimétricos.",
                "Desbloqueo de fragmentos de grieta y cosméticos de temporada."
            ],
            synopsis: "Combina la acción de terror de Dead by Daylight con atuendos icónicos de la temática Ghoul.",
            specs: { developer: "Behaviour Interactive", publisher: "Behaviour Interactive", platforms: "PS4, PS5", release: "2024", rating: "Mature 17+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 168, 
        name: "Dead Island 2 (Textos en Español)", 
        platform: "PS4", 
        price: 22000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/934700/header.jpg",
        description: {
            intro: "RPG de acción en primera persona vibrante y lleno de vísceras ambientado en una Los Ángeles en cuarentena.",
            features: [
                "Sistema de desmembramiento FLESH altamente detallado y visceral.",
                "6 personajes jugables con personalidad propia y habilidades personalizables.",
                "Combate cuerpo a cuerpo inteso con un arsenal de armas modificables."
            ],
            synopsis: "Explora la emblemática ciudad de Los Ángeles (HELL-A) infestada de zombis y evoluciona para convertirte en el cazador definitivo.",
            specs: { developer: "Dambuster Studios", publisher: "Deep Silver", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 169, 
        name: "Dead Island 2 Deluxe Edition (Textos en Español)", 
        platform: "Ofertas", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/934700/header.jpg",
        description: {
            intro: "Edición Deluxe de Dead Island 2 con contenido digital adicional para potenciar el combate.",
            features: [
                "Incluye el paquete de armas de recuerdos de Banoi.",
                "Paquete de armas doradas e indumentaria exclusiva para los cazadores.",
                "Sistemas de combate sanguinario y mecánicas de habilidades únicas."
            ],
            synopsis: "Sobrevive al apocalipsis zombi en Los Ángeles con armas doradas y recuerdos especiales de Banoi.",
            specs: { developer: "Dambuster Studios", publisher: "Deep Silver", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 170, 
        name: "Dead Island 2 Ultimate Edition (Textos en Español)", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/934700/header.jpg",
        description: {
            intro: "La experiencia definitiva de Dead Island 2 con las expansiones de historia principales.",
            features: [
                "Incluye las dos expansiones principales de historia: 'Haus' y 'SOLA'.",
                "Múltiples packs de armas exclusivas y cosméticos para los personajes.",
                "Nuevas áreas para explorar y enemigos infectados inéditos."
            ],
            synopsis: "Accede al paquete más completo de HELL-A para vivir todas las expansiones y desafíos sangrientos.",
            specs: { developer: "Dambuster Studios", publisher: "Deep Silver", platforms: "PS4, PS5", release: "2024", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 171, 
        name: "Dead Island Definitive Collection (Latino)", 
        platform: "Combos", 
        price: 6000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/383150/header.jpg",
        description: {
            intro: "Colección remasterizada que incluye Dead Island, Dead Island: Riptide y Dead Island Retro Revenge.",
            features: [
                "Totalmente remasterizado en alta definición con modelos y texturas mejoradas.",
                "Incluye todos los DLCs lanzados previamente para ambas campañas.",
                "Añade el juego arcade derivado en 2D 'Dead Island Retro Revenge'."
            ],
            synopsis: "Disfruta de la saga tropical zombi completa en un solo paquete remasterizado.",
            specs: { developer: "Techland", publisher: "Deep Silver", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 172, 
        name: "Dead Island Definitive Edition (Latino)", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/383150/header.jpg",
        description: {
            intro: "Remasterización en alta definición del juego de supervivencia e infección zombi que lo inició todo.",
            features: [
                "Gráficos mejorados, iluminación fotorrealista y modelos actualizados.",
                "Modo cooperativo para hasta 4 jugadores.",
                "Exploración de la isla paradisíaca de Banoi repleta de no muertos."
            ],
            synopsis: "Supera el caos desatado en un complejo turístico tropical modificando armas improvisadas para sobrevivir.",
            specs: { developer: "Techland", publisher: "Deep Silver", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 173, 
        name: "Dead Island Definitive Edition (Textos en Español)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/383150/header.jpg",
        description: {
            intro: "Versión remasterizada del clásico de acción de Techland con localización al español.",
            features: [
                "Rediseño visual completo con sombras y texturas en alta resolución.",
                "Combate enfocado en el enfrentamiento cuerpo a cuerpo visceral.",
                "Sistema de desarrollo de personajes con árboles de habilidades."
            ],
            synopsis: "Escapa de las garras del brote zombi en la paradisíaca y letal isla de Banoi.",
            specs: { developer: "Techland", publisher: "Deep Silver", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 174, 
        name: "Dead Island: Riptide Definitive Edition (Textos en Español)", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/383180/header.jpg",
        description: {
            intro: "La continuación directa de Dead Island en una versión mejorada y remasterizada.",
            features: [
                "Nuevas mecánicas de defensa de fuertes y transporte acuático en lancha.",
                "Inclusión de un nuevo personaje jugable con estilo de combate propio.",
                "Mejoras de rendimiento y apartado gráfico en alta definición."
            ],
            synopsis: "Tras escapar de Banoi, los supervivientes llegan a Palanai, solo para descubrir que la pesadilla recomienza.",
            specs: { developer: "Techland", publisher: "Deep Silver", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 175, 
        name: "Dead Rising 2 (Textos en Español)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/45740/header.jpg",
        description: {
            intro: "El aclamado juego de acción y hordas zombi llevado a PS4 con rendimiento a 1080p y 60 FPS.",
            features: [
                "Combina cientos de objetos cotidianos para crear alocadas armas combo.",
                "Explora la extravagante ciudad de Fortune City repleta de miles de zombis en pantalla.",
                "Modo cooperativo para 2 jugadores y multijugador competitivo 'Terror Is Reality'."
            ],
            synopsis: "Chuck Greene debe limpiar su nombre y conseguir medicina Zombrex para su hija infectada.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 176, 
        name: "Deadcraft", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1701520/header.jpg",
        description: {
            intro: "Un giro innovador al género de supervivencia y crafting donde puedes cultivar tus propios zombis.",
            features: [
                "Cultiva y cosecha zombis en tu granja para usarlos como aliados en batalla.",
                "Fabricación de armas, herramientas y platos con recursos recolectados.",
                "Acción de combate con habilidades de medio zombi en un entorno postapocalíptico."
            ],
            synopsis: "Como Sam, un híbrido entre humano y zombi, lucha por vengarte en un mundo devastado controlando a los muertos vivientes.",
            specs: { developer: "Marvelous Inc.", publisher: "XSEED Games", platforms: "PS4", release: "2022", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 177, 
        name: "Death Stranding (Latino)", 
        platform: "Ofertas", 
        price: 68000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg",
        description: {
            intro: "La revolucionaria obra de Hideo Kojima sobre la reconexión de una sociedad fracturada.",
            features: [
                "Innovador sistema de conexión asíncrono con otros jugadores de todo el mundo.",
                "Gestión detallada de carga, equilibrio y terreno exigente.",
                "Reparto estelar con Norman Reedus, Mads Mikkelsen, Léa Seydoux y Guillermo del Toro."
            ],
            synopsis: "Ponte en la piel de Sam Porter Bridges para transportar los suministros finales y reconectar a una América desolada.",
            specs: { developer: "Kojima Productions", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador (Conexión asíncrona)" }
        }
    },
    { 
        id: 178, 
        name: "Death’s Door (Textos en Español)", 
        platform: "PS4", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/894020/header.jpg",
        description: {
            intro: "Aventura de acción isométrica encantadora e ingeniosa sobre la cosecha de almas.",
            features: [
                "Combate táctico con armas cuerpo a cuerpo, flechas y magia.",
                "Mundo interconectado fascinante lleno de personajes estrafalarios y secretos.",
                "Luchas contra jefes gigantescos con patrones de ataque desafiantes."
            ],
            synopsis: "Encarna a un cuervo encargado de cosechar almas que debe rastrear a un ladrón en un reino fuera del alcance de la muerte.",
            specs: { developer: "Acid Nerve", publisher: "Devolver Digital", platforms: "PS4, PS5", release: "2021", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 179, 
        name: "Demon Slayer Kimetsu No Yaiba (Textos en Español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1493720/header.jpg",
        description: {
            intro: "Juego de lucha en arena 3D basado en la popular serie de anime Kimetsu no Yaiba.",
            features: [
                "Revive la historia del anime desde el arco de Tanjiro Kamado hasta el Tren Infinito.",
                "Combates de arena 2v2 espectaculares con efectos visuales fieles al anime.",
                "Amplia plantilla de cazadores de demonios y demonios con sus técnicas de respiración."
            ],
            synopsis: "Toma la espada de Tanjiro Kamado y lucha para convertir a tu hermana Nezuko de nuevo en humana.",
            specs: { developer: "CyberConnect2", publisher: "SEGA", platforms: "PS4", release: "2021", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 180, 
        name: "Demon Slayer Kimetsu No Yaiba 2 (Textos en Español)", 
        platform: "PS4", 
        price: 57000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1493720/header.jpg",
        description: {
            intro: "La secuela del aclamado juego de lucha 3D basado en los arcos más recientes del anime.",
            features: [
                "Nuevos personajes jugables con técnicas avanzadas de respiración y habilidades demoníacas.",
                "Modo historia expandido con combates cinematográficos de ritmo frenético.",
                "Sistema de combate pulido para enfrentamientos competitivos 2v2."
            ],
            synopsis: "Continúa la epopeya de Tanjiro en su lucha contra las Lunas Superiores para erradicar a los demonios.",
            specs: { developer: "CyberConnect2", publisher: "SEGA", platforms: "PS4, PS5", release: "2024", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 181, 
        name: "Desperados III (Textos en Español)", 
        platform: "PS4", 
        price: 43000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/610370/header.jpg",
        description: {
            intro: "Juego de sigilo táctico en tiempo real ambientado en un apasionante e implacable Salvaje Oeste.",
            features: [
                "Controla a 5 personajes únicos con habilidades de sigilo y combate letales.",
                "Planea y ejecuta acciones sincronizadas en tiempo real con el 'Modo Showdown'.",
                "Supera misiones complejas con múltiples caminos, soluciones e itinerarios."
            ],
            synopsis: "Sigue a John Cooper en una historia de origen a través del Salvaje Oeste para cazar a un viejo enemigo.",
            specs: { developer: "Mimimi Games", publisher: "THQ Nordic", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 182, 
        name: "Destiny 2 Renegades", 
        platform: "PS4", 
        price: 35000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1085660/header.jpg",
        description: {
            intro: "Expansión clásica de Destiny 2 centrada en la venganza y la frontera sin ley del Arrecife.",
            features: [
                "Desbloquea nuevas supers y subclases de energía para cada tipo de Guardián.",
                "Explora la Costa Enredada y la Ciudad Ensoñada llena de secretos y mazmorras.",
                "Acceso a equipamiento exótico, incursión 'Último Deseo' y el modo Gambito."
            ],
            synopsis: "Caza a los ocho Barones del Presidio de los Ancianos para vengar la caída del legendario Cayde-6.",
            specs: { developer: "Bungie", publisher: "Bungie", platforms: "PS4", release: "2018", rating: "Teen", modes: "Multijugador Online" }
        }
    },
    { 
        id: 183, 
        name: "Destiny 2: The Final Shape PS4 (Requiere PS Plus)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2336880/header.jpg",
        description: {
            intro: "La épica conclusión de la saga de la Luz y la Oscuridad de Destiny 2.",
            features: [
                "Adéntrate en el Corazón Pálido del Viajero, un destino surrealista e interconectado.",
                "Domina la subclase Prismática para combinar habilidades de Luz y Oscuridad.",
                "Enfréntate a la nueva facción de enemigos conocidos como Los Despojados."
            ],
            synopsis: "Únete a los Vanguardias y a Cayde-6 en la batalla definitiva dentro del Viajero para derrotar al Testigo.",
            specs: { developer: "Bungie", publisher: "Bungie", platforms: "PS4, PS5", release: "2024", rating: "Teen", modes: "Multijugador Online" }
        }
    },
    { 
        id: 184, 
        name: "Detroit Become Human (Latino)", 
        platform: "Ofertas", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg",
        description: {
            intro: "Dramática aventura narrativa donde cada decisión cambia drásticamente el rumbo de la historia.",
            features: [
                "Controla a tres androides (Kara, Connor y Markus) que descubren lo que significa ser humanos.",
                "Diagramas de flujo de decisiones complejos que permiten cientos de desenlaces.",
                "Apartado visual cinematográfico con un nivel de detalle impresionante."
            ],
            synopsis: "En la ciudad de Detroit del año 2038, los androides han comenzado a desarrollar emociones y conciencia propia.",
            specs: { developer: "Quantic Dream", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 185, 
        name: "Deus Ex: Mankind Divided (Latino)", 
        platform: "Ofertas", 
        price: 6000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/337000/header.jpg",
        description: {
            intro: "RPG de acción y sigilo ciberpunk donde las elecciones tácticas definen tu avance.",
            features: [
                "Avanzado repertorio de aumentos cibernéticos para sigilo, hackeo y combate letal.",
                "Estructura de niveles tipo sandbox con múltiples soluciones y caminos secretos.",
                "Ambientación detallada con fuerte impacto social y político."
            ],
            synopsis: "Adam Jensen debe operar en un mundo fragmentado que discrimina a los humanos cibernéticamente aumentados.",
            specs: { developer: "Eidos-Montréal", publisher: "Square Enix", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 186, 
        name: "Devil May Cry 4 Special Edition (Latino)", 
        platform: "Ofertas", 
        price: 9000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/329050/header.jpg",
        description: {
            intro: "La versión definitiva del clásico hack and slash a 1080p y 60 FPS estables.",
            features: [
                "5 personajes jugables: Nero, Dante, Vergil, Lady y Trish.",
                "Incluye el modo de dificultad extrema 'Legendary Dark Knight'.",
                "Gráficos remasterizados, ajustes en el equilibrio de juego y trajes adicionales."
            ],
            synopsis: "Nero debe investigar el ataque a la Orden de la Espada cometido por el legendario cazademonios Dante.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 187, 
        name: "Devil May Cry 4 Special Edition Demon Hunter Bundle (Latino)", 
        platform: "Ofertas", 
        price: 13000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/329050/header.jpg",
        description: {
            intro: "Edición especial de Devil May Cry 4 acompañada de gemas rojas e ítems de desbloqueo rápido.",
            features: [
                "Incluye 300.000 gemas rojas para comprar habilidades y consumibles desde el inicio.",
                "Desbloquea al instante todas las modalidades de juego y trajes alternativos.",
                "Soporte completo a 60 FPS con todos los personajes jugables habilitados."
            ],
            synopsis: "Obtén la experiencia de cazador de demonios completa con ventajas de mejora para dominar los combos.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 188, 
        name: "Devil May Cry 5 + Vergil (Textos en Español)", 
        platform: "Ofertas", 
        price: 9000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg",
        description: {
            intro: "La quinta entrega numerada de la saga de acción estilizada, que incluye al personaje jugable Vergil.",
            features: [
                "Tres estilos de combate distintos con Nero, Dante y el misterioso V, más la adición de Vergil.",
                "Motor gráfico RE Engine que ofrece un rendimiento ultrarrápido a 60 FPS.",
                "Sistema de puntuación de estilo con una banda sonora dinámica que responde a tus combos."
            ],
            synopsis: "Una invasión demoníaca azota Red Grave City mientras los cazadores de demonios unen fuerzas para frenar al rey demonio Urizen.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Cameo Online" }
        }
    },
    { 
        id: 189, 
        name: "Devil May Cry Definitive Edition (Latino)", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220440/header.jpg",
        description: {
            intro: "Reinvención moderna del origen de Dante remasterizada a 1080p y 60 FPS.",
            features: [
                "Incluye el DLC de campaña 'La Caída de Vergil' y modos de juego hardcore.",
                "Modificador Must Style, modo de velocidad Turbo y mod de dificultad Dioses Debe Llorar.",
                "Combate fluido que alterna instantáneamente entre armas de ángel y demonio."
            ],
            synopsis: "Un Dante joven lucha contra las huestes demoníacas que controlan secretamente a la sociedad humana.",
            specs: { developer: "Ninja Theory", publisher: "Capcom", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 190, 
        name: "Devil May Cry HD Collection (Latino)", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/631510/header.jpg",
        description: {
            intro: "Trilogía clásica remasterizada en alta definición a 60 FPS con los tres primeros títulos de la franquicia.",
            features: [
                "Incluye Devil May Cry, Devil May Cry 2 y Devil May Cry 3: Special Edition.",
                "Disfruta del origen de Dante, el sistema de estilos de DMC3 y galerías de arte de la saga.",
                "Rendimiento optimizado y soporte para trofeos de PlayStation."
            ],
            synopsis: "Revive el nacimiento del género de acción de combos estilizados de la mano del legendario cazademonios.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 191, 
        name: "Devil May Cry HD Collection & 4 Special Edition (Latino)", 
        platform: "Combos", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/631510/header.jpg",
        description: {
            intro: "Paquete masivo que incluye 4 juegos completos de la franquicia Devil May Cry en un solo lote.",
            features: [
                "Contiene DMC HD Collection (DMC1, DMC2, DMC3 SE) más Devil May Cry 4 Special Edition.",
                "Decenas de modos de dificultad, Palacio Sangriento y personajes jugables.",
                "Todos los títulos optimizados a 1080p y 60 cuadros por segundo."
            ],
            synopsis: "La colección indispensable para experimentar la saga clásica de combate y acción estilizada al completo.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 192, 
        name: "Diablo III Eternal Collection", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/480/header.jpg",
        description: {
            intro: "La experiencia definitiva del aclamado RPG de acción de Blizzard en consola.",
            features: [
                "Incluye el juego base Diablo III, la expansión Reaper of Souls y el pack Rise of the Necromancer.",
                "7 clases de personajes icónicas: Nigromante, Médico Brujo, Cazador de Demonios, Monje, Barbaro, Cruzado y Mago.",
                "Modo cooperativo local y en línea para hasta 4 jugadores en pantalla compartida."
            ],
            synopsis: "Enfréntate a las huestes del Infierno Abrasador y defiende el mundo de Santuario de la destrucción total.",
            specs: { developer: "Blizzard Entertainment", publisher: "Blizzard Entertainment", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Cooperativo Local y Online" }
        }
    },
    { 
        id: 193, 
        name: "Diablo IV (Latino)", 
        platform: "Ofertas", 
        price: 49000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg",
        description: {
            intro: "La última entrega de la mítica saga de ARPG con un vasto mundo abierto sombrío y gótico.",
            features: [
                "Mundo abierto compartido con eventos globales, jefes de mundo y mazmorras dinámicas.",
                "Personalización profunda de clases, árboles de habilidades y sistema de Parangón.",
                "Doblaje y localización completa al español latino."
            ],
            synopsis: "Regresa a Santuario para detener el ascenso de Lilith, la Hija del Odio, en un mundo asolado por la desesperación.",
            specs: { developer: "Blizzard Entertainment", publisher: "Blizzard Entertainment", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Multijugador Online / Cooperativo Local" }
        }
    },
    { 
        id: 194, 
        name: "DiRT 5.0", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1038250/header.jpg",
        description: {
            intro: "Experiencia de conducción todoterreno de estilo arcade llena de dinamismo, color y adrenalina.",
            features: [
                "Más de 70 rutas únicas en 10 localizaciones globales con clima dinámico y estaciones.",
                "Modo carrera impulsado por una narrativa con las voces de Troy Baker y Nolan North.",
                "Creador de escenarios 'Playgrounds' para diseñar y compartir pistas personalizadas."
            ],
            synopsis: "Ponte al volante de una amplia variedad de vehículos todoterreno y domina pistas de barro, hielo y arena alrededor del globo.",
            specs: { developer: "Codemasters", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 195, 
        name: "DiRT 5.0 Year One Edition", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1038250/header.jpg",
        description: {
            intro: "Edición completa de DiRT 5 que incluye todo el contenido del pase de temporada del año uno.",
            features: [
                "Acceso a todos los paquetes de contenido descargable post-lanzamiento (Energy, Super Size, Wild Spirits y Uproar).",
                "Nuevos vehículos, eventos de carrera adicionales, patrocinadores y cosméticos exclusivos.",
                "Aumento permanente en la ganancia de experiencia y divisas del juego."
            ],
            synopsis: "Obtén la versión más completa de DiRT 5 con decenas de nuevos desafíos todoterreno y coches extra.",
            specs: { developer: "Codemasters", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 196, 
        name: "Dishonored 2 (Latino)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/header.jpg",
        description: {
            intro: "Aclamado simulador inmersivo de sigilo y acción en primera persona.",
            features: [
                "Juega como Emily Kaldwin o Corvo Attano, cada uno con habilidades sobrenaturales únicas.",
                "Diseño de niveles galardonado que permite múltiples enfoques letales o no letales.",
                "Completamente localizado en español latino."
            ],
            synopsis: "Recupera el trono usurpado por la bruja Delilah viajando a la costera e industrial ciudad de Karnaca.",
            specs: { developer: "Arkane Studios", publisher: "Bethesda Softworks", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 197, 
        name: "Dishonored 2 (Solo Inglés)", 
        platform: "Ofertas", 
        price: 6200, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/403640/header.jpg",
        description: {
            intro: "Edición en idioma inglés del laureado título de sigilo y acción en primera persona de Arkane Studios.",
            features: [
                "Audio y textos exclusivamente en idioma inglés.",
                "Elige entre el sigilo invisible o el combate de acción abierta sangriento.",
                "Explora la rica ambientación steampunk de las calles de Karnaca."
            ],
            synopsis: "Decide el destino del imperio como Emily o Corvo usando poderes oscuros para cazar a tus enemigos.",
            specs: { developer: "Arkane Studios", publisher: "Bethesda Softworks", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 198, 
        name: "Dishonored Death of the Outsider (Latino)", 
        platform: "PS4", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/614570/header.jpg",
        description: {
            intro: "Aventura independiente basada en el galardonado universo de la saga Dishonored.",
            features: [
                "Encarna a la asesina Billie Lurk con un conjunto renovado de habilidades místicas.",
                "Enfréntate a nuevos e inteligentes tipos de enemigos y explora áreas inéditas de Karnaca.",
                "Modo 'Original Game+' para rejugarlo con los poderes clásicos de Dishonored 2."
            ],
            synopsis: "Reúnete con tu antiguo mentor Daud para llevar a cabo el asesinato más ambicioso jamás concebido: acabar con El Forastero.",
            specs: { developer: "Arkane Studios", publisher: "Bethesda Softworks", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 199, 
        name: "Dishonored Definitive Edition", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/header.jpg",
        description: {
            intro: "La versión definitiva del juego de acción en primera persona del año 2012, remasterizado en HD.",
            features: [
                "Incluye todo el contenido adicional: The Knife of Dunwall, The Brigmore Witches, Dunwall City Trials y Void Walker's Exertion.",
                "Gráficos mejorados y rendimiento optimizado para consolas PS4.",
                "Sistema de caos dinámico que reacciona a tus decisiones y violencia en el juego."
            ],
            synopsis: "Ponte en la piel de Corvo Attano, un protector real inculpado de asesinato que busca venganza usando poderes místicos.",
            specs: { developer: "Arkane Studios", publisher: "Bethesda Softworks", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 200, 
        name: "Dishonored: Death of the Outsider (Solo Inglés)", 
        platform: "PS4", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/614570/header.jpg",
        description: {
            intro: "La aventura independiente de Dishonored en versión con idioma únicamente en inglés.",
            features: [
                "Voces y textos completamente en inglés.",
                "Misiones de sigilo con herramientas de infiltración y gadgets mecánicos avanzados.",
                "Nuevos contratos secundarios para eliminar objetivos clave a cambio de recompensas."
            ],
            synopsis: "Infístrate en los rincones más oscuros de Karnaca para descubrir los secretos de la misteriosa deidad conocida como El Forastero.",
            specs: { developer: "Arkane Studios", publisher: "Bethesda Softworks", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 201, 
        name: "Disney Dreamlight Valley", 
        platform: "PS4", 
        price: 43000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1401590/header.jpg",
        description: {
            intro: "Un híbrido entre simulador de vida y juego de aventuras lleno de personajes clásicos de Disney y Pixar.",
            features: [
                "Crea y personaliza tu propio personaje, casa y vecindario mágico.",
                "Entabla amistad y completa misiones junto a Mickey, Elsa, Wall-E, Moana y muchos más.",
                "Actividades de recolección, pesca, jardinería, cocina y diseño de moda."
            ],
            synopsis: "Restaura la magia de Dreamlight Valley y libera el valle del misterioso 'Olvido' que ha hecho perder la memoria a sus habitantes.",
            specs: { developer: "Gameloft", publisher: "Gameloft", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador" }
        }
    },
    { 
        id: 202, 
        name: "Disney Pixar Toy Story 3", 
        platform: "PS4", 
        price: 10500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/301610/header.jpg",
        description: {
            intro: "Divertida adaptación de plataformas y aventuras clásica de la aclamada película animada de Pixar.",
            features: [
                "Modo Historia basado en los acontecimientos del largometraje animado.",
                "Modo 'Caja de Juguetes' (Toy Box) con libertad para crear tus propias aventuras de mundo abierto.",
                "Juega como Buzz, Woody o Jessie, cada uno con habilidades únicas."
            ],
            synopsis: "Ayuda a Woody, Buzz y a la pandilla a asegurarse de que ningún juguete se quede atrás cuando Andy se prepara para ir a la universidad.",
            specs: { developer: "Avalanche Software", publisher: "Disney Interactive", platforms: "PS4, PS5", release: "2022", rating: "Everyone 10+", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 203, 
        name: "Disney Pixar UP (Textos en Español)", 
        platform: "PS4", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/301610/header.jpg",
        description: {
            intro: "Juego de aventuras y plataformas para toda la familia basado en la emblemática película de Pixar.",
            features: [
                "Controla a Carl Fredricksen, al explorador Russell, al perro Dug o al ave Kevin.",
                "Niveles de plataformas, exploración selvática y resolución de acertijos en equipo.",
                "Modo cooperativo ideal para jugar en familia."
            ],
            synopsis: "Viaja por las exóticas Cataratas del Paraíso superando peligros de la selva y las trampas del villano Charles Muntz.",
            specs: { developer: "Heavy Iron Studios", publisher: "Disney Interactive", platforms: "PS4, PS5", release: "2022", rating: "Everyone", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 204, 
        name: "Don’t Starve: Console Edition (Solo Inglés)", 
        platform: "Ofertas", 
        price: 5000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/219740/header.jpg",
        description: {
            intro: "Desafiante juego de supervivencia e investigación en la naturaleza repleto de ciencia y magia.",
            features: [
                "Estilo visual gótico dibujado a mano muy distintivo.",
                "Generación procedimental de mundos para que cada partida sea completamente única.",
                "Sin tutoriales ni ayudas: aprende a recolectar, construir y sobrevivir por tu cuenta."
            ],
            synopsis: "Ponte en la piel de Wilson, un científico atrapado en un misterioso mundo salvaje que debe luchar por mantenerse con vida y cuerdo.",
            specs: { developer: "Klei Entertainment", publisher: "Klei Entertainment", platforms: "PS4", release: "2014", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 205, 
        name: "DOOM", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg",
        description: {
            intro: "El reinicio del legendario shooter en primera persona, famoso por su combate frenético e implacable.",
            features: [
                "Combate visceral sin regeneración de salud automática ni cobertura.",
                "Sistema de ejecuciones 'Glory Kills' para obtener salud y munición de los demonios.",
                "Arsenal icónico con la BFG 9000, la escopeta de doble cañón y la motosierra."
            ],
            synopsis: "Como el Doom Slayer, aniquila las hordas demoníacas que han invadido las instalaciones de la UAC en Marte.",
            specs: { developer: "id Software", publisher: "Bethesda Softworks", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 206, 
        name: "DOOM 3", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208200/header.jpg",
        description: {
            intro: "La aclamada reinvención orientada al terror de acción en primera persona de la clásica saga.",
            features: [
                "Atmósfera claustrofóbica con iluminación dinámica e intensa tensión.",
                "Incluye las expansiones 'Resurrection of Evil' y 'The Lost Mission'.",
                "Rendimiento fluido adaptado a consolas modernas."
            ],
            synopsis: "Ábrete paso a través de una instalación científica invadida por demonios en una aterradora lucha por la supervivencia.",
            specs: { developer: "id Software", publisher: "Bethesda Softworks", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 207, 
        name: "DOOM Eternal", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
        description: {
            intro: "La secuela directa de DOOM (2016), que eleva la velocidad, la agresividad y el combate táctico.",
            features: [
                "Mecánicas de combate perfeccionadas con el cañón de hombro y la hoja de muñeca.",
                "Movilidad mejorada con esquivas rápidas, agarre de gancho y escalada de paredes.",
                "Banda sonora de metal industrial dinámico de alta intensidad."
            ],
            synopsis: "Los ejércitos del Infierno han invadido la Tierra. Conviértete en el Slayer para salvar a la humanidad de la extinción.",
            specs: { developer: "id Software", publisher: "Bethesda Softworks", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online (BATTLEMODE)" }
        }
    },
    { 
        id: 208, 
        name: "DOOM Eternal (Latino)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
        description: {
            intro: "Edición con doblaje y localización al español latino del galardonado shooter de id Software.",
            features: [
                "Completamente doblado y traducido al español latino.",
                "Aumenta tu arsenal con modificaciones de armas devastadoras.",
                "Explora dimensiones inéditas y descubre los orígenes del Doom Slayer."
            ],
            synopsis: "Regresa para recuperar la Tierra consumida por los demonios enfrentando a las fuerzas del Infierno y de Maykr.",
            specs: { developer: "id Software", publisher: "Bethesda Softworks", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 209, 
        name: "DOOM Eternal Deluxe Edition", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
        description: {
            intro: "Edición Deluxe de DOOM Eternal que amplía la historia y añade cosméticos exclusivos.",
            features: [
                "Incluye el Pase del Año 1 con las expansiones 'The Ancient Gods - Parte 1 y 2'.",
                "Skin de Slayer demoníaco y paquete de sonidos de armas de nivel clásico.",
                "Acceso completo a todos los modos de juego y campaña de historia extendida."
            ],
            synopsis: "Continúa la cruzada del Slayer en las expansiones de historia para librar la batalla final contra las dimensiones celestiales y demoníacas.",
            specs: { developer: "id Software", publisher: "Bethesda Softworks", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 210, 
        name: "DOOM Eternal Deluxe Edition (Latino)", 
        platform: "PS4", 
        price: 10500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
        description: {
            intro: "Edición Deluxe completa con localización en español latino que incluye los DLCs de expansión de campaña.",
            features: [
                "Contiene la campaña principal y las expansiones de historia 'The Ancient Gods'.",
                "Audio y textos totalmente en español latino.",
                "Incluye elementos cosméticos del paquete de Deluxe Edition."
            ],
            synopsis: "La experiencia completa de DOOM Eternal para erradicar la amenaza demoníaca con todas las campañas de expansión incluidas.",
            specs: { developer: "id Software", publisher: "Bethesda Softworks", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 211, 
        name: "DOOM VFR (Requiere Lente de Realidad Virtual)", 
        platform: "PS4", 
        price: 15200, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/650000/header.jpg",
        description: {
            intro: "Experiencia inmersiva en realidad virtual ambientada en el sangriento universo de DOOM.",
            features: [
                "Diseñado específicamente para PlayStation VR.",
                "Mecánica de teletransportación y desplazamiento rápido para un combate fluido.",
                "Transfiere tu conciencia a cibernética avanzada para controlar la base de Marte."
            ],
            synopsis: "Sumérgete en RV como el último superviviente humano en Marte cuya conciencia se transfiere a una matriz cibernética para erradicar la invasión.",
            specs: { developer: "id Software", publisher: "Bethesda Softworks", platforms: "PS4 (Requiere PS VR)", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 212, 
        name: "Dragon Age Inquisition – Game of the Year Edition (Textos en Español)", 
        platform: "PS4", 
        price: 45000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222690/header.jpg",
        description: {
            intro: "La edición definitiva del aclamado RPG ganador del premio al Juego del Año de BioWare.",
            features: [
                "Incluye los tres paquetes de expansión de historia: Mandas de Jakkon, El Descenso y Intruso.",
                "Personalización masiva con múltiples razas, clases y especializaciones de combate.",
                "Elegibles decisiones narrativas que impactan el destino del continente de Thedas."
            ],
            synopsis: "Lidera la Inquisición para cerrar la grieta en el cielo y restaurar el orden en un mundo al borde del colapso.",
            specs: { developer: "BioWare", publisher: "Electronic Arts", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 213, 
        name: "Dragon Ball FighterZ – FighterZ Edition (Textos en Español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/header.jpg",
        description: {
            intro: "Edición especial del sensacional juego de luchas 3v3 con estética idéntica al anime.",
            features: [
                "Incluye el pase de temporada FighterZ Pass con 8 nuevos e icónicos personajes.",
                "Combates de relevos 3v3 de velocidad vértigo desarrollados por Arc System Works.",
                "Modo historia original supervisado por el propio Akira Toriyama con el Androide 21."
            ],
            synopsis: "Forma tu equipo ideal de guerreros Z y desata ráfagas de ki espectaculares en intensos combates de anime.",
            specs: { developer: "Arc System Works", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2018", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 214, 
        name: "Dragon Ball FighterZ (Textos en Español)", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/header.jpg",
        description: {
            intro: "El galardonado juego de pelea en 2.5D que recrea fielmente el estilo visual del anime.",
            features: [
                "Gráficos estilo cel-shading de nivel de animación cinematográfica.",
                "Enfrentamientos por equipos de 3 contra 3 con asistencias y relevos tácticos.",
                "Controles accesibles para principiantes y profunda complejidad para competitivos."
            ],
            synopsis: "Únete a Goku y los guerreros Z para detener la amenaza de los clones y descubrir el secreto detrás del Androide 21.",
            specs: { developer: "Arc System Works", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2018", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 215, 
        name: "Dragon Ball the Breakers (Textos en Español)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1276760/header.jpg",
        description: {
            intro: "Juego de acción asimétrica multijugador en línea ambientado en el universo de Dragon Ball.",
            features: [
                "Multijugador asimétrico de 1 contra 7: un Invasor contra siete Supervivientes.",
                "Juega como Invasores legendarios como Cell, Frieza o Buu que evolucionan durante la partida.",
                "Usa artefactos, vehículos y esferas del dragón como ciudadano común para escapar."
            ],
            synopsis: "Siete ciudadanos ordinarios atrapados en una costura temporal deben cooperar para escapar de la amenaza devastadora del Invasor.",
            specs: { developer: "Dimps", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2022", rating: "Teen", modes: "Multijugador Online" }
        }
    },
    { 
        id: 216, 
        name: "EA Sports FC 25 (con relatos en español latino)", 
        platform: "PS4", 
        price: 30000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
        description: {
            intro: "La simulación de fútbol definitivo con la tecnología y modos de juego más actualizados.",
            features: [
                "Nuevo modo Rush 5v5 para partidas más rápidas y dinámicas.",
                "Rediseño táctico con FC IQ para mayor realismo estratégico en el campo.",
                "Modo Carrera de DT y Jugador con licencias oficiales de las principales ligas del mundo."
            ],
            synopsis: "Vive la máxima experiencia futbolística con tus equipos y jugadores favoritos completamente licenciados.",
            specs: { developer: "EA Canada", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2024", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 217, 
        name: "GTA V (textos en español)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg",
        description: {
            intro: "El aclamado fenómeno de mundo abierto ambientado en el extenso e hiperrealista estado de San Andreas.",
            features: [
                "Cambia dinámicamente entre tres protagonistas: Michael, Franklin y Trevor.",
                "Goles masivos, atracos planificados y absoluta libertad de exploración.",
                "Incluye acceso al dinámico y evolutivo mundo de GTA Online."
            ],
            synopsis: "Un estafador callejero, un ladrón de bancos retirado y un psicópata aterrador deben llevar a cabo una serie de peligrosos atracos para sobrevivir.",
            specs: { developer: "Rockstar North", publisher: "Rockstar Games", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 218, 
        name: "Red Dead Redemption 2 (textos en español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
        description: {
            intro: "Una épica obra maestra sobre la vida en América en el albor de la era moderna.",
            features: [
                "Un mundo abierto vivo e hiperdetallado con ecosistemas y físicas realistas.",
                "Narrativa profunda respaldada por un sistema de honor que reacciona a tus acciones.",
                "Incluye el acceso al mundo multijugador de Red Dead Online."
            ],
            synopsis: "Arthur Morgan y la banda de Van der Linde huyen de los agentes federales y los mejores cazarrecompensas de la nación.",
            specs: { developer: "Rockstar Games", publisher: "Rockstar Games", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 219, 
        name: "FC 26 (relatos en español latino)", 
        platform: "PS4", 
        price: 40000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
        description: {
            intro: "La siguiente entrega de la prestigiosa franquicia de simuladores de fútbol.",
            features: [
                "Nuevas animaciones y físicas de balón optimizadas para máxima fidelidad.",
                "Modos Ultimate Team, Clubes y Carrera con plantillas y traspasos actualizados.",
                "Relatos e interacciones de comentarios totalmente en español latino."
            ],
            synopsis: "Compite al más alto nivel futbolístico mundial con físicas mejoradas y modos multijugador renovados.",
            specs: { developer: "EA Sports", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2025", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 220, 
        name: "Minecraft (latino)", 
        platform: "PS4", 
        price: 20000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1672970/header.jpg",
        description: {
            intro: "El juego de construcción y supervivencia de bloques más popular del mundo.",
            features: [
                "Crea todo lo que puedas imaginar en el modo Creativo con recursos ilimitados.",
                "Explora mundos infinitos y sobrevive a las criaturas en el modo Supervivencia.",
                "Juego cruzado (cross-play) con amigos en otras plataformas."
            ],
            synopsis: "Explora mundos generados aleatoriamente y construye desde hogares sencillos hasta deslumbrantes castillos.",
            specs: { developer: "Mojang Studios", publisher: "Mojang Studios", platforms: "PS4", release: "2014", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 221, 
        name: "EA Sports FC 24 (con relatos en español latino)", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
        description: {
            intro: "El inicio de la nueva era de la simulación de fútbol de EA Sports.",
            features: [
                "Tecnología HyperMotionV que captura la fluidez real del juego.",
                "Estilos de juego de Opta que optimizan la individualidad de cada jugador.",
                "Incorporación de jugadoras al modo Ultimate Team."
            ],
            synopsis: "Siente la experiencia del juego de reyes con más de 19.000 futbolistas licenciados y cientos de clubes.",
            specs: { developer: "EA Canada", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 222, 
        name: "The Last of Us Part 2 (latino)", 
        platform: "PS4", 
        price: 29000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
        description: {
            intro: "Una emotiva y desgarradora aventura de supervivencia que continúa la historia de Ellie y Joel.",
            features: [
                "Mecánicas de combate cuerpo a cuerpo e infiltración intensas y fluidas.",
                "Entornos amplios con navegación vertical y exploración detallada.",
                "Doblaje completo en español latino de alta calidad cinematográfica."
            ],
            synopsis: "Cinco años después de su peligroso viaje, un evento violento altera la paz de Ellie y la lleva a emprender una búsqueda implacable de justicia.",
            specs: { developer: "Naughty Dog", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 223, 
        name: "UFC 4 (textos en español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
        description: {
            intro: "Simulador oficial de artes marciales mixtas que pone tu estilo de pelea en el centro de la experiencia.",
            features: [
                "Desarrolla tu peleador desde un aficionado hasta convertirse en una leyenda indiscutida de la UFC.",
                "Mecánicas fluidas de remaches en la jaula y renovado sistema de derribos y suelo.",
                "Entornos inéditos de combate como el Patio y la Cumbre de Kumite."
            ],
            synopsis: "Define tu legado en el octágono personalizando a tu peleador y dominando varias disciplinas de combate.",
            specs: { developer: "EA Vancouver", publisher: "Electronic Arts", platforms: "PS4", release: "2020", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 224, 
        name: "Mortal Kombat 11 Ultimate (textos en español)", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
        description: {
            intro: "La experiencia definitiva de Mortal Kombat 11 con todo el contenido adicional incluido.",
            features: [
                "Incluye el juego base, Kombat Pack 1, la expansión de historia Aftermath y Kombat Pack 2.",
                "37 personajes jugables incluyendo invitados como Rambo, Terminator, Robocop y Joker.",
                "Sistema de Variación de Personajes Personalizada para modificar trajes y movimientos."
            ],
            synopsis: "Toma el control de los protectores de la Tierra en una historia de viajes en el tiempo para detener a Kronika.",
            specs: { developer: "NetherRealm Studios", publisher: "Warner Bros. Games", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 225, 
        name: "The Last of Us Remastered (latino)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg",
        description: {
            intro: "El icónico juego ganador de más de 200 premios de Juego del Año, remasterizado a 1080p y 60 FPS.",
            features: [
                "Incluye el capítulo de precuela de historia 'Left Behind'.",
                "Completamente doblado al español latino.",
                "Modo multijugador 'Facciones' estratégico y desafiante."
            ],
            synopsis: "En una civilización asolada, el curtido superviviente Joel es contratado para sacar de contrabando a Ellie, una joven de 14 años, fuera de una zona de cuarentena.",
            specs: { developer: "Naughty Dog", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 226, 
        name: "God of War Ragnarok (latino)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
        description: {
            intro: "El aclamado viaje nórdico de Kratos y Atreus en busca de respuestas antes del profetizado conflicto.",
            features: [
                "Explora todos y cada uno de los Nueve Reinos de la mitología nórdica.",
                "Combate visceral perfeccionado con el Hacha Leviatán, las Espadas del Caos y la Lanza de Draupnir.",
                "Doblaje completo y actuaciones impecables en español latino."
            ],
            synopsis: "Padre e hijo deben arriesgarlo todo en una travesía a través de reinos míticos mientras las fuerzas de Asgard se preparan para la guerra.",
            specs: { developer: "Santa Monica Studio", publisher: "Sony Interactive Entertainment", platforms: "PS4, PS5", release: "2022", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 227, 
        name: "Marvel’s Spiderman GOTY (latino)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
        description: {
            intro: "La edición Juego del Año del emblemático título del héroe arácnido desarrollado por Insomniac Games.",
            features: [
                "Incluye el DLC completo de 3 capítulos 'La Ciudad que Nunca Duerme'.",
                "Sistema de balanceo con telarañas ágil e intuitivo por la Nueva York de Marvel.",
                "Combate fluido con artilugios interactivos y decenas de trajes desbloqueables."
            ],
            synopsis: "Peter Parker debe equilibrar su caótica vida personal mientras lucha por proteger la ciudad de una nueva amenaza de supervillanos.",
            specs: { developer: "Insomniac Games", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2019", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 228, 
        name: "Resident Evil 4 Remake", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
        description: {
            intro: "Reinvención moderna del clásico survival horror de 2005 con gráficos de última generación y jugabilidad renovada.",
            features: [
                "Controles de combate modernos con parry de cuchillo y maniobras evasivas.",
                "Atmósfera aterradora y detallada gracias al motor RE Engine.",
                "Incluye el modo gratuito The Mercenaries para desafíos de acción frenética."
            ],
            synopsis: "El agente Leon S. Kennedy es enviado a un aislado pueblo europeo para rescatar a la hija del presidente de los Estados Unidos.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 229, 
        name: "Need for Speed Heat solo ingles", 
        platform: "Ofertas", 
        price: 13000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg",
        description: {
            intro: "Trepidante juego de carreras callejeras con dinámicas opuestas entre el día y la noche.",
            features: [
                "Voces e interfaz completamente en idioma inglés.",
                "Compite en carreras oficiales de día para ganar dinero y arriesga en carreras clandestinas de noche para ganar reputación.",
                "Personalización profunda de rendimiento y estética para una enorme variedad de coches."
            ],
            synopsis: "Enfréntate a una policía corrupta mientras luchas por ganarte un nombre en la escena de carreras callejeras de Palm City.",
            specs: { developer: "Ghost Games", publisher: "Electronic Arts", platforms: "PS4", release: "2019", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 230, 
        name: "FIFA 23 (relatos en español de España)", 
        platform: "PS4", 
        price: 20000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1811260/header.jpg",
        description: {
            intro: "La última entrega bajo el sello FIFA con las competiciones más importantes del fútbol mundial.",
            features: [
                "Comentarios y relatos en español castellano (España).",
                "Incluye torneos oficiales como la Copa Mundial de la FIFA masculina y femenina.",
                "Modos Ultimate Team, VOLTA Football y Modo Carrera actualizados."
            ],
            synopsis: "Disfruta de la emoción del fútbol internacional con animaciones realistas y los clubes más destacados de las ligas del mundo.",
            specs: { developer: "EA Vancouver", publisher: "Electronic Arts", platforms: "PS4", release: "2022", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 231, 
        name: "Dragon Ball Xenoverse 2 (solo en inglés)", 
        platform: "Ofertas", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/454650/header.jpg",
        description: {
            intro: "Aventura de acción y peleas en 3D donde revives y proteges la línea temporal histórica de Dragon Ball.",
            features: [
                "Voces e interfaz en idioma inglés.",
                "Crea tu propio patrullero del tiempo personalizando raza, apariencia y habilidades.",
                "Ciudad hub de Conton City gigantesca con capacidad para cientos de jugadores simultáneos."
            ],
            synopsis: "Viaja en el tiempo con los Patrulleros del Tiempo para evitar que alteren los momentos clave de la historia de Dragon Ball.",
            specs: { developer: "DIMPS", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2016", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 232, 
        name: "Mortal Kombat XL (latino)", 
        platform: "Ofertas", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/307780/header.jpg",
        description: {
            intro: "La versión definitiva de Mortal Kombat X que incluye todo el contenido descargable y luchadores extra.",
            features: [
                "Audio y textos completamente en español latino.",
                "Incluye personajes DLC como Xenomorph, Leatherface, Predator, Jason Voorhees, Triborg y Bo' Rai Cho.",
                "Sistema de 3 variaciones de combate por personaje y sangrientos Fatalities."
            ],
            synopsis: "Una nueva generación de luchadores une fuerzas para proteger la Tierra de la amenaza del caído Dios Antiguo Shinnok.",
            specs: { developer: "NetherRealm Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 233, 
        name: "Ghost of Tsushima", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg",
        description: {
            intro: "Una épica de acción y aventura en mundo abierto ambientada en el Japón feudal.",
            features: [
                "Combate preciso con katana, arcos y artilugios tácticos de sigilo.",
                "Exploración orgánica guiada por el viento, animales y paisajes impresionantes.",
                "Incluye el modo multijugador cooperativo 'Legends'."
            ],
            synopsis: "El samurái Jin Sakai debe elegir entre seguir el código de honor o convertirse en 'El Fantasma' para liberar la isla de Tsushima de la invasión mongola.",
            specs: { developer: "Sucker Punch Productions", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 234, 
        name: "God of War 4 (latino)", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
        description: {
            intro: "La magistral reinvención de la saga que traslada a Kratos al despiadado reino de la mitología nórdica.",
            features: [
                "Completamente doblado y traducido al español latino.",
                "Combate cercano e visceral con el Hacha Leviatán y el trabajo en equipo con Atreus.",
                "Plano secuencia continuo sin cortes de cámara durante todo el juego."
            ],
            synopsis: "Kratos, viviendo como un hombre lejos de la sombra de los dioses, debe emprender un viaje personal junto a su hijo Atreus por las tierras nórdicas.",
            specs: { developer: "Santa Monica Studio", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 235, 
        name: "Call of Duty Vanguard", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1985810/header.jpg",
        description: {
            intro: "Intenso shooter en primera persona centrado en los orígenes de las Fuerzas Especiales en la Segunda Guerra Mundial.",
            features: [
                "Campaña cinematográfica que abarca 4 frentes principales del conflicto global.",
                "Completo modo multijugador con más de 20 mapas desde el primer día.",
                "Experiencia cooperativa Zombies desarrollada por Treyarch."
            ],
            synopsis: "Sigue a un grupo internacional de soldados que forman la Task Force 001 para desmantelar un proyecto secreto nazi al final de la guerra.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4", release: "2021", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 236, 
        name: "Dragon Ball Z Kakarot (textos en español)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/851850/header.jpg",
        description: {
            intro: "RPG de acción definitivo que recrea fielmente toda la historia de Dragon Ball Z.",
            features: [
                "Textos y menús completamente traducidos al español.",
                "Revive batallas icónicas, explora zonas gigantescas, pesca, come y entrena.",
                "Abarca desde la llegada de los Saiyajin hasta la saga de Majin Buu."
            ],
            synopsis: "Experimenta la vida de Goku y los Guerreros Z mientras combates, pescas, te alimentas y formas lazos con amigos en el universo DBZ.",
            specs: { developer: "CyberConnect2", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2020", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 237, 
        name: "Call of Duty Modern Warfare 2 (latino)", 
        platform: "PS4", 
        price: 28000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        description: {
            intro: "La secuela del exitoso reboot de Modern Warfare con físicas y armas hiperrealistas.",
            features: [
                "Totalmente doblado y localizado al español latino.",
                "Regresan los icónicos miembros de la Task Force 141 (Price, Ghost, Soap, Gaz).",
                "Evolución en la simulación de armamento y armería (Gunsmith 2.0)."
            ],
            synopsis: "La Fuerza de Tareas 141 se enfrenta a una amenaza global masiva ligada a un cártel y misiles robados.",
            specs: { developer: "Infinity Ward", publisher: "Activision", platforms: "PS4, PS5", release: "2022", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 238, 
        name: "Mortal Kombat 11 Ultimate + Injustice 2 Legendary Edition (latino)", 
        platform: "Combos", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
        description: {
            intro: "Paquete definitivo que combina los dos mejores juegos de pelea de NetherRealm Studios.",
            features: [
                "Contiene Mortal Kombat 11 Ultimate y Injustice 2 Legendary Edition.",
                "Decenas de peleadores incluidos: superhéroes de DC, luchadores de MK e invitados de culto.",
                "Ambos juegos con voces y textos en español latino."
            ],
            synopsis: "Disfruta de cientos de horas de combate supremo tanto en la brutalidad de Mortal Kombat como en las batallas de superhéroes de DC.",
            specs: { developer: "NetherRealm Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 239, 
        name: "Uncharted the Nathan Drake Collection (latino)", 
        platform: "Combos", 
        price: 20000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg",
        description: {
            intro: "Colección remasterizada a 1080p y 60 FPS con las primeras tres legendarias aventuras de Nathan Drake.",
            features: [
                "Incluye Uncharted: El Tesoro de Drake, Uncharted 2: El Reino de los Ladrones y Uncharted 3: La Traición de Drake.",
                "Gráficos, iluminación y texturas mejoradas por Bluepoint Games.",
                "Totalmente localizado con doblaje y textos en español latino."
            ],
            synopsis: "Sigue la épica historia del cazador de tesoros Nathan Drake alrededor del mundo mientras arriesga todo en busca de tesoros perdidos.",
            specs: { developer: "Naughty Dog / Bluepoint Games", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2015", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 240, 
        name: "Hogwarts Legacy (latino)", 
        platform: "Ofertas", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg",
        description: {
            intro: "Un cautivador RPG de acción en mundo abierto ambientado en el universo de Harry Potter durante el siglo XIX.",
            features: [
                "Totalmente doblado y localizado al español latino.",
                "Explora libremente Hogwarts, Hogsmeade, el Bosque Prohibido y las tierras circundantes.",
                "Aprende hechizos, elabora pociones, cultiva plantas y cuida animales fantásticos."
            ],
            synopsis: "Encarna a un estudiante con la clave de un antiguo secreto que amenaza con destruir el mundo mágico.",
            specs: { developer: "Avalanche Software", publisher: "Warner Bros. Games", platforms: "PS4, PS5", release: "2023", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 241, 
        name: "It Takes Two (textos en español)", 
        platform: "Ofertas", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
        description: {
            intro: "El galardonado juego del año enfocado puramente en la experiencia cooperativa.",
            features: [
                "Diseñado exclusivamente para dos jugadores en pantalla dividida local o en línea.",
                "Mecánicas de juego sumamente variadas que cambian radicalmente en cada nivel.",
                "Historia emotiva e ingeniosa sobre las relaciones humanas."
            ],
            synopsis: "Acompaña a la conflictuada pareja de Cody y May, transformados en muñecos por un hechizo, mientras intentan superar sus diferencias.",
            specs: { developer: "Hazelight Studios", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2021", rating: "Teen", modes: "Cooperativo Local y Online" }
        }
    },
    { 
        id: 242, 
        name: "Sekiro Shadows Die Twice Game of the Year Edition", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg",
        description: {
            intro: "Aclamada obra de acción y aventura de FromSoftware galardonada con el premio al Juego del Año.",
            features: [
                "Sistema de combate preciso centrado en el desvío de ataques con espada (postura).",
                "Incluye las funciones GOTY: reflejos de fuerza, modos de desafío contra jefes y trajes cosméticos.",
                "Herramientas de prótesis de brazo personalizables y sigilo ninja."
            ],
            synopsis: "En el periodo Sengoku de Japón, un lobo de un solo brazo debe rescatar a su joven señor y vengarse de su archienemigo.",
            specs: { developer: "FromSoftware", publisher: "Activision", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 243, 
        name: "Mortal Kombat 11 (latino)", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/976310/header.jpg",
        description: {
            intro: "La versión estándar de la célebre franquicia de lucha que revoluciona las variaciones de luchadores.",
            features: [
                "Completamente doblado al español latino con voces originales.",
                "Gráficos hiperrealistas y el cinematográfico modo historia sobre viajes en el tiempo.",
                "Fatalities viscerales y sistema de Fatal Blows estratégicos."
            ],
            synopsis: "La guardiana del tiempo, Kronika, intenta reiniciar la historia obligando a luchadores del pasado y presente a enfrentarse.",
            specs: { developer: "NetherRealm Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 244, 
        name: "Farming Simulator 22 (textos en español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1248130/header.jpg",
        description: {
            intro: "La simulación agrícola más completa y detallada, que incluye ciclos estacionales e industrias de producción.",
            features: [
                "Más de 400 máquinas y herramientas agrícolas reales de marcas licenciadas como John Deere y Case IH.",
                "Ciclos estacionales con invierno, primavera, verano u otoño que modifican la gestión de cultivos.",
                "Nuevos cultivos como uvas, olivas y sorgo con cadenas de producción completas."
            ],
            synopsis: "Ponte en la piel de un agricultor moderno y construye libremente tu granja en tres entornos americanos y europeos distintos.",
            specs: { developer: "Giants Software", publisher: "Giants Software", platforms: "PS4, PS5", release: "2021", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 245, 
        name: "Call of Duty Modern Warfare 2 Campaign Remastered", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/header.jpg",
        description: {
            intro: "Remasterización visual completa de la icónica campaña de historia de uno de los mejores shooters de la historia.",
            features: [
                "Texturas e iluminación de alta resolución, animaciones mejoradas y audio remasterizado.",
                "Incluye misiones legendarias como 'Cliffhanger', 'The Gulag' y 'Whiskey Hotel'.",
                "Optimizado con fluidez de fotogramas para consolas PS4."
            ],
            synopsis: "Acompaña a la Task Force 141 en una carrera global para detener una conspiración terrorista de alcance mundial.",
            specs: { developer: "Infinity Ward / Beenox", publisher: "Activision", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 246, 
        name: "The Crew Motorfest (textos en español)", 
        platform: "PS4", 
        price: 22000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2698940/header.jpg",
        description: {
            intro: "Un vibrante festival de cultura automovilística ambientado en la paradisíaca isla de O'ahu, Hawái.",
            features: [
                "Mundo abierto tropical hiperdetallado para explorar por tierra, mar y aire.",
                "Listas de reproducción temáticas (Playlists) dedicadas a la cultura de superdeportivos, muscle cars y tuners.",
                "Catálogo con cientos de vehículos oficiales licenciados."
            ],
            synopsis: "Participa en competencias desenfrenadas y eventos temáticos para celebrar lo mejor de la cultura del motor.",
            specs: { developer: "Ubisoft Ivory Tower", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2023", rating: "Everyone 10+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 247, 
        name: "GTA the Trilogy the Definitive Edition (textos en español)", 
        platform: "Combos", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1547000/header.jpg",
        description: {
            intro: "Tres ciudades icónicas en tres historias épicas remasterizadas para la nueva generación.",
            features: [
                "Incluye Grand Theft Auto III, Grand Theft Auto: Vice City y Grand Theft Auto: San Andreas.",
                "Mejoras de iluminación, texturas de alta resolución y controles actualizados al estilo GTA V.",
                "Texto completamente traducido al español."
            ],
            synopsis: "Revive los clásicos que definieron el género de mundo abierto en Liberty City, Vice City y San Andreas.",
            specs: { developer: "Grove Street Games / Rockstar Games", publisher: "Rockstar Games", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 248, 
        name: "NBA 2K25 (textos en español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2878980/header.jpg",
        description: {
            intro: "La experiencia de simulación de baloncesto más realista y competitiva del mercado.",
            features: [
                "Modos Mi CARRERA, MyTEAM y MyNBA con plantillas totalmente actualizadas.",
                "Físicas de tiro, pase y defensa refinadas para un control superior.",
                "Comentarios y menús completamente traducidos al español."
            ],
            synopsis: "Forja tu propia dinastía en la NBA compitiendo con los mejores equipos y leyendas del baloncesto mundial.",
            specs: { developer: "Visual Concepts", publisher: "2K Sports", platforms: "PS4, PS5", release: "2024", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 249, 
        name: "A Way Out (latino)", 
        platform: "Ofertas", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg",
        description: {
            intro: "Una intensa aventura cinematográfica diseñada exclusivamente para jugarse en modo cooperativo.",
            features: [
                "Experiencia de pantalla dividida obligatoria, ya sea en el mismo sofá o en línea.",
                "Controles dinámicos con variados minijuegos, persecuciones, sigilo y tiroteos.",
                "Subtítulos e interfaz totalmente adaptados."
            ],
            synopsis: "Dos reclusos, Leo y Vincent, deben cooperar estrechamente para escapar de prisión y mantenerse prófugos de la justicia.",
            specs: { developer: "Hazelight Studios", publisher: "Electronic Arts", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Cooperativo Local y Online" }
        }
    },
    { 
        id: 250, 
        name: "God of War 3 Remastered (latino)", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg",
        description: {
            intro: "La gloriosa conclusión de la trilogía griega original de Kratos remasterizada a 1080p y 60 FPS.",
            features: [
                "Completamente doblado en español latino.",
                "Combates de escala colosal contra titanes y dioses del Olimpo.",
                "Incluye todos los trajes y contenido descargable lanzado previamente."
            ],
            synopsis: "Kratos desata la furia definitiva contra los dioses griegos que lo traicionaron mientras asciende al Monte Olimpo.",
            specs: { developer: "Santa Monica Studio / Wholesale Algorithms", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 251, 
        name: "Call of Duty WWII (solo inglés)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/476600/header.jpg",
        description: {
            intro: "Retorno a las raíces de la franquicia con una conmovedora historia en la Segunda Guerra Mundial.",
            features: [
                "Voces e interfaz exclusivamente en idioma inglés.",
                "Campaña visceral que retrata el desembarco en Normandía y batallas emblemáticas por Europa.",
                "Modo multijugador clásico de botas en el suelo y terrorífico modo Nazi Zombies."
            ],
            synopsis: "Sigue la fraternidad de la Primera División de Infantería mientras luchan por liberar a Europa de la tiranía nazi.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 252, 
        name: "Gran Turismo 7 (latino)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
        description: {
            intro: "El simulador de conducción real por excelencia de PlayStation que rinde tributo a la cultura del automóvil.",
            features: [
                "Totalmente adaptado y localizado al español latino.",
                "Más de 400 vehículos recreados con una precisión asombrosa y más de 90 pistas.",
                "Regreso del legendario modo Gran Turismo GT Campaign para progresar, modificar y coleccionar coches."
            ],
            synopsis: "Explora todo lo que la cultura del motor tiene para ofrecer, ya seas un corredor competitivo, coleccionista o aficionado a las modificaciones.",
            specs: { developer: "Polyphony Digital", publisher: "Sony Interactive Entertainment", platforms: "PS4, PS5", release: "2022", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 253, 
        name: "Ghost of Tsushima (latino)", 
        platform: "PS4", 
        price: 31000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg",
        description: {
            intro: "Edición con localización y doblaje completo al español latino de la aclamada aventura épica samurái.",
            features: [
                "Audio y menús totalmente en español latino.",
                "Exploración de mundo abierto guiada por elementos de la naturaleza.",
                "Combate preciso con espada samurái y tácticas furtivas de Fantasma."
            ],
            synopsis: "Forja un nuevo camino y libra una guerra no convencional por la libertad de la isla de Tsushima.",
            specs: { developer: "Sucker Punch Productions", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 254, 
        name: "Battlefield 1", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238840/header.jpg",
        description: {
            intro: " Shooter bélico en primera persona ambientado en los encarnizados frentes de la Primera Guerra Mundial.",
            features: [
                "Batallas multijugador masivas de hasta 64 jugadores.",
                "Vehículos históricos como tanques, biplanos, buques acorazados y zepelines gigantes (Behemoths).",
                "Campaña 'Historias de Guerra' narrada desde la perspectiva de diferentes soldados alrededor del mundo."
            ],
            synopsis: "Ábrete paso a través de batallas épicas que van desde las estrechas calles de una ciudad francesa hasta los desiertos del Norte de África.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 256, 
        name: "Watch Dogs 2 (textos en español)", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/447040/header.jpg",
        description: {
            intro: "Aventura de acción e infiltración en mundo abierto centrada en la cultura hacker moderna.",
            features: [
                "Textos y menús en español.",
                "Hackea la infraestructura de San Francisco, dispositivos electrónicos y a cualquier ciudadano.",
                "Utiliza artefactos como drones aéreos y coches radiocontrolados para cumplir objetivos."
            ],
            synopsis: "Ponte en la piel de Marcus Holloway, un brillante joven hacker que se une a DedSec para derribar el sistema invasivo ctOS 2.0.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador Cooperativo y PVP" }
        }
    },
    { 
        id: 257, 
        name: "Crash Bandicoot Bundle N Sane Trilogy + Crash Team Racing Nitro-Fueled", 
        platform: "Combos", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/731490/header.jpg",
        description: {
            intro: "El paquete definitivo de Crash Bandicoot con cuatro juegos completos totalmente rehechos desde cero.",
            features: [
                "Incluye Crash Bandicoot 1, 2 y 3 (N. Sane Trilogy) más la experiencia de carreras CTR Nitro-Fueled.",
                "Gráficos HD deslumbrantes, animaciones renovadas y pistas o niveles remasterizados.",
                "Modos de carreras multijugador local en pantalla dividida y en línea."
            ],
            synopsis: "Disfruta de las plataformas clásicas más famosas y compite a toda velocidad con tus personajes favoritos de la franquicia.",
            specs: { developer: "Vicarious Visions / Beenox", publisher: "Activision", platforms: "PS4", release: "2019", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 258, 
        name: "Tom Clancy’s Ghost Recon Wildlands", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/460930/header.jpg",
        description: {
            intro: "Táctico shooter militar de mundo abierto diseñado para afrontar misiones de libertad absoluta.",
            features: [
                "Enorme mundo abierto centrado en diversos ecosistemas de Sudamérica.",
                "Jugable de principio a fin en solitario o en cooperativo de 4 jugadores.",
                "Amplia personalización de armas, equipamiento y tácticas bélicas."
            ],
            synopsis: "Envía a tu equipo elite de los Ghosts tras las líneas enemigas para desmantelar al cártel de Santa Blanca.",
            specs: { developer: "Ubisoft Paris", publisher: "Ubisoft", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 259, 
        name: "Batman Arkham Collection (latino)", 
        platform: "Combos", 
        price: 9000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg",
        description: {
            intro: "Trilogía definitiva de la saga Arkham desarrollada por Rocksteady con todas las expansiones incluidas.",
            features: [
                "Incluye Batman: Arkham Asylum, Batman: Arkham City y Batman: Arkham Knight.",
                "Doblaje y subtítulos adaptados al español latino.",
                "Contiene todo el contenido posterior al lanzamiento (Season Pass, DLCs de personajes y trajes)."
            ],
            synopsis: "Conviértete en el Caballero de la Noche y enfréntate a los villanos más peligrosos de Gotham en la trilogía definitiva de superhéroes.",
            specs: { developer: "Rocksteady Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 260, 
        name: "Mortal Kombat 11 Ultimate (latino)", 
        platform: "PS4", 
        price: 29000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg",
        description: {
            intro: "Edición definitiva de Mortal Kombat 11 localizada íntegramente en español latino.",
            features: [
                "Doblaje y localización completa al español latino.",
                "Incluye Kombat Pack 1, expansión Aftermath y Kombat Pack 2.",
                "37 personajes jugables y decenas de escenarios icónicos."
            ],
            synopsis: "Toma el control de los defensores de la Earthrealm en la experiencia completa de combate cinematográfico.",
            specs: { developer: "NetherRealm Studios", publisher: "Warner Bros. Games", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 261, 
        name: "Naruto Shippuden Ultimate Ninja Storm 4 (textos en español)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/349040/header.jpg",
        description: {
            intro: "La épica conclusión de la saga Storm con los combates más espectaculares del anime de Naruto.",
            features: [
                "Textos e interfaz totalmente en español.",
                "Plantilla masiva con más de 100 ninja jugables.",
                "Nuevas mecánicas de cambio de líder (Leader Swap) y batallas contra jefes gigantes."
            ],
            synopsis: "Revive los momentos culminantes de la Cuarta Gran Guerra Ninja en una experiencia visualmente idéntica al anime.",
            specs: { developer: "CyberConnect2", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2016", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 262, 
        name: "Cuphead (latino)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg",
        description: {
            intro: "Juego de acción clásico centrado en batallas contra jefes con estética de dibujos animados de 1930.",
            features: [
                "Textos y menús localizados en español latino.",
                "Visuales dibujados a mano en papel y acuarela con banda sonora original de jazz.",
                "Modo cooperativo local para superar sus implacables niveles de dificultad."
            ],
            synopsis: "Juega como Cuphead o Mugman mientras viajas por mundos extraños para pagar tu deuda con el Diablo.",
            specs: { developer: "Studio MDHR", publisher: "Studio MDHR", platforms: "PS4", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 263, 
        name: "Days Gone (latino)", 
        platform: "PS4", 
        price: 29000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1259420/header.jpg",
        description: {
            intro: "Aventura de acción en mundo abierto ambientada en una despiadada tierra salvaje tras una devastadora pandemia.",
            features: [
                "Totalmente doblado y localizado al español latino.",
                "Enfréntate a masivas hordas de Engendros que se mueven de forma dinámica.",
                "Conduce y mejora tu moto de viajero mientras explora el peligroso noroeste del Pacífico."
            ],
            synopsis: "El motero y cazador de recompensas Deacon St. John lucha por sobrevivir y buscar una razón para seguir adelante en un mundo desolado.",
            specs: { developer: "Bend Studio", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 264, 
        name: "Need for Speed (2015, latino)", 
        platform: "Ofertas", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262540/header.jpg",
        description: {
            intro: "Reinicio de la saga centrado en la cultura del tuning nocturno y las carreras clandestinas urbanas.",
            features: [
                "Doblaje e interfaz en español latino.",
                "Extensa personalización visual y mecánica de coches con marcas de rendimiento reales.",
                "Cinemáticas con actores reales entrelazadas con la acción en la ciudad de Ventura Bay."
            ],
            synopsis: "Gánate la reputación en las calles nocturnas de Ventura Bay mientras te conviertes en el ícono automovilístico definitivo.",
            specs: { developer: "Ghost Games", publisher: "Electronic Arts", platforms: "PS4", release: "2015", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 265, 
        name: "FIFA 22 gallego", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1506830/header.jpg",
        description: {
            intro: "Edición con relatos en español de España del popular simulador futbolístico.",
            features: [
                "Comentarios en español castellano (España).",
                "Modo Carrera mejorado con la posibilidad de crear y personalizar tu propio club.",
                "Innovaciones en la física del balón y comportamiento de los guardametas."
            ],
            synopsis: "Compite en las ligas internacionales más prestigiosas con miles de jugadores y cientos de equipos oficiales.",
            specs: { developer: "EA Vancouver", publisher: "Electronic Arts", platforms: "PS4", release: "2021", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 266, 
        name: "MAFIA Trilogy", 
        platform: "Combos", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg",
        description: {
            intro: "Colección que reúne los tres títulos de la aclamada saga del crimen organizado.",
            features: [
                "Incluye Mafia Definitive Edition (remake completo), Mafia II Definitive Edition y Mafia III Definitive Edition.",
                "Abarca varias décadas del crimen organizado en Estados Unidos.",
                "Incluye todos los contenidos descargables y expansiones de la franquicia."
            ],
            synopsis: "Vive la vida de un mafioso a través de tres eras distintas del crimen organizado en Norteamérica.",
            specs: { developer: "Hangar 13", publisher: "2K Games", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 267, 
        name: "Uncharted 4 A Thief’s End + Uncharted the Lost Legacy", 
        platform: "Combos", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg",
        description: {
            intro: "Paquete que reúne la entrega final de Nathan Drake y la historia independiente de Chloe Frazer.",
            features: [
                "Incluye Uncharted 4: El Desenlace del Ladrón y Uncharted: El Legado Perdido.",
                "Entornos cinemáticos impresionantes, tiroteos y resolución de acertijos.",
                "Totalmente doblados y localizados al español latino."
            ],
            synopsis: "Acompaña a Nathan Drake y Chloe Frazer en dos aventuras inolvidables en busca de tesoros legendarios.",
            specs: { developer: "Naughty Dog", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2017", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 268, 
        name: "Dragon Ball FighterZ (textos en español)", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/header.jpg",
        description: {
            intro: "Espectacular juego de luchas 2.5D desarrollado por los maestros del género Arc System Works.",
            features: [
                "Textos y menús en español con voces originales en japonés e inglés.",
                "Combates frenéticos de 3 contra 3 con relevos y asistencias tácticas.",
                "Estilo visual idéntico a la animación del anime."
            ],
            synopsis: "Enfréntate en encarnizadas batallas con los luchadores más poderosos del universo Dragon Ball.",
            specs: { developer: "Arc System Works", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2018", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 269, 
        name: "Cyberpunk 2077 (textos en español)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
        description: {
            intro: "RPG de acción y aventura en mundo abierto ambientado en la megalópolis de Night City.",
            features: [
                "Textos y menús traducidos al español.",
                "Personaliza el ciberware, las habilidades y el estilo de juego de tu personaje.",
                "Explora una ciudad gigantesca donde tus elecciones moldean la historia."
            ],
            synopsis: "Ponte en la piel de V, un mercenario urbano en busca de un implante único que permite alcanzar la inmortalidad.",
            specs: { developer: "CD Projekt Red", publisher: "CD Projekt", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 270, 
        name: "Call of Duty Modern Warfare 3 (latino)", 
        platform: "PS4", 
        price: 30000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/header.jpg",
        description: {
            intro: "Secuela directa de Modern Warfare II con una campaña táctica y multijugador renovado.",
            features: [
                "Doblaje y textos totalmente en español latino.",
                "Misiones de combate abierto en la campaña que ofrecen múltiples enfoques tácticos.",
                "Incluye los 16 mapas multijugador clásicos de MW2 (2009) modernizados."
            ],
            synopsis: "El capitán Price y la Task Force 141 se enfrentan a la amenaza definitiva del ultranacionalista Vladimir Makarov.",
            specs: { developer: "Sledgehammer Games / Infinity Ward", publisher: "Activision", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 271, 
        name: "Call of Duty Modern Warfare Remastered", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/476600/header.jpg",
        description: {
            intro: "La remasterización completa del histórico Call of Duty 4: Modern Warfare.",
            features: [
                "Gráficos HD, texturas actualizadas y físicas de renderizado mejoradas.",
                "Revive la emblemática campaña con misiones como 'All Ghillied Up'.",
                "Modo multijugador clásico con los mapas más icónicos del juego original."
            ],
            synopsis: "Acompaña al sargento 'Soap' MacTavish y al capitán Price en una crisis militar de alcance global.",
            specs: { developer: "Raven Software / Infinity Ward", publisher: "Activision", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 272, 
        name: "The Crew 2 (latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg",
        description: {
            intro: "Juego de carreras en mundo abierto que te permite explorar todo el mapa de EE. UU. por tierra, mar y aire.",
            features: [
                "Totalmente localizado al español latino.",
                "Cambia de forma instantánea entre coche, moto, lancha o avión con un solo botón.",
                "Diversas disciplinas de motor: Street Racing, Off-road, Freestyle y Pro Racing."
            ],
            synopsis: "Compite por toda Norteamérica para convertirte en el campeón definitivo de los deportes de motor.",
            specs: { developer: "Ubisoft Ivory Tower", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Everyone 10+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 273, 
        name: "Call of Duty Black Ops 3 Zombies Chronicles Edition (solo inglés)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg",
        description: {
            intro: "Edición especial que incluye el juego completo más 8 mapas clásicos del modo Zombis remasterizados.",
            features: [
                "Voces y textos exclusivamente en idioma inglés.",
                "Incluye mapas remasterizados de World at War, Black Ops y Black Ops II.",
                "Campaña futurista e intenso modo multijugador con especialistas."
            ],
            synopsis: "Enfréntate a la experiencia zombi definitiva junto con el combate táctico de movimiento encadenado.",
            specs: { developer: "Treyarch", publisher: "Activision", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Multijugador y Cooperativo Online" }
        }
    },
    { 
        id: 274, 
        name: "Resident Evil 4 (2005) (latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/254700/header.jpg",
        description: {
            intro: "La versión remasterizada en HD del legendario clásico que revolucionó el género del survival horror.",
            features: [
                "Textos y menús en español latino.",
                "Rendimiento fluido a 60 FPS a resolución 1080p.",
                "Incluye todo el contenido adicional posterior, como el epílogo 'Separate Ways' de Ada Wong."
            ],
            synopsis: "Leon S. Kennedy viaja a una remota villa europea dominada por una peligrosa secta para rescatar a la hija del presidente.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 275, 
        name: "Devil May Cry 5 + Vergil (textos en español)", 
        platform: "Ofertas", 
        price: 9000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg",
        description: {
            intro: "Regreso triunfal de la aclamada franquicia de hack and slash estilizado con motor RE Engine.",
            features: [
                "Textos e interfaz en español.",
                "Incluye al personaje jugable Vergil con su propio conjunto de movimientos únicos.",
                "Tres personajes jugables con estilos de combate radicalmente distintos: Nero, Dante y V."
            ],
            synopsis: "Enfréntate a una invasión demoníaca en Red Grave City desatando combos veloces y espectaculares.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 276, 
        name: "Horizon Forbidden West (latino)", 
        platform: "Ofertas", 
        price: 28000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg",
        description: {
            intro: "La épica secuela del viaje de Aloy a través de una frontera imponente y peligrosa.",
            features: [
                "Doblaje y localización completa al español latino.",
                "Nuevos ecosistemas, ruinas antiguas y colosales máquinas temibles.",
                "Sistemas de combate táctico con arcos, trampas y herramientas de exploración como la gancho y el ala delta."
            ],
            synopsis: "Aloy viaja al Oeste Prohibido para investigar una misteriosa plaga que amenaza con destruir la biosfera de la Tierra.",
            specs: { developer: "Guerrilla Games", publisher: "Sony Interactive Entertainment", platforms: "PS4, PS5", release: "2022", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 277, 
        name: "Far Cry 5", 
        platform: "PS4", 
        price: 13500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/552500/header.jpg",
        description: {
            intro: "Shooter en primera persona de mundo abierto ambientado en la ficticia región de Hope County, Montana.",
            features: [
                "Enfréntate al culto doomsday 'La Puerta del Edén' liderado por Joseph Seed.",
                "Campaña completa jugable de manera individual o en modo cooperativo de dos jugadores.",
                "Recluta pistoleros a sueldo y animales amaestrados para desmantelar la secta."
            ],
            synopsis: "Asume el rol de un ayudante del sheriff atrapado en territorio enemigo para iniciar una resistencia contra un culto fanático.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 278, 
        name: "ARK Survival Evolved (latino)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/346110/header.jpg",
        description: {
            intro: "Juego masivo de supervivencia en mundo abierto poblado por dinosaurios y criaturas prehistóricas.",
            features: [
                "Textos e interfaz en español latino.",
                "Doma, entrena, cabalga y cría a más de 100 dinosaurios y bestias mágicas.",
                "Construye bases, fabrica armas y colabora con otros jugadores en servidores masivos."
            ],
            synopsis: "Despiertas varado y desnudo en las costas de una isla misteriosa llamada ARK, donde deberás cazar, cosechar y construir para sobrevivir.",
            specs: { developer: "Studio Wildcard", publisher: "Studio Wildcard", platforms: "PS4", release: "2017", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 279, 
        name: "MAFIA Definitive Edition", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg",
        description: {
            intro: "Remake completo desde cero del legendario clásico del género policíaco de crimen organizado.",
            features: [
                "Visuales en alta resolución, nuevo motor gráfico y guión ampliado.",
                "Recreación detallada de la ciudad ficticia de Lost Heaven en los años 1930.",
                "Banda sonora original reorquestada y física de vehículos de época."
            ],
            synopsis: "Tras un encontronazo con la mafia, el taxista Tommy Angelo se ve arrastrado al peligroso mundo del crimen organizado.",
            specs: { developer: "Hangar 13", publisher: "2K Games", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 280, 
        name: "Battlefield V Definitive Edition", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238810/header.jpg",
        description: {
            intro: "La versión definitiva del shooter bélico centrado en los frentes olvidados de la Segunda Guerra Mundial.",
            features: [
                "Incluye todo el contenido jugable lanzado en las 7 temporadas (armas, vehículos y cosméticos).",
                "Batallas multijugador masivas como las Grandes Operaciones y el modo Firestorm.",
                "Mecánicas de patrulla, fortificación de trincheras y balística mejorada."
            ],
            synopsis: "Experimenta la brutalidad del conflicto bélico más grande de la historia en combates terrestres, aéreos y marítimos.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 281, 
        name: "WRC 9", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1267540/header.jpg",
        description: {
            intro: "El juego oficial de simulación de carreras de rally del World Rally Championship.",
            features: [
                "Tres nuevos rallies oficiales: Kenia, Japón y Nueva Zelanda.",
                "Físicas mejoradas de suspensión, frenado y transferencia de pesos sobre asfalto, grava y nieve.",
                "Modo carrera profundo con gestión de equipo, mecánicos y calendario."
            ],
            synopsis: "Ponte al volante de los coches oficiales del WRC y compite contra los pilotos reales en las condiciones más exigentes del mundo.",
            specs: { developer: "KT Racing", publisher: "Nacon", platforms: "PS4", release: "2020", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 282, 
        name: "Overcooked! 2 (latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440000/header.jpg",
        description: {
            intro: "Caótico juego de cocina cooperativo para disfrutar entre amigos o en familia.",
            features: [
                "Textos y menús en español latino.",
                "Nuevas dinámicas de cocina como lanzar ingredientes entre cocineros.",
                "Cocinas dinámicas que cambian en tiempo real (globos aerostáticos, balsas, minas)."
            ],
            synopsis: "Regresa al Reino Cebolla para armar tu equipo de chefs y salvar el mundo del hambre del temible 'Pan-demonium'.",
            specs: { developer: "Ghost Town Games / Team17", publisher: "Team17", platforms: "PS4", release: "2018", rating: "Everyone", modes: "Un jugador / Cooperativo Local y Online" }
        }
    },
    { 
        id: 283, 
        name: "God of War Ragnarok (textos en español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
        description: {
            intro: "La aclamada aventura mitológica que concluye la saga nórdica de Kratos y Atreus.",
            features: [
                "Textos y menús adaptados al español.",
                "Explora los Nueve Reinos completos combatiendo monstruos y dioses nórdicos.",
                "Sistema de combate mejorado con nuevas habilidades, runas y armas para Kratos y Atreus."
            ],
            synopsis: "Padre e hijo deben emprender un viaje mítico en busca de respuestas antes de que estalle la batalla profetizada que destruirá el mundo.",
            specs: { developer: "Santa Monica Studio", publisher: "Sony Interactive Entertainment", platforms: "PS4, PS5", release: "2022", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 284, 
        name: "Gang Beasts (latino)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/285900/header.jpg",
        description: {
            intro: "Hilarante juego multijugador de peleas absurdas con personajes gelatinosos y físicas absurdas.",
            features: [
                "Localización al español latino.",
                "Escenarios peligrosos con elementos trampa como incitadores, andamios, camiones o trituradoras.",
                "Personalización disparatada de personajes."
            ],
            synopsis: "Pelea, agarra, empuja y arroja a tus amigos fuera del escenario en la violenta y cómica metrópolis de Urbe Ubre.",
            specs: { developer: "Boneloaf", publisher: "Double Fine / Boneloaf", platforms: "PS4", release: "2017", rating: "Everyone 10+", modes: "Multijugador Local y Online" }
        }
    },
    { 
        id: 285, 
        name: "Need for Speed Payback (latino)", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1262580/header.jpg",
        description: {
            intro: "Conducción de acción blockbuster ambientada en el submundo de las apuestas de Fortune Valley.",
            features: [
                "Doblaje y textos en español latino.",
                "Tres personajes jugables con estilos de conducción propios: Carrera, Derrape y Campo a través.",
                "Encuentra coches abandonados en el mapa para restaurarlos desde cero."
            ],
            synopsis: "Reúne a tu equipo para vengarte del cártel 'The House', que controla los casinos y la policía de la ciudad.",
            specs: { developer: "Ghost Games", publisher: "Electronic Arts", platforms: "PS4", release: "2017", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 286, 
        name: "Marvel’s Spiderman Miles Morales (latino)", 
        platform: "PS4", 
        price: 31000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg",
        description: {
            intro: "Aventura de acción en mundo abierto enfocada en el ascenso de Miles Morales como nuevo Spider-Man.",
            features: [
                "Doblaje e interfaz completos en español latino.",
                "Poderes biomecánicos inéditos como los ataques de veneno bioeléctrico y camuflaje maestro.",
                "Gran representación de la Nueva York invernal durante las fiestas navideñas."
            ],
            synopsis: "Miles Morales debe adaptarse a su nuevo hogar mientras sigue los pasos de su mentor Peter Parker para defender Nueva York.",
            specs: { developer: "Insomniac Games", publisher: "Sony Interactive Entertainment", platforms: "PS4, PS5", release: "2020", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 287, 
        name: "Outlast 2 (latino)", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/414700/header.jpg",
        description: {
            intro: "Intensa experiencia de horror psicológico en primera persona ambientada en el desierto de Arizona.",
            features: [
                "Subtítulos e interfaz totalmente en español latino.",
                "Mecánica de cámara de video con visión nocturna y micrófono direccional.",
                "Enfoque en la supervivencia pura: esconderse, correr y gestionar la batería."
            ],
            synopsis: "El periodista Blake Langermann investiga el misterioso asesinato de una mujer embarazada en el desolado desierto de Arizona, descubriendo un culto fanático apocalíptico.",
            specs: { developer: "Red Barrels", publisher: "Red Barrels", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 288, 
        name: "Bloodborne", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/900000/header.jpg",
        description: {
            intro: "Aclamado RPG de acción gótico y lovecraftiano desarrollado por FromSoftware y Hidetaka Miyazaki.",
            features: [
                "Combate veloz y agresivo enfocado en la esquiva y el uso de armas transformables.",
                "Exploración de la oscura y decrépita ciudad victorigótica de Yharnam.",
                "Mazmorras de los Cálices (Chalice Dungeons) procedimentales para jugar en solitario o cooperativo."
            ],
            synopsis: "Un Cazador llega a Yharnam buscando la sangre curativa, solo para verse atrapado en la Noche de la Cacería infestada de bestias y horrores cósmicos.",
            specs: { developer: "FromSoftware / Japan Studio", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador y Cooperativo Online" }
        }
    },
    { 
        id: 289, 
        name: "InFAMOUS Second Son", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/900001/header.jpg",
        description: {
            intro: "Aventura de acción en mundo abierto ambientada en una Seattle fuertemente vigilada por fuerzas militares.",
            features: [
                "Variedad de poderes sobrehumanos como humo, neón, video y hormigón.",
                "Sistema de karma dinámico donde tus decisiones moldean la historia y el desarrollo de poderes.",
                "Recreación detallada e interactiva de la ciudad de Seattle."
            ],
            synopsis: "Delsin Rowe descubre sus habilidades superhumanas de Conductor y debe enfrentarse al Departamento de Protección Unificada (D.U.P.) para salvar a su tribu.",
            specs: { developer: "Sucker Punch Productions", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2014", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 290, 
        name: "Crash Bandicoot Quadrilogy Bundle", 
        platform: "PS4", 
        price: 40000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/606520/header.jpg",
        description: {
            intro: "La colección definitiva de plataformas que incluye las cuatro entregas principales de Crash Bandicoot.",
            features: [
                "Incluye Crash Bandicoot N. Sane Trilogy (juegos 1, 2 y 3) más Crash Bandicoot 4: It's About Time.",
                "Decenas de niveles llenos de retos, frutas Wumpa y gemas ocultas.",
                "Visuales completamente renovados y estilos de juego modernos."
            ],
            synopsis: "Acompaña a Crash y Coco a través del tiempo y el espacio para detener los malvados planes del Doctor Neo Cortex.",
            specs: { developer: "Toys for Bob / Vicarious Visions", publisher: "Activision", platforms: "PS4", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local pasar-mando" }
        }
    },
    { 
        id: 291, 
        name: "Outlast (latino)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/238010/header.jpg",
        description: {
            intro: "El revolucionario juego de terror de supervivencia en primera persona ambientado en un psiquiátrico abandonado.",
            features: [
                "Subtítulos y menús localizados al español latino.",
                "Sin armas ni combate: depende únicamente de la huida, el sigilo y la ocultación.",
                "Uso imprescindible de la cámara nocturna para navegar en la oscuridad total."
            ],
            synopsis: "El periodista independiente Miles Upshur se adentra en el manicomio de Mount Massive tras recibir un soplo anónimo sobre aberrantes experimentos.",
            specs: { developer: "Red Barrels", publisher: "Red Barrels", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 292, 
        name: "Outlast Trinity (latino)", 
        platform: "PS4", 
        price: 39000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/414700/header.jpg",
        description: {
            intro: "Paquete definitivo que reúne toda la aterradora franquicia de supervivencia Outlast.",
            features: [
                "Incluye Outlast 1, la expansión Whistleblower y Outlast 2.",
                "Localización en español latino.",
                "Horas de puro terror psicológico y tensión constante."
            ],
            synopsis: "Explora los oscuros secretos del manicomio Mount Massive y las escalofriantes sectas del desierto de Arizona en una sola colección.",
            specs: { developer: "Red Barrels", publisher: "Red Barrels", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 293, 
        name: "Far Cry 6 (latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/header.jpg",
        description: {
            intro: "Shooter en primera persona de mundo abierto ambientado en Yara, una isla caribeña congelada en el tiempo.",
            features: [
                "Doblaje e interfaz adaptados al español latino.",
                "Combate de guerrilla con armamento improvisado 'Resolver' y compañeros animales (Amigos).",
                "Exploración de selvas, playas y la capital Yarana, Esperanza."
            ],
            synopsis: "Encarna a Dani Rojas y únete a una revolución moderna para derrocar al dictador Antón Castillo y a su hijo Diego.",
            specs: { developer: "Ubisoft Toronto", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 294, 
        name: "Dark Souls Remastered", 
        platform: "PS4", 
        price: 43000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570940/header.jpg",
        description: {
            intro: "La versión remasterizada del icónico e influyente RPG de acción que definió un género.",
            features: [
                "Incluye el juego principal más el DLC 'Artorias of the Abyss'.",
                "Rendimiento optimizado a 60 FPS y resolución 1080p.",
                "Mundo intrincadamente interconectado con combate táctico y exigente."
            ],
            synopsis: "Reaviva la Primera Llama o inicia la Era de la Oscuridad mientras recorres el reino místico y decrépito de Lordran.",
            specs: { developer: "FromSoftware / QLOC", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 295, 
        name: "Dying Light Standard Edition", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/239140/header.jpg",
        description: {
            intro: "Juego de supervivencia y acción en primera persona ambientado en un peligroso mundo abierto infectado.",
            features: [
                "Sistema de movimiento fluido basado en parkour urbano.",
                "Ciclo día/noche dinámico donde los infectados se vuelven hiperagresivos al caer el sol.",
                "Creación y modificación de cientos de armas cuerpo a cuerpo improvisadas."
            ],
            synopsis: "El agente encubierto Kyle Crane debe sobrevivir en la ciudad en cuarentena de Harran disputada entre infectados y facciones de supervivientes.",
            specs: { developer: "Techland", publisher: "Techland", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 296, 
        name: "Lies of P (textos en español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1627720/header.jpg",
        description: {
            intro: "Un apasionante Soulslike inspirado en la clásica historia de Pinocho y ambientado en la Belle Époque.",
            features: [
                "Textos y menús en español.",
                "Sistema de ensamble de armas combinando empuñaduras y hojas dinámicamente.",
                "Mecánica de mentiras que afecta el desarrollo de la historia y el destino del personaje."
            ],
            synopsis: "Despiertas en la desolada ciudad de Krat, infestada de marionetas enloquecidas, y debes buscar a Geppetto para encontrar una forma de convertirte en humano.",
            specs: { developer: "NEOWIZ / Round8 Studio", publisher: "NEOWIZ", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 297, 
        name: "Assassin’s Creed Odyssey (textos en español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg",
        description: {
            intro: "Épico RPG de acción de mundo abierto ambientado en la Antigua Grecia durante la Guerra del Peloponeso.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Elige jugar como Alexios o Kassandra y toma decisiones que alteran la trama.",
                "Batallas navales encarnizadas y enfrentamientos masivos de 150 vs 150 soldados."
            ],
            synopsis: "Pasa de ser un mercenario paria a un héroe legendario descubriendo la verdad sobre tu misterioso pasado familiar.",
            specs: { developer: "Ubisoft Quebec", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 298, 
        name: "Far Cry Primal", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/371660/header.jpg",
        description: {
            intro: "Innovadora entrega de la saga Far Cry ambientada en la Edad de Piedra.",
            features: [
                "Dominio de bestias: doma depredadores como mamuts, tigres dientes de sable y lobos.",
                "Fabrica armas de piedra y hueso como lanzas, arcos y garrotes.",
                "Enfréntate a tribus enemigas para asegurar el dominio de la tierra de Oros."
            ],
            synopsis: "Encarna a Takkar, el último superviviente de su grupo de caza, mientras intenta prosperar en una era donde el hombre era la presa.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 299, 
        name: "Dakar 18 (textos en español)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/768200/header.jpg",
        description: {
            intro: "Simulación realista de carreras de rallies cross-country basada en el famoso raid anual organizado por A.S.O.",
            features: [
                "Textos y menús en español.",
                "Enorme mundo abierto navegable mediante libro de ruta (roadbook) y brújula.",
                "Incluye las 5 categorías oficiales: coches, motos, camiones, quads y SxS."
            ],
            synopsis: "Compite en intensas carreras todoterreno a través de Perú, Bolivia y Argentina superando desiertos y dunas extremas.",
            specs: { developer: "Bigmoon Entertainment", publisher: "Deep Silver", platforms: "PS4", release: "2018", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 300, 
        name: "Resident Evil 8 Village", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg",
        description: {
            intro: "La octava entrega principal de la legendaria saga de survival horror en primera persona.",
            features: [
                "Visuales detallados gracias al motor RE Engine.",
                "Nuevos enemigos siniestros como hombres lobo (Lycan) y vampiros.",
                "Sistema de gestión de inventario estilo maletín y mercader (El Duque) para comprar/mejorar armas."
            ],
            synopsis: "Ethan Winters viaja a un pueblo nevado de Europa del Este en busca de su hija secuestrada, enfrentándose a los oscuros señores del castillo y sus alrededores.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 301, 
        name: "Raccoon City Edition", 
        platform: "Combos", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/883710/header.jpg",
        description: {
            intro: "Paquete especial que incluye la reimaginación completa de los dos mayores clásicos de Raccoon City.",
            features: [
                "Incluye Resident Evil 2 Remake y Resident Evil 3 Remake.",
                "Desarrollado en el potente motor RE Engine con cámara sobre el hombro.",
                "Contiene también el multijugador asimétrico Resident Evil Resistance."
            ],
            synopsis: "Vive la caída de Raccoon City desde la perspectiva de Leon S. Kennedy, Claire Redfield y Jill Valentine.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 302, 
        name: "The Warriors (textos en español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/900002/header.jpg",
        description: {
            intro: "El aclamado título de culto de Rockstar Games basado en la película clásica de 1979.",
            features: [
                "Subtítulos e interfaz en español.",
                "Combate callejero sangriento y brutal enfocado en el brawling de bandas.",
                "Modo cooperativo para dos jugadores en la misma pantalla."
            ],
            synopsis: "Acusados injustamente por la muerte del líder de la banda más grande de Nueva York, Los Guerreros deben luchar para regresar a su territorio en Coney Island.",
            specs: { developer: "Rockstar Toronto", publisher: "Rockstar Games", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 303, 
        name: "Battlefield 1 Revolution", 
        platform: "PS4", 
        price: 43000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238840/header.jpg",
        description: {
            intro: "La experiencia definitiva de Battlefield 1 que incluye el juego base y todo el contenido del Premium Pass.",
            features: [
                "Incluye las 4 expansiones: They Shall Not Pass, In the Name of the Tsar, Turning Tides y Apocalypse.",
                "Más de 20 mapas multijugador nuevos, nuevas armas, clases de élite y vehículos.",
                "Experiencia de guerra total de la Primera Guerra Mundial con batallas de 64 jugadores."
            ],
            synopsis: "Sumérgete en la Gran Guerra y participa en los conflictos bélicos más intensos a través del globo.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 304, 
        name: "Dying Light 2 Stay Human (textos en español)", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/534380/header.jpg",
        description: {
            intro: "RPG de acción en mundo abierto centrado en el parkour y la supervivencia en un futuro posapocalíptico.",
            features: [
                "Textos e interfaz en español.",
                "Parkour mejorado y fluido para explorar libremente la vasta ciudad de 'Villedor'.",
                "Toma de decisiones con un impacto directo en la estructura y el equilibrio de la ciudad."
            ],
            synopsis: "Como Aiden Caldwell, un peregrino con habilidades increíbles, debes encontrar respuestas sobre tu pasado en el último baluarte de la humanidad.",
            specs: { developer: "Techland", publisher: "Techland", platforms: "PS4, PS5", release: "2022", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 305, 
        name: "Resident Evil 4 Remake + DLC Separate Ways PS4", 
        platform: "PS4", 
        price: 31000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg",
        description: {
            intro: "Remake magistral de Resident Evil 4 empaquetado junto con la historia secundaria de Ada Wong.",
            features: [
                "Incluye el juego principal completamente reinventado y el DLC expansivo 'Separate Ways'.",
                "Gráficos hiperrealistas, combate afinado con parry de cuchillo y atmósfera de terror acentuada.",
                "Localización al español."
            ],
            synopsis: "Acompaña a Leon S. Kennedy en la rescate de la hija del presidente y descubre la perspectiva paralela de la agente Ada Wong.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 306, 
        name: "Back 4 Blood (latino)", 
        platform: "Ofertas", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/924970/header.jpg",
        description: {
            intro: "Frenético shooter en primera persona cooperativo creado por los desarrolladores de Left 4 Dead.",
            features: [
                "Doblaje y localización completa al español latino.",
                "Sistema de cartas dinámico para modificar las ventajas del equipo y los desafíos de cada partida.",
                "Campaña cooperativa de 4 jugadores y modo multijugador competitivo PvP."
            ],
            synopsis: "Únete a los 'Limpiadores' para erradicar a las hordas de parásitos infectados conocidos como los Infectados y recuperar el mundo.",
            specs: { developer: "Turtle Rock Studios", publisher: "Warner Bros. Games", platforms: "PS4, PS5", release: "2021", rating: "Mature 17+", modes: "Un jugador / Cooperativo y PVP Online" }
        }
    },
    { 
        id: 307, 
        name: "Far Cry 6 Game of the Year Edition (latino)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2369390/header.jpg",
        description: {
            intro: "La versión más completa de Far Cry 6 con todo el contenido adicional y la expansión surrealista.",
            features: [
                "Doblaje e interfaz en español latino.",
                "Incluye el juego base, el Pase de Temporada (con las misiones de Vaas, Pagan Min y Joseph Seed) y la expansión 'Sinrumbo entre mundos'.",
                "Paquete Ultimate con múltiples atuendos y armas especiales."
            ],
            synopsis: "Únete a la guerrilla de Yara y vive la experiencia completa enfrentándote a la tiranía de Antón Castillo.",
            specs: { developer: "Ubisoft Toronto", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2022", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 308, 
        name: "Naruto X Boruto Ultimate Ninja Storm Connections (latino)", 
        platform: "Ofertas", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1020790/header.jpg",
        description: {
            intro: "Juego de lucha definitivo que celebra el 20 aniversario del anime de Naruto.",
            features: [
                "Doblaje al español latino con el elenco original del anime.",
                "El plantel de ninjas jugables más grande de la historia de la saga (más de 130 personajes).",
                "Incluye modo de historia especial enfocado en Boruto creado exclusivamente para este juego."
            ],
            synopsis: "Revive momentos clave de la historia de Naruto y Sasuke junto con un arco argumentsl completamente original protagonizado por Boruto.",
            specs: { developer: "CyberConnect2", publisher: "Bandai Namco Entertainment", platforms: "PS4, PS5", release: "2023", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 309, 
        name: "Resident Evil 3", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/952060/header.jpg",
        description: {
            intro: "Reimaginación moderna del clásico survival horror enfocado en la huida del implacable Nemesis.",
            features: [
                "Voces y textos traducidos al español.",
                "Gráficos fotorrealistas con RE Engine y combate fluido con esquiva táctica.",
                "Incluye el modo multijugador en línea 4vs1 Resident Evil Resistance."
            ],
            synopsis: "Jill Valentine intenta escapar de una Raccoon City sumida en el caos mientras es acechada incansablemente por la bioarma Nemesis.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 310, 
        name: "Diablo IV (latino)", 
        platform: "PS4", 
        price: 49000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg",
        description: {
            intro: "La experiencia RPG de acción de mundo abierto definitiva donde deberás erradicar incontables demonios.",
            features: [
                "Localización y doblaje completo al español latino.",
                "5 clases jugables únicas con amplios árboles de habilidades y personalización visual.",
                "Mundo abierto compartido de Santuario con jefes de mundo, eventos y mazmorras inacabables."
            ],
            synopsis: "Lilith ha regresado a Santuario convocada por un ritual oscuro, sumiendo al mundo en una era de sufrimiento y desesperación.",
            specs: { developer: "Blizzard Entertainment", publisher: "Blizzard Entertainment", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador / Multijugador y Cooperativo Online" }
        }
    },
    { 
        id: 287, 
        name: "Sifu (textos en español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2138710/header.jpg",
        description: {
            intro: "Intenso beat 'em up de artes marciales en tercera persona con una mecánica de envejecimiento única.",
            features: [
                "Textos y menús en español.",
                "Mecánica de resurrección donde el personaje envejece con cada muerte, volviéndose más fuerte pero con menos salud.",
                "Combate fluido y exigente basado en el estilo Pak Mei Kung Fu."
            ],
            synopsis: "Un joven estudiante de Kung Fu busca venganza contra los cinco asesinos que masacraron a su familia.",
            specs: { developer: "Sloclap", publisher: "Sloclap", platforms: "PS4, PS5", release: "2022", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 288, 
        name: "Resident Evil 7 Biohazard", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/418370/header.jpg",
        description: {
            intro: "Reinvención de la saga que regresa al survival horror puro en una claustrofóbica perspectiva en primera persona.",
            features: [
                "Voces y textos en español.",
                "Atmósfera opresiva con resolución de acertijos y gestión escasa de recursos.",
                "Motor RE Engine para una inmersión y nivel de detalle hiperrealista."
            ],
            synopsis: "Ethan Winters viaja a una plantación abandonada en Luisiana buscando a su esposa desaparecida, encontrando a la desquiciada familia Baker.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 289, 
        name: "Resident Evil 6 (latino)", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221040/header.jpg",
        description: {
            intro: "Entrega llena de acción dramática con múltiples campañas interconectadas a nivel global.",
            features: [
                "Textos y voces localizados al español latino.",
                "Cuatro historias entrelazadas con personajes icónicos como Leon S. Kennedy, Chris Redfield y Ada Wong.",
                "Modo cooperativo tanto en pantalla dividida como en línea."
            ],
            synopsis: "Una amenaza bioterrorista a escala mundial une a los agentes más experimentados para detener el virus C.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Cooperativo Local y Online" }
        }
    },
    { 
        id: 290, 
        name: "Tomb Raider Definitive Survivor Trilogy (latino)", 
        platform: "Combos", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg",
        description: {
            intro: "Colección completa que reúne la trilogía completa del origen de la legendaria Lara Croft.",
            features: [
                "Incluye Tomb Raider Definitive Edition, Rise of the Tomb Raider 20 Year Celebration y Shadow of the Tomb Raider Definitive Edition.",
                "Totalmente doblados y localizados al español latino.",
                "Incluye todo el contenido descargables, tumbas de desafío y trajes DLC."
            ],
            synopsis: "Acompaña a Lara Croft desde sus inicios como joven exploradora hasta convertirse en la intrépida saqueadora de tumbas.",
            specs: { developer: "Crystal Dynamics / Eidos-Montréal", publisher: "Square Enix / CDE Entertainment", platforms: "PS4", release: "2021", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 291, 
        name: "Battlefield 4 Premium Edition (latino)", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238860/header.jpg",
        description: {
            intro: "La experiencia de guerra moderna definitiva con combates tácticos en entornos destructibles.",
            features: [
                "Localización al español latino.",
                "Incluye el juego base más los 5 paquetes de expansión con 20 mapas nuevos.",
                "Mecánica Levolution que altera dinámicamente el campo de batalla en tiempo real."
            ],
            synopsis: "Participa en enfrentamientos masivos de hasta 64 jugadores en tierra, mar y aire durante una crisis bélica mundial.",
            specs: { developer: "DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 293, 
        name: "Bloodborne Game of the Year Edition", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/900000/header.jpg",
        description: {
            intro: "Edición definitiva del aclamado título de culto de FromSoftware.",
            features: [
                "Incluye el juego base más la aclamada expansión 'The Old Hunters'.",
                "Nuevas armas transformables, atuendos, hechizos y temibles jefes adicionales.",
                "Exploración de la oscura pesadilla gótica y gótica-lovecraftiana de Yharnam."
            ],
            synopsis: "Enfréntate a los antiguos cazadores y descubre los secretos más oscuros atrapados en la Pesadilla del Cazador.",
            specs: { developer: "FromSoftware / Japan Studio", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 294, 
        name: "Captain Tsubasa Rise of New Champions (textos en español)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1169340/header.jpg",
        description: {
            intro: "Juego de fútbol de acción estilo arcade basado en la famosa serie de anime Supercampeones.",
            features: [
                "Textos y menús en español con voces originales en japonés.",
                "Ejecuta tiro con efecto, chilenas y tiros especiales de personajes como Oliver y Tom.",
                "Incluye modo historia original para crear y desarrollar a tu propio futbolista."
            ],
            synopsis: "Lleva a la escuela Nankatsu a la victoria y compite en el torneo mundial juvenil desafiando a los mejores equipos.",
            specs: { developer: "Tamsoft", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2020", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 295, 
        name: "Life is Strange 2 Complete Season (textos en español)", 
        platform: "PS4", 
        price: 9800, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/532210/header.jpg",
        description: {
            intro: "Aventura narrativa episódica completa que aborda temas de fraternidad y prejuicio.",
            features: [
                "Incluye los 5 episodios de la temporada completa.",
                "Textos e interfaz traducidos al español.",
                "Tus decisiones y lecciones moldean la personalidad y poderes telequinéticos de tu hermano menor."
            ],
            synopsis: "Tras un trágico incidente, los hermanos Sean y Daniel Diaz huyen de su hogar rumbo a México mientras ocultan un peligroso poder sobrenatural.",
            specs: { developer: "DONTNOD Entertainment", publisher: "Square Enix", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 296, 
        name: "Assassin’s Creed Valhalla", 
        platform: "PS4", 
        price: 26000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
        description: {
            intro: "Épico RPG de acción de mundo abierto donde encarnas a un feroz guerrero vikingo.",
            features: [
                "Textos y voces adaptados al español.",
                "Saquea fortalezas enemigas, gestiona y expande tu asentamiento en la Inglaterra medieval.",
                "Empuña armas a dos manos y experimenta el sistema de combate visceral."
            ],
            synopsis: "Eivor lidera a su clan desde las heladas tierras de Noruega hacia los prósperos reinos de Inglaterra en busca de un nuevo hogar.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 297, 
        name: "DOOM Eternal", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg",
        description: {
            intro: "Shooter en primera persona ultraveloz enfocado en el combate agresivo y la gestión táctica de recursos.",
            features: [
                "Textos e interfaz en español.",
                "Arsenal devastador con lanzallamas al hombro, cuchilla de muñeca y motosierra.",
                "Banda sonora frenética de metal compuesta por Mick Gordon."
            ],
            synopsis: "Como el DOOM Slayer, debes salvar a la Tierra de una invasión demoníaca aplastando hordas en múltiples dimensiones.",
            specs: { developer: "id Software", publisher: "Bethesda Softworks", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 298, 
        name: "Top Spin 2K25", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1785650/header.jpg",
        description: {
            intro: "El regreso de la prestigiosa franquicia de simulación de tenis de la mano de 2K Sports.",
            features: [
                "Juega con leyendas como Roger Federer y Serena Williams, o estrellas actuales.",
                "Compite en los cuatro torneos del Grand Slam: Roland-Garros, Wimbledon, US Open y Australian Open.",
                "Modo MyCAREER profundo para crear y llevar a tu propio tenista a la cima del ranking mundial."
            ],
            synopsis: "Domina las pistas de tenis más icónicas del mundo y conviértete en una leyenda del deporte de la raqueta.",
            specs: { developer: "Hangar 13", publisher: "2K", platforms: "PS4, PS5", release: "2024", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 299, 
        name: "Red Dead Redemption (textos en español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2668510/header.jpg",
        description: {
            intro: "La legendaria aventura del Salvaje Oeste de Rockstar Games remasterizada para PS4.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Incluye el aclamado contenido adicional 'Undead Nightmare' (la plaga de zombis).",
                "Experiencia de un jugador completa con mejoras visuales y de rendimiento."
            ],
            synopsis: "El exforajido John Marston es chantajeado por agentes federales para dar caza a sus antiguos compañeros de banda y proteger a su familia.",
            specs: { developer: "Double Eleven / Rockstar Games", publisher: "Rockstar Games", platforms: "PS4", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 300, 
        name: "Call of Duty Black Ops Cold War (latino)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1985630/header.jpg",
        description: {
            intro: "Frenético shooter en primera persona ambientado en las tensiones geopolíticas de la Guerra Fría.",
            features: [
                "Doblaje y textos en español latino.",
                "Campaña con conspiraciones globales, figuras históricas y finales alternativos.",
                "Modo Zombis cooperativo y multijugador competitivo de ritmo rápido."
            ],
            synopsis: "En la década de 1980, un grupo de agentes de élite persigue a 'Perseus', una figura enigmática que busca alterar el equilibrio del poder mundial.",
            specs: { developer: "Treyarch / Raven Software", publisher: "Activision", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador / Multijugador y Cooperativo Online" }
        }
    },
    { 
        id: 301, 
        name: "Middle earth the Shadow Bundle (latino)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/241930/header.jpg",
        description: {
            intro: "Colección épica en mundo abierto basada en el universo de El Señor de los Anillos.",
            features: [
                "Incluye Middle-earth: Shadow of Mordor y Middle-earth: Shadow of War con sus expansiones.",
                "Localización en español latino.",
                "Revolucionario 'Sistema Nemesis' que genera orcos enemigos únicos con jerarquías y recuerdos personales."
            ],
            synopsis: "Forja un nuevo Anillo de Poder y lidera a un ejército para enfrentarte al Señor Oscuro Sauron y sus temibles fuerzas.",
            specs: { developer: "Monolith Productions", publisher: "Warner Bros. Games", platforms: "PS4", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 302, 
        name: "Far Cry 5 + Far Cry New Dawn (solo inglés)", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/939960/header.jpg",
        description: {
            intro: "Doble paquete con la saga completa de la crisis apocalíptica en el condado de Hope.",
            features: [
                "Incluye Far Cry 5 y su secuela posapocalíptica Far Cry New Dawn (Idioma: solo inglés).",
                "Amplios mundos abiertos con vehículos improvisados, armas personalizables y compañeros de combate.",
                "Modo cooperativo para disfrutar de las campañas con un amigo."
            ],
            synopsis: "Enfréntate al culto de Joseph Seed en Far Cry 5 y sobrevive 17 años después en un Hope County transformado tras la catástrofe nuclear.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 303, 
        name: "DayZ", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221100/header.jpg",
        description: {
            intro: "Hardcore sandbox de supervivencia multijugador en mundo abierto sin reglas ni puntos de control.",
            features: [
                "Mapa masivo de 230 km² con clima dinámico y ciclo día/noche.",
                "Gestión médica compleja, hambre, sed, infecciones y conservación de equipamiento.",
                "Servidores de hasta 60 jugadores donde las alianzas o traiciones surgen orgánicamente."
            ],
            synopsis: "Sobrevive en un territorio posapocalíptico infestado por infectados donde los mayores peligros son la escasez de recursos y los propios jugadores.",
            specs: { developer: "Bohemia Interactive", publisher: "Bohemia Interactive", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Multijugador Online" }
        }
    },
    { 
        id: 304, 
        name: "Detroit Become Human (latino)", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1083070/header.jpg",
        description: {
            intro: "Aclamado drama interactivo que explora el origen del libre albedrío en inteligencias artificiales.",
            features: [
                "Doblaje y textos en español latino.",
                "Árboles de decisiones ramificados con decenas de finales posibles según tus acciones.",
                "Controla a tres androides: Connor, Kara y Markus."
            ],
            synopsis: "En la ciudad de Detroit del año 2038, los androides diseñados para servir a los humanos comienzan a desarrollar emociones y rebelarse por sus derechos.",
            specs: { developer: "Quantic Dream", publisher: "Sony Interactive Entertainment", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 305, 
        name: "Unravel Two", 
        platform: "PS4", 
        price: 13000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1225580/header.jpg",
        description: {
            intro: "Encantador juego de plataformas y rompecabezas centrado en el trabajo en equipo.",
            features: [
                "Diseñado para jugar en cooperativo local o en solitario controlando a dos Yarny.",
                "Resuelve acertijos basados en física usando el hilo que conecta a los dos personajes.",
                "Entornos fotorrealistas con una banda sonora emotiva."
            ],
            synopsis: "Crea tu propio par de Yarnys y explora entornos hermosos pero desafiantes para forjar un lazo indestructible que supere la adversidad.",
            specs: { developer: "Coldwood Interactive", publisher: "Electronic Arts", platforms: "PS4", release: "2018", rating: "Everyone", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 306, 
        name: "FC 24 (relatos español España)", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg",
        description: {
            intro: "La nueva era del fútbol virtual con licencias oficiales y la máxima precisión analítica.",
            features: [
                "Comentarios y relatos en español España.",
                "Tecnología HyperMotionV, PlayStyles optimizados por Opta y motor Frostbite renovado.",
                "Modos Ultimate Team, Carrera de Jugador/DT y Clubes."
            ],
            synopsis: "Disfruta de la experiencia de fútbol más auténtica con más de 19.000 futbolistas, 700 equipos y 30 ligas oficiales.",
            specs: { developer: "EA Vancouver", publisher: "Electronic Arts", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 307, 
        name: "Tennis World Tour Legends Edition (latino)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/685820/header.jpg",
        description: {
            intro: "Edición extendida del simulador de tenis con leyendas históricas del deporte.",
            features: [
                "Localización en español latino.",
                "Incluye tenistas legendarios como Andre Agassi y John McEnroe.",
                "Modo carrera completo con gestión de equipo, equipamiento y contratos de patrocinio."
            ],
            synopsis: "Compite en las pistas más importantes del circuito mundial refinando tus golpes tácticos para llegar al número 1.",
            specs: { developer: "Breakpoint", publisher: "Nacon", platforms: "PS4", release: "2018", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 308, 
        name: "Riders Republic (textos en español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2216830/header.jpg",
        description: {
            intro: "Parque de juegos masivo multijugador dedicado a los deportes extremos.",
            features: [
                "Textos y menús adaptados al español.",
                "Disciplinas extremas: bicicleta, esquí, snowboard, traje de alas (wingsuit) y traje de alas propulsado.",
                "Mundo abierto que combina parques nacionales estadounidenses como Bryce Canyon, Yosemite y Zion."
            ],
            synopsis: "Compite en carreras masivas de más de 20 jugadores en tiempo real y realiza trucos espectaculares para captar patrocinadores.",
            specs: { developer: "Ubisoft Annecy", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2021", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 309, 
        name: "NBA 2K24 (textos en español)", 
        platform: "PS4", 
        price: 57000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2338770/header.jpg",
        description: {
            intro: "La simulación de baloncesto más completa y realista del mercado.",
            features: [
                "Textos e interfaz en español.",
                "Modo Mamba Moments para recrear algunas de las actuaciones más dominantes de Kobe Bryant.",
                "Modos MyCAREER, MyTEAM y MyNBA mejorados."
            ],
            synopsis: "Crea tu propio legado en la cancha, colecciona superestrellas de la NBA y experimenta la cultura del baloncesto al máximo nivel.",
            specs: { developer: "Visual Concepts", publisher: "2K Sports", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 310, 
        name: "Far Cry 4 (latino)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/298110/header.jpg",
        description: {
            intro: "Aventura de acción en mundo abierto ambientada en la peligrosa región del Himalaya.",
            features: [
                "Doblaje y textos en español latino.",
                "Variedad de fauna salvaje, armas letales y vehículos como girocópteros y elefantes de combate.",
                "Modo cooperativo para explorar el mapa de Kyrat libremente."
            ],
            synopsis: "Ajay Ghale viaja a Kyrat para cumplir el último deseo de su madre, pero termina involucrado en una guerra civil para derrocar al tiránico dictador Pagan Min.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 311, 
        name: "Subnautica (textos en español)", 
        platform: "PS4", 
        price: 32000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg",
        description: {
            intro: "Aventura de supervivencia y exploración submarina en un mundo alienígena fascinante y peligroso.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Construcción de bases marinas, submarinos y herramientas tecnológicas.",
                "Ecosistema oceánico dinámico con criaturas abisales y arrecifes coralinos."
            ],
            synopsis: "Tras estrellarte en un planeta cubierto por océanos, debes gestionar tus reservas de oxígeno y recursos mientras buscas una forma de escapar y descubres los secretos del planeta.",
            specs: { developer: "Unknown Worlds Entertainment", publisher: "Unknown Worlds Entertainment", platforms: "PS4", release: "2018", rating: "Everyone 10+", modes: "Un jugador" }
        }
    },
    { 
        id: 312, 
        name: "Tom Clancy’s Ghost Recon Breakpoint (textos en español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2231380/header.jpg",
        description: {
            intro: "Shooter táctico militar ambientado en un peligroso e inhóspito mundo abierto.",
            features: [
                "Textos e interfaz en español.",
                "Sistema de supervivencia con lesiones, fatiga y camuflaje de entorno.",
                "Amplia personalización de armas, equipamiento y clases tácticas."
            ],
            synopsis: "Varado tras las líneas enemigas en el archipiélago de Auroa, debes sobrevivir al acoso de los 'Wolves', una letal unidad militar ex-estadounidense dotada de tecnología de punta.",
            specs: { developer: "Ubisoft Paris", publisher: "Ubisoft", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 313, 
        name: "WWE 2K23 (textos en español)", 
        platform: "PS4", 
        price: 24000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1942660/header.jpg",
        description: {
            intro: "La experiencia de lucha libre definitiva con un abrumador plantel de superestrellas y leyendas de la WWE.",
            features: [
                "Textos y menús traducidos al español.",
                "Modo 2K Showcase interactivo dedicado a los 20 años de carrera de John Cena.",
                "Inclusión del esperado tipo de combate WarGames de doble jaula."
            ],
            synopsis: "Sube al cuadrilátero, domina los movimientos de tus luchadores favoritos y forja tu propio imperio dentro de la WWE.",
            specs: { developer: "Visual Concepts", publisher: "2K Sports", platforms: "PS4", release: "2023", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 314, 
        name: "Far Cry 3 Classic Edition", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22320/header.jpg",
        description: {
            intro: "La aclamada entrega que revolucionó el género de acción en mundo abierto, renovada para PS4.",
            features: [
                "Gráficos y rendimiento adaptados a consolas modernas.",
                "Enfréntate al icónico y desquiciado villano Vaas Montenegro.",
                "Exploración libre de Rook Islands con caza, creación de equipo y combate de guerrillas."
            ],
            synopsis: "Jason Brody queda varado en una isla tropical sin ley gobernada por piratas locos y debe salvar a sus amigos antes de perder la cordura.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 315, 
        name: "Dying Light Definitive Edition", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/239140/header.jpg",
        description: {
            intro: "La versión máxima del icónico juego de supervivencia zombie con parkour y todo el contenido descargable.",
            features: [
                "Incluye el juego base, la gran expansión 'The Following' y más de 20 paquetes DLC adicionales.",
                "Mecánica de parkour dinámico y visceral combate cuerpo a cuerpo.",
                "Ciclo de día y noche extremo donde los infectados mutan al anochecer."
            ],
            synopsis: "Explora la infestada ciudad de Harran y las afueras rurales mientras descubres el origen del brote infeccioso.",
            specs: { developer: "Techland", publisher: "Techland", platforms: "PS4", release: "2022", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 316, 
        name: "Crash Team Racing Nitro-Fueled + Spyro Game Bundle", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/606520/header.jpg",
        description: {
            intro: "Paquete imperdible que une la velocidad frenética de Crash con las aventuras del dragón Spyro.",
            features: [
                "Incluye CTR Nitro-Fueled y Spyro Reignited Trilogy (3 juegos completos en 1).",
                "Decenas de pistas de carreras, karts personalizables y desafíos de plataformas de nostalgia pura.",
                "Remasterizaciones visuales completas en alta definición."
            ],
            synopsis: "Compite en las pistas más locas con Crash y recorre reinos mágicos rescatando dragones junto a Spyro.",
            specs: { developer: "Beenox / Toys for Bob", publisher: "Activision", platforms: "PS4", release: "2019", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 317, 
        name: "Demon Slayer Kimetsu No Yaiba (textos en español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1493720/header.jpg",
        description: {
            intro: "Apasionante juego de lucha de la popular serie de anime Kimetsu no Yaiba.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Revive los eventos del anime desde la primera temporada hasta la película del Tren Infinito.",
                "Combates de arena 2v2 fluidos con espectaculares técnicas de respiración."
            ],
            synopsis: "Tanjiro Kamado se une a los Cazadores de Demonios para devolverle la humanidad a su hermana Nezuko, convertida en demonio.",
            specs: { developer: "CyberConnect2", publisher: "SEGA", platforms: "PS4", release: "2021", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 318, 
        name: "LEGO Star Wars the Skywalker Saga", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/920210/header.jpg",
        description: {
            intro: "El juego de LEGO más grande hasta la fecha, abarcando las 9 películas de la saga Star Wars.",
            features: [
                "Juega las 3 trilogías en el orden que prefieras con cientos de personajes y naves jugables.",
                "Nuevas mecánicas de combate con blásters y combos de Sables de Luz.",
                "Exploración libre de planetas emblemáticos como Tatooine, Coruscant y Naboo."
            ],
            synopsis: "Revive momentos legendarios y el característico humor de LEGO a lo largo de toda la saga galáctica.",
            specs: { developer: "TT Games", publisher: "Warner Bros. Games", platforms: "PS4", release: "2022", rating: "Everyone 10+", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 319, 
        name: "Call of Duty WWII Gold Edition (solo inglés)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/476600/header.jpg",
        description: {
            intro: "El regreso de Call of Duty a sus raíces históricas en el conflicto bélico de la Segunda Guerra Mundial.",
            features: [
                "Idioma: Solo Inglés.",
                "Incluye el DLC Pack 1 'The Resistance' y puntos Call of Duty extra.",
                "Campaña cinematográfica, multijugador visceral y el aterrador modo Nazi Zombies."
            ],
            synopsis: "Sigue a la Primera División de Infantería desembarcando en las playas de Normandía y luchando a través de Europa.",
            specs: { developer: "Sledgehammer Games", publisher: "Activision", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador / Multijugador y Cooperativo Online" }
        }
    },
    { 
        id: 320, 
        name: "Alan Wake Remastered (latino)", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108710/header.jpg",
        description: {
            intro: "Aclamado thriller psicológico y de misterio totalmente mejorado para consolas modernas.",
            features: [
                "Doblaje y localización completa en español latino.",
                "Incluye los dos episodios adicionales de historia: 'The Signal' y 'The Writer'.",
                "Combate estratégico con linterna y armas de fuego contra las sombras."
            ],
            synopsis: "El escritor Alan Wake busca desesperadamente a su esposa desaparecida en la ciudad de Bright Falls, mientras una historia de terror que no recuerda haber escrito cobra vida.",
            specs: { developer: "Remedy Entertainment", publisher: "Epic Games Publishing", platforms: "PS4", release: "2021", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 321, 
        name: "DARK SOULS III (textos en español)", 
        platform: "PS4", 
        price: 40000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg",
        description: {
            intro: "El épico cierre de la trilogía de RPG de acción oscura creada por FromSoftware.",
            features: [
                "Textos e interfaz en español.",
                "Combate ágil y refinado con 'Habilidades de Armas' (Weapon Arts) únicas.",
                "Diseño de niveles impresionante con jefes memorables y desafiantes."
            ],
            synopsis: "Como el Latente, debes viajar por el reino agonizante de Lothric para vencer a los Señores de la Ceniza y decidir el destino del fuego.",
            specs: { developer: "FromSoftware", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 322, 
        name: "Bully (solo ingles)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12200/header.jpg",
        description: {
            intro: "El inolvidable clásico de Rockstar Games ambientado en los pasillos de un internado de secundaria.",
            features: [
                "Idioma: Solo Inglés.",
                "Asiste a clases, realiza travesuras, usa tirachinas y patinetas.",
                "Enfréntate a las diferentes tribus urbanas del colegio Bullworth Academy."
            ],
            synopsis: "Jimmy Hopkins debe navegar por la jerarquía social de la academia Bullworth para defenderse de los matones y restablecer el orden.",
            specs: { developer: "Rockstar Vancouver", publisher: "Rockstar Games", platforms: "PS4", release: "2016", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 335, 
        name: "Metro Exodus", 
        platform: "Ofertas", 
        price: 6000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/412020/header.jpg",
        description: {
            intro: "FPS épico e inmersivo que combina combate letal, sigilo y exploración en un mundo posapocalíptico.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Entornos continentales no lineales gigantescos a lo largo de las cuatro estaciones del año.",
                "Personalización de armas sobre la marcha y fabricación de suministros vitales."
            ],
            synopsis: "Huye de las ruinas del metro de Moscú y lidera a una banda de Spartans en un viaje extraordinario a través de la Rusia posapocalíptica en busca de una nueva vida.",
            specs: { developer: "4A Games", publisher: "Deep Silver", platforms: "PS4, PS5", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 336, 
        name: "Crash Bandicoot Crashiversary Bundle", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1378990/header.jpg",
        description: {
            intro: "La colección definitiva para los fanáticos de Crash Bandicoot con 5 juegos completos.",
            features: [
                "Incluye N. Sane Trilogy (Crash 1, 2 y 3), Crash Bandicoot 4: It's About Time y Crash Team Racing Nitro-Fueled.",
                "Decenas de horas de plataformas exigentes y carreras frenéticas.",
                "Gráficos remasterizados desde cero y mecánicas de juego modernas."
            ],
            synopsis: "Disfruta de la evolución completa del marsupial más famoso del videojuego mientras frustras los planes del malvado Doctor Neo Cortex.",
            specs: { developer: "Toys for Bob / Vicarious Visions / Beenox", publisher: "Activision", platforms: "PS4", release: "2021", rating: "Everyone 10+", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 337, 
        name: "Naruto Shippuden Ultimate Ninja Storm Trilogy (textos en español)", 
        platform: "Ofertas", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/638940/header.jpg",
        description: {
            intro: "Colección que reúne los primeros tres títulos remasterizados de la aclamada saga Ninja Storm.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Incluye Naruto: Ultimate Ninja Storm, Ultimate Ninja Storm 2 y Ultimate Ninja Storm 3 Full Burst.",
                "Combates 3D espectaculares con las técnicas y jutsus más icónicos de la serie."
            ],
            synopsis: "Revive los orígenes de Naruto Uzumaki hasta el estallido de la Cuarta Gran Guerra Ninja en una adaptación fiel al anime.",
            specs: { developer: "CyberConnect2", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2017", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 338, 
        name: "South Park the Fractured but Whole (textos en español)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/488790/header.jpg",
        description: {
            intro: "Divertidísimo RPG táctico por turnos creado en colaboración directa con los creadores de South Park.",
            features: [
                "Textos y menús traducidos al español.",
                "Combate táctico por casillas con habilidades únicas de superhéroes y poderes pedorros.",
                "Crea tu propio superhéroe y personaliza su trasfondo y traje."
            ],
            synopsis: "Únete a 'Coon y Amigos', el grupo de superhéroes liderado por Eric Cartman, para combatir el crimen en South Park y ganar fama en el cine.",
            specs: { developer: "Ubisoft San Francisco", publisher: "Ubisoft", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 339, 
        name: "Assassin’s Creed Rogue Remastered (latino)", 
        platform: "PS4", 
        price: 14000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/311560/header.jpg",
        description: {
            intro: "La entrega más oscura de la franquicia remasterizada en alta resolución para PS4.",
            features: [
                "Doblaje y localización completa en español latino.",
                "Experimenta por primera vez la perspectiva de un Templario cazando Asesinos.",
                "Navegación naval avanzada por el Atlántico Norte helado, valles fluviomarítimos y Nueva York."
            ],
            synopsis: "Shay Patrick Cormac, un joven Asesino desencantado, sufre una trágica traición que lo transforma en un letal cazador de sus antiguos hermanos.",
            specs: { developer: "Ubisoft Sofia", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 340, 
        name: "Plants vs Zombies Garden Warfare 2 (latino)", 
        platform: "Ofertas", 
        price: 8000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1922560/header.jpg",
        description: {
            intro: "Frenético y disparatado shooter en tercera persona donde las plantas contraatacan a los zombis.",
            features: [
                "Doblaje y textos en español latino.",
                "14 clases de personajes jugables y más de 100 variantes únicas.",
                "Modo Backyard Battleground (Patio de Recreo) para exploración y misiones diarias."
            ],
            synopsis: "Por primera vez en la saga, los zombis han conquistado Suburbia; ahora es el turno de las plantas de pasar a la ofensiva.",
            specs: { developer: "PopCap Games", publisher: "Electronic Arts", platforms: "PS4", release: "2016", rating: "Everyone 10+", modes: "Un jugador / Multijugador y Cooperativo Online" }
        }
    },
    { 
        id: 341, 
        name: "Injustice 2 Legendary Edition (textos en español)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/627270/header.jpg",
        description: {
            intro: "La versión definitiva del aclamado juego de peleas de DC con todo el contenido descargable.",
            features: [
                "Textos e interfaz en español.",
                "Incluye 10 personajes DLC extra (incluyendo Hellboy y las Tortugas Ninja) y skins exclusivas.",
                "Sistema de equipamiento (Gear System) para personalizar el aspecto y atributos de tus héroes."
            ],
            synopsis: "Batman y sus aliados intentan reconstruir la sociedad mientras luchan contra la resistencia de Superman y la llegada del conquistador supremo Brainiac.",
            specs: { developer: "NetherRealm Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2018", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 342, 
        name: "Battlefield 4 (latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238860/header.jpg",
        description: {
            intro: "Shooter bélico de referencia caracterizado por sus batallas masivas y entornos destruibles.",
            features: [
                "Doblaje e interfaz en español latino.",
                "Mecánica 'Levolution' que permite alterar el mapa en tiempo real tirando rascacielos o inundando ciudades.",
                "Guerra vehicular total con tanques, helicópteros, cazas y lanchas de combate."
            ],
            synopsis: "Sigue al escuadrón Tombstone en una campaña dramática para evacuar VIPs en Shanghái y evitar un conflicto global masivo.",
            specs: { developer: "EA DICE", publisher: "Electronic Arts", platforms: "PS4", release: "2013", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 343, 
        name: "eFootball 2026 Leo Messi Edition (relatos en español latino)", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1665460/header.jpg",
        description: {
            intro: "Edición especial del simulador de fútbol de Konami con contenido exclusivo del astro argentino.",
            features: [
                "Relatos y comentarios en español latino.",
                "Incluye una carta de jugador de leyenda de Leo Messi, fichas de entrenamiento y monedas de eFootball.",
                "Motor táctico avanzado y controles físicos al ras del suelo."
            ],
            synopsis: "Crea el equipo de tus sueños con leyendas y jugadores actuales para competir en torneos mundiales online.",
            specs: { developer: "Konami", publisher: "Konami", platforms: "PS4, PS5", release: "2025", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 344, 
        name: "Assassin’s Creed Valhalla (solo inglés)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/header.jpg",
        description: {
            intro: "Épica aventura RPG ambientada en la sangrienta Inglaterra del siglo IX durante la era vikinga.",
            features: [
                "Idioma: Solo Inglés.",
                "Lidera saqueos a monasterios, construye tu propio asentamiento y empuña armas a dos manos.",
                "Mundo abierto con reinos sajones, mitología nórdica y misterios ancestrales."
            ],
            synopsis: "Encarna a Eivor, un fiero saqueador vikingo, y guía a tu clan desde las heladas costas de Noruega hacia una nueva próspera casa en Inglaterra.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4, PS5", release: "2020", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 345, 
        name: "Assassin’s Creed Odyssey (solo inglés)", 
        platform: "PS4", 
        price: 7000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg",
        description: {
            intro: "Extenso RPG de acción en mundo abierto ambientado en la legendaria Grecia Antigua.",
            features: [
                "Idioma: Solo Inglés.",
                "Elige jugar como Alexios o Kassandra y toma decisiones que alteran el curso de la historia.",
                "Batallas navales multitudinarias, combate de mercenarios y enfrentamientos en la Guerra del Peloponeso."
            ],
            synopsis: "Forja tu destino pasando de ser un paria exiliado a convertirse en un héroe espartano legendario mientras descubres el secreto de tu linaje.",
            specs: { developer: "Ubisoft Quebec", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 346, 
        name: "Batman Arkham Knight (latino)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/header.jpg",
        description: {
            intro: "La épica conclusión de la aclamada trilogía de Arkham desarrollada por Rocksteady Studios.",
            features: [
                "Doblaje y textos en español latino.",
                "Conducción y combate fluidos con el Batmóvil por primera vez en la saga.",
                "Exploración de toda la ciudad de Gotham con combate FreeFlow refinado."
            ],
            synopsis: "Batman se enfrenta a la amenaza definitiva contra la ciudad que juró proteger cuando Scarecrow regresa para unir a los supervillanos de Gotham.",
            specs: { developer: "Rocksteady Studios", publisher: "Warner Bros. Games", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 347, 
        name: "Devil May Cry HD Collection (latino)", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/631510/header.jpg",
        description: {
            intro: "Colección remasterizada de los tres primeros títulos de la emblemática saga de hack and slash.",
            features: [
                "Textos y menús en español latino.",
                "Incluye Devil May Cry, Devil May Cry 2 y Devil May Cry 3 Special Edition.",
                "Rendimiento fluido a 60 FPS y gráficos en alta definición."
            ],
            synopsis: "Ponte en la piel de Dante, el caza-demonios medio humano medio demonio, y domina combos elegantes para aplastar hordas infernales.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 348, 
        name: "Assassin’s Creed Unity (latino)", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289650/header.jpg",
        description: {
            intro: "Aventura de acción que recrea con increíble nivel de detalle la París de la Revolución Francesa.",
            features: [
                "Doblaje y localización en español latino.",
                "Parkour fluido y rediseñado junto a mecánicas de sigilo avanzadas.",
                "Multitud de NPCs en pantalla y sigilo en entornos urbanos masivos."
            ],
            synopsis: "Arno Dorian emprende una búsqueda de redención que lo lleva a involucrarse en el corazón de la Revolución Francesa y la guerra secreta entre Templarios y Asesinos.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2014", rating: "Mature 17+", modes: "Un jugador / Cooperativo Online" }
        }
    },
    { 
        id: 349, 
        name: "Sniper Elite 4", 
        platform: "PS4", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/312660/header.jpg",
        description: {
            intro: "Simulador de francotirador táctico en tercera persona ambientado en la Italia de la Segunda Guerra Mundial.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Mapas gigantescos no lineales con total libertad táctica y de infiltración.",
                "Famosa cámara de rayos X en cámara lenta para bajas de precisión."
            ],
            synopsis: "El tirador Karl Fairburne debe luchar junto a la Resistencia italiana para librar al país del fascismo y neutralizar una nueva amenaza nazi.",
            specs: { developer: "Rebellion", publisher: "Rebellion", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador / Multijugador y Cooperativo Online" }
        }
    },
    { 
        id: 350, 
        name: "Kingdom Come Deliverance Royal Edition", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379430/header.jpg",
        description: {
            intro: "El aclamado RPG de acción realista en el Sacro Imperio Romano Germánico, en su edición definitiva.",
            features: [
                "Incluye el juego base y los 5 DLCs de historia (Treasures of the Past, From the Ashes, etc.).",
                "Combate medieval realista en primera persona enfocado en la esgrima histórica.",
                "Mundo abierto sin elementos fantásticos con progresión de personaje profunda."
            ],
            synopsis: "Henry, el hijo de un herrero, busca venganza tras la masacre de su aldea, viéndose envuelto en una sangrienta guerra civil por el trono de Bohemia.",
            specs: { developer: "Warhorse Studios", publisher: "Deep Silver", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 351, 
        name: "Little Nightmares (latino)", 
        platform: "PS4", 
        price: 19000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/424840/header.jpg",
        description: {
            intro: "Una oscura y fascinante aventura de plataformas y puzles que te enfrentará a tus miedos de la infancia.",
            features: [
                "Textos e interfaz en español latino.",
                "Diseño artístico inquietante y detallado con ambientación opresiva.",
                "Mecánicas de sigilo para evitar a los terroríficos habitantes de Las Fauces."
            ],
            synopsis: "Ayuda a Six a escapar de Las Fauces, un enorme y misterioso navío habitado por almas corrompidas en busca de su próxima comida.",
            specs: { developer: "Tarsier Studios", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2017", rating: "Teen", modes: "Un jugador" }
        }
    },
    { 
        id: 352, 
        name: "L.A. Noire (textos en español)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/110800/header.jpg",
        description: {
            intro: "Thriller policiaco oscuro y violento ambientado en Los Ángeles durante la época dorada de Hollywood.",
            features: [
                "Textos e interfaz en español.",
                "Tecnología de captura facial revolucionaria para analizar las expresiones de los sospechosos.",
                "Investigación de escenas del crimen, persecuciones y tiroteos realistas."
            ],
            synopsis: "El detective Cole Phelps debe ascender en los departamentos del LAPD resolviendo crímenes inspirados en casos reales de la época.",
            specs: { developer: "Team Bondi / Rockstar Games", publisher: "Rockstar Games", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 353, 
        name: "Assassin’s Creed Origins", 
        platform: "Ofertas", 
        price: 12000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582160/header.jpg",
        description: {
            intro: "Edición estándar de la aventura que reinventó la franquicia con mecánicas de RPG de acción.",
            features: [
                "Textos e interfaz en español.",
                "Exploración libre del Antiguo Egipto: pirámides, desiertos y la legendaria Alejandría.",
                "Nuevo sistema de combate basado en esquives, parries y variedad de armas."
            ],
            synopsis: "Narra la historia de Bayek de Siwa y los trágicos eventos que llevaron a la creación de la Hermandad de los Asesinos.",
            specs: { developer: "Ubisoft Montreal", publisher: "Ubisoft", platforms: "PS4", release: "2017", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 354, 
        name: "The Witcher 3 Wild Hunt (textos en español)", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
        description: {
            intro: "Uno de los RPGs de mundo abierto más aclamados de la historia del videojuego.",
            features: [
                "Textos y menús traducidos al español.",
                "Mundo abierto masivo impulsado por decisiones con impacto real en el argumento.",
                "Caza de monstruos, alquimia, magia de señales y combate con espadas."
            ],
            synopsis: "Geralt de Rivia, un cazador de monstruos a sueldo, emprende la búsqueda de Ciri, la niña de la profecía, perseguida por la Cacería Salvaje.",
            specs: { developer: "CD Projekt Red", publisher: "CD Projekt", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 355, 
        name: "Battlefield Hardline", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238880/header.jpg",
        description: {
            intro: "Giro dramático a la saga Battlefield enfocado en la guerra entre policías y ladrones.",
            features: [
                "Textos e interfaz en español.",
                "Campaña al estilo de una serie de televisión policiaca de acción.",
                "Modos multijugador rápidos como 'Hotwire' y 'Heist' con persecuciones en vehículos."
            ],
            synopsis: "El detective Nick Mendoza recorre las calles de Miami envuelto en una red de corrupción policiaca y cárteles de la droga.",
            specs: { developer: "Visceral Games", publisher: "Electronic Arts", platforms: "PS4", release: "2015", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 356, 
        name: "Assassin’s Creed Triple Pack", 
        platform: "Combos", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289650/header.jpg",
        description: {
            intro: "Paquete masivo que incluye tres entregas fundamentales de la era moderna de Assassin's Creed.",
            features: [
                "Incluye Assassin's Creed Black Flag, Assassin's Creed Unity y Assassin's Creed Syndicate.",
                "Horas incalculables de exploración pirata, la Revolución Francesa y la Revolución Industrial victoriana.",
                "Textos en español en los tres títulos."
            ],
            synopsis: "Experimenta tres épocas históricas cruciales a través de los ojos de Edward Kenway, Arno Dorian y los gemelos Jacob y Evie Frye.",
            specs: { developer: "Ubisoft", publisher: "Ubisoft", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 357, 
        name: "WRC 10", 
        platform: "PS4", 
        price: 15000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462810/header.jpg",
        description: {
            intro: "Edición aniversario del simulador de rally oficial que celebra 50 años de competición.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Modo Aniversario con 19 eventos históricos legendarios (Acrópolis, San Remo, etc.).",
                "Físicas mejoradas de aerodinámica, frenado y turbo para máxima precisión."
            ],
            synopsis: "Ponte a prueba en la temporada oficial 2021 del WRC y revive los momentos más icónicos de la historia del automovilismo.",
            specs: { developer: "KT Racing", publisher: "Nacon", platforms: "PS4, PS5", release: "2021", rating: "Everyone", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 358, 
        name: "Dragon Ball FighterZ – FighterZ Edition (textos en español)", 
        platform: "PS4", 
        price: 25000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/678950/header.jpg",
        description: {
            intro: "Edición especial del alabado juego de peleas 2.5D con gráficos idénticos al anime.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Incluye el Pase de Temporada 1 con 8 personajes adicionales (Bardock, Broly, Goku base, etc.).",
                "Combates frenéticos de 3 contra 3 con relevos y ataques combinados espectaculares."
            ],
            synopsis: "Disfruta de una historia original protagonizada por la Androide 21 mientras te enfrentas a clones malvados de los guerreros Z.",
            specs: { developer: "Arc System Works", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2018", rating: "Teen", modes: "Un jugador / Multijugador Local y Online" }
        }
    },
    { 
        id: 359, 
        name: "World War Z", 
        platform: "PS4", 
        price: 16000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/699130/header.jpg",
        description: {
            intro: "Shooter cooperativo en tercera persona donde te enfrentas a hordas masivas e imparables de zombis.",
            features: [
                "Textos e interfaz en español.",
                "Motor Swarm Engine capaz de renderizar cientos de zombis corriendo en pantalla simultáneamente.",
                "Diferentes clases de personajes con habilidades y armamento personalizables."
            ],
            synopsis: "Un grupo de supervivientes une sus fuerzas para resistir la plaga de no-muertos en locaciones globales como Nueva York, Moscú y Jerusalén.",
            specs: { developer: "Saber Interactive", publisher: "Mad Dog Games", platforms: "PS4", release: "2019", rating: "Mature 17+", modes: "Un jugador / Cooperativo y Multijugador Online" }
        }
    },
    { 
        id: 360, 
        name: "Call of Duty Black Ops 7 (latino, requiere ps plus)", 
        platform: "PS4", 
        price: 40000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg",
        description: {
            intro: "La evolución definitiva de la aclamada saga Black Ops con combate táctico de vanguardia.",
            features: [
                "Doblaje y textos en español latino.",
                "Sistema de movimiento fluido de nueva generación y tiroteos de alta intensidad.",
                "Campaña cinematográfica, modo Zombis intensificado y multijugador competitivo (Requiere PS Plus)."
            ],
            synopsis: "Sumérgete en operaciones encubiertas de alto riesgo dentro de un escenario bélico global repleto de conspiraciones.",
            specs: { developer: "Treyarch / Raven Software", publisher: "Activision", platforms: "PS4, PS5", release: "2025", rating: "Mature 17+", modes: "Un jugador / Multijugador Online (PS Plus)" }
        }
    },
    { 
        id: 361, 
        name: "Disney Pixar Toy Story 3", 
        platform: "PS4", 
        price: 10500, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/300820/header.jpg",
        description: {
            intro: "Divertida aventura de plataformas familiar inspirada en la querida película de Disney Pixar.",
            features: [
                "Textos y voces traducidos al español.",
                "Modo Historia con niveles basados en los momentos más emblemáticos del film.",
                "Modo 'Caja de Juguetes' (Toy Box) con mundo abierto para crear y personalizar tu propio pueblo."
            ],
            synopsis: "Acompaña a Buzz, Woody y sus amigos mientras intentan navegar el caótico mundo de la guardería Sunnyside.",
            specs: { developer: "Avalanche Software", publisher: "Disney Interactive", platforms: "PS4", release: "2022", rating: "Everyone", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 362, 
        name: "Truck & Logistics Simulator", 
        platform: "PS4", 
        price: 23000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1025300/header.jpg",
        description: {
            intro: "Completo simulador de logística vehicular donde realizas envíos de carga pesada e industrial.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Más de 20 vehículos únicos, incluyendo furgonetas, camiones, montacargas y grúas.",
                "Simulación de carga manual, física de peso realista y logística de entregas."
            ],
            synopsis: "Fundan tu propia empresa de transporte, gestiona tu flota y realiza repartos desafiantes a lo largo de un mapa de mundo abierto.",
            specs: { developer: "Simula Games", publisher: "Aerosoft", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 363, 
        name: "MX vs ATV Legends", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1209590/header.jpg",
        description: {
            intro: "Entrega de la popular franquicia de carreras off-road en motocrós, ATVs y UTVs.",
            features: [
                "Textos e interfaz en español.",
                "Nuevo modo Trayectoria donde tus elecciones marcan tu camino hacia el patrocinio profesional.",
                "Físicas de deformación de terreno perfeccionadas y modo Trails con circuitos al aire libre."
            ],
            synopsis: "Compite en diversos entornos abiertos para convertirte en una leyenda mundial de las carreras todoterreno.",
            specs: { developer: "Rainbow Studios", publisher: "THQ Nordic", platforms: "PS4, PS5", release: "2022", rating: "Everyone", modes: "Un jugador / Pantalla dividida / Multijugador Online" }
        }
    },
    { 
        id: 364, 
        name: "Resident Evil 6", 
        platform: "PS4", 
        price: 11000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/221040/header.jpg",
        description: {
            intro: "Entrega cargada de acción cinematográfica que reúne a los personajes más icónicos de la franquicia.",
            features: [
                "Textos e interfaz en español.",
                "4 campañas entrelazadas con estilos de juego variados (Leon, Chris, Jake y Ada).",
                "Modo Mercenarios expansivo para eliminar hordas a contrarreloj."
            ],
            synopsis: "Frente a un ataque bioterrorista global impulsado por el Virus C, los héroes deben combatir la amenaza en varios rincones del planeta.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Cooperativo Local y Online" }
        }
    },
    { 
        id: 365, 
        name: "Resident Evil 5", 
        platform: "PS4", 
        price: 13000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21690/header.jpg",
        description: {
            intro: "Una de las entregas más vendidas de la saga, centrada en la acción cooperativa táctica.",
            features: [
                "Textos y menús en español.",
                "Aventura completamente jugable en modo cooperativo de 2 jugadores.",
                "Incluye el contenido DLC 'Lost in Nightmares' y 'Desperate Escape'."
            ],
            synopsis: "Chris Redfield y Sheva Alomar viajan a África para investigar una amenaza biológica que transforma a la población local en agresivos infectados.",
            specs: { developer: "Capcom", publisher: "Capcom", platforms: "PS4", release: "2016", rating: "Mature 17+", modes: "Un jugador / Cooperativo Local y Online" }
        }
    },
    { 
        id: 366, 
        name: "Sonic Origins Plus", 
        platform: "PS4", 
        price: 17000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1794960/header.jpg",
        description: {
            intro: "La colección definitiva con las aventuras clásicas remasterizadas del erizo azul de SEGA.",
            features: [
                "Textos en español.",
                "Incluye Sonic 1, Sonic 2, Sonic CD, Sonic 3 & Knuckles y 12 títulos clásicos de Game Gear.",
                "Nuevos personajes jugables como Amy Rose y Knuckles en todos los títulos primarios."
            ],
            synopsis: "Revive los orígenes retro de Sonic con gráficos panorámicos en HD, vidas infinitas en Modo Aniversario y desafíos extra.",
            specs: { developer: "SEGA", publisher: "SEGA", platforms: "PS4, PS5", release: "2023", rating: "Everyone", modes: "Un jugador / Cooperativo Local" }
        }
    },
    { 
        id: 367, 
        name: "The Walking Dead Destinies (textos en español)", 
        platform: "PS4", 
        price: 18000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2165110/header.jpg",
        description: {
            intro: "Juego de acción y aventura en tercera persona que te permite reescribir la historia de las primeras 4 temporadas del show.",
            features: [
                "Textos y menús en español.",
                "Toma de decisiones cruciales que alteran quién vive y quién muere respecto a la serie original.",
                "Gestión de recursos escasos, armas de fuego y sigilo cuerpo a cuerpo."
            ],
            synopsis: "Comienza como Rick Grimes en el hospital y toma el control de los eventos clave para formar tu propio equipo de supervivientes.",
            specs: { developer: "Flux Games", publisher: "GameMill Entertainment", platforms: "PS4, PS5", release: "2023", rating: "Mature 17+", modes: "Un jugador" }
        }
    },
    { 
        id: 368, 
        name: "Dark Souls II Scholar of the First Sin (textos en español)", 
        platform: "PS4", 
        price: 21000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/335300/header.jpg",
        description: {
            intro: "Edición definitiva del exigente RPG de acción con gráficos y rendimiento mejorados.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Incluye los 3 DLCs de la trilogía 'Crown of the Sunken King', 'Old Iron King' e 'Ivory King'.",
                "Reubicación de enemigos y jefes para una experiencia aún más desafiante."
            ],
            synopsis: "Un no-muerto maldito viaja al reino caído de Drangleic en busca de una cura para romper la maldición que lo consume.",
            specs: { developer: "FromSoftware", publisher: "Bandai Namco Entertainment", platforms: "PS4", release: "2015", rating: "Teen", modes: "Un jugador / Multijugador Online" }
        }
    },
    { 
        id: 369, 
        name: "Agony (textos en español)", 
        platform: "PS4", 
        price: 10000, 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/487720/header.jpg",
        description: {
            intro: "Survival horror en primera persona ambientado en una representación grotesca del Infierno.",
            features: [
                "Textos e interfaz traducidos al español.",
                "Habilidad de poseer a otros demonios y almas perdidas para sobrevivir.",
                "Atmósfera perturbadora con un diseño de entornos altamente visceral."
            ],
            synopsis: "Encarna a un alma atormentada sin recuerdos de su pasado que intenta escapar de las profundidades abisales guiado por la misteriosa Reina Roja.",
            specs: { developer: "Madmind Studio", publisher: "Maximum Games", platforms: "PS4", release: "2018", rating: "Mature 17+", modes: "Un jugador" }
        }
    },

];

// ESTADOS GLOBALES DE NAVEGACIÓN Y CARRITO
let cart = [];
let currentFilter = 'all';
let currentSort = 'default';
let currentDetailProduct = null;
let selectedAccountType = 'Primaria';
let currentPage = 1;
const itemsPerPage = 12; // Cantidad máxima de juegos por página

// CALCULA PRECIOS SEGÚN REGLA GENERAL
function getProductPrices(product) {
    if (product.platform === 'PC' || product.platform.includes('PS Plus') || product.platform === 'Pre-Venta' || product.platform === 'Combos' || product.platform === 'Ofertas') {
        return { primary: product.price, secondary: null };
    }
    const primaryPrice = product.price;
    const secondaryPrice = Math.round(product.price * 0.70);
    return { primary: primaryPrice, secondary: secondaryPrice };
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// RENDERIZAR PRODUCTOS CON FILTRADO, ORDENAMIENTO Y PAGINACIÓN
function renderProducts(filter = currentFilter, searchTerm = '') {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';

    // 1. Filtrar por categoría y búsqueda
    let filtered = products.filter(p => {
        const matchesCategory = filter === 'all' || p.platform.toLowerCase() === filter.toLowerCase();
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
        return matchesCategory && matchesSearch;
    });

    // 2. Aplicar Criterio de Ordenamiento
    switch (currentSort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'offers':
            filtered = filtered.filter(p => p.platform && p.platform.toLowerCase() === 'ofertas');
            break;
        case 'combos':
            filtered = filtered.filter(p => p.platform && p.platform.toLowerCase() === 'combos');
            break;
        case 'default':
        default:
            // Mantiene el orden original del arreglo 'products'
            break;
    }

    const titleEl = document.getElementById('section-title');
    if (titleEl) {
        if (searchTerm.trim() !== '') {
            titleEl.innerText = `Resultados para "${searchTerm}"`;
        } else {
            titleEl.innerText = filter === 'all' ? 'Catálogo Destacado' : `Categoría: ${filter}`;
        }
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-products" style="grid-column: 1/-1; text-align:center; color:#8b949e; padding:40px 0;">No se encontraron productos que coincidan con tu búsqueda.</p>`;
        renderPagination(0);
        return;
    }

    // 3. Paginación (12 juegos por página)
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filtered.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-badge">${product.platform}</div>
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openProductDetail(${product.id})" style="cursor:pointer;" loading="lazy" referrerpolicy="no-referrer">
            <div class="product-info">
                <h3 class="product-title" onclick="openProductDetail(${product.id})" style="cursor:pointer;">${product.name}</h3>
                <div class="product-price">$${product.price.toLocaleString('es-AR')} ARS</div>
                <button class="btn-add-cart" onclick="openProductDetail(${product.id})">Ver Opciones / Comprar</button>
            </div>
        `;
        grid.appendChild(card);
    });

    renderPagination(totalPages);
}

// RENDERIZAR NAVEGACIÓN Y BOTONES NUMÉRICOS
function renderPagination(totalPages) {
    let paginationContainer = document.getElementById('pagination');

    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.id = 'pagination';
        paginationContainer.className = 'pagination-container';
        
        const grid = document.getElementById('product-grid');
        if (grid && grid.parentNode) {
            grid.parentNode.insertBefore(paginationContainer, grid.nextSibling);
        }
    }

    paginationContainer.innerHTML = '';
    if (totalPages <= 1) return;

    // Botón Anterior (←)
    const prevBtn = document.createElement('button');
    prevBtn.className = `page-btn ${currentPage === 1 ? 'disabled' : ''}`;
    prevBtn.innerHTML = '&leftarrow;';
    prevBtn.onclick = () => {
        if (currentPage > 1) changePage(currentPage - 1);
    };
    paginationContainer.appendChild(prevBtn);

    // Algoritmo para mostrar rango de páginas en listas grandes (ej. 800 juegos)
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.className = 'page-btn';
        firstBtn.innerText = '1';
        firstBtn.onclick = () => changePage(1);
        paginationContainer.appendChild(firstBtn);

        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.innerText = '...';
            dots.style.color = '#8b949e';
            dots.style.padding = '0 5px';
            paginationContainer.appendChild(dots);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.innerText = i;
        pageBtn.onclick = () => changePage(i);
        paginationContainer.appendChild(pageBtn);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.innerText = '...';
            dots.style.color = '#8b949e';
            dots.style.padding = '0 5px';
            paginationContainer.appendChild(dots);
        }

        const lastBtn = document.createElement('button');
        lastBtn.className = 'page-btn';
        lastBtn.innerText = totalPages;
        lastBtn.onclick = () => changePage(totalPages);
        paginationContainer.appendChild(lastBtn);
    }

    // Botón Siguiente (→)
    const nextBtn = document.createElement('button');
    nextBtn.className = `page-btn ${currentPage === totalPages ? 'disabled' : ''}`;
    nextBtn.innerHTML = '&rightarrow;';
    nextBtn.onclick = () => {
        if (currentPage < totalPages) changePage(currentPage + 1);
    };
    paginationContainer.appendChild(nextBtn);
}

function changePage(page) {
    currentPage = page;
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value : '';
    renderProducts(currentFilter, searchTerm);
    
    const titleEl = document.getElementById('section-title');
    if (titleEl) titleEl.scrollIntoView({ behavior: 'smooth' });
}

// BÚSQUEDA Y FILTRADO
function filterProductsBySearch() {
    currentPage = 1;
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value : '';
    renderProducts(currentFilter, searchTerm);
}

function filterProducts(category, event) {
    if (event) event.preventDefault();
    if (category === 'PC') return;

    currentPage = 1;
    currentFilter = category;
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    renderProducts(category, '');
}

// FUNCIÓN DISPARADA DESDE EL SELECTOR DEL HTML
function sortGames(criteria) {
    currentSort = criteria;
    currentPage = 1; // Reinicia a la primera página al reordenar
    
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput ? searchInput.value : '';
    
    renderProducts(currentFilter, searchTerm);
}

// MODAL DE DETALLE DEL PRODUCTO
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentDetailProduct = product;
    selectedAccountType = 'Primaria';

    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-badge').innerText = product.platform;
    document.getElementById('detail-title').innerText = product.name;

    const prices = getProductPrices(product);
    const selectorContainer = document.getElementById('account-selector-container');

    if (prices.secondary === null) {
        if (selectorContainer) selectorContainer.style.display = 'none';
        document.getElementById('detail-price').innerText = `$${prices.primary.toLocaleString('es-AR')} ARS`;
    } else {
        if (selectorContainer) selectorContainer.style.display = 'flex';
        const primaryRadio = document.querySelector('input[name="accountType"][value="Primaria"]');
        if (primaryRadio) primaryRadio.checked = true;
        updateDetailPrice('Primaria');
    }

    const descContainer = document.getElementById('detail-description-container');
    if (descContainer && product.description) {
        let featuresHTML = '';
        if (product.description.features) {
            featuresHTML = `<ul>${product.description.features.map(f => `<li>${f}</li>`).join('')}</ul>`;
        }

        descContainer.innerHTML = `
            <p class="desc-intro" style="margin-top:15px; color:#c9d1d9;">${product.description.intro || ''}</p>
            ${featuresHTML}
            <p class="desc-synopsis" style="margin-top:10px; font-style:italic; color:#8b949e;">${product.description.synopsis || ''}</p>
        `;
    }

    const modal = document.getElementById('product-detail-modal');
    if (modal) {
        modal.classList.add('active');
        modal.classList.remove('hidden');
    }
}

function updateDetailPrice(type) {
    selectedAccountType = type;
    if (!currentDetailProduct) return;
    const prices = getProductPrices(currentDetailProduct);
    const selectedPrice = type === 'Primaria' ? prices.primary : prices.secondary;
    document.getElementById('detail-price').innerText = `$${selectedPrice.toLocaleString('es-AR')} ARS`;
}

function closeProductDetail() {
    const modal = document.getElementById('product-detail-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function addFromDetail() {
    if (!currentDetailProduct) return;

    const prices = getProductPrices(currentDetailProduct);
    const isSinglePrice = prices.secondary === null;
    const finalType = isSinglePrice ? 'Única' : selectedAccountType;
    const finalPrice = isSinglePrice ? prices.primary : (selectedAccountType === 'Primaria' ? prices.primary : prices.secondary);

    cart.push({
        id: currentDetailProduct.id,
        name: currentDetailProduct.name,
        platform: currentDetailProduct.platform,
        accountType: finalType,
        price: finalPrice
    });

    updateCartUI();
    closeProductDetail();
    showToast(`"${currentDetailProduct.name}" agregado al carrito`);
}

// MANEJO DEL CARRITO
function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    if (!modal) return;
    const isVisible = modal.classList.contains('active');
    
    if (isVisible) {
        modal.classList.remove('active');
    } else {
        modal.classList.add('active');
        modal.classList.remove('hidden');
        backToCart();
    }
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total-price');

    if (countEl) countEl.innerText = cart.length;

    if (!itemsEl) return;
    itemsEl.innerHTML = '';

    let total = 0;

    if (cart.length === 0) {
        itemsEl.innerHTML = `<p style="text-align:center; color:#8b949e; padding: 20px 0;">El carrito está vacío.</p>`;
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div>
                    <strong style="display:block; color:#f0f6fc;">${item.name}</strong>
                    <span style="font-size:0.85rem; color:#8b949e;">${item.platform} ${item.accountType !== 'Única' ? `(${item.accountType})` : ''}</span>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="color:#2ea043; font-weight:bold;">$${item.price.toLocaleString('es-AR')}</span>
                    <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#f85149; cursor:pointer; font-weight:bold;">✕</button>
                </div>
            `;
            itemsEl.appendChild(itemDiv);
        });
    }

    if (totalEl) totalEl.innerText = `$${total.toLocaleString('es-AR')} ARS`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function goToPayment() {
    if (cart.length === 0) {
        showToast('El carrito está vacío');
        return;
    }

    document.getElementById('cart-view').classList.add('hidden');
    document.getElementById('payment-view').classList.remove('hidden');

    const total = cart.reduce((acc, i) => acc + i.price, 0);
    let message = `¡Hola Nexus Games! Quisiera realizar la compra de:\n`;
    cart.forEach(item => {
        message += `- ${item.name} [${item.platform}] (${item.accountType}): $${item.price.toLocaleString('es-AR')} ARS\n`;
    });
    message += `\nTotal: $${total.toLocaleString('es-AR')} ARS\nAdjunto comprobante de pago.`;

    const encodedMsg = encodeURIComponent(message);
    const wsBtn = document.getElementById('ws-btn');
    if (wsBtn) wsBtn.href = `https://wa.me/5493765036949?text=${encodedMsg}`;
}

function backToCart() {
    const cartView = document.getElementById('cart-view');
    const paymentView = document.getElementById('payment-view');
    if (cartView) cartView.classList.remove('hidden');
    if (paymentView) paymentView.classList.add('hidden');
}

function copyToClipboard(text, msg) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(msg);
    });
}

function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}