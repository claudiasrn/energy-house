// ============================================================
//  Energy House — Pedigree Database
//  Source: BAZA PASA (11 pages)
//  Each entry: id, name, sex (M/F), sireId, damId
// ============================================================

window.DOGS = {
  1:   { name: "Funky Broadway of Energy House",                    sex: "M", sire: 2,   dam: 3   },
  2:   { name: "Tambourine Man of Energy House",                    sex: "M", sire: 4,   dam: 5   },
  3:   { name: "Penny Lane Empyrean of Energy House",               sex: "F", sire: 6,   dam: 7   },
  4:   { name: "A'Vigdors Platone",                                 sex: "M", sire: 8,   dam: 9   },
  5:   { name: "C'Est La Vie of Energy House",                      sex: "F", sire: 6,   dam: 10  },
  6:   { name: "A'Vigdors Serafino",                                sex: "M", sire: 12,  dam: 11  },
  7:   { name: "Grand A'Ne Frenkie for Energy House",               sex: "F", sire: 13,  dam: 14  },
  8:   { name: "Mechoue-Argentina Diogenes",                        sex: "M", sire: 15,  dam: 16  },
  9:   { name: "A'Vigdors Demonice",                                sex: "F", sire: 17,  dam: 18  },
  10:  { name: "Novizala Rosa Negra at Energy House",               sex: "F", sire: 19,  dam: 20  },
  11:  { name: "Dicar I'm Fatal",                                   sex: "M", sire: 21,  dam: 22  },
  12:  { name: "A'Vigdors Clodia",                                  sex: "F", sire: 23,  dam: 24  },
  13:  { name: "Hellzapoppin L'Anima Del Filosofo",                 sex: "M", sire: 25,  dam: 26  },
  14:  { name: "Grand A'Ne Ula",                                    sex: "F", sire: 27,  dam: 28  },
  15:  { name: "Delon Von New Glandorf",                            sex: "M", sire: 183, dam: 186 },
  16:  { name: "Dorina Von New Glandorf",                           sex: "F", sire: 183, dam: 186 },
  17:  { name: "A'Vigdors Champagne Petillant",                     sex: "M", sire: 187, dam: 188 },
  18:  { name: "A'Vigdors Idee Fixe",                               sex: "F", sire: 86,  dam: 163 },
  19:  { name: "Kingfriend Mr Legend",                              sex: "M", sire: 29,  dam: 30  },
  20:  { name: "Novizala Frenzy",                                   sex: "F", sire: 31,  dam: 32  },
  21:  { name: "Kingfriend Mr Wham",                                sex: "M", sire: 33,  dam: 34  },
  22:  { name: "Kingfriend Miss Oni",                               sex: "F", sire: 39,  dam: 93  },
  23:  { name: "Huitukan Eremenko Junior",                          sex: "M", sire: 35,  dam: 36  },
  24:  { name: "A'Vigdors Premier Violin",                          sex: "F", sire: 37,  dam: 38  },
  25:  { name: "Hellzapoppin Camembert Electrique",                 sex: "M", sire: 193, dam: 192 },
  26:  { name: "Krutaya Staya Grand Cru Jivara",                    sex: "F", sire: 59,  dam: 194 },
  27:  { name: "Renuar Dorian Red",                                 sex: "M", sire: null, dam: null },
  28:  { name: "Pearls of Ariadne's Bulldogs Essa",                 sex: "F", sire: null, dam: null },
  29:  { name: "Kingfriend Mr Wow",                                 sex: "M", sire: 39,  dam: 40  },
  30:  { name: "Kingfriend Miss Flirty",                            sex: "F", sire: 41,  dam: 42  },
  31:  { name: "Dennis VD Mestreechteneerkes",                      sex: "M", sire: null, dam: null },
  32:  { name: "Novizala Hannah",                                   sex: "F", sire: null, dam: null },
  33:  { name: "Wham V Fivelzight at Kingfriend",                   sex: "M", sire: null, dam: null },
  34:  { name: "Kingfriend Miss Gucci",                             sex: "F", sire: null, dam: null },
  35:  { name: "Vonheimdal French Alibaba",                         sex: "M", sire: null, dam: null },
  36:  { name: "Leiboll's Vips-Jubi",                               sex: "F", sire: null, dam: null },
  37:  { name: "Daulokke's Sedeux Le Superbe",                      sex: "M", sire: null, dam: null },
  38:  { name: "A'Vigdors Troya",                                   sex: "F", sire: null, dam: null },
  39:  { name: "Friend De La Parure of Kingfriend",                 sex: "M", sire: null, dam: null },
  40:  { name: "Imadorable De La Parure",                           sex: "F", sire: null, dam: null },
  41:  { name: "Daulokke's Qubus De Neuf at Kingfriend",            sex: "M", sire: null, dam: null },
  42:  { name: "Kingfriend Miss Versace",                           sex: "F", sire: null, dam: null },
  43:  { name: "Chinzano iz Palevyh Buldogov",                      sex: "M", sire: null, dam: null },
  44:  { name: "Thiela VD Mestreechteneerkes",                      sex: "F", sire: null, dam: null },
  45:  { name: "Van Gogh French Beauty",                            sex: "M", sire: null, dam: null },
  46:  { name: "Novizala Dinora",                                   sex: "F", sire: null, dam: null },
  47:  { name: "Nelson Olivier iz Palevyh Buldogov",                sex: "M", sire: null, dam: null },
  48:  { name: "Infinity Van Marvers Fortuna",                      sex: "M", sire: null, dam: null },
  49:  { name: "Roxolana iz Palevyh Buldogov",                      sex: "F", sire: null, dam: null },
  50:  { name: "Giovanni Van Marvers Fortuna",                      sex: "M", sire: null, dam: null },
  51:  { name: "Hay VD Mestreechteneerkes",                         sex: "M", sire: null, dam: null },
  52:  { name: "Charlotte Van Marvers Fortuna",                     sex: "F", sire: null, dam: null },
  53:  { name: "Kadin's Urkan V Sans Pareil",                       sex: "M", sire: null, dam: null },
  54:  { name: "Fenna Van Marvers Fortuna",                         sex: "F", sire: null, dam: null },
  55:  { name: "Bonnie VD Mestreechteneerkes",                      sex: "F", sire: null, dam: null },
  56:  { name: "Exquisite De La Parure",                            sex: "M", sire: null, dam: null },
  57:  { name: "A'Vigdors Bisquit Vencedor",                        sex: "M", sire: null, dam: null },
  58:  { name: "A'Vigdors Fira Firuzi Fiori",                       sex: "F", sire: null, dam: null },
  59:  { name: "Glenlee Night Hawk",                                sex: "M", sire: null, dam: null },
  60:  { name: "Zhuliana Fon Valua iz Palevyh Buldogov",            sex: "F", sire: null, dam: null },
  61:  { name: "Buldogi iz ozerkov Astoria Tornada",                sex: "F", sire: null, dam: null },
  62:  { name: "Fortunata De Elka Gyvybes Zyme",                   sex: "F", sire: 63,  dam: 64  },
  63:  { name: "Busher Pljus Memory Game of Frustyle",              sex: "M", sire: 68,  dam: 67  },
  64:  { name: "Nika Unique De Elka Gyvybes Zyme",                  sex: "F", sire: null, dam: null },
  65:  { name: "Racadi Sea Rex",                                    sex: "M", sire: null, dam: null },
  66:  { name: "Chia-Chia De Elka Gyvybes Zyme",                   sex: "F", sire: null, dam: null },
  67:  { name: "Busher Pljus Mazeraty",                             sex: "F", sire: null, dam: null },
  68:  { name: "Joghurt Dart Azart Gyvybes Zyme",                   sex: "M", sire: 69,  dam: 70  },
  69:  { name: "Fabulous De La Parure",                             sex: "M", sire: null, dam: null },
  70:  { name: "Ballada De Elka Gyvybes Zyme",                      sex: "F", sire: null, dam: null },
  71:  { name: "Zon Mirekl Black Boomer",                           sex: "M", sire: null, dam: null },
  72:  { name: "Busher Pljus Miroslava",                            sex: "F", sire: null, dam: null },
  73:  { name: "Ysidor De La Parure",                               sex: "M", sire: null, dam: null },
  74:  { name: "Andromeda De La Parure",                            sex: "F", sire: null, dam: null },
  75:  { name: "A Priori De Elka Juodoji Chrizantema",              sex: "F", sire: null, dam: null },
  76:  { name: "Daulokke's Arstobeau Du Tex",                       sex: "M", sire: null, dam: null },
  77:  { name: "Daulokke's Regine Deforge",                         sex: "F", sire: null, dam: null },
  78:  { name: "Confucius De La Parure",                            sex: "M", sire: null, dam: null },
  79:  { name: "Robobull Fabelhaft Xcelsior",                       sex: "M", sire: null, dam: null },
  80:  { name: "Bonaparte De Noire Beatitude",                      sex: "M", sire: null, dam: null },
  81:  { name: "Boule & Onuba Cartier",                             sex: "F", sire: null, dam: null },
  82:  { name: "Fenomenon De La Parure",                            sex: "M", sire: null, dam: null },
  83:  { name: "Boule & Onuba Donnatella",                          sex: "F", sire: null, dam: null },
  84:  { name: "Delkatina Afina Pallada",                           sex: "M", sire: null, dam: null },
  85:  { name: "Pamela Baflo",                                      sex: "F", sire: null, dam: null },
  86:  { name: "Flaubert De La Parure",                             sex: "M", sire: null, dam: null },
  87:  { name: "Daulokke's Venue D'Amour",                          sex: "F", sire: null, dam: null },
  88:  { name: "Joy of Quing Bullet",                               sex: "M", sire: null, dam: null },
  89:  { name: "Viva Victoria Milagnes",                            sex: "F", sire: null, dam: null },
  90:  { name: "Daulokke's Honore De Balzac",                       sex: "M", sire: null, dam: null },
  91:  { name: "Chernaja Magija Duchesse Pour Avigdors",            sex: "F", sire: null, dam: null },
  92:  { name: "Boule & Onuba Extasis",                             sex: "M", sire: null, dam: null },
  93:  { name: "Kingfriend Miss Nancy",                             sex: "F", sire: null, dam: null },
  94:  { name: "Makaodc Robobull Yagrumo",                          sex: "M", sire: null, dam: null },
  95:  { name: "Easy Going De La Ribera Del Duero",                 sex: "F", sire: null, dam: null },
  96:  { name: "Robobull Fabelhaft King of Fire",                   sex: "M", sire: null, dam: null },
  97:  { name: "Robobull Fablehaft Boomboom",                       sex: "F", sire: null, dam: null },
  98:  { name: "A'Vigdors Incredible Dictu",                        sex: "M", sire: null, dam: null },
  99:  { name: "Tochka Pritjazhenija Jannet",                       sex: "F", sire: null, dam: null },
  100: { name: "Twinhoe Vernon",                                    sex: "M", sire: null, dam: null },
  101: { name: "Loretta Agedela Kat",                               sex: "F", sire: null, dam: null },
  102: { name: "Ignavi Danila Master",                              sex: "M", sire: null, dam: null },
  103: { name: "Bell Ami Dju Ker Yussi",                            sex: "F", sire: null, dam: null },
  104: { name: "Etual Nuar Meteokiller",                            sex: "M", sire: null, dam: null },
  105: { name: "Dana International",                                sex: "F", sire: null, dam: null },
  106: { name: "Il'ya Muromets Dark Drakula",                       sex: "M", sire: null, dam: null },
  107: { name: "Prints Lotter Elaina Busaile",                      sex: "F", sire: null, dam: null },
  108: { name: "Immo Kombo Action Alet",                            sex: "M", sire: null, dam: null },
  109: { name: "Gold-Sierra Afra",                                  sex: "F", sire: null, dam: null },
  110: { name: "Ventura Du Vallon De Beaumont",                     sex: "M", sire: null, dam: null },
  111: { name: "Kiss Bully Carmen",                                 sex: "F", sire: null, dam: null },
  112: { name: "Sopianae Imperator Pom-Pom",                        sex: "M", sire: null, dam: null },
  113: { name: "Zhorzh iz Frantsuzskogo Legiona",                   sex: "M", sire: null, dam: null },
  114: { name: "Truhali Fire Fly at Glenlee",                       sex: "F", sire: null, dam: null },
  115: { name: "Gold-Sierra Chocolat",                              sex: "F", sire: null, dam: null },
  116: { name: "Gold-Sierra Party",                                 sex: "F", sire: null, dam: null },
  117: { name: "Kiss Bully Lucky Boy",                              sex: "M", sire: null, dam: null },
  118: { name: "Gold-Sierra Fiona",                                 sex: "F", sire: null, dam: null },
  119: { name: "Jackpot Kron Vekar",                                sex: "M", sire: null, dam: null },
  120: { name: "Yamayka Chudo iz Chudes",                           sex: "F", sire: null, dam: null },
  121: { name: "Romka Gold Star",                                   sex: "M", sire: null, dam: null },
  122: { name: "Sambos for Palevyh Buldogov Deagle",                sex: "M", sire: null, dam: null },
  123: { name: "Gardemarin Dlja Palevyh Buldogov",                  sex: "M", sire: null, dam: null },
  124: { name: "Radja Muir of Gold Giant",                          sex: "F", sire: null, dam: null },
  125: { name: "Gold-Sierra Noris",                                 sex: "M", sire: null, dam: null },
  126: { name: "Lara Croft of Gold Giant",                          sex: "F", sire: null, dam: null },
  127: { name: "Valensia Pobeditelnitsa",                           sex: "F", sire: null, dam: null },
  128: { name: "Flor d'Luna of Energy House",                       sex: "F", sire: 129, dam: null },
  129: { name: "Novizala Zico at Energy House",                     sex: "M", sire: 19,  dam: 130 },
  130: { name: "Novizala Magnifique",                               sex: "F", sire: null, dam: null },
  131: { name: "Fabrice De La Parure",                              sex: "M", sire: null, dam: null },
  132: { name: "Linnette De Tameran",                               sex: "F", sire: null, dam: null },
  133: { name: "Zabadee Zara of Energy House",                      sex: "F", sire: 148, dam: 128 },
  134: { name: "Zariah Zoe of Energy House",                        sex: "F", sire: 148, dam: 128 },
  135: { name: "Harley Quinn of Energy House",                      sex: "F", sire: 149, dam: 134 },
  136: { name: "Instant Karma of Energy House",                     sex: "F", sire: 6,   dam: 133 },
  137: { name: "Waltzing Matilda of Energy House",                  sex: "F", sire: 47,  dam: 7   },
  138: { name: "Alvena Aarika Action Alet",                         sex: "F", sire: null, dam: null },
  139: { name: "Mustang Sally of Energy House",                     sex: "F", sire: 1,   dam: 137 },
  140: { name: "Reve Dore Quilpo",                                  sex: "M", sire: 170, dam: 182 },
  141: { name: "Diabolique of Energy House",                        sex: "F", sire: 6,   dam: 138 },
  142: { name: "Hot Spices De La Ribera Del Duero",                 sex: "F", sire: null, dam: null },
  143: { name: "Robobull Fabelhaft Eternalflame",                   sex: "F", sire: null, dam: null },
  144: { name: "Game Changer of Energy House",                      sex: "M", sire: 129, dam: 145 },
  145: { name: "Unfinished Sympathy of Energy House",               sex: "F", sire: 6,   dam: 128 },
  146: { name: "Texas Boy V Fivelzight",                            sex: "M", sire: null, dam: null },
  147: { name: "Annette De Tameran",                                sex: "F", sire: null, dam: null },
  148: { name: "Witherford Keanu",                                  sex: "M", sire: null, dam: null },
  149: { name: "A'Vigdors Vibidius",                                sex: "M", sire: 151, dam: 150 },
  150: { name: "A'Vigdors La Vita d'Oro",                           sex: "F", sire: 11,  dam: 154 },
  151: { name: "A'Vigdors Fahrenheit 212",                          sex: "M", sire: 152, dam: 153 },
  152: { name: "Rockydell Homewood Mission Impossible",             sex: "M", sire: 157, dam: 158 },
  153: { name: "A'Vigdors Zana Zan",                                sex: "F", sire: 159, dam: 160 },
  154: { name: "A'Vigdors Femme de Monblanc",                       sex: "F", sire: 162, dam: 163 },
  155: { name: "Witherford Austin",                                 sex: "M", sire: 63,  dam: 169 },
  156: { name: "Witherford Charisma",                               sex: "F", sire: 161, dam: 164 },
  157: { name: "A'Vigdors Extase De Ma Beaute",                     sex: "M", sire: null, dam: null },
  158: { name: "A'Vigdors Christina Aguilera Royal Desire",         sex: "F", sire: null, dam: null },
  159: { name: "A'Vigdors Conquistatore Del Mondo e Cuori",         sex: "M", sire: null, dam: null },
  160: { name: "A'Vigdors La Commedia",                             sex: "F", sire: null, dam: null },
  161: { name: "Golbourne Louis Vuitton",                           sex: "M", sire: null, dam: null },
  162: { name: "A'Vigdors Stranger in the Night",                   sex: "M", sire: null, dam: null },
  163: { name: "A'Vigdors Expression",                              sex: "F", sire: null, dam: null },
  164: { name: "Witherford Amelia",                                 sex: "F", sire: null, dam: null },
  165: { name: "Darwin De La Renaissance Du Phoenix",               sex: "M", sire: null, dam: null },
  166: { name: "Beau Mistiques Addiction",                          sex: "F", sire: null, dam: null },
  167: { name: "Zon Mirekl Make My Day for Golbourne",              sex: "M", sire: null, dam: null },
  168: { name: "Celticlibrid Magique Noir Avec Golbourne",          sex: "F", sire: null, dam: null },
  169: { name: "Eugenika Zomiranos",                                sex: "F", sire: null, dam: null },
  170: { name: "Bagheera Reve Dore",                                sex: "M", sire: 171, dam: 176 },
  171: { name: "Petite Glamour Shetan",                             sex: "M", sire: 172, dam: 173 },
  172: { name: "Novizala Barabo",                                   sex: "M", sire: null, dam: null },
  173: { name: "Petite Glamour Kimberly",                           sex: "F", sire: null, dam: null },
  174: { name: "Petite Glamour Carbon",                             sex: "M", sire: null, dam: null },
  175: { name: "Invisible Reve Dore",                               sex: "F", sire: null, dam: null },
  176: { name: "Bali Reve Dore",                                    sex: "F", sire: 174, dam: 175 },
  177: { name: "Petite Glamour Nesquick",                           sex: "M", sire: 178, dam: 179 },
  178: { name: "Petite Glamour Dandy",                              sex: "M", sire: null, dam: null },
  179: { name: "Baring Nords Huld",                                 sex: "F", sire: null, dam: null },
  180: { name: "Amparo Jardin Del Claret",                          sex: "F", sire: null, dam: null },
  181: { name: "Baileys Reve Dore",                                 sex: "F", sire: 174, dam: 180 },
  182: { name: "Bonhomia Reve Dore",                                sex: "F", sire: 177, dam: 181 },
  183: { name: "Quper von Glandorf",                                sex: "M", sire: null, dam: null },
  184: { name: "Noblige Cuantro",                                   sex: "F", sire: null, dam: null },
  185: { name: "A'Vigdors Avant-Garde",                             sex: "M", sire: null, dam: null },
  186: { name: "Norma von Glandorf",                                sex: "F", sire: null, dam: null },
  187: { name: "Leiboll's Alfa-Alfa",                               sex: "M", sire: null, dam: null },
  188: { name: "Elegance de la Parure",                             sex: "F", sire: null, dam: null },
  189: { name: "Frenchkisses Mr. Big",                              sex: "M", sire: null, dam: null },
  190: { name: "Robobull Fabelhaft Fantheflame",                    sex: "F", sire: null, dam: null },
  191: { name: "Paint it Black of Energy House",                    sex: "M", sire: 140, dam: 133 },
  192: { name: "Dashin Dom Pervoe Solntse Maya",                    sex: "F", sire: null, dam: null },
  193: { name: "A'Vigdors Troubadour for Frustyle",                 sex: "M", sire: null, dam: null },
  194: { name: "Slaviya iz Frantsuzskogo Legiona",                  sex: "F", sire: null, dam: null },
};

// ============================================================
//  getPedigree(id, generations)
//  Returns a nested object representing the pedigree tree.
//  generations: how many levels to go back (default 3)
// ============================================================
function getPedigree(id, generations = 3) {
  if (!id || generations < 0) return null;
  const dog = DOGS[id];
  if (!dog) return null;
  return {
    id,
    name: dog.name,
    sex: dog.sex,
    sire: getPedigree(dog.sire, generations - 1),
    dam:  getPedigree(dog.dam,  generations - 1),
  };
}

// ============================================================
//  buildPedigreeTree(dogId)
//  Injects a 3-generation visual pedigree tree into the element
//  with id="pedigree-tree". Call this from each dog profile page.
//
//  Tree layout (left = subject's parents, right = oldest):
//  Col 1 = Gen 1 (parents)
//  Col 2 = Gen 2 (grandparents)
//  Col 3 = Gen 3 (great-grandparents)
// ============================================================
function buildPedigreeTree(dogId) {
  const container = document.getElementById('pedigree-tree');
  if (!container) return;

  const dog = DOGS[dogId];
  if (!dog) {
    container.innerHTML = '<p style="color:#8b5a2b; font-family: Jost, sans-serif; font-size: 0.75rem;">Pedigree data not available.</p>';
    return;
  }

  // Ahnentafel positions for a 3-gen tree (8 great-grandparents)
  // Position 2 = sire, 3 = dam
  // Position 4 = pat. grandsire, 5 = pat. granddam, 6 = mat. grandsire, 7 = mat. granddam
  // Positions 8–15 = great-grandparents

  function getAncestor(id, targetPos) {
    // Walk the tree to find the dog at Ahnentafel position targetPos
    // starting from position 1 (the subject)
    function walk(currentId, currentPos) {
      if (currentPos === targetPos) return currentId;
      if (!currentId || currentPos > targetPos) return null;
      const d = DOGS[currentId];
      if (!d) return null;
      // Left branch = sire (even positions going up), right = dam (odd)
      const leftResult  = walk(d.sire, currentPos * 2);
      if (leftResult !== null) return leftResult;
      return walk(d.dam, currentPos * 2 + 1);
    }
    return walk(id, 1);
  }

  // Build a box for a given ancestor position
  function makeBox(ancestorId, cssClass, roleLabel) {
    const dog = ancestorId ? DOGS[ancestorId] : null;
    const name = dog ? dog.name : '—';
    const sideClass = dog ? (dog.sex === 'M' ? 'sire' : 'dam') : '';
    return `
      <div class="ped-box ${cssClass} ${sideClass}">
        <span class="ped-box-name">${name}</span>
        <span class="ped-box-role">${roleLabel}</span>
      </div>`;
  }

  // Get all ancestor IDs
  const sireId    = dog.sire;
  const damId     = dog.dam;
  const sire      = sireId  ? DOGS[sireId]  : null;
  const dam       = damId   ? DOGS[damId]   : null;

  const g2ss = sire ? sire.sire : null;
  const g2sd = sire ? sire.dam  : null;
  const g2ds = dam  ? dam.sire  : null;
  const g2dd = dam  ? dam.dam   : null;

  const g2ssD = g2ss ? DOGS[g2ss] : null;
  const g2sdD = g2sd ? DOGS[g2sd] : null;
  const g2dsD = g2ds ? DOGS[g2ds] : null;
  const g2ddD = g2dd ? DOGS[g2dd] : null;

  const g3sss = g2ssD ? g2ssD.sire : null;
  const g3ssd = g2ssD ? g2ssD.dam  : null;
  const g3sds = g2sdD ? g2sdD.sire : null;
  const g3sdd = g2sdD ? g2sdD.dam  : null;
  const g3dss = g2dsD ? g2dsD.sire : null;
  const g3dsd = g2dsD ? g2dsD.dam  : null;
  const g3dds = g2ddD ? g2ddD.sire : null;
  const g3ddd = g2ddD ? g2ddD.dam  : null;

  function box(id, cssClass, role) {
    const d = id ? DOGS[id] : null;
    const name = d ? d.name : '—';
    const side = d ? (d.sex === 'M' ? 'sire' : 'dam') : '';
    return `<div class="ped-box ${cssClass} ${side}">
      <span class="ped-box-name">${name}</span>
      <span class="ped-box-role">${role}</span>
    </div>`;
  }

  container.innerHTML = `
    ${box(sireId, 'ped-g1-sire', 'Sire')}
    ${box(damId,  'ped-g1-dam',  'Dam')}
    ${box(g2ss,   'ped-g2-ss',   'Paternal Grandsire')}
    ${box(g2sd,   'ped-g2-sd',   'Paternal Granddam')}
    ${box(g2ds,   'ped-g2-ds',   'Maternal Grandsire')}
    ${box(g2dd,   'ped-g2-dd',   'Maternal Granddam')}
    ${box(g3sss,  'ped-g3-sss',  'GG-Grandsire')}
    ${box(g3ssd,  'ped-g3-ssd',  'GG-Granddam')}
    ${box(g3sds,  'ped-g3-sds',  'GG-Grandsire')}
    ${box(g3sdd,  'ped-g3-sdd',  'GG-Granddam')}
    ${box(g3dss,  'ped-g3-dss',  'GG-Grandsire')}
    ${box(g3dsd,  'ped-g3-dsd',  'GG-Granddam')}
    ${box(g3dds,  'ped-g3-dds',  'GG-Grandsire')}
    ${box(g3ddd,  'ped-g3-ddd',  'GG-Granddam')}
  `;
}