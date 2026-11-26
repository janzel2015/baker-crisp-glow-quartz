import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Pause, c as ArrowUpRight, i as Play, n as Trash2, o as MapPin, r as Radio, s as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BE9LBYQd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATION = {
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
	maps: "https://maps.google.com/?q=6+Pag-antayan+Cantilan+Surigao+del+Sur"
};
var DAYS = [
	{
		i: 0,
		en: "Sun",
		bi: "Dom",
		longEn: "Sunday",
		longBi: "Domingo"
	},
	{
		i: 1,
		en: "Mon",
		bi: "Lun",
		longEn: "Monday",
		longBi: "Lunes"
	},
	{
		i: 2,
		en: "Tue",
		bi: "Mar",
		longEn: "Tuesday",
		longBi: "Martes"
	},
	{
		i: 3,
		en: "Wed",
		bi: "Miy",
		longEn: "Wednesday",
		longBi: "Miyerkules"
	},
	{
		i: 4,
		en: "Thu",
		bi: "Huw",
		longEn: "Thursday",
		longBi: "Huwebes"
	},
	{
		i: 5,
		en: "Fri",
		bi: "Biy",
		longEn: "Friday",
		longBi: "Biyernes"
	},
	{
		i: 6,
		en: "Sat",
		bi: "Sab",
		longEn: "Saturday",
		longBi: "Sabado"
	}
];
var weekday = [
	1,
	2,
	3,
	4,
	5
];
var monSat = [
	1,
	2,
	3,
	4,
	5,
	6
];
var BLOCKS = [
	{
		id: "banag",
		days: [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		start: "05:30",
		end: "07:00",
		title: "Banagbanag",
		titleBi: "Banagbanag",
		detail: "Weather, tide, and the first barangay notes of the day.",
		detailBi: "Panahon, taob, ug unang pahibalo sa barangay.",
		kind: "community"
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
		kind: "music"
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
		kind: "faith"
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
		kind: "music"
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
		kind: "faith"
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
		kind: "faith"
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
		kind: "community"
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
		kind: "music"
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
		kind: "music"
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
		kind: "music"
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
		kind: "music"
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
		kind: "affairs"
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
		kind: "music"
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
		kind: "music"
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
		kind: "affairs"
	},
	{
		id: "gabii",
		days: [
			0,
			1,
			2,
			3,
			4,
			5,
			6
		],
		start: "19:00",
		end: "21:30",
		title: "Gabii sa Freedom",
		titleBi: "Gabii sa Freedom",
		detail: "Evening music and a quiet close. The booth signs off at half past nine.",
		detailBi: "Musika sa gabii ug hilom nga pagtapos. Mohunong ang booth alas nuwebe y medya.",
		kind: "music"
	}
];
var PROGRAMS = [
	{
		id: "lanog",
		kickerEn: "Faith",
		kickerBi: "Pagtuo",
		title: "Lanog sa Kamatuoran",
		bodyEn: "Bible study on the air with Bishop Ben Mosura. A standing hour on the public page of the station.",
		bodyBi: "Bible study sa hangin uban si Bishop Ben Mosura. Usa ka oras nga kanunay sa publikong panid sa estasyon.",
		whenEn: "Mon–Sat, 9:00",
		whenBi: "Lun–Sab, 9:00"
	},
	{
		id: "barangay",
		kickerEn: "Community",
		kickerBi: "Komunidad",
		title: "Barangay Line",
		bodyEn: "The booth reads what the barangays send. Weather, meetings, and the line they already use: pasado na.",
		bodyBi: "Gibasa sa booth ang gipadala sa mga barangay. Panahon, miting, ug ang linya nga pasado na.",
		whenEn: "Weekdays, 10:00",
		whenBi: "Adlaw-adlaw, 10:00"
	},
	{
		id: "civic",
		kickerEn: "Public affairs",
		kickerBi: "Publiko",
		title: "Civic Hour",
		bodyEn: "Questions the town is already asking, read in the open. When the province is listening to a national address, this hour carries it.",
		bodyBi: "Mga pangutana nga gipangutana na sa lungsod, gibasa sa dayag. Kung maminaw ang probinsya sa nasudnong pakigpulong, dinhi kini dad-on.",
		whenEn: "Weekdays, 1:00",
		whenBi: "Adlaw-adlaw, 1:00"
	},
	{
		id: "music",
		kickerEn: "Music",
		kickerBi: "Musika",
		title: "Freedom Music",
		bodyEn: "OPM and listener requests between the talk. Morning, noon, and the long evening close.",
		bodyBi: "OPM ug request sa tigpaminaw taliwala sa istorya. Buntag, udto, ug ang taas nga gabii.",
		whenEn: "Through the day",
		whenBi: "Tibuok adlaw"
	}
];
function manilaParts(date) {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: "Asia/Manila",
		weekday: "short",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23",
		hour12: false
	}).formatToParts(date);
	const get = (type) => parts.find((p) => p.type === type)?.value ?? "";
	const weekdays = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	];
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
		minute
	};
}
function toMinutes(hm) {
	const [h, m] = hm.split(":").map(Number);
	return h * 60 + m;
}
function blocksOn(day) {
	return BLOCKS.filter((b) => b.days.includes(day)).sort((a, b) => toMinutes(a.start) - toMinutes(b.start));
}
function onAir(date) {
	const { day, minutes } = manilaParts(date);
	const today = blocksOn(day);
	const current = today.find((b) => minutes >= toMinutes(b.start) && minutes < toMinutes(b.end)) ?? null;
	let next = null;
	if (current) {
		const later = today.find((b) => toMinutes(b.start) >= toMinutes(current.end));
		if (later) next = {
			block: later,
			dayOffset: 0
		};
	} else {
		const later = today.find((b) => toMinutes(b.start) > minutes);
		if (later) next = {
			block: later,
			dayOffset: 0
		};
	}
	if (!next) for (let offset = 1; offset <= 7; offset++) {
		const list = blocksOn((day + offset) % 7);
		if (list[0]) {
			next = {
				block: list[0],
				dayOffset: offset
			};
			break;
		}
	}
	return {
		day,
		minutes,
		current,
		next
	};
}
var COPY = {
	en: {
		navAir: "On air",
		navPrograms: "Programs",
		navBoard: "Schedule",
		navStation: "Station",
		navLine: "Listener line",
		listen: "Listen",
		listening: "Playing ID",
		replay: "Replay ID",
		heroDek: "The first advocacy radio in the Surigao provinces. Hope, liberty, and a voice for the land.",
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
		aboutBody: "DXFR 104.1 Freedom FM is the flagship of FilGlobal Cooperative, founded 15 August 2012. From 6 Pag-antayan it calls itself the first advocacy radio in the Surigao provinces: hope, and love for the environment. The work is empowerment, unity, and liberty of the people for the love of the land — through music, awareness, entertainment, and balanced information.",
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
		footerNote: "DXFR 104.1 Freedom FM · Cantilan, Surigao del Sur. Not a substitute for the station’s own log."
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
		heroDek: "Una nga advocacy radio sa mga probinsya sa Surigao. Paglaom, kagawasan, ug tingog para sa yuta.",
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
		aboutBody: "Ang DXFR 104.1 Freedom FM mao ang flagship sa FilGlobal Cooperative, natukod niadtong 15 Agosto 2012. Gikan sa 6 Pag-antayan, kini ang una nga advocacy radio sa mga probinsya sa Surigao: paglaom, ug gugma sa kinaiyahan. Ang trabaho mao ang pagpalig-on, panaghiusa, ug kagawasan sa katawhan alang sa gugma sa yuta — pinaagi sa musika, kamulatan, kalingawan, ug balanse nga impormasyon.",
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
		footerNote: "DXFR 104.1 Freedom FM · Cantilan, Surigao del Sur. Dili kini kapuli sa log sa estasyon."
	}
};
var NOTES_KEY = "freedom-fm-notes";
var LANG_KEY = "freedom-fm-lang";
var ID_LINE = "You are listening to DXFR. One oh four point one. Freedom FM. Cantilan, Surigao del Sur. The first advocacy radio in the Surigao provinces. Hope, liberty, and love for the land. Stay tuned.";
function playIdent() {
	const AC = window.AudioContext || window.webkitAudioContext;
	if (AC) {
		const ctx = new AC();
		const master = ctx.createGain();
		master.gain.value = .18;
		master.connect(ctx.destination);
		[
			196,
			247,
			294,
			392
		].forEach((freq, i) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = "triangle";
			osc.frequency.value = freq;
			osc.connect(gain);
			gain.connect(master);
			const t = ctx.currentTime + i * .16;
			gain.gain.setValueAtTime(1e-4, t);
			gain.gain.exponentialRampToValueAtTime(.9, t + .04);
			gain.gain.exponentialRampToValueAtTime(1e-4, t + .85);
			osc.start(t);
			osc.stop(t + .9);
		});
		window.setTimeout(() => void ctx.close(), 2200);
	}
	if ("speechSynthesis" in window) {
		window.speechSynthesis.cancel();
		const line = new SpeechSynthesisUtterance(ID_LINE);
		line.rate = .92;
		line.pitch = .86;
		window.setTimeout(() => window.speechSynthesis.speak(line), 700);
	}
}
function formatWhen(start, end) {
	return `${start}–${end}`;
}
function FreedomFm() {
	const [lang, setLang] = (0, import_react.useState)("en");
	const [now, setNow] = (0, import_react.useState)(null);
	const [dayPick, setDayPick] = (0, import_react.useState)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const stopTimer = (0, import_react.useRef)(null);
	const [notes, setNotes] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [formError, setFormError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const storedLang = localStorage.getItem(LANG_KEY);
		if (storedLang === "en" || storedLang === "bi") setLang(storedLang);
		try {
			const raw = localStorage.getItem(NOTES_KEY);
			if (raw) setNotes(JSON.parse(raw));
		} catch {}
		const tick = () => setNow(/* @__PURE__ */ new Date());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	const t = COPY[lang];
	const air = now ? onAir(now) : null;
	const clock = now ? manilaParts(now).clock : "––:––:––";
	const todayIndex = now ? manilaParts(now).day : 0;
	const day = dayPick ?? todayIndex;
	const board = (0, import_react.useMemo)(() => blocksOn(day), [day]);
	function toggleListen() {
		if (stopTimer.current) window.clearTimeout(stopTimer.current);
		if (playing) {
			window.speechSynthesis?.cancel();
			setPlaying(false);
			return;
		}
		playIdent();
		setPlaying(true);
		stopTimer.current = window.setTimeout(() => setPlaying(false), 14e3);
	}
	function switchLang(next) {
		setLang(next);
		localStorage.setItem(LANG_KEY, next);
	}
	function pinNote(e) {
		e.preventDefault();
		const cleanName = name.trim();
		const cleanMessage = message.trim();
		if (cleanName.length < 2 || cleanMessage.length < 4) {
			setFormError(lang === "en" ? "Add a name and a short note." : "Ibutang ang ngalan ug mubo nga nota.");
			return;
		}
		const list = [{
			id: crypto.randomUUID(),
			name: cleanName.slice(0, 40),
			message: cleanMessage.slice(0, 240),
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...notes].slice(0, 12);
		setNotes(list);
		localStorage.setItem(NOTES_KEY, JSON.stringify(list));
		setName("");
		setMessage("");
		setFormError("");
	}
	function removeNote(id) {
		const list = notes.filter((n) => n.id !== id);
		setNotes(list);
		localStorage.setItem(NOTES_KEY, JSON.stringify(list));
	}
	const currentTitle = air?.current ? lang === "en" ? air.current.title : air.current.titleBi : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-ink/10 bg-paper/95 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl leading-none tracking-tight",
								children: "104.1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium tracking-widest text-ink/70",
								children: "FREEDOM FM"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "ml-auto hidden items-center gap-5 text-sm text-ink/80 md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#air",
									className: "hover:text-ink",
									children: t.navAir
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#programs",
									className: "hover:text-ink",
									children: t.navPrograms
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#board",
									className: "hover:text-ink",
									children: t.navBoard
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#station",
									className: "hover:text-ink",
									children: t.navStation
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#line",
									className: "hover:text-ink",
									children: t.navLine
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2 md:ml-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex border border-ink/15 text-xs font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => switchLang("en"),
									className: `px-3 py-2 ${lang === "en" ? "bg-ink text-paper" : "text-ink"}`,
									"aria-pressed": lang === "en",
									children: "EN"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => switchLang("bi"),
									className: `px-3 py-2 ${lang === "bi" ? "bg-ink text-paper" : "text-ink"}`,
									"aria-pressed": lang === "bi",
									children: "BI"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: toggleListen,
								className: "inline-flex min-h-11 items-center gap-2 bg-signal px-4 py-2 text-sm font-medium text-paper",
								children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { size: 16 }), playing ? t.listening : t.listen]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex gap-4 overflow-x-auto border-t border-ink/10 px-4 py-2 text-sm text-ink/80 md:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#air",
							className: "shrink-0 py-1",
							children: t.navAir
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#programs",
							className: "shrink-0 py-1",
							children: t.navPrograms
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#board",
							className: "shrink-0 py-1",
							children: t.navBoard
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#station",
							className: "shrink-0 py-1",
							children: t.navStation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#line",
							className: "shrink-0 py-1",
							children: t.navLine
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-12 lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-medium tracking-widest text-ink/60",
									children: [
										STATION.call,
										" · ",
										STATION.place.toUpperCase()
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-4 font-display text-7xl leading-none tracking-tight sm:text-8xl",
									children: [
										"104",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-signal",
											children: "."
										}),
										"1"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-display text-4xl italic leading-none sm:text-5xl",
									children: "Freedom FM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-xl text-lg leading-relaxed text-ink/80",
									children: t.heroDek
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-ink/60",
									children: t.heroLine
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: toggleListen,
										className: "inline-flex min-h-11 items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { size: 16 }), playing ? t.replay : t.listen]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#board",
										className: "inline-flex min-h-11 items-center px-2 text-sm font-medium underline decoration-ink/30 underline-offset-4",
										children: t.navBoard
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "lg:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/station/studio.jpg",
								alt: "A broadcast microphone on a wooden desk, with palms beyond the window.",
								className: "aspect-video w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-2 flex items-center justify-between text-xs tracking-wide text-ink/55",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PAG-ANTAYAN" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${air?.current ? "bg-signal" : "bg-ink/30"}` }), air?.current ? t.onAir : t.rests]
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "air",
						className: "bg-ink text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-paper/50",
									children: t.manila
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-4xl tabular-nums leading-none",
									children: clock
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-paper/50",
										children: t.now
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-3xl leading-tight",
										children: currentTitle ?? t.rests
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-paper/70",
										children: air?.current ? lang === "en" ? air.current.detail : air.current.detailBi : t.off
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-paper/50",
										children: t.next
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-display text-3xl leading-tight",
										children: air?.next ? lang === "en" ? air.next.block.title : air.next.block.titleBi : "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-paper/70",
										children: air?.next ? air.next.dayOffset === 0 ? air.next.block.start : `${DAYS[(todayIndex + air.next.dayOffset) % 7][lang === "en" ? "longEn" : "longBi"]} · ${air.next.block.start}` : "—"
									})
								] })
							]
						}), playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-6xl items-end gap-1 px-4 pb-6 sm:px-6",
							"aria-hidden": true,
							children: [Array.from({ length: 28 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eq-bar h-8 w-1 bg-signal",
								style: { animationDelay: `${i % 7 * .08}s` }
							}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "ml-4 max-w-xl text-sm leading-relaxed text-paper/80",
								children: ID_LINE
							})]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "programs",
						className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl leading-tight sm:text-5xl",
								children: t.programsTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-ink/70",
								children: t.programsDek
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-px bg-ink/10 sm:grid-cols-2",
							children: PROGRAMS.map((program, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "bg-paper p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs tracking-widest text-ink/50",
										children: [
											"0",
											index + 1,
											" · ",
											lang === "en" ? program.kickerEn : program.kickerBi
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-3xl leading-tight",
										children: program.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-ink/75",
										children: lang === "en" ? program.bodyEn : program.bodyBi
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 text-sm font-medium tabular-nums",
										children: lang === "en" ? program.whenEn : program.whenBi
									})
								]
							}, program.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "board",
						className: "border-t border-ink/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-end justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-4xl leading-tight sm:text-5xl",
											children: t.boardTitle
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-ink/70",
											children: t.boardDek
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-ink/50",
										children: t.manila
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 grid grid-cols-7 gap-1",
									children: DAYS.map((d) => {
										const active = d.i === day;
										const isToday = d.i === todayIndex;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setDayPick(d.i),
											className: `min-h-11 px-1 py-2 text-sm ${active ? "bg-ink text-paper" : "bg-ink/5 text-ink"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-xs tracking-wide",
												children: lang === "en" ? d.en : d.bi
											}), isToday ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 block h-1 bg-signal" }) : null]
										}, d.i);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-6 divide-y divide-ink/10 border-y border-ink/10",
									children: board.map((block) => {
										const live = air?.current?.id === block.id && day === todayIndex;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "grid gap-2 py-4 sm:grid-cols-12 sm:items-baseline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium tabular-nums text-ink sm:col-span-3",
												children: formatWhen(block.start, block.end)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "sm:col-span-9",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "font-display text-2xl leading-tight",
													children: [live ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mr-2 text-xs tracking-widest text-signal not-italic",
														children: t.onAir
													}) : null, lang === "en" ? block.title : block.titleBi]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm leading-relaxed text-ink/70",
													children: lang === "en" ? block.detail : block.detailBi
												})]
											})]
										}, block.id);
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "station",
						className: "border-t border-ink/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-ink/50",
									children: t.aboutAside
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl leading-tight sm:text-5xl",
									children: t.aboutTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-base leading-relaxed text-ink/80",
									children: t.aboutBody
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-8 grid grid-cols-2 gap-6 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-ink/50",
										children: "FM"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-display text-3xl",
										children: "104.1"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-ink/50",
										children: lang === "en" ? "Since" : "Sukad"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-display text-3xl",
										children: "2012"
									})] })]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/station/coast.jpg",
								alt: "A quiet Pacific shoreline with coconut palms and a distant banca.",
								className: "aspect-video w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-2 text-xs tracking-wide text-ink/55",
								children: "SURIGAO DEL SUR · PACIFIC"
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-ink/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto grid max-w-6xl gap-px bg-ink/10 sm:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: STATION.maps,
										target: "_blank",
										rel: "noreferrer",
										className: "flex min-h-24 flex-col justify-between bg-paper p-6 hover:bg-ink/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs tracking-widest text-ink/50",
											children: t.visit
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm",
											children: STATION.address
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${STATION.email}`,
										className: "flex min-h-24 flex-col justify-between bg-paper p-6 hover:bg-ink/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs tracking-widest text-ink/50",
											children: t.write
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm break-all",
											children: STATION.email
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: STATION.facebook,
										target: "_blank",
										rel: "noreferrer",
										className: "flex min-h-24 flex-col justify-between bg-paper p-6 hover:bg-ink/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-xs tracking-widest text-ink/50",
											children: "Facebook"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm",
											children: "104.1 Freedom Radio"
										})] })]
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "line",
						className: "border-t border-ink/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-4xl leading-tight",
									children: t.lineTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-md text-sm leading-relaxed text-ink/70",
									children: t.lineDek
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
									onSubmit: pinNote,
									className: "mt-6 grid gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "grid gap-1 text-sm",
											children: [t.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: name,
												onChange: (e) => setName(e.target.value),
												maxLength: 40,
												className: "min-h-11 border border-ink/20 bg-paper px-3 text-base outline-none focus:border-ink",
												name: "name",
												autoComplete: "name"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "grid gap-1 text-sm",
											children: [t.message, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												value: message,
												onChange: (e) => setMessage(e.target.value),
												maxLength: 240,
												rows: 4,
												className: "border border-ink/20 bg-paper px-3 py-3 text-base outline-none focus:border-ink",
												name: "message"
											})]
										}),
										formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-signal",
											children: formError
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "min-h-11 bg-ink px-4 text-sm font-medium text-paper",
											children: t.send
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-ink/50",
								children: t.pinned
							}), notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-ink/60",
								children: t.empty
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 divide-y divide-ink/10 border-y border-ink/10",
								children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium",
											children: note.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-relaxed text-ink/75",
											children: note.message
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => removeNote(note.id),
										className: "inline-flex min-h-11 min-w-11 items-center justify-center text-ink/50 hover:text-ink",
										"aria-label": t.remove,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
									})]
								}, note.id))
							})] })]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-ink/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						STATION.call,
						" ",
						STATION.frequency,
						" ",
						STATION.name
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: STATION.web,
						target: "_blank",
						rel: "noreferrer",
						className: "underline underline-offset-4",
						children: STATION.webLabel
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-6xl px-4 pb-10 text-xs leading-relaxed text-ink/45 sm:px-6",
					children: t.footerNote
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FreedomFm, {});
}
//#endregion
export { Home as component };
