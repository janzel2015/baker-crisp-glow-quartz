export type Lang = "en" | "bi";

export type Kind = "community" | "faith" | "affairs" | "music";

export type Block = {
  id: string;
  days: number[];
  start: string;
  end: string;
  title: string;
  titleBi: string;
  detail: string;
  detailBi: string;
  kind: Kind;
};

export const STATION = {
  call: "DXFR",
  frequency: "104.1",
  name: "Freedom FM",
  place: "Cantilan, Surigao del Sur",
  address: "6 Pag-antayan, Cantilan, Surigao del Sur 8317",
  founded: "15 August 2012",
  org: "FilGlobal Cooperative",
  email: "filglobalonlineradio104@gmail.com",
  web: "https://www.freedomonlineradio.com",
  webLabel: "freedomonlineradio.com",
  facebook: "https://www.facebook.com/104.1freedomradio",
  maps: "https://maps.google.com/?q=6+Pag-antayan+Cantilan+Surigao+del+Sur",
  video: "https://www.facebook.com/104.1freedomradio/videos/2237158751012506/",
  videoEmbed:
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F104.1freedomradio%2Fvideos%2F2237158751012506%2F&show_text=true&width=267&t=0",
};

export const DAYS = [
  { i: 0, en: "Sun", bi: "Dom", longEn: "Sunday", longBi: "Domingo" },
  { i: 1, en: "Mon", bi: "Lun", longEn: "Monday", longBi: "Lunes" },
  { i: 2, en: "Tue", bi: "Mar", longEn: "Tuesday", longBi: "Martes" },
  { i: 3, en: "Wed", bi: "Miy", longEn: "Wednesday", longBi: "Miyerkules" },
  { i: 4, en: "Thu", bi: "Huw", longEn: "Thursday", longBi: "Huwebes" },
  { i: 5, en: "Fri", bi: "Biy", longEn: "Friday", longBi: "Biyernes" },
  { i: 6, en: "Sat", bi: "Sab", longEn: "Saturday", longBi: "Sabado" },
];

const weekday = [1, 2, 3, 4, 5];
const monSat = [1, 2, 3, 4, 5, 6];

export const BLOCKS: Block[] = [
  {
    id: "banag",
    days: [0, 1, 2, 3, 4, 5, 6],
    start: "05:30",
    end: "07:00",
    title: "Banagbanag",
    titleBi: "Banagbanag",
    detail: "Weather, tide, and the first barangay notes of the day.",
    detailBi: "Panahon, taob, ug unang pahibalo sa barangay.",
    kind: "community",
  },
  {
    id: "morning",
    days: weekday,
    start: "07:00",
    end: "09:00",
    title: "Freedom Morning",
    titleBi: "Freedom Morning",
    detail: "Music and local talk from the Pag-antayan booth.",
    detailBi: "Musika ug lokal nga istorya gikan sa booth sa Pag-antayan.",
    kind: "music",
  },
  {
    id: "lanog-am",
    days: monSat,
    start: "09:00",
    end: "10:00",
    title: "Lanog sa Kamatuoran",
    titleBi: "Lanog sa Kamatuoran",
    detail: "Bible study on the air with Bishop Ben Mosura.",
    detailBi: "Bible study sa hangin uban si Bishop Ben Mosura.",
    kind: "faith",
  },
  {
    id: "sat-morning",
    days: [6],
    start: "07:00",
    end: "09:00",
    title: "Freedom Morning",
    titleBi: "Freedom Morning",
    detail: "Saturday music and local talk from the booth.",
    detailBi: "Sabado nga musika ug lokal nga istorya gikan sa booth.",
    kind: "music",
  },
  {
    id: "sun-bridge",
    days: [0],
    start: "07:00",
    end: "08:00",
    title: "Tingog",
    titleBi: "Tingog",
    detail: "Hymns and a quiet walk into the study hour.",
    detailBi: "Mga himno ug hilom nga lakang padulong sa oras sa pagtuon.",
    kind: "faith",
  },
  {
    id: "lanog-sun",
    days: [0],
    start: "08:00",
    end: "10:00",
    title: "Lanog sa Kamatuoran",
    titleBi: "Lanog sa Kamatuoran",
    detail: "Sunday study and quiet music with Bishop Ben Mosura.",
    detailBi: "Domingo nga pagtuon ug hilom nga musika uban si Bishop Ben Mosura.",
    kind: "faith",
  },
  {
    id: "barangay",
    days: weekday,
    start: "10:00",
    end: "12:00",
    title: "Barangay Line",
    titleBi: "Linya sa Barangay",
    detail: "Pass-through for barangay news. Pasado na, mga ka-barangay.",
    detailBi: "Pahibalo sa barangay. Pasado na, mga ka-barangay.",
    kind: "community",
  },
  {
    id: "udto",
    days: [0, 6],
    start: "10:00",
    end: "13:00",
    title: "Udto",
    titleBi: "Udto",
    detail: "Noon music for the household.",
    detailBi: "Musika sa udto para sa panimalay.",
    kind: "music",
  },
  {
    id: "noon",
    days: weekday,
    start: "12:00",
    end: "13:00",
    title: "Udto",
    titleBi: "Udto",
    detail: "Noon music for the household.",
    detailBi: "Musika sa udto para sa panimalay.",
    kind: "music",
  },
  {
    id: "sat-late",
    days: [6],
    start: "17:00",
    end: "19:00",
    title: "Hapon",
    titleBi: "Hapon",
    detail: "Late afternoon music before the evening close.",
    detailBi: "Musika sa hapon sa wala pa ang gabii.",
    kind: "music",
  },
  {
    id: "sun-hapon",
    days: [0],
    start: "15:00",
    end: "19:00",
    title: "Hapon",
    titleBi: "Hapon",
    detail: "Sunday afternoon music. The booth stays open until evening.",
    detailBi: "Musika sa hapon sa Domingo. Abli ang booth hangtod sa gabii.",
    kind: "music",
  },
  {
    id: "civic",
    days: weekday,
    start: "13:00",
    end: "15:00",
    title: "Civic Hour",
    titleBi: "Oras Sibiko",
    detail: "Provincial questions, public affairs, and a straight reading of the news.",
    detailBi: "Mga pangutana sa probinsya, publikong affair, ug tul-id nga balita.",
    kind: "affairs",
  },
  {
    id: "family",
    days: [0, 6],
    start: "13:00",
    end: "15:00",
    title: "Balay",
    titleBi: "Balay",
    detail: "Family hour. Stories, requests, and a slower pace.",
    detailBi: "Oras sa pamilya. Istorya, request, ug hinay nga dagan.",
    kind: "music",
  },
  {
    id: "request",
    days: monSat,
    start: "15:00",
    end: "17:00",
    title: "Request Board",
    titleBi: "Request Board",
    detail: "Listener requests and station music.",
    detailBi: "Mga request sa tigpaminaw ug musika sa estasyon.",
    kind: "music",
  },
  {
    id: "drive",
    days: weekday,
    start: "17:00",
    end: "19:00",
    title: "Balik-Balay",
    titleBi: "Balik-Balay",
    detail: "The ride home. A recap of the day in Cantilan and the province.",
    detailBi: "Pauli na. Katingbanan sa adlaw sa Cantilan ug sa probinsya.",
    kind: "affairs",
  },
  {
    id: "gabii",
    days: [0, 1, 2, 3, 4, 5, 6],
    start: "19:00",
    end: "21:30",
    title: "Gabii sa Freedom",
    titleBi: "Gabii sa Freedom",
    detail: "Evening music and a quiet close. The booth signs off at half past nine.",
    detailBi: "Musika sa gabii ug hilom nga pagtapos. Mohunong ang booth alas nuwebe y medya.",
    kind: "music",
  },
];

export const PROGRAMS = [
  {
    id: "lanog",
    kickerEn: "Faith",
    kickerBi: "Pagtuo",
    title: "Lanog sa Kamatuoran",
    bodyEn: "Bible study on the air with Bishop Ben Mosura. A standing hour on the public page of the station.",
    bodyBi: "Bible study sa hangin uban si Bishop Ben Mosura. Usa ka oras nga kanunay sa publikong panid sa estasyon.",
    whenEn: "Mon–Sat, 9:00",
    whenBi: "Lun–Sab, 9:00",
  },
  {
    id: "barangay",
    kickerEn: "Community",
    kickerBi: "Komunidad",
    title: "Barangay Line",
    bodyEn: "The booth reads what the barangays send. Weather, meetings, and the line they already use: pasado na.",
    bodyBi: "Gibasa sa booth ang gipadala sa mga barangay. Panahon, miting, ug ang linya nga pasado na.",
    whenEn: "Weekdays, 10:00",
    whenBi: "Adlaw-adlaw, 10:00",
  },
  {
    id: "civic",
    kickerEn: "Public affairs",
    kickerBi: "Publiko",
    title: "Civic Hour",
    bodyEn: "Questions the town is already asking, read in the open. When the province is listening to a national address, this hour carries it.",
    bodyBi: "Mga pangutana nga gipangutana na sa lungsod, gibasa sa dayag. Kung maminaw ang probinsya sa nasudnong pakigpulong, dinhi kini dad-on.",
    whenEn: "Weekdays, 1:00",
    whenBi: "Adlaw-adlaw, 1:00",
  },
  {
    id: "music",
    kickerEn: "Music",
    kickerBi: "Musika",
    title: "Freedom Music",
    bodyEn: "OPM and listener requests between the talk. Morning, noon, and the long evening close.",
    bodyBi: "OPM ug request sa tigpaminaw taliwala sa istorya. Buntag, udto, ug ang taas nga gabii.",
    whenEn: "Through the day",
    whenBi: "Tibuok adlaw",
  },
];

export function manilaParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Manila",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    hour12: false,
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let hour = Number(get("hour"));
  if (hour === 24) hour = 0;
  const minute = Number(get("minute"));
  const second = Number(get("second"));
  const weekdayName = get("weekday");
  return {
    day: weekdays.indexOf(weekdayName.slice(0, 3)),
    minutes: hour * 60 + minute,
    clock: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`,
    hour,
    minute,
  };
}

function toMinutes(hm: string) {
  const [h, m] = hm.split(":").map(Number);
  return h * 60 + m;
}

export function blocksOn(day: number) {
  return BLOCKS.filter((b) => b.days.includes(day)).sort(
    (a, b) => toMinutes(a.start) - toMinutes(b.start),
  );
}

export function onAir(date: Date) {
  const { day, minutes } = manilaParts(date);
  const today = blocksOn(day);
  const current = today.find((b) => minutes >= toMinutes(b.start) && minutes < toMinutes(b.end)) ?? null;
  let next: { block: Block; dayOffset: number } | null = null;
  if (current) {
    const later = today.find((b) => toMinutes(b.start) >= toMinutes(current.end));
    if (later) next = { block: later, dayOffset: 0 };
  } else {
    const later = today.find((b) => toMinutes(b.start) > minutes);
    if (later) next = { block: later, dayOffset: 0 };
  }
  if (!next) {
    for (let offset = 1; offset <= 7; offset++) {
      const list = blocksOn((day + offset) % 7);
      if (list[0]) {
        next = { block: list[0], dayOffset: offset };
        break;
      }
    }
  }
  return { day, minutes, current, next };
}

export const COPY = {
  en: {
    navAir: "On air",
    navPrograms: "Programs",
    navBoard: "Schedule",
    navStation: "Station",
    navLine: "Listener line",
    listen: "Listen",
    listening: "Playing ID",
    replay: "Replay ID",
    heroDek:
      "The first advocacy radio in the Surigao provinces. Hope, liberty, and a voice for the land.",
    heroLine: "From Pag-antayan, Cantilan — on 104.1 FM.",
    onAir: "On air",
    rests: "Booth rests",
    manila: "Philippine time",
    now: "Now",
    next: "Next",
    off: "The booth is quiet. First light is 5:30.",
    programsTitle: "What the booth carries",
    programsDek: "Music, barangay news, public questions, and a daily study hour.",
    boardTitle: "The day board",
    boardDek: "A public guide in Philippine time. The booth revises it when the log changes.",
    aboutTitle: "A station for the province",
    aboutBody:
      "DXFR 104.1 Freedom FM is the flagship of FilGlobal Cooperative, founded 15 August 2012. From 6 Pag-antayan it calls itself the first advocacy radio in the Surigao provinces: hope, and love for the environment. The work is empowerment, unity, and liberty of the people for the love of the land — through music, awareness, entertainment, and balanced information.",
    aboutAside: "Call sign DXFR · Cantilan · Surigao del Sur",
    visit: "Visit the booth",
    write: "Write the station",
    lineTitle: "Listener line",
    lineDek: "Leave a shoutout or a barangay note. It stays on this device until a live inbox is connected.",
    name: "Name",
    message: "Note",
    send: "Pin to the board",
    empty: "No notes yet. The first one will sit here.",
    pinned: "On this device",
    remove: "Remove",
    footerNote: "DXFR 104.1 Freedom FM · Cantilan, Surigao del Sur. Not a substitute for the station’s own log.",
    videoTitle: "From the booth",
    videoDek: "The latest clip on the station’s Facebook page.",
    watch: "Open on Facebook",
  },
  bi: {
    navAir: "Karon",
    navPrograms: "Programa",
    navBoard: "Iskedyul",
    navStation: "Estasyon",
    navLine: "Linya",
    listen: "Maminaw",
    listening: "Nagpatukar sa ID",
    replay: "Usba ang ID",
    heroDek:
      "Una nga advocacy radio sa mga probinsya sa Surigao. Paglaom, kagawasan, ug tingog para sa yuta.",
    heroLine: "Gikan sa Pag-antayan, Cantilan — sa 104.1 FM.",
    onAir: "On air",
    rests: "Naghulat ang booth",
    manila: "Oras sa Pilipinas",
    now: "Karon",
    next: "Sunod",
    off: "Hilom ang booth. Mobalik sa alas singko y medya sa buntag.",
    programsTitle: "Ang gidala sa booth",
    programsDek: "Musika, balita sa barangay, pangutana sa publiko, ug oras sa pagtuon.",
    boardTitle: "Ang board sa adlaw",
    boardDek: "Publikong giya sa oras sa Pilipinas. Usbon sa booth kung mausab ang log.",
    aboutTitle: "Estasyon para sa probinsya",
    aboutBody:
      "Ang DXFR 104.1 Freedom FM mao ang flagship sa FilGlobal Cooperative, natukod niadtong 15 Agosto 2012. Gikan sa 6 Pag-antayan, kini ang una nga advocacy radio sa mga probinsya sa Surigao: paglaom, ug gugma sa kinaiyahan. Ang trabaho mao ang pagpalig-on, panaghiusa, ug kagawasan sa katawhan alang sa gugma sa yuta — pinaagi sa musika, kamulatan, kalingawan, ug balanse nga impormasyon.",
    aboutAside: "Call sign DXFR · Cantilan · Surigao del Sur",
    visit: "Duaw sa booth",
    write: "Sulati ang estasyon",
    lineTitle: "Linya sa tigpaminaw",
    lineDek: "Ibilin ang shoutout o pahibalo sa barangay. Magpabilin kini niining device hangtod madugtong ang live inbox.",
    name: "Ngalan",
    message: "Mensahe",
    send: "Ipin sa board",
    empty: "Wala pay nota. Ang una maglingkod dinhi.",
    pinned: "Niining device",
    remove: "Tangtanga",
    footerNote: "DXFR 104.1 Freedom FM · Cantilan, Surigao del Sur. Dili kini kapuli sa log sa estasyon.",
    videoTitle: "Gikan sa booth",
    videoDek: "Ang pinakabag-ong clip sa Facebook sa estasyon.",
    watch: "Ablihi sa Facebook",
  },
} as const;
