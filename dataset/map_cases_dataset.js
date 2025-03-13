let setup_map_cases = [
    {
        id: 0,
        code: '',
        name: "Choisis ton starter !",
        sprite: "./sprites/locations/location_33.png",
        unlock_day: new Date("2024-11-30"),
        has_been_used: false,
        shiny_lock: true,
        adaptativeLevel: false,
        base_level: 5,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            HERICENDRE: 1,
            GOBOU: 1,
            BULBIZARRE: 1,
        },
    },
    {
        id: 1,
        code: '',
        name: "Route 01",
        sprite: "./sprites/locations/location_16.png",
        unlock_day: new Date("2024-12-01"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 6,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            SABELETTE: 4,
            LAPOREILLE: 4,
            CABRIOLAINE: 4,
            MOUMOUTON: 4,
            NIDORAN_F: 3,
            NIDORAN_M: 3,
            TEDDIURSA: 3,
            TARSAL: 2,
            LIXY: 2,
            GOINFREX: 1,
            VIPELIERRE: 1,
        },
    },
    {
        id: 2,
        code: '',
        name: "Route 02",
        sprite: "./sprites/locations/location_02.png",
        unlock_day: new Date("2024-12-02"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 7,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            ABO: 4,
            MASCAIMAN: 4,
            CHARBI: 4,
            PHANPY: 4,
            OSSELAIT: 3,
            ZORUA: 3,
            ROCABOT: 3,
            KRANIDOS: 2,
            TERHAL: 2,
            GALEKID: 1,
            FLAMIAOU: 1,
        },
    },
    {
        id: 3,
        code: '',
        name: "Route 03",
        sprite: "./sprites/locations/location_27.png",
        unlock_day: new Date("2024-12-03"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 8,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            MUSTEBOUEE: 4,
            MANZAI: 4,
            PICASSAUT: 4,
            AZURILL: 4,
            CARAPAGOS: 3,
            AXOLOTO: 3,
            TYLTON: 3,
            SABELETTE_A: 2,
            ABRA: 2,
            MINIDRACO: 1,
            TIPLOUF: 1,
        },
    },
    {
        id: 4,
        code: '',
        name: "Route 04",
        sprite: "./sprites/locations/location_01.png",
        unlock_day: new Date("2024-12-04"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 9,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            MYSTHERBE: 40,
            TROMPIGNON: 40,
            VOSTOURNO: 40,
            VERPOM: 40,
            WATTOUAT: 30,
            VORTENTE: 30,
            SEVIPER: 30,
            FUNECIRE: 20,
            EVOLI: 20,
            TOGEPI: 10,
            ARCKO: 10,
            CELEBI: 1
        },
    },
    {
        id: 5,
        code: '',
        name: "Route 05",
        sprite: "./sprites/locations/location_21.png",
        unlock_day: new Date("2024-12-05"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 10,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            SABELETTE: 4,
            PASSEROUGE: 4,
            COUANETON: 4,
            ESCARGAUME: 4,
            INSECATEUR: 3,
            MUNNA: 3,
            CORNEBRE: 3,
            SABELETTE_A: 2,
            EVOLI: 2,
            FORGERETTE: 1,
            GRUIKUI: 1,
        },
    },
    {
        id: 6,
        code: '',
        name: "Route 06",
        sprite: "./sprites/locations/location_37.png",
        unlock_day: new Date("2024-12-06"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 11,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            VOSTOURNO: 20,
            PANDESPIEGLE: 30,
            ZORUA: 30,
            FARFURET: 40,
            MALOSSE: 40,
            DEBUGANT: 40,
            OSSELAIT: 30,
            SKELENOX: 30,
            FANTOMINUS: 20,
            FANTYRM: 20,
            GRENOUSSE: 10,
            MARSHADOW: 1
        },
    },
    {
        id: 7,
        code: '',
        name: "Route 07",
        sprite: "./sprites/locations/location_24.png",
        unlock_day: new Date("2024-12-07"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 12,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            MYSTHERBE: 2,
            AZURILL: 2,
            WATTOUAT: 4,
            FURAIGLON: 4,
            FRISSONILLE: 4,
            ROCABOT: 4,
            OBALIE: 3,
            SONISTRELLE: 2,
            TERHAL: 2,
            TOGEPI: 3,
            GERMIGNON: 1,
        },
    },
    {
        id: 8,
        code: '',
        name: "Route 08",
        sprite: "./sprites/locations/location_31.png",
        unlock_day: new Date("2024-12-08"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 13,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            CHUCHMUR: 3,
            STATITIK: 3,
            TOUDOUDOU: 3,
            SPOINK: 4,
            AIRMURE: 3,
            RAMOLOSS: 4,
            CANARTICHO_G: 3,
            EVOLI: 3,
            ABRA: 2,
            DRABY: 2,
            POUSSIFEU: 1,
        },
    },
    {
        id: 9,
        code: '',
        name: "Route 09",
        sprite: "./sprites/locations/location_05.png",
        unlock_day: new Date("2024-12-09"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 14,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            PHANPY: 2,
            CANARTICHO: 3,
            MALOSSE: 3,
            RHINOCORNE: 4,
            MARCACRIN: 4,
            ELEKID: 4,
            AXOLOTO_P: 3,
            FANTOMINUS: 3,
            KRANIDOS: 2,
            DINOCLIER: 2,
            LARMELEON: 1,
        },
    },
    {
        id: 10,
        code: '',
        name: "Route 10",
        sprite: "./sprites/locations/location_06.png",
        unlock_day: new Date("2024-12-10"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 15,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            SEPIATOP: 20,
            RAMOLOSS: 30,
            RIOLU: 30,
            GRIBOURAIGNE: 40,
            FRISON: 40,
            OBALIE: 40,
            CORAYON_G: 30,
            SABELETTE_A: 30,
            VENALGUE: 20,
            AMAGARA: 20,
            OUISTEMPO: 10,
            LUGIA: 1,
        },
    },
    {
        id: 11,
        code: '',
        name: "Route 11",
        sprite: "./sprites/locations/location_23.png",
        unlock_day: new Date("2024-12-11"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 16,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            HOOTHOOT: 2,
            NIGOSIER: 3,
            RAMOLOSS_G: 3,
            MIMANTIS: 4,
            INSECATEUR: 4,
            ZORUA_H: 4,
            LOMBRE: 3,
            LIXY: 3,
            KANGOUREX: 2,
            PTYRANIDUR: 2,
            CHOCHODILE: 1,
        },
    },
    {
        id: 12,
        code: '',
        name: "Route 12",
        sprite: "./sprites/locations/location_40.png",
        unlock_day: new Date("2024-12-12"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 17,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            POULPAF: 2,
            MACHOC: 3,
            RIOLU: 3,
            DEBUGANT: 4,
            NUCLEOS: 4,
            LIPPOUTI: 4,
            TETAMPOULE: 3,
            FUNECIRE: 3,
            PORYGON: 2,
            PONYTA_G: 2,
            OTAQUIN: 1,
        },
    },
    {
        id: 13,
        code: '',
        name: "Route 13",
        sprite: "./sprites/locations/location_02.png",
        unlock_day: new Date("2024-12-13"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 18,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            HIPPOPOTAS: 2,
            LIMAGMA: 3,
            RACAILLOU_A: 3,
            ONIX: 4,
            CORNEBRE: 4,
            SONISTRELLE: 4,
            DIAMAT: 3,
            LILIA: 3,
            KABUTO: 2,
            MINIDRACO: 2,
            POUSSACHA: 1,
        },
    },
    {
        id: 14,
        code: '',
        name: "Route 14",
        sprite: "./sprites/locations/location_10.png",
        unlock_day: new Date("2024-12-14"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 19,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            TERRACOOL: 4,
            CHAMALLOT: 3,
            TRITOX: 3,
            MAGBY: 3,
            NOEUNOEUF: 3,
            MIAOUSS_G: 4,
            TARSAL: 3,
            CANINOS: 3,
            GOUPIX_A: 2,
            GOINFREX: 2,
            POUSSIFEU: 1,
        },
    },
    {
        id: 15,
        code: '',
        name: "Route 15",
        sprite: "./sprites/locations/location_04.png",
        unlock_day: new Date("2024-12-15"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 20,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            POHM: 30,
            WATTOUAT: 30,
            MAKUHITA: 30,
            MAGNETI: 40,
            TADMORV: 40,
            GALEKID: 30,
            TERHAL: 30,
            PORYGON: 30,
            TETAMPOULE: 20,
            FORGERETTE: 20,
            LARMELEON: 10,
            RAIKOU: 1,
        },
    },
    {
        id: 16,
        code: '',
        name: "Route 16",
        sprite: "./sprites/locations/location_01.png",
        unlock_day: new Date("2024-12-16"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 21,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            TROMPIGNON: 3,
            TOUTOMBE: 2,
            THEFFROI: 3,
            YANMA: 3,
            STATITIK: 4,
            LIXY: 4,
            KRAKNOIX: 3,
            EVOLI: 3,
            GRIKNOT: 2,
            TOGEPI: 2,
            TORTIPOUSS: 1,
        },
    },
    {
        id: 17,
        code: '',
        name: "Route 17",
        sprite: "./sprites/locations/location_08.png",
        unlock_day: new Date("2024-12-17"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 22,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            HOOTHOOT: 3,
            MUCUSCULE: 2,
            NATU: 3,
            CRADOPAUD: 3,
            MONORPALE: 4,
            ABRA: 4,
            MIMIQUI: 3,
            KANGOUREX: 3,
            RHINOCORNE: 2,
            GALEKID: 2,
            SALAMECHE: 1,
        },
    },
    {
        id: 18,
        code: '',
        name: "Route 18",
        sprite: "./sprites/locations/location_37.png",
        unlock_day: new Date("2024-12-18"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 23,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            PITROUILLE: 4,
            FEUFOREVE: 3,
            PTIRAVI: 3,
            BIBICHUT: 3,
            POLICHOMBR: 3,
            BALBUTO: 4,
            TENEFIX: 3,
            SKELENOX: 3,
            FANTOMINUS: 2,
            BAUDRIVE: 2,
            MOUSTILLON: 1,
        },
    },
    {
        id: 19,
        code: '',
        name: "Route 19",
        sprite: "./sprites/locations/location_26.png",
        unlock_day: new Date("2024-12-19"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 24,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            SEPIATOP: 20,
            RAMOLOSS_G: 30,
            LOUPIO: 30,
            CARVANHA: 40,
            GRELACON: 40,
            WAILMER: 40,
            VENALGUE: 30,
            QWILFISH_H: 30,
            BARPAU: 20,
            MINIDRACO: 20,
            BRINDIBOU: 10,
            SUICUNE: 1,
        },
    },
    {
        id: 20,
        code: '',
        name: "Route 20",
        sprite: "./sprites/locations/location_26.png",
        unlock_day: new Date("2024-12-20"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 25,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            CRABICOQUE: 2,
            MAGBY: 4,
            COUPENOTTE: 2,
            ARCHEOMIRE: 4,
            SCALPION: 4,
            MYSDIBULE: 4,
            AMONITA: 3,
            BEBECAILLE: 3,
            ANORITH: 2,
            EMBRYLEX: 2,
            FLAMBINO: 1,
        },
    },
    {
        id: 21,
        code: '',
        name: "Route 21",
        sprite: "./sprites/locations/location_30.png",
        unlock_day: new Date("2024-12-21"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 26,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            BACABOUH: 2,
            PTIRAVI: 3,
            STALGAMIN: 3,
            ECRAPINCE: 4,
            HYPOTREMPE: 4,
            CORAYON_G: 4,
            BARPAU: 3,
            RELICANTH: 3,
            ABRA: 2,
            OYACATA: 2,
            KAIMINUS: 1,
        },
    },
    {
        id: 22,
        code: '',
        name: "Route 22",
        sprite: "./sprites/locations/location_11.png",
        unlock_day: new Date("2024-12-22"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 27,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            PACHIRISU: 2,
            OLIVINI: 3,
            PYRONILLE: 3,
            BLIZZI: 4,
            VOLTORBE_H: 4,
            RHINOCORNE: 4,
            CANINOS: 3,
            PONYTA: 3,
            LEVEINARD: 2,
            RONFLEX: 2,
            MARISSON: 1,
        },
    },
    {
        id: 23,
        code: '',
        name: "Route 23",
        sprite: "./sprites/locations/location_07.png",
        unlock_day: new Date("2024-12-23"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 28,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            MAGICARPE: 10,
            COUPENOTTE: 30,
            GRINGOLEM: 40,
            CANINOS_H: 40,
            SOVKIPOU: 40,
            BEBECAILLE: 40,
            MIMIQUI: 30,
            CHARBAMBIN: 20,
            GALEKID: 30,
            EMBRYLEX: 20,
            FEUNNEC: 10,
            ENTEI: 1
        },
    },
    {
        id: 24,
        code: '',
        name: "Route 24",
        sprite: "./sprites/locations/location_41.png",
        unlock_day: new Date("2024-12-24"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 29,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            FEROSINGE: 2,
            BALIGNON: 3,
            SAQUEDENEU: 3,
            PSYKOKWAK: 4,
            PYRONILLE: 4,
            SINISTRAIL: 4,
            FANTOMINUS: 3,
            TERHAL: 3,
            DISPAREPTIL: 2,
            LOKHLASS: 2,
            COIFFETON: 1,
        },
    },
    {
        id: 25,
        code: '',
        name: "Route 25",
        sprite: "./sprites/locations/location_42.png",
        unlock_day: new Date("2024-12-25"),
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: false,
        base_level: 30,
        level_randomness: 2,
        generated_pokemons: [],
        possible_pokemons: {
            FRISON: 40,
            EXCELANGUE: 30,
            GRAVALANCH: 30,
            BLIZZI: 30,
            RHINOFEROS: 40,
            TETAMPOULE: 30,
            LEVEINARD: 30,
            EVOLI: 30,
            TERRAISTE: 20,
            DRACKHAUS: 20,
            FLORAMANTIS: 10,
            WUSHOURS: 5,
            MEW: 1,
            MEWTWO: 1,
        },
    },
    /*
    ===================================
    EVENTS MAPS ONLY AVAILABLE VIA CODE
    ===================================
    */
    // Launch event
    {
        id: 1000,
        code: 'ESMA-2024',
        name: "Pikachu est arrivé !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: true,
        adaptativeLevel: false,
        base_level: 5,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            PIKACHU: 1,
        },
    },
    // Starters for each regions
    {
        id: 1001,
        code: 'D4P7Z8T3F2',
        name: "Kanto, emblème d’aventure !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            SALAMECHE: 1,
            BULBIZARRE: 1,
            CARAPUCE: 1,
        },
    },
    {
        id: 1002,
        code: 'W9J7X3M2Q5',
        name: "Johto, berceau des légendes !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            GERMIGNON: 1,
            HERICENDRE: 1,
            KAIMINUS: 1,
        },
    },
    {
        id: 1003,
        code: 'R3F6P8Z5J7',
        name: "Hoenn, nature et puissance !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            ARCKO: 1,
            POUSSIFEU: 1,
            GOBOU: 1,
        },
    },
    {
        id: 1004,
        code: 'Y2N8G5D3H7',
        name: "Sinnoh, terre de mythes !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            TORTIPOUSS: 1,
            OUISTICRAM: 1,
            TIPLOUF: 1,
        },
    },
    {
        id: 1005,
        code: 'K3Q9X7M2R6',
        name: "Unys, modernité et espoir !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            VIPELIERRE: 1,
            GRUIKUI: 1,
            MOUSTILLON: 1,
        },
    },
    {
        id: 1006,
        code: 'T7P4D9Q3F2',
        name: "Kalos, raffinement et beauté !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            MARISSON: 1,
            FEUNNEC: 1,
            GRENOUSSE: 1,
        },
    },
    {
        id: 1007,
        code: 'M5Z8R7Y3Q6',
        name: "Alola, paradis ensoleillé !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            BRINDIBOU: 1,
            FLAMIAOU: 1,
            OTAQUIN: 1,
        },
    },
    {
        id: 1008,
        code: 'F9P2J7X3T6',
        name: "Galar, puissance et gloire !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            OUISTEMPO: 1,
            FLAMBINO: 1,
            LARMELEON: 1,
        },
    },
    {
        id: 1009,
        code: 'H3K7W5R8P9',
        name: "Paldea, audace et liberté !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            POUSSACHA: 1,
            CHOCHODILE: 1,
            COIFFETON: 1,
        },
    },
    {
        id: 1010,
        code: 'MERCI-VRAIMENT!',
        name: "Vous êtes des anges",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            RAIKOU: 3,
            SUICUNE: 3,
            ENTEI: 3,
            CELEBI: 1,
        },
    },
    // Custom codes for Lucy's advent calendar
    {
        id: 1100,
        code: 'LE-GROS-GNOGNI',
        name: "Hihi gnongi gnongi",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            POULPAF: 10,
            HIPPOPOTAS: 10,
            POHM: 8,
            PONYTA: 5,
            TOGEPI: 1,
        },
    },
    {
        id: 1101,
        code: 'BASEE-SUR-LE-MOUVEMENT',
        name: "Le passé de ton passé de mon passé",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            AMONITA: 10,
            KABUTO: 10,
            PTERA: 10,
            AMAGARA: 5,
            PTYRANIDUR: 5,
            REGIROCK: 1,
            REGICE: 1,
            REGISTEEL: 1,
        },
    },
    {
        id: 1102,
        code: 'JOUR-NUIT',
        name: "Hihi ca brille !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            SOLAROC: 10,
            SELEROC: 10,
            LOUPIO: 10,
            METENO: 6,
            COSMOG: 4,
        },
    },
    {
        id: 1103,
        code: 'NUCLEOS',
        name: "Bien joué !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            NUCLEOS: 100,
            POHM: 8,
            MIMITOSS: 8,
            BIBICHUT: 5,
            CHAMALLOT: 6,
            OSSELAIT: 5,
            TOUTOMBE: 5,
            GRIKNOT: 3,
        },
    },
    // Other codes
    {
        id: 1104,
        code: 'FOID-VISHER',
        name: "Joyeux Noël !",
        sprite: "./sprites/locations/location_44.png",
        unlock_day: -1,
        has_been_used: false,
        shiny_lock: false,
        adaptativeLevel: true,
        base_level: 1,
        level_randomness: 0,
        generated_pokemons: [],
        possible_pokemons: {
            QULBUTOKE: 30,
            PANDESPIEGLE: 30,
            MUSTEBOUEE: 30,
            AXOLOTO: 30,
            BARPAU: 30,
            MAGICARPE: 30,
            KYOGRE: 28,
            GROUDON: 28,
        },
    },
];