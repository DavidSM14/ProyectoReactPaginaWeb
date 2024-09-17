import { useState, useEffect } from 'react';
import { CartProvider } from '../CartContext';
import CarruselColecciones from '../ComponentesBrands/CarruselColecciones';
const imageSet = {
  'ARE': [
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/ATMOSPHERE/ATMOSPHERE%20MOSS.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/ATMOSPHERE/BLIZZARD%20BLOSSOM.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/ATMOSPHERE/BLIZZARD%20SHELL.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/ATMOSPHERE/STORM%20DUSK.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/SANTORINI%20NOIR.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/MOOD%20BOARD%20TOUCH%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/APACHE%20CHERRY.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/COTE%20D%C2%B4AZUR/ANTIBES%20RUBY.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/COTE%20D%C2%B4AZUR/ANTIBES%20RUBY%203.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/COTE%20D%C2%B4AZUR/MONTECARLO%20RUBY%204.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/DUNE/DUNE%20SAHARA.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/DUNE/DUNE%20PATAGONIA.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/DUNE/AMASTISTA%20ALOE.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/SANTORINI%20NOIR.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/MOOD%20BOARD%20TOUCH%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/APACHE%20CHERRY.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/JEWEL/JEWEL%20DUCK%20EGG%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/JEWEL/JEWEL%20NORDIC%20BLUE.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/JEWEL/JEWEL%20DUCK%20EGG%203.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/SANTORINI%20NOIR.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/MOOD%20BOARD%20TOUCH%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/APACHE%20CHERRY.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/SANTORINI%20NOIR.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/MOOD%20BOARD%20TOUCH%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/ARENA%20AMBIENTE/APACHE%20CHERRY.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/MEDITERRANEAN%20STRIPES/MIKONOS%20ALUMINIUM.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/MEDITERRANEAN%20STRIPES/FOMENTERA%20STONE.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/MEDITERRANEAN%20STRIPES/PADDINGTON.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/MONTANA/COJINES%20MONTANA.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/MONTANA/MONTANA%20ONIX.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/MONTANA/YELLOWSTONE%20PORCELAIN%203.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/NOMAD/HABITAT%20SAND.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/NOMAD/LUNAR%20BURGUNDY.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/NOMAD/NOMAD%20BURGUNDY%203.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/PAPIRO/TERRA%20PORCELAIN.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/PAPIRO/TERRA%20PORCELAIN%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/PAPIRO/PAPIRO%20PEARL.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/PURITTY/LEVANTINE(1).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/PURITTY/SHROUD%20WHITE.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/PURITTY/TRELLIS%20OFF%20WHITE%202.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/RUSTICA/SACO%20GARNET.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/RUSTICA/SACO%20GARNET(1).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/RUSTICA/RUSTICA.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/STONE/STONE%20CANAIMA.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/STONE/STONE%20CANAIMA%202.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/STRATOS/ANTILLA%20VELVET%20C%2003.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/STRATOS/RINPA.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/STRATOS/SURIRI%20RAVEN%202.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TAIGA/TUNDRA%20KOLA%203.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TAIGA/ZAMFARA%20BAOBAB.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TAIGA/TUNDRA%2002.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TOUCH/TOUCH%20GRACE%203.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TOUCH/TOUCH%20BACALL%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TOUCH/TOUCH%20AUDREY.jpg",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TOUCH/TOUCH%20GRACE%203.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TOUCH/TOUCH%20BACALL%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/ARENA%20AMBIENTE/TOUCH/TOUCH%20AUDREY.jpg",
    ],
  ],
  'HAR': [
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/ARISTOS/ARISTOS%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/MOODBOARDS/MOOD%20BOARD%20BLINDER%20.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/MOODBOARDS/MOOD%20BOARD%20BLINDER%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/MOODBOARDS/MOOD%20BOARD%20VARADERO.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/MOODBOARDS/MOOD%20BOARD%20VARADERO%202.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/MOODBOARDS/MOOD%20BOARD%20BOLONIA.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/MOODBOARDS/MOOD%20BOARD%20CARAVAN.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/ETHNIC%20MOOD/DESERT%20GATE%20INDIGO.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/ETHNIC%20MOOD/HAIMA%20MARINE%202.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/HARBOUR%20AMBIENTE/ETHNIC%20MOOD/ROOTS%20PORCELAIN.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/HAIMA%20MARINE.jpg"
    ],
  ],
  'FLA': [
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/ARTISAN%20WEAVES/ALEXANDRIA%20ABYSS%20(3).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/ARTISAN%20WEAVES/ALEXANDRIA%20BRICK.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/ARTISAN%20WEAVES/ALEXANDRIA%20ABYSS%20(4).jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/BUCL%C3%89/BUCLE%20%20CANVAS.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/BUCL%C3%89/BUCLE%20LEAF%2006.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/BUCL%C3%89/BUCLE%20FOSSIL%20(2).jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/COASTAL%20LINENS/GRANADELLA%20CLOUD(2).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/COASTAL%20LINENS/GRANADELLA%20CLOUD(3).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/COASTAL%20LINENS/AMBOLO%20BLUEBERRY%20(2).jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/COURTYARD%20GARDEN/ADELFAS%20MOSS(3).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/COURTYARD%20GARDEN/JARAPA%20(AMPLIADO).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/COURTYARD%20GARDEN/QUEEN%20DALHIA%20JUNIPER(2).jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/DIAMANTE/DIAMANTE%2002%20(AMPLIADO).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/DIAMANTE/DIAMANTE%20C02%2002.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/DIAMANTE/DIAMANTE%20C10.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/EAST%20COAST/NIAGARA%20SUNSHINE%20(2).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/EAST%20COAST/JERSEY%20PUMICE%20(3).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/EAST%20COAST/TIMES%20SQUARE%20AEGEAN.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/EASTERN%20MEMORIES/ESATER%20MEMORIES%20(AMPLIADA)(7).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/EASTERN%20MEMORIES/NAZARI%20AZURE%2001.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/EASTERN%20MEMORIES/NAZARI%20TANGERINE%20(2).jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/GENESIS/GENESIS%20C01%20%20(2).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/MOODBOARDS/MOODBOARD%20GENESIS.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/GENESIS/GENESIS%20LACQUER%20RRE%20(6).jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/LUXURY%20DREAPS/LA%20RETE%20DEEP%20TEAL(6).jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/LUXURY%20DREAPS/LA%20RETE%20BILLBERRY(2).jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/REVOLTOSO/BORNEO.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/REVOLTOSO/IMPERIAL.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/REVOLTOSO/LUMIERE.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/FLAMENCO%20AMBIENTE/REVOLTOSO/MOREAU.jpg"
    ],
    

  ],
  'CJM': [
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/VERANDA/VERANDA%20SUNSHINE.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/VERANDA/VERANDA%20EMERALD%20F1.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/VERANDA/VERANDA%20EVERGREEN.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/MOODBOARDS/MOODBOARD%20SET%20OF%20THREADS%2072px.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/URBAN%20CONTEMPORARY/LOFT%20ALUMINIUM.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/URBAN%20CONTEMPORARY/LOFT%20ALUMINIUM%202.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/CJM%20AMBIENTE/ASIAN%20ROMANTICISM%20ROYAL%20BLUE%20F2.jpg"
    ],
    [
      "",
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/MOODBOARDS/MOODBOARD%20SABANNA%2001.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/TOKIO/COLECCI%C3%93N%20TOKIO.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/TOKIO/COLECCI%C3%93N%20TOKIO%202.jpg"

    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/COLONY/FIYI%20%20LAGOON.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/COLONY/TROPICAL%20LEAVES%20EVERGREEN.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/COLONY/TONGA%20PUMICE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/CJM%20AMBIENTE/ASIAN%20ROMANTICISM%20ROYAL%20BLUE%20F2.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/MEDITERRANEAN%20STRIPES/TIRSA%20C02.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/SALT%20AND%20PEPPER/SALT%20TANGERINE.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/VELVETY/VELVETY%20ALOE.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/VELVETY/VELVETY%20EVERGREEN.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/VELVETY/VELVETY%20LAVAROCK%202.jpg"

    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/ROAD%20TO%20ASIA/BOTANICAL%20KOMORI%20MAGNESIUM.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/ROAD%20TO%20ASIA/KERANJANG%20PUMICE%20.jpg",
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/ROAD%20TO%20ASIA/LINOUS%20HEMP.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbienteParaCarruselesWeb/CJM%20AMBIENTE/MOODBOARDS/MOODBOARD%20FRESCO%2001.jpg"
    ],
  ],
  'BAS': [
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/HARBOUR%20AMBIENTE/MOOD%20BOARD%20BOLONIA.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/CJM%20AMBIENTE/ASIAN%20ROMANTICISM%20ROYAL%20BLUE%20F2.jpg"
    ],
    [
      "https://cjmw.eu/ImagenesTelasCjmw/ImagenesAmbiente/FLAMENCO%20AMBIENTE/1200%20FLAMENCO%20ZAHARA%2004.jpg"
    ],
  ],
}



function ColeccionesMarcas({ marca }) {
  const [colecciones, setColecciones] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const imageSetsForMarca = imageSet[marca] || [];

  useEffect(() => {
    const fetchCollectionsByBrand = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/getCollectionsByBrand?brand=${marca}`);
        if (!response.ok) {
          throw new Error(`Error fetching collections: ${response.statusText}`);
        }
        const data = await response.json();
        setColecciones(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching collections:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCollectionsByBrand();
  }, [marca]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (colecciones.length === 0) {
    return <div>No collections found for {marca}</div>;
  }

  console.log('Colecciones:', colecciones);
  console.log('Image sets for marca:', imageSetsForMarca);

  return (
    <CartProvider>
      <div className="xl:mt-[3%] mt-[20%] md:mt-[10%]]">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-3xl font-bold text-black mx-auto">Explora nuestras colecciones</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
          {colecciones.map((coleccion, index) => (
            <div key={index}>
              <div className="flex items-center justify-center py-[15%] sm:py-[10%] md:py-[10%] lg:py-[10%] xl:py-[3%] 2xl:py-[3%]">
                <h1 className="text-3xl py-[1%]">{coleccion}</h1>
              </div>

              {/* Mostrar el carrusel para el conjunto de imágenes correspondiente a esta colección */}
              {imageSetsForMarca[index] && (
                <CarruselColecciones imageSets={imageSetsForMarca[index]} />
              )}
            </div>
          ))}
        </div>
      </div>
    </CartProvider>
  );
}

export default ColeccionesMarcas;
