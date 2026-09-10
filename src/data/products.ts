import { Product } from '../types';

export const WHATSAPP_PHONE = '51970480398';
export const WHATSAPP_DISPLAY = '+51 970 480 398';
export const INSTAGRAM_HANDLE = '@Kajel.pe';

// Image constants directly from the user's HTML and flyers
export const IMAGES = {
  // Hero and Pack Carnerita
  carneritaTop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgh6kkmkWRbJC0Ad-XPmZvxpZfQqWJqKNPPE_r8SGlhmnDrTUmF1_oNkMuS9uy1bU9MMaewKL-etnWXY1LCIFuTunBTZdYcm-R67wbn6grmWZ51aaOhnWZOb7mhao-euDlGnW7Y3-3gr8VQbSyk8TETPmPTd9QJS4M7R0euV-oPPMEdTcRypJtSSZ4u7YhiVJeAzBIYx-qf-TfeuahjNYCm_I563gwPKPxWzJClddDSfjaUCbcVkuZ7piw9RZ3DODE',
  pollitaHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBQ9xhlncgTzXtBdfOr_T5o8uLBfyn8glROIMyFfZ5OK1ZrnIkBv9TUzDi4G7AIGrdNKGLH4kbWsHWPv4o6Q_B7HLd62JQAlmk4DZ80RQL72KGna0M72rmy_mo6KmgjTc1b5gKe5nEgQtlplhN-Bm4orN46aMeWGJFKlYLKY12UgC50jtdYYoYvS4NuqHpypSM6BvYHXR0U7INoDagi4Xi3HzMv7Br9M2Ga3PMNf-rX7ohdBqdbzrjERa4IZewxbyn',
  patitaHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV05q8HuNHeQccAGtl55hpps9YxnXv7jnW4msiqlF4Iw86wmSAbARglFlYdFgO3A1TW_Ppii3U6wT0HPsukoocjwjUrg6TTGRzOxhpKoSiJMf9an9W0b5jGEFr21zYMOMmEF1JT1t5kVTGVzp4JB9QYSqDaxpkFzxPnsz0xBNkm2syTILpAeJVf50tueBZIEzz5ZhJ-feBAlb9SfGrWwJSQEiYNXFky0tYE-TstUHQxxR7WxFn8SHAY5XXK0PQu2mS',

  // Catalog products
  productCarnerita: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1-UD3XiYjnc46hXfXbsq_WB5eqExdhHorfbN0Vy2_r9WmUPrtI-elBT8VNnTbMIgQy4MK18KSdgO2Y18gWYcTvipbaLgH-yrqcVyXEfsvXglTbyyrV7JBuEetetUnnSvkuptHzLfUsJHwnOKyvtcdA-ZIHqZtMzuTKklkl7TU5JdkeFMcCAG5LtSna2os8WufZ4z1-yw7JVOib9LXfWgxXN0k5kKJO5ZWI0WagK1hrAWhX3qi2bgMIDVB8NFVVEi-',
  productPatitaV1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV_ue8A2iam54liD-xFEW6vfEPTISak4NS_45qeHkKxBODKhQL9mq5ZhvZjvd7GU1sroxC1JTk5bBs42OSlNYGo1inKa-g2oQY2fcXZE55TYMDdQT95-KvIlswd8XIVa1QiqSldrgiKXhFlkDAZBc_z9fbgHTDZcBmEwWoPstPpVwHIvIx1SNo_2REE4OFBhFK_2UuYxzAWBrui8kHLQhDN470n0Aua8GeEjgwwc6_3stZHDPMy5u089wT1S6QpX-q',
  productPollitaV2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSZE-dPRqlFDMBDKp4wfvJMD7thN3lecvCP6gO8x3V407Folx4QdPZhQysGw573CzZa-Dg8gNGGa98sk6-VBrf9yBViHnZNXapssrAmmFBeNxm6V73dQMBVyGGh9ai2LgXiE0yGEUOu1uQjShxok6mma4SyfG_FTBXmPdBQSS9v1j4rGX2MOo_TpFUicQoxWuqwoydduZEDEP8YCre9TyazOq33VcpNwCfh-b8JQ8KiXRYHjNpG_8w15BUd77LM861',

  // Level 3 Single Product Main
  productDetailMain: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvqx0PmnNohSGiyI7YJPoa6XR6zQ20uJOoSk1OQWXnK5IXlaVAEzD-gn93bGnuqx9FXDbdQnicXNShwZcRPQ8rf51hoqfutmduR7FlnM-qKWmufQ-5HS68v2IzgJbQ-Ozqgm8UXW7bWS2lX2OaUoLuUddwuRB0JnTVUXBXZpBvkTvEOmsZB3C7qhDLMzXnACfFc1_Q6QDTLECLZNGbkw4DqbyhIwg3G4mtlXhAZHbsgm67h9TbYbq7TvFjfnph7vVt',

  // Single Product Gallery Thumbnails
  galleryV1Full: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXjM9ZwJrdnW9-e0R6nfaZmIeauC4pJ7ptrisHkT3OIcfUaCLLkBpeUSrc0G8wextOkT3e3ennkouF08yCBstj5b0f-r06mcUY17_3Hy622WgYid9IBGs4LEivUoTjb89LqwOuNlM7YiTk9zG5iv5B49DvyXUS9QUZTJigQFx1g9pFfakmLSAOOFHAlXt-p-WEbSKE2sbN4aWubwze_pALiOcjFzn5wxCD0ilw4oA1z7J-CRUGvPOgo26Igbj_jZiE',
  galleryV1Thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgn9CmkJMhluWnn3skvgwbHmWgiWZAEcchPrNJq0WIzglOMfE-5IxB6cbrfBBJODTl4Al1trSyccTi_VgUZgokGJpfc5qLaHrkHbFSaezSEFsem9YmprKdinAeiQET0lUg78ZkxJLFxMc-S5t8OA5dwDNfEv6wW8kCBtkAgfnMIx7oNotSCBqiHQWJozs4l6tfqgYPyNHbkxddyGn71bzCnEil3uWx3K1p7z36uINNT74qgcsnwottCVA_YpNZb_em',

  galleryV2Full: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoFINQlzN1WpnLV81LYDarFhe-UZvpqn_G6jAV7YYNp_1GwO0w7Cetqgzlk7rzwm3dl1i1ZP9Yks9p6c3t_uB-H1oSqoI3N5chzYQ_poB0IxPHAhwIwS31uo1jhn6Wdfn9qf0yWnM9CslpzRRhR0hiAVi8gzXT1X8psfz8U5ZhXVECxrS6icCayo1M26t7bmL6n2T8aJ41p8ixZeLG5F2vhGBWKX76RQeDcOoBhMvWw1LfwYzS6SHjRawuSyg7dgHy',
  galleryV2Thumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlIWjwp2FJX-IKIOKLng4fDnY9NzSIP01p76ojE_zCEJBRz1hXTexQjCtc8A9vX4mpZIhpIIwVztzES9oHtq1qNc6Q4Ud_DsKs1pguegNgC4XrixBXwx5y56X183E-xl4IjHwrtCpc6b7oSSO0cal1BvEt_GqDvuf9-meFtADcOE4nAbmkzHvrckCUpPtmSkeJ7GV-LUC48fglS23EQtniKeoqUDyRCgf6bJSbKyrDwoW8zovU8UTgK7TTEPHr76PL',

  galleryCarneritaFull: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrxhvTdLvt3iCy440mV3qRXuU6Kulp_icVuiMcmrDNj7LbkBxOT99cSqDb3U5GwA6lyeXKbldRLyPZIbbS47znX60cSB0XIimvOJ_JMRXAKRWxp2EllYJ8k8crp6t8pNiUbK3iEGJ_C6plbnf9TjsADTU1BA3FZU5M9qEFD8iWUYm-aC1HLQMAoHuWyILpk25VTZ8gSZbVOjLySYaBivMucSk5_tDj0xbddkcL8n1ih8JRysbecgpY1DQU2hEo0s65',
  galleryCarneritaThumb: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAML6qglR1yiSTPN625AWxiWvOFIkEkb-EAoSPv7aLdFduwRiLLiOzN83MlPEMuJKbRTTnDcyVN6xTmGikEP0X-75BaSWqE1JSg9c-IB5kGEhxisKeI6Xc2rVjI2vu-QFTUwRcwnTOiEZ1lj613w9NHYQa_o_kca_8PL6j7zxSNmbfEnEQOU3BAIIEV8F-tcwUU8Ry60rPBqG6SSeAxViCFsu5uf5T7gkTPK6Gvnp8w3IWtnaJNb6m7pBctxtCaFeLu',
  ramoGirasol: '/images/sa.jpeg',
};

export const PRODUCTS: Product[] = [
  {
    id: 'ramo-girasol',
    name: 'Ramo Girasol',
    subtitle: 'Detalle floral con follaje y dulces',
    category: 'ramos',
    price: 13.90,
    normalPrice: 16.00,
    discountLabel: 'Ahorra 13%',
    tag: 'Opción Accesible',
    tagColor: 'bg-[#fef3c7] text-[#1c1917]',
    image: IMAGES.ramoGirasol,
    gallery: [
      { url: IMAGES.ramoGirasol, label: 'Ramo Girasol Chenille con Tarjeta', thumb: IMAGES.ramoGirasol },
      { url: IMAGES.carneritaTop, label: 'Detalle Girasol', thumb: IMAGES.galleryCarneritaThumb }
    ],
    description: 'Ramo individual artesanal elaborado a mano con pétalos de chenille aterciopelado, follaje decorativo verde, margaritas silvestres y cinta decorativa con mensaje especial. El detalle perfecto para no dejar pasar el día de las flores amarillas.',
    inclusions: [
      'Hermoso ramo de un girasol artesanal con follaje y margaritas',
      'Tarjeta dedicatoria personalizada con diseño temático',
      'Bon o bon mini (Cant. 2) — Válido exclusivo para preventa'
    ],
    hasCandies: true,
    hasLights: false,
    hasJewelry: false,
    hasPlush: false,
  },
  {
    id: 'gift-carnerita',
    name: 'Gift Flores Amarillas',
    subtitle: 'Con llavero carnerita y anillo girasol',
    category: 'packs',
    price: 39.90,
    normalPrice: 47.90,
    discountLabel: 'Ahorra S/ 8.00',
    tag: 'Más Vendido',
    tagColor: 'bg-[#b45309] text-white',
    image: IMAGES.productCarnerita,
    bestSeller: true,
    gallery: [
      { url: IMAGES.productCarnerita, label: 'Gift Pack Carnerita', thumb: IMAGES.galleryCarneritaThumb },
      { url: IMAGES.galleryCarneritaFull, label: 'Caja & Llavero', thumb: IMAGES.galleryCarneritaThumb },
      { url: IMAGES.carneritaTop, label: 'Presentación Completa', thumb: IMAGES.galleryCarneritaThumb }
    ],
    description: 'Un detalle inolvidable que combina lo tierno y lo brillante: ramo de girasol eterno, el adorable llavero de carnerita de 12cm, y el exclusivo anillo girasol giratorio en su cajita de regalo. ¡Incluye luces de hada y bombones de preventa!',
    inclusions: [
      'Hermoso ramo de un girasol eterno con follaje artesanal',
      'Llavero de carnerita ultra suave de 12cm',
      'Anillo girasol giratorio antiestrés en cajita de presentación',
      'Bon o bon mini (Cant. 3)',
      'Luces hada cálidas instaladas (Regalo de preventa) + Tarjeta dedicatoria'
    ],
    hasJewelry: true,
    hasPlush: true,
    hasLights: true,
    hasCandies: true,
  },
  {
    id: 'gift-box-v1-patita',
    name: 'Gift Box Flores Amarillas (V1)',
    subtitle: 'Caja de lujo con peluche patita y set de joyas',
    category: 'boxes',
    price: 59.90,
    normalPrice: 67.90,
    discountLabel: '-12% OFF',
    tag: 'Versión 1: Patita Novia',
    tagColor: 'bg-[#f59e0b] text-[#451a03]',
    image: IMAGES.productPatitaV1,
    bestSeller: true,
    variants: [
      {
        id: 'patita',
        name: 'Versión 1: Patita Novia',
        description: 'Con velo nupcial rosa y corona',
        image: IMAGES.galleryV1Full,
        thumbImage: IMAGES.galleryV1Thumb,
      },
      {
        id: 'pollita',
        name: 'Versión 2: Pollita Novia',
        description: 'Con velo blanco nupcial y corona',
        image: IMAGES.galleryV2Full,
        thumbImage: IMAGES.galleryV2Thumb,
      },
      {
        id: 'carnerita',
        name: 'Versión 3: Pack Carnerita',
        description: 'Con llavero carnerita de 12cm',
        image: IMAGES.galleryCarneritaFull,
        thumbImage: IMAGES.galleryCarneritaThumb,
      }
    ],
    gallery: [
      { url: IMAGES.galleryV1Full, label: 'V1: Patita Novia', thumb: IMAGES.galleryV1Thumb },
      { url: IMAGES.galleryV2Full, label: 'V2: Pollita Novia', thumb: IMAGES.galleryV2Thumb },
      { url: IMAGES.galleryCarneritaFull, label: 'Pack Carnerita', thumb: IMAGES.galleryCarneritaThumb }
    ],
    description: 'La experiencia de regalo más completa y romántica de la temporada: elegante box premium con ramo de girasol eterno, peluche temático de patita novia con velo rosa, set de joyería fina en acero inoxidable con anillo giratorio y collar a juego, 5 bombones Bon o bon y luces de hada.',
    inclusions: [
      'Ramo de girasol con follaje delicado y margaritas',
      'Peluche patita novia con velo nupcial rosa y tiara',
      'Set de anillo giratorio y collar de acero inoxidable dorado',
      'Bon o bon mini (Cant. 5 unidades)',
      'Luces Hada cálidas instaladas (Regalo de preventa) + Tarjeta dedicatoria'
    ],
    hasJewelry: true,
    hasPlush: true,
    hasLights: true,
    hasCandies: true,
  },
  {
    id: 'gift-box-v2-pollita',
    name: 'Gift Box Flores Amarillas (V2)',
    subtitle: 'Caja de lujo con peluche pollita y set de joyas',
    category: 'boxes',
    price: 59.90,
    normalPrice: 67.90,
    discountLabel: '-12% OFF',
    tag: 'Versión 2: Pollita Novia',
    tagColor: 'bg-[#fef08a] text-[#78350f]',
    image: IMAGES.productPollitaV2,
    variants: [
      {
        id: 'pollita',
        name: 'Versión 2: Pollita Novia',
        description: 'Con velo blanco nupcial y tiara',
        image: IMAGES.galleryV2Full,
        thumbImage: IMAGES.galleryV2Thumb,
      },
      {
        id: 'patita',
        name: 'Versión 1: Patita Novia',
        description: 'Con velo nupcial rosa',
        image: IMAGES.galleryV1Full,
        thumbImage: IMAGES.galleryV1Thumb,
      }
    ],
    gallery: [
      { url: IMAGES.galleryV2Full, label: 'V2: Pollita Novia', thumb: IMAGES.galleryV2Thumb },
      { url: IMAGES.galleryV1Full, label: 'V1: Patita Novia', thumb: IMAGES.galleryV1Thumb },
      { url: IMAGES.galleryCarneritaFull, label: 'Pack Carnerita', thumb: IMAGES.galleryCarneritaThumb }
    ],
    description: 'Nuestra edición consentida con la encantadora pollita novia luciendo su velo blanco nupcial. Acompañada del ramo de girasoles eternos, juego de collar y anillo giratorio, bombones y luces mágicas.',
    inclusions: [
      'Hermoso ramo de un girasol con follaje artesanal',
      'Peluche pollita novia (con velo nupcial blanco)',
      'Set de anillo giratorio y collar giratorio inoxidable',
      'Bon o bon mini (Cant. 5 unidades)',
      'Luces Hada (Preventa) + Tarjeta dedicatoria temática'
    ],
    hasJewelry: true,
    hasPlush: true,
    hasLights: true,
    hasCandies: true,
  }
];

export const PRESET_DEDICATIONS = [
  'Ella sabía que él sabía que algún día pasaría que vendría a buscarla con sus Flores Amarillas',
  'Flores eternas para un amor que florece todos los días. ¡Te amo!',
  'Un recordatorio de lo especial que eres para mí hoy y siempre 🌻💛',
  'Por miles de momentos felices juntos. ¡Feliz día de las flores amarillas!'
];

export const DISTRICTS_LIMA = [
  'Miraflores',
  'San Isidro',
  'Santiago de Surco',
  'San Borja',
  'La Molina',
  'Barranco',
  'Jesús María',
  'Magdalena del Mar',
  'Pueblo Libre',
  'San Miguel',
  'Lince',
  'Cercado de Lima',
  'Los Olivos',
  'San Martín de Porres',
  'Surquillo',
  'Chorrillos',
  'Ate',
  'San Juan de Lurigancho',
  'San Juan de Miraflores',
  'Villa El Salvador',
  'Comas',
  'Callao / Bellavista'
];

export interface LimaDistrictOption {
  name: string;
  zone: string;
  fee: number;
  estimatedHours: string;
}

export const LIMA_DISTRICTS: LimaDistrictOption[] = [
  { name: 'Miraflores', zone: 'Lima Centro / Sur', fee: 2.5, estimatedHours: '1 a 2 horas (Mismo día)' },
  { name: 'San Isidro', zone: 'Lima Centro / Financiero', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'Santiago de Surco', zone: 'Lima Sur', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'San Borja', zone: 'Lima Centro', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'Barranco', zone: 'Lima Sur', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'Jesús María', zone: 'Lima Centro', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'Lince', zone: 'Lima Centro', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'Magdalena del Mar', zone: 'Lima Centro', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'Pueblo Libre', zone: 'Lima Centro', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'San Miguel', zone: 'Lima Centro / Costa', fee: 2.5, estimatedHours: '2 a 3 horas' },
  { name: 'La Molina', zone: 'Lima Este', fee: 2.5, estimatedHours: '2 a 3 horas' },
  { name: 'Surquillo', zone: 'Lima Centro', fee: 2.5, estimatedHours: '1 a 2 horas' },
  { name: 'Cercado de Lima', zone: 'Lima Centro Histórico', fee: 2.5, estimatedHours: '2 a 3 horas' },
  { name: 'Chorrillos', zone: 'Lima Sur', fee: 2.5, estimatedHours: '2 a 3 horas' },
  { name: 'Los Olivos', zone: 'Lima Norte', fee: 2.5, estimatedHours: 'Entrega programada' },
  { name: 'San Martín de Porres', zone: 'Lima Norte', fee: 2.5, estimatedHours: 'Entrega programada' },
  { name: 'San Juan de Miraflores', zone: 'Lima Sur', fee: 2.5, estimatedHours: 'Entrega programada' },
  { name: 'San Juan de Lurigancho', zone: 'Lima Este', fee: 2.5, estimatedHours: 'Entrega programada' },
  { name: 'Ate / Vitarte', zone: 'Lima Este', fee: 2.5, estimatedHours: 'Entrega programada' },
  { name: 'Comas', zone: 'Lima Norte', fee: 2.5, estimatedHours: 'Entrega programada' },
  { name: 'Carabayllo (Carabayork)', zone: 'Lima Norte', fee: 2.5, estimatedHours: 'Entrega programada' },
  { name: 'Callao / Bellavista', zone: 'Prov. Constitucional', fee: 2.5, estimatedHours: 'Entrega programada' },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Con cuánta anticipación debo reservar mi pedido de Flores Amarillas?',
    answer: 'Te recomendamos reservar con al menos 24 a 48 horas de anticipación mediante la Preventa para asegurar el stock de peluches nupciales (Patita y Pollita) y tus luces hada gratuitas. Para el 21 de septiembre, los cupos son limitados por capacidad logística en Lima.'
  },
  {
    question: '¿Cómo funcionan las Luces Hada de regalo?',
    answer: 'Las luces hada vienen ya integradas y entrelazadas artísticamente alrededor del girasol y la caja. Funcionan con mini batería botón incluida (con seguro removible listo para encender con un toque).'
  },
  {
    question: '¿De qué material son las joyas que vienen en los Gift Boxes?',
    answer: 'Tanto el collar como el anillo giratorio están elaborados en acero inoxidable hipoalergénico bañado en oro, resistentes al agua y al sudor. Tienen mecanismo giratorio antiestrés con forma de girasol.'
  },
  {
    question: '¿Cómo se coordinan las entregas y los métodos de pago?',
    answer: 'Aceptamos Yape, Plin y transferencias BCP/BBVA. Para reservar se abona un adelanto del 50% y el saldo restante se puede abonar contra entrega o previo al despacho. Una vez confirmado tu pedido, te enviamos la foto del arreglo terminado antes de que salga en ruta.'
  },
  {
    question: '¿Las flores requieren algún cuidado especial?',
    answer: 'Al ser flores eternas elaboradas a mano en chenille aterciopelado de alta densidad, no necesitan agua ni marchitan. Simplemente mantenlas en un lugar seco bajo techo y límpialas ocasionalmente con un plumero suave para que brillen por años.'
  }
];

